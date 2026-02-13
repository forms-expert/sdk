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
    description?: string | null;
    mode?: 'free' | 'schema';
    type?: 'hosted' | 'embed' | 'both';
    layout?: 'single' | 'multi-step';
    schema?: FormSchema;
    steps?: Array<{
        title: string;
        description?: string;
        fields: string[];
    }>;
    /** Top-level styling (full hosted styling config) */
    styling?: FormStyling;
    embedConfig?: {
        width?: string;
        height?: string;
        maxHeight?: string;
        minHeight?: string;
        autoResize?: boolean;
        transparentBackground?: boolean;
        [key: string]: unknown;
    };
    error?: string;
    /** Captcha settings (top-level) */
    captcha?: CaptchaSettings;
    settings?: {
        /** @deprecated Use top-level captcha instead */
        captcha?: CaptchaSettings;
        honeypot: boolean;
        allowAttachments: boolean;
        maxAttachments?: number;
        maxAttachmentSize?: number;
        successMessage?: string;
        redirectUrl?: string;
    };
    /** Access control configuration */
    accessControl?: {
        mode: string;
        passwordProtected: boolean;
    };
    /** Branding configuration */
    branding?: FormBranding;
    closesAt?: string | null;
    resourceId?: string;
    /** Available published translation language codes */
    availableLanguages?: string[];
    /** Current language applied to this response (null if base language) */
    currentLanguage?: string | null;
    /** Whether to show language switch UI */
    showLanguageSwitch?: boolean;
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
 * Validation error class
 */
declare class FormValidationError extends Error {
    errors: ValidationError[];
    constructor(errors: ValidationError[]);
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

export { type BasicFieldType, type CaptchaSettings, type FileValidationError, type FormBranding, type FormField, type FormFieldOption, type FormFieldType, FormHandler, type FormHandlerOptions, type FormSchema, type FormStatusResponse, type FormStyling, FormValidationError, FormsApiClient, FormsError, FormsSDK, type FormsSDKConfig, type InteractiveFieldType, type LayoutFieldType, type SubmissionResponse, type SubmitOptions, type UploadProgress, type ValidationError, type ValidationResponse };
