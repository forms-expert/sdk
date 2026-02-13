import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  ReactNode,
} from 'react';
import {
  FormsSDK,
  FormsSDKConfig,
  FormStatusResponse,
  SubmissionResponse,
  ValidationError,
  FormValidationError,
  FormsError,
  UploadProgress,
  FileValidationError,
} from '../core';

interface FormsContextValue {
  sdk: FormsSDK;
  isReady: boolean;
}

const FormsContext = createContext<FormsContextValue | null>(null);

interface FormsProviderProps {
  config: FormsSDKConfig;
  children: ReactNode;
}

/**
 * Forms provider component
 */
export function FormsProvider({ config, children }: FormsProviderProps) {
  const sdk = useMemo(() => new FormsSDK(config), [config]);
  const value = useMemo(() => ({ sdk, isReady: true }), [sdk]);

  return (
    <FormsContext.Provider value={value}>{children}</FormsContext.Provider>
  );
}

/**
 * Format bytes to human readable string
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Hook to access the Forms SDK
 */
export function useFormsSDK(): FormsSDK {
  const context = useContext(FormsContext);
  if (!context) {
    throw new Error('useFormsSDK must be used within a FormsProvider');
  }
  return context.sdk;
}

export interface UseFormOptions {
  /** Form slug */
  slug: string;
  /** SDK config (if not using provider) */
  config?: FormsSDKConfig;
  /** Track form views for analytics (completion rate). Default: false for SDK usage, pass true to enable. */
  trackViews?: boolean;
  /** Success callback */
  onSuccess?: (response: SubmissionResponse) => void;
  /** Error callback */
  onError?: (error: Error) => void;
  /** Validation error callback */
  onValidationError?: (errors: ValidationError[]) => void;
  /** Auto-initialize on mount */
  autoInit?: boolean;
  /** Language code to pass to backend */
  lang?: string;
}

export interface UseFormReturn {
  /** Form configuration */
  config: FormStatusResponse | null;
  /** Form schema (shorthand for config.schema) */
  schema: FormStatusResponse['schema'] | null;
  /** Whether form is loading */
  isLoading: boolean;
  /** Whether form is initializing */
  isInitializing: boolean;
  /** Whether form was submitted successfully */
  isSubmitted: boolean;
  /** Alias for isSubmitted */
  isSuccess: boolean;
  /** Validation errors by field name */
  errors: Record<string, string>;
  /** File validation errors */
  fileErrors: FileValidationError[];
  /** Last submission error (if any) */
  error: Error | null;
  /** Form values */
  values: Record<string, unknown>;
  /** Upload progress (when uploading files) */
  uploadProgress: UploadProgress | null;
  /** Initialize the form */
  initialize: () => Promise<FormStatusResponse>;
  /** Set a field value */
  setValue: (name: string, value: unknown) => void;
  /** Set multiple values */
  setValues: (values: Record<string, unknown>) => void;
  /** Validate form data */
  validate: () => Promise<boolean>;
  /** Validate files against form settings */
  validateFiles: (files: File[]) => FileValidationError[];
  /** Submit the form */
  submit: (captchaToken?: string) => Promise<SubmissionResponse | null>;
  /** Reset form to initial state */
  reset: () => void;
  /** Clear errors */
  clearErrors: () => void;
  /** Whether captcha is required */
  requiresCaptcha: boolean;
  /** Captcha provider */
  captchaProvider: 'turnstile' | 'recaptcha' | 'hcaptcha' | undefined;
  /** Captcha site key */
  captchaSiteKey: string | undefined;
  /** Whether honeypot is enabled */
  honeypotEnabled: boolean;
  /** Whether attachments are allowed */
  allowsAttachments: boolean;
  /** Max attachments allowed */
  maxAttachments: number;
  /** Max attachment size in bytes */
  maxAttachmentSize: number;
}

/**
 * Hook for managing form state and submission
 */
export function useForm(options: UseFormOptions): UseFormReturn {
  const context = useContext(FormsContext);
  
  // Create SDK if config provided, otherwise use context
  const sdk = useMemo(() => {
    if (options.config) {
      return new FormsSDK(options.config);
    }
    if (!context) {
      throw new Error('Either provide config to useForm or use FormsProvider');
    }
    return context.sdk;
  }, [options.config, context]);

  const [config, setConfig] = useState<FormStatusResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileErrors, setFileErrors] = useState<FileValidationError[]>([]);
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [error, setError] = useState<Error | null>(null);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress | null>(null);

  const initialize = useCallback(async () => {
    setIsInitializing(true);
    try {
      const formConfig = await sdk.isActive(options.slug, options.lang);
      setConfig(formConfig);
      if (options.trackViews) {
        sdk.trackView(options.slug);
      }
      return formConfig;
    } finally {
      setIsInitializing(false);
    }
  }, [sdk, options.slug, options.trackViews, options.lang]);

  // Auto-initialize
  useEffect(() => {
    if (options.autoInit !== false) {
      initialize();
    }
  }, [initialize, options.autoInit]);

  const setValue = useCallback((name: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    setErrors((prev) => {
      if (prev[name]) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return prev;
    });
  }, []);

  const setValuesHandler = useCallback((newValues: Record<string, unknown>) => {
    setValues((prev) => ({ ...prev, ...newValues }));
  }, []);

  const validate = useCallback(async () => {
    const result = await sdk.validate(options.slug, values);
    if (!result.valid) {
      const errorMap = result.errors.reduce(
        (acc, err) => ({ ...acc, [err.field]: err.message }),
        {}
      );
      setErrors(errorMap);
    }
    return result.valid;
  }, [sdk, options.slug, values]);

  const submit = useCallback(
    async (captchaToken?: string) => {
      setIsLoading(true);
      setErrors({});
      setFileErrors([]);
      setError(null);
      setUploadProgress(null);

      try {
        // Add honeypot field if enabled
        const submitData = config?.settings?.honeypot
          ? { ...values, _hp: '' }
          : values;

        const response = await sdk.submit(options.slug, submitData, {
          captchaToken,
          onProgress: setUploadProgress,
        });
        setIsSubmitted(true);
        options.onSuccess?.(response);
        return response;
      } catch (err) {
        if (err instanceof FormValidationError) {
          const errorMap = err.errors.reduce(
            (acc, e) => ({ ...acc, [e.field]: e.message }),
            {}
          );
          setErrors(errorMap);
          options.onValidationError?.(err.errors);
        } else {
          setError(err as Error);
          options.onError?.(err as Error);
        }
        return null;
      } finally {
        setIsLoading(false);
        setUploadProgress(null);
      }
    },
    [sdk, options, values]
  );

  const reset = useCallback(() => {
    setValues({});
    setErrors({});
    setFileErrors([]);
    setError(null);
    setIsSubmitted(false);
    setIsLoading(false);
    setUploadProgress(null);
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
    setFileErrors([]);
  }, []);

  // File validation
  const validateFiles = useCallback((files: File[]): FileValidationError[] => {
    const errors: FileValidationError[] = [];
    const maxSize = config?.settings?.maxAttachmentSize ?? 10 * 1024 * 1024; // 10MB default
    const maxCount = config?.settings?.maxAttachments ?? 5;

    if (files.length > maxCount) {
      errors.push({
        field: 'attachments',
        file: '',
        error: 'count',
        message: `Maximum ${maxCount} files allowed`,
      });
    }

    files.forEach((file) => {
      if (file.size > maxSize) {
        errors.push({
          field: 'attachments',
          file: file.name,
          error: 'size',
          message: `File "${file.name}" exceeds maximum size of ${formatBytes(maxSize)}`,
        });
      }
    });

    setFileErrors(errors);
    return errors;
  }, [config?.settings?.maxAttachmentSize, config?.settings?.maxAttachments]);

  const allowsAttachments = config?.settings?.allowAttachments ?? false;
  const maxAttachments = config?.settings?.maxAttachments ?? 5;
  const maxAttachmentSize = config?.settings?.maxAttachmentSize ?? 10 * 1024 * 1024;

  return {
    config,
    schema: config?.schema ?? null,
    isLoading,
    isInitializing,
    isSubmitted,
    isSuccess: isSubmitted,
    errors,
    fileErrors,
    error,
    values,
    uploadProgress,
    initialize,
    setValue,
    setValues: setValuesHandler,
    validate,
    validateFiles,
    submit,
    reset,
    clearErrors,
    requiresCaptcha: config?.settings?.captcha?.enabled ?? false,
    captchaProvider: config?.settings?.captcha?.provider,
    captchaSiteKey: config?.settings?.captcha?.siteKey,
    honeypotEnabled: config?.settings?.honeypot ?? false,
    allowsAttachments,
    maxAttachments,
    maxAttachmentSize,
  };
}
