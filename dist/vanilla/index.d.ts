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

declare function generateFormStyles(styling?: FormStyling): string;

/**
 * Create a form field element
 */
declare function renderField(field: FormField, value: unknown, error?: string, styling?: Partial<FormStyling>): HTMLElement;
/**
 * Render the entire form
 */
declare function renderForm(schema: FormSchema, values?: Record<string, unknown>, errors?: Record<string, string>, options?: {
    honeypot?: boolean;
    showBranding?: boolean;
    brandingText?: string;
    brandingUrl?: string;
    submitText?: string;
    isLoading?: boolean;
    hideRequiredAsterisk?: boolean;
}): HTMLFormElement;
/**
 * Render success message
 */
declare function renderSuccess(message: string): HTMLElement;
/**
 * Convert validation errors array to record
 */
declare function errorsToRecord(errors: ValidationError[]): Record<string, string>;

interface FormWidgetOptions {
    /** Target element or selector */
    target: string | HTMLElement;
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
    /** Reset form after submission */
    resetOnSuccess?: boolean;
    /** Redirect after success (overrides form config) */
    redirectUrl?: string;
    /** Language code to pass to backend */
    lang?: string;
}
/**
 * Form widget for embedding forms
 */
declare class FormWidget {
    private sdk;
    private container;
    private config;
    private values;
    private errors;
    private isLoading;
    private isSubmitted;
    private options;
    private styleEl;
    constructor(sdkConfig: FormsSDKConfig, options: FormWidgetOptions);
    /**
     * Initialize and render the form
     */
    init(): Promise<void>;
    /**
     * Inject CSS styles
     */
    private injectStyles;
    /**
     * Render the form
     */
    private render;
    /**
     * Handle form submission
     */
    private handleSubmit;
    /**
     * Reset form to initial state
     */
    reset(): void;
    /**
     * Render error message
     */
    private renderError;
    /**
     * Destroy widget
     */
    destroy(): void;
}
/**
 * Auto-initialize forms on page load
 */
declare function autoInit(): void;

export { FormWidget, type FormWidgetOptions, autoInit, errorsToRecord, generateFormStyles, renderField, renderForm, renderSuccess };
