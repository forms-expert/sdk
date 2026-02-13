import { Ref, ComputedRef, App } from 'vue';

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
    formPadding?: 'none' | 'compact' | 'normal' | 'relaxed' | 'spacious';
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
        showFormName?: boolean;
    };
    /** Access control configuration */
    accessControl?: {
        mode: string;
        passwordProtected: boolean;
    };
    /** Branding configuration */
    branding?: FormBranding;
    /** Hosted config (page settings, success page, etc.) */
    hostedConfig?: {
        pageTitle?: string;
        successMessage?: string;
        successPageType?: 'message' | 'redirect' | 'custom';
        redirectUrl?: string;
        customSuccessHtml?: string;
        [key: string]: unknown;
    };
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
 * Submission response from API
 */
interface SubmissionResponse {
    success: boolean;
    submissionId: string;
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

interface UseFormOptions {
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
interface UseFormReturn {
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
declare function useForm(options: UseFormOptions): UseFormReturn;

declare const FORMS_SDK_KEY: unique symbol;
/**
 * Vue plugin for Forms SDK
 */
declare function createFormsPlugin(config: FormsSDKConfig): {
    install(app: App): void;
};

export { FORMS_SDK_KEY, type UseFormOptions, type UseFormReturn, createFormsPlugin, useForm };
