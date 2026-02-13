import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';

/**
 * Form field types
 */
type BasicFieldType = 'text' | 'email' | 'number' | 'textarea' | 'select' | 'checkbox' | 'file' | 'date' | 'hidden';
type InteractiveFieldType = 'radio' | 'multiselect' | 'rating' | 'scale' | 'toggle' | 'ranking' | 'imageChoice' | 'phone' | 'url' | 'password' | 'richText' | 'slider' | 'currency' | 'time' | 'datetime' | 'dateRange' | 'address' | 'name' | 'dropdown' | 'colorPicker' | 'location' | 'opinionScale' | 'consent';
type LayoutFieldType = 'heading' | 'divider' | 'paragraph';
type FormFieldType = BasicFieldType | InteractiveFieldType | LayoutFieldType;
interface FormFieldOption {
    label: string;
    value: string;
    imageUrl?: string;
}
/**
 * Form field definition
 */
interface FormField {
    name: string;
    type: FormFieldType;
    label?: string;
    placeholder?: string;
    required?: boolean;
    options?: string[] | FormFieldOption[];
    defaultValue?: unknown;
    maxFileSize?: number;
    allowedMimeTypes?: string[];
    multiple?: boolean;
    min?: number;
    max?: number;
    step?: number;
    ratingMax?: number;
    lowLabel?: string;
    highLabel?: string;
    defaultCountryCode?: string;
    currencyCode?: string;
    currencySymbol?: string;
    addressFields?: ('street' | 'street2' | 'city' | 'state' | 'zip' | 'country')[];
    nameFields?: ('prefix' | 'first' | 'middle' | 'last' | 'suffix')[];
    content?: string;
    paragraphFontSize?: number;
    consentText?: string;
    consentUrl?: string;
    maxLength?: number;
    stepId?: string;
    visibleWhen?: {
        field: string;
        operator: 'eq' | 'neq' | 'contains' | 'gt' | 'lt';
        value: unknown;
    };
}
/**
 * Form styling configuration
 */
interface FormStyling {
    theme: 'light' | 'dark' | 'system';
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    errorColor?: string;
    successColor?: string;
    borderRadius: 'none' | 'sm' | 'md' | 'lg';
    fontSize: 'sm' | 'md' | 'lg';
    buttonStyle: 'filled' | 'outline';
    labelPosition: 'top' | 'left' | 'floating';
    customCss?: string;
    fontFamily?: string;
    formWidth?: 'narrow' | 'medium' | 'wide' | 'full';
    fieldLayout?: 'stacked' | 'inline';
    buttonColor?: string;
    buttonText?: string;
    buttonRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';
    buttonAlign?: 'left' | 'center' | 'right';
    fieldSpacing?: 'compact' | 'normal' | 'relaxed' | 'spacious';
    formPadding?: 'compact' | 'normal' | 'relaxed' | 'spacious';
    labelSpacing?: 'compact' | 'normal' | 'relaxed';
    placeholderFontSize?: 'small' | 'medium' | 'large';
    headingSize?: 'small' | 'medium' | 'large' | 'extra-large';
    paragraphSize?: 'small' | 'medium' | 'large';
    hideRequiredAsterisk?: boolean;
    logoUrl?: string;
    logoPosition?: 'top-left' | 'top-center' | 'top-right';
    coverImageUrl?: string;
    backgroundImageUrl?: string;
    backgroundOverlay?: number;
    transparentBackground?: boolean;
}
/**
 * Form schema
 */
interface FormSchema {
    fields: FormField[];
    styling?: FormStyling;
}
/**
 * Form captcha settings
 */
interface CaptchaSettings {
    enabled: boolean;
    provider?: 'turnstile' | 'recaptcha' | 'hcaptcha';
    siteKey?: string;
}
/**
 * Form branding configuration
 */
interface FormBranding {
    enabled: boolean;
    text?: string;
    url?: string;
}
/**
 * Form status response from API
 */
interface FormStatusResponse {
    active: boolean;
    formId?: string;
    name?: string;
    mode?: 'free' | 'schema';
    schema?: FormSchema;
    error?: string;
    settings?: {
        captcha: CaptchaSettings;
        honeypot: boolean;
        allowAttachments: boolean;
        maxAttachments?: number;
        maxAttachmentSize?: number;
        successMessage?: string;
        redirectUrl?: string;
    };
    /** Branding configuration */
    branding?: FormBranding;
    /** Available published translation language codes */
    availableLanguages?: string[];
    /** Current language applied to this response (null if base language) */
    currentLanguage?: string | null;
}
/**
 * Validation error
 */
interface ValidationError {
    field: string;
    message: string;
}
/**
 * Validation response from API
 */
interface ValidationResponse {
    valid: boolean;
    errors: ValidationError[];
}
/**
 * Submission response from API
 */
interface SubmissionResponse {
    success: boolean;
    submissionId: string;
    message: string;
}
/**
 * Submit options
 */
interface SubmitOptions {
    pageUrl?: string;
    captchaToken?: string;
    /** Callback for upload progress */
    onProgress?: (progress: UploadProgress) => void;
}
/**
 * Upload progress information
 */
interface UploadProgress {
    loaded: number;
    total: number;
    percentage: number;
}
/**
 * File validation error
 */
interface FileValidationError {
    field: string;
    file: string;
    error: 'size' | 'type' | 'count';
    message: string;
}
/**
 * SDK configuration
 */
interface FormsSDKConfig {
    apiKey: string;
    resourceId: string;
    baseUrl?: string;
}
/**
 * Form handler options
 */
interface FormHandlerOptions {
    /** Track form views for analytics (completion rate) */
    trackViews?: boolean;
    onSubmitStart?: () => void;
    onSubmitSuccess?: (response: SubmissionResponse) => void;
    onSubmitError?: (error: FormsError) => void;
    onValidationError?: (errors: ValidationError[]) => void;
}
/**
 * Forms SDK error
 */
declare class FormsError extends Error {
    code: string;
    statusCode: number;
    retryAfter?: number | undefined;
    constructor(message: string, code: string, statusCode: number, retryAfter?: number | undefined);
}

/**
 * API client for forms backend
 */
declare class FormsApiClient {
    private baseUrl;
    private apiKey;
    private resourceId;
    constructor(config: FormsSDKConfig);
    /**
     * Build URL with token query parameter
     */
    private buildUrl;
    /**
     * Make an API request
     */
    private request;
    /**
     * Check if form is active and get configuration
     */
    isActive(slug: string, lang?: string): Promise<FormStatusResponse>;
    /**
     * Validate form data without submitting
     */
    validate(slug: string, data: Record<string, unknown>): Promise<ValidationResponse>;
    /**
     * Submit form data (supports files)
     */
    submit(slug: string, data: Record<string, unknown>, options?: SubmitOptions): Promise<SubmissionResponse>;
    /**
     * Submit with FormData (for file uploads with progress tracking)
     */
    private submitWithFormData;
    /**
     * Track a form view (for analytics completion rate)
     */
    trackView(slug: string): Promise<void>;
    /**
     * Get resource ID
     */
    getResourceId(): string;
    /**
     * Get base URL
     */
    getBaseUrl(): string;
}

/**
 * Form handler for a specific form
 */
declare class FormHandler {
    private apiClient;
    private slug;
    private config;
    private options;
    constructor(apiClient: FormsApiClient, slug: string, options?: FormHandlerOptions);
    /**
     * Initialize form handler and fetch configuration
     */
    initialize(lang?: string): Promise<FormStatusResponse>;
    /**
     * Get cached form configuration
     */
    getConfig(): FormStatusResponse | null;
    /**
     * Check if form is active
     */
    isActive(): boolean;
    /**
     * Check if captcha is required
     */
    requiresCaptcha(): boolean;
    /**
     * Get captcha provider
     */
    getCaptchaProvider(): 'turnstile' | 'recaptcha' | 'hcaptcha' | undefined;
    /**
     * Get form schema
     */
    getSchema(): FormSchema | undefined;
    /**
     * Validate form data
     */
    validate(data: Record<string, unknown>): Promise<ValidationResponse>;
    /**
     * Submit form data
     */
    submit(data: Record<string, unknown>, options?: SubmitOptions): Promise<SubmissionResponse>;
    /**
     * Get success message from config
     */
    getSuccessMessage(): string;
    /**
     * Get redirect URL from config
     */
    getRedirectUrl(): string | undefined;
}
/**
 * Main Forms SDK class
 */
declare class FormsSDK {
    private apiClient;
    constructor(config: FormsSDKConfig);
    /**
     * Check if form is active and get configuration
     */
    isActive(slug: string, lang?: string): Promise<FormStatusResponse>;
    /**
     * Validate form data without submitting
     */
    validate(slug: string, data: Record<string, unknown>): Promise<ValidationResponse>;
    /**
     * Submit form data
     */
    submit(slug: string, data: Record<string, unknown>, options?: SubmitOptions): Promise<SubmissionResponse>;
    /**
     * Create a form handler for a specific form
     */
    form(slug: string, options?: FormHandlerOptions): FormHandler;
    /**
     * Track a form view (for analytics completion rate)
     */
    trackView(slug: string): Promise<void>;
    /**
     * Submit with retry logic for rate limits
     */
    submitWithRetry(slug: string, data: Record<string, unknown>, options?: SubmitOptions & {
        maxRetries?: number;
    }): Promise<SubmissionResponse>;
}

interface FormsProviderProps {
    config: FormsSDKConfig;
    children: ReactNode;
}
/**
 * Forms provider component
 */
declare function FormsProvider({ config, children }: FormsProviderProps): react_jsx_runtime.JSX.Element;
/**
 * Hook to access the Forms SDK
 */
declare function useFormsSDK(): FormsSDK;
interface UseFormOptions {
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
interface UseFormReturn {
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
declare function useForm(options: UseFormOptions): UseFormReturn;

interface FormsExpertFormProps {
    /** SDK configuration (optional if using FormsProvider) */
    config?: FormsSDKConfig;
    /** Form slug */
    slug: string;
    /** Track form views for analytics (completion rate). Default: false */
    trackViews?: boolean;
    /** Custom submit button text */
    submitText?: string;
    /** Success callback */
    onSuccess?: (response: SubmissionResponse) => void;
    /** Error callback */
    onError?: (error: Error) => void;
    /** Validation error callback */
    onValidationError?: (errors: ValidationError[]) => void;
    /** Custom class name */
    className?: string;
    /** Custom styles */
    style?: CSSProperties;
    /** Language code to pass to backend */
    lang?: string;
}
/**
 * Forms Expert form component
 */
declare function FormsExpertForm({ config, slug, trackViews, submitText, onSuccess, onError, onValidationError, className, style, lang, }: FormsExpertFormProps): react_jsx_runtime.JSX.Element;

export { FormsExpertForm, FormsProvider, type UseFormOptions, type UseFormReturn, useForm, useFormsSDK };
