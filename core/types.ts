/**
 * Form field types
 */
export type BasicFieldType =
  | 'text' | 'email' | 'number' | 'textarea' | 'select'
  | 'checkbox' | 'file' | 'date' | 'hidden';

export type InteractiveFieldType =
  | 'radio' | 'multiselect' | 'rating' | 'scale' | 'toggle'
  | 'ranking' | 'imageChoice' | 'phone' | 'url' | 'password'
  | 'richText' | 'slider' | 'currency' | 'time' | 'datetime'
  | 'dateRange' | 'address' | 'name' | 'dropdown' | 'colorPicker'
  | 'location' | 'opinionScale' | 'consent';

export type LayoutFieldType = 'heading' | 'divider' | 'paragraph';

export type FormFieldType = BasicFieldType | InteractiveFieldType | LayoutFieldType;

export interface FormFieldOption {
  label: string;
  value: string;
  imageUrl?: string;
}

/**
 * Form field definition
 */
export interface FormField {
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
export interface FormStyling {
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
  // Extended styling (matching hosted form builder)
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
export interface FormSchema {
  fields: FormField[];
  styling?: FormStyling;
}

/**
 * Form captcha settings
 */
export interface CaptchaSettings {
  enabled: boolean;
  provider?: 'turnstile' | 'recaptcha' | 'hcaptcha';
  siteKey?: string;
}

/**
 * Form branding configuration
 */
export interface FormBranding {
  enabled: boolean;
  text?: string;
  url?: string;
}

/**
 * Form status response from API
 */
export interface FormStatusResponse {
  active: boolean;
  formId?: string;
  name?: string;
  description?: string | null;
  mode?: 'free' | 'schema';
  type?: 'hosted' | 'embed' | 'both';
  layout?: 'single' | 'multi-step';
  schema?: FormSchema;
  steps?: Array<{ title: string; description?: string; fields: string[] }>;
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
  /** Hosted config (page settings, success page, etc.) */
  hostedConfig?: {
    pageTitle?: string;
    showFormName?: boolean;
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
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validation response from API
 */
export interface ValidationResponse {
  valid: boolean;
  errors: ValidationError[];
}

/**
 * Submission response from API
 */
export interface SubmissionResponse {
  success: boolean;
  submissionId: string;
  message: string;
}

/**
 * Submit options
 */
export interface SubmitOptions {
  pageUrl?: string;
  captchaToken?: string;
  /** Callback for upload progress */
  onProgress?: (progress: UploadProgress) => void;
}

/**
 * Upload progress information
 */
export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

/**
 * File validation error
 */
export interface FileValidationError {
  field: string;
  file: string;
  error: 'size' | 'type' | 'count';
  message: string;
}

/**
 * SDK configuration
 */
export interface FormsSDKConfig {
  apiKey: string;
  resourceId: string;
  baseUrl?: string;
}

/**
 * Form handler options
 */
export interface FormHandlerOptions {
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
export class FormsError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number,
    public retryAfter?: number
  ) {
    super(message);
    this.name = 'FormsError';
  }
}

/**
 * Validation error class
 */
export class FormValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super('Validation failed');
    this.name = 'FormValidationError';
  }
}
