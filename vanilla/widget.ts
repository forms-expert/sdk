import {
  FormsSDK,
  FormsSDKConfig,
  FormStatusResponse,
  FormStyling,
  SubmissionResponse,
  ValidationError,
  FormValidationError,
  FormsError,
} from '../core';
import { generateFormStyles } from './styles';
import { renderForm, renderSuccess, errorsToRecord } from './renderer';

export interface FormWidgetOptions {
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
export class FormWidget {
  private sdk: FormsSDK;
  private container: HTMLElement;
  private config: FormStatusResponse | null = null;
  private values: Record<string, unknown> = {};
  private errors: Record<string, string> = {};
  private isLoading = false;
  private isSubmitted = false;
  private options: FormWidgetOptions;
  private styleEl: HTMLStyleElement | null = null;

  constructor(sdkConfig: FormsSDKConfig, options: FormWidgetOptions) {
    this.sdk = new FormsSDK(sdkConfig);
    this.options = options;

    // Get container element
    const target = options.target;
    if (typeof target === 'string') {
      const el = document.querySelector(target);
      if (!el) throw new Error(`Element not found: ${target}`);
      this.container = el as HTMLElement;
    } else {
      this.container = target;
    }
  }

  /**
   * Initialize and render the form
   */
  async init(): Promise<void> {
    try {
      this.renderLoading();
      this.config = await this.sdk.isActive(this.options.slug, this.options.lang);

      if (!this.config.active) {
        this.renderError('This form is not available');
        return;
      }

      if (this.options.trackViews) {
        this.sdk.trackView(this.options.slug);
      }

      this.injectStyles();
      this.render();
    } catch (error) {
      this.renderError('Failed to load form');
      this.options.onError?.(error as Error);
    }
  }

  /**
   * Inject CSS styles
   */
  private injectStyles(): void {
    if (this.styleEl) return;

    this.styleEl = document.createElement('style');
    this.styleEl.id = `forms-expert-styles-${this.options.slug}`;
    const mergedStyling = { ...this.config?.schema?.styling, ...this.config?.styling } as FormStyling | undefined;
    this.styleEl.textContent = generateFormStyles(mergedStyling);
    document.head.appendChild(this.styleEl);
  }

  /**
   * Render the form
   */
  private render(): void {
    if (!this.config?.schema) return;

    if (this.isSubmitted) {
      this.container.innerHTML = '';
      const successMessage =
        this.config.settings?.successMessage || 'Form submitted successfully!';
      this.container.appendChild(renderSuccess(successMessage));
      return;
    }

    const mergedStyling = { ...this.config.schema.styling, ...this.config.styling } as FormStyling;
    const schemaWithStyling = { ...this.config.schema, styling: mergedStyling };

    const form = renderForm(schemaWithStyling, this.values, this.errors, {
      honeypot: this.config.settings?.honeypot,
      showBranding: this.config.branding?.enabled !== false,
      brandingText: this.config.branding?.text,
      brandingUrl: this.config.branding?.url,
      submitText: mergedStyling.buttonText || this.options.submitText,
      isLoading: this.isLoading,
      hideRequiredAsterisk: mergedStyling.hideRequiredAsterisk,
      formName: this.config.hostedConfig?.pageTitle as string || this.config.name,
      showFormName: this.config.settings?.showFormName as boolean | undefined,
    });

    // Handle input changes
    form.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.name && target.name !== '_hp' && target.name !== 'pageUrl') {
        if (target.type === 'checkbox') {
          this.values[target.name] = target.checked;
        } else if (target.type === 'file') {
          // Store FileList for multiple files, single File for single uploads
          this.values[target.name] = target.multiple ? target.files : target.files?.[0];
        } else {
          this.values[target.name] = target.value;
        }
        // Clear error on change
        if (this.errors[target.name]) {
          delete this.errors[target.name];
          this.render();
        }
      }
    });

    // Handle submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    this.container.innerHTML = '';
    this.container.appendChild(form);
  }

  /**
   * Handle form submission
   */
  private async handleSubmit(): Promise<void> {
    if (this.isLoading || !this.config) return;

    this.isLoading = true;
    this.errors = {};
    this.render();

    try {
      const response = await this.sdk.submit(this.options.slug, this.values);

      this.isLoading = false;
      this.isSubmitted = true;
      this.render();

      this.options.onSuccess?.(response);

      // Handle redirect
      const redirectUrl =
        this.options.redirectUrl || this.config.settings?.redirectUrl;
      if (redirectUrl) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1500);
      }

      // Reset form after delay if configured
      if (this.options.resetOnSuccess) {
        setTimeout(() => {
          this.reset();
        }, 3000);
      }
    } catch (error) {
      this.isLoading = false;

      if (error instanceof FormValidationError) {
        this.errors = errorsToRecord(error.errors);
        this.options.onValidationError?.(error.errors);
      } else {
        this.options.onError?.(error as Error);
      }

      this.render();
    }
  }

  /**
   * Reset form to initial state
   */
  reset(): void {
    this.values = {};
    this.errors = {};
    this.isLoading = false;
    this.isSubmitted = false;
    this.render();
  }

  /**
   * Render loading spinner
   */
  private renderLoading(): void {
    this.container.innerHTML = `
      <div class="forms-expert" style="display: flex; align-items: center; justify-content: center; padding: 2rem;">
        <svg width="24" height="24" viewBox="0 0 24 24" style="animation: fe-spin 1s linear infinite; color: #9ca3af;">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="31.4 31.4" stroke-linecap="round"/>
        </svg>
      </div>
      <style>@keyframes fe-spin { to { transform: rotate(360deg); } }</style>
    `;
  }

  /**
   * Render error message
   */
  private renderError(message: string): void {
    this.container.innerHTML = `
      <div class="forms-expert" style="text-align: center; padding: 2rem; color: #ef4444;">
        <p>${message}</p>
      </div>
    `;
  }

  /**
   * Destroy widget
   */
  destroy(): void {
    this.container.innerHTML = '';
    this.styleEl?.remove();
    this.styleEl = null;
  }
}

/**
 * Auto-initialize forms on page load
 */
export function autoInit(): void {
  const forms = document.querySelectorAll('[data-forms-expert]');

  forms.forEach((el) => {
    const apiKey = el.getAttribute('data-api-key');
    const resourceId = el.getAttribute('data-resource-id');
    const slug = el.getAttribute('data-forms-expert');
    const baseUrl = el.getAttribute('data-base-url') || undefined;

    if (!apiKey || !resourceId || !slug) {
      console.error('Forms Expert: Missing required attributes', {
        apiKey: !!apiKey,
        resourceId: !!resourceId,
        slug: !!slug,
      });
      return;
    }

    const widget = new FormWidget(
      { apiKey, resourceId, baseUrl },
      {
        target: el as HTMLElement,
        slug,
        trackViews: el.getAttribute('data-track-views') === 'true',
        submitText: el.getAttribute('data-submit-text') || undefined,
        resetOnSuccess: el.getAttribute('data-reset') === 'true',
        lang: el.getAttribute('data-lang') || undefined,
      }
    );

    widget.init();
  });
}

// Auto-init on DOMContentLoaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
}
