import { FormsApiClient } from './api-client';
import {
  FormsSDKConfig,
  FormStatusResponse,
  ValidationResponse,
  SubmissionResponse,
  SubmitOptions,
  FormHandlerOptions,
  FormsError,
  FormValidationError,
} from './types';

/**
 * Form handler for a specific form
 */
export class FormHandler {
  private apiClient: FormsApiClient;
  private slug: string;
  private config: FormStatusResponse | null = null;
  private options: FormHandlerOptions;

  constructor(
    apiClient: FormsApiClient,
    slug: string,
    options: FormHandlerOptions = {}
  ) {
    this.apiClient = apiClient;
    this.slug = slug;
    this.options = options;
  }

  /**
   * Initialize form handler and fetch configuration
   */
  async initialize(lang?: string): Promise<FormStatusResponse> {
    this.config = await this.apiClient.isActive(this.slug, lang);
    if (this.options.trackViews) {
      this.apiClient.trackView(this.slug);
    }
    return this.config;
  }

  /**
   * Get cached form configuration
   */
  getConfig(): FormStatusResponse | null {
    return this.config;
  }

  /**
   * Check if form is active
   */
  isActive(): boolean {
    return this.config?.active ?? false;
  }

  /**
   * Check if captcha is required
   */
  requiresCaptcha(): boolean {
    return this.config?.settings?.captcha?.enabled ?? false;
  }

  /**
   * Get captcha provider
   */
  getCaptchaProvider(): 'turnstile' | 'recaptcha' | 'hcaptcha' | undefined {
    return this.config?.settings?.captcha?.provider;
  }

  /**
   * Get form schema
   */
  getSchema() {
    return this.config?.schema;
  }

  /**
   * Validate form data
   */
  async validate(data: Record<string, unknown>): Promise<ValidationResponse> {
    return this.apiClient.validate(this.slug, data);
  }

  /**
   * Submit form data
   */
  async submit(
    data: Record<string, unknown>,
    options?: SubmitOptions
  ): Promise<SubmissionResponse> {
    this.options.onSubmitStart?.();

    try {
      // Validate first if in schema mode
      if (this.config?.mode === 'schema') {
        const validation = await this.validate(data);
        if (!validation.valid) {
          this.options.onValidationError?.(validation.errors);
          throw new FormValidationError(validation.errors);
        }
      }

      const response = await this.apiClient.submit(this.slug, data, options);
      this.options.onSubmitSuccess?.(response);
      return response;
    } catch (error) {
      if (error instanceof FormsError) {
        this.options.onSubmitError?.(error);
      }
      throw error;
    }
  }

  /**
   * Get success message from config
   */
  getSuccessMessage(): string {
    return this.config?.settings?.successMessage || 'Form submitted successfully!';
  }

  /**
   * Get redirect URL from config
   */
  getRedirectUrl(): string | undefined {
    return this.config?.settings?.redirectUrl;
  }
}

/**
 * Main Forms SDK class
 */
export class FormsSDK {
  private apiClient: FormsApiClient;

  constructor(config: FormsSDKConfig) {
    this.apiClient = new FormsApiClient(config);
  }

  /**
   * Check if form is active and get configuration
   */
  async isActive(slug: string, lang?: string): Promise<FormStatusResponse> {
    return this.apiClient.isActive(slug, lang);
  }

  /**
   * Validate form data without submitting
   */
  async validate(
    slug: string,
    data: Record<string, unknown>
  ): Promise<ValidationResponse> {
    return this.apiClient.validate(slug, data);
  }

  /**
   * Submit form data
   */
  async submit(
    slug: string,
    data: Record<string, unknown>,
    options?: SubmitOptions
  ): Promise<SubmissionResponse> {
    return this.apiClient.submit(slug, data, options);
  }

  /**
   * Create a form handler for a specific form
   */
  form(slug: string, options?: FormHandlerOptions): FormHandler {
    return new FormHandler(this.apiClient, slug, options);
  }

  /**
   * Track a form view (for analytics completion rate)
   */
  async trackView(slug: string): Promise<void> {
    return this.apiClient.trackView(slug);
  }

  /**
   * Submit with retry logic for rate limits
   */
  async submitWithRetry(
    slug: string,
    data: Record<string, unknown>,
    options?: SubmitOptions & { maxRetries?: number }
  ): Promise<SubmissionResponse> {
    const maxRetries = options?.maxRetries ?? 3;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        return await this.submit(slug, data, options);
      } catch (error) {
        lastError = error as Error;

        if (error instanceof FormsError) {
          // Don't retry validation or auth errors
          if (
            [
              'VALIDATION_ERROR',
              'CAPTCHA_REQUIRED',
              'ORIGIN_NOT_ALLOWED',
            ].includes(error.code)
          ) {
            throw error;
          }

          // Retry rate limits with backoff
          if (error.code.includes('RATE_LIMIT')) {
            const retryAfter = error.retryAfter || Math.pow(2, attempt) * 1000;
            await new Promise((resolve) => setTimeout(resolve, retryAfter));
            continue;
          }
        }

        // Exponential backoff for network errors
        await new Promise((resolve) =>
          setTimeout(resolve, Math.pow(2, attempt) * 1000)
        );
      }
    }

    throw lastError!;
  }
}
