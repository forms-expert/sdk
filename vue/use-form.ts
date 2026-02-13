import { ref, computed, onMounted, Ref, ComputedRef } from 'vue';
import {
  FormsSDK,
  FormsSDKConfig,
  FormStatusResponse,
  SubmissionResponse,
  ValidationError,
  FormValidationError,
} from '../core';

export interface UseFormOptions {
  /** Form slug */
  slug: string;
  /** SDK configuration */
  config: FormsSDKConfig;
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
  config: Ref<FormStatusResponse | null>;
  /** Whether form is loading */
  isLoading: Ref<boolean>;
  /** Whether form is initializing */
  isInitializing: Ref<boolean>;
  /** Whether form was submitted successfully */
  isSubmitted: Ref<boolean>;
  /** Validation errors by field name */
  errors: Ref<Record<string, string>>;
  /** Form values */
  values: Ref<Record<string, unknown>>;
  /** Initialize the form */
  initialize: () => Promise<FormStatusResponse>;
  /** Set a field value */
  setValue: (name: string, value: unknown) => void;
  /** Set multiple values */
  setValues: (values: Record<string, unknown>) => void;
  /** Validate form data */
  validate: () => Promise<boolean>;
  /** Submit the form */
  submit: (captchaToken?: string) => Promise<SubmissionResponse | null>;
  /** Reset form to initial state */
  reset: () => void;
  /** Clear errors */
  clearErrors: () => void;
  /** Whether captcha is required */
  requiresCaptcha: ComputedRef<boolean>;
  /** Captcha provider */
  captchaProvider: ComputedRef<'turnstile' | 'recaptcha' | 'hcaptcha' | undefined>;
  /** Captcha site key */
  captchaSiteKey: ComputedRef<string | undefined>;
  /** Whether honeypot is enabled */
  honeypotEnabled: ComputedRef<boolean>;
}

/**
 * Vue composable for managing form state and submission
 */
export function useForm(options: UseFormOptions): UseFormReturn {
  const sdk = new FormsSDK(options.config);

  const config = ref<FormStatusResponse | null>(null);
  const isLoading = ref(false);
  const isInitializing = ref(false);
  const isSubmitted = ref(false);
  const errors = ref<Record<string, string>>({});
  const values = ref<Record<string, unknown>>({});

  const initialize = async (): Promise<FormStatusResponse> => {
    isInitializing.value = true;
    try {
      const formConfig = await sdk.isActive(options.slug, options.lang);
      config.value = formConfig;
      return formConfig;
    } finally {
      isInitializing.value = false;
    }
  };

  const setValue = (name: string, value: unknown) => {
    values.value = { ...values.value, [name]: value };
    // Clear error on change
    if (errors.value[name]) {
      const { [name]: _, ...rest } = errors.value;
      errors.value = rest;
    }
  };

  const setValues = (newValues: Record<string, unknown>) => {
    values.value = { ...values.value, ...newValues };
  };

  const validate = async (): Promise<boolean> => {
    const result = await sdk.validate(options.slug, values.value);
    if (!result.valid) {
      const errorMap = result.errors.reduce(
        (acc, err) => ({ ...acc, [err.field]: err.message }),
        {} as Record<string, string>
      );
      errors.value = errorMap;
    }
    return result.valid;
  };

  const submit = async (captchaToken?: string): Promise<SubmissionResponse | null> => {
    isLoading.value = true;
    errors.value = {};

    try {
      // Add honeypot field if enabled
      const submitData = config.value?.settings?.honeypot
        ? { ...values.value, _hp: '' }
        : values.value;

      const response = await sdk.submit(options.slug, submitData, {
        captchaToken,
      });
      isSubmitted.value = true;
      options.onSuccess?.(response);
      return response;
    } catch (error) {
      if (error instanceof FormValidationError) {
        const errorMap = error.errors.reduce(
          (acc, err) => ({ ...acc, [err.field]: err.message }),
          {} as Record<string, string>
        );
        errors.value = errorMap;
        options.onValidationError?.(error.errors);
      } else {
        options.onError?.(error as Error);
      }
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  const reset = () => {
    values.value = {};
    errors.value = {};
    isSubmitted.value = false;
    isLoading.value = false;
  };

  const clearErrors = () => {
    errors.value = {};
  };

  const requiresCaptcha = computed(() => config.value?.settings?.captcha?.enabled ?? false);
  const captchaProvider = computed(() => config.value?.settings?.captcha?.provider);
  const captchaSiteKey = computed(() => config.value?.settings?.captcha?.siteKey);
  const honeypotEnabled = computed(() => config.value?.settings?.honeypot ?? false);

  // Auto-initialize
  onMounted(() => {
    if (options.autoInit !== false) {
      initialize();
    }
  });

  return {
    config,
    isLoading,
    isInitializing,
    isSubmitted,
    errors,
    values,
    initialize,
    setValue,
    setValues,
    validate,
    submit,
    reset,
    clearErrors,
    requiresCaptcha,
    captchaProvider,
    captchaSiteKey,
    honeypotEnabled,
  };
}
