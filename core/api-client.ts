import {
  FormsSDKConfig,
  FormStatusResponse,
  ValidationResponse,
  SubmissionResponse,
  SubmitOptions,
  FormsError,
  UploadProgress,
} from './types';

/**
 * API client for forms backend
 */
export class FormsApiClient {
  private baseUrl: string;
  private apiKey: string;
  private resourceId: string;

  constructor(config: FormsSDKConfig) {
    this.apiKey = config.apiKey;
    this.resourceId = config.resourceId;
    this.baseUrl = (config.baseUrl || 'https://api.forms.expert/api/v1').replace(/\/$/, '');
  }

  /**
   * Build URL with token query parameter
   */
  private buildUrl(path: string): string {
    const separator = path.includes('?') ? '&' : '?';
    return `${this.baseUrl}${path}${separator}token=${encodeURIComponent(this.apiKey)}`;
  }

  /**
   * Make an API request
   */
  private async request<T>(
    method: string,
    path: string,
    body?: object
  ): Promise<T> {
    const url = this.buildUrl(path);

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new FormsError(
        data.message || 'Request failed',
        data.code || 'UNKNOWN_ERROR',
        response.status,
        data.retryAfter
      );
    }

    return data;
  }

  /**
   * Check if form is active and get configuration
   */
  async isActive(slug: string, lang?: string): Promise<FormStatusResponse> {
    const langParam = lang ? `?lang=${encodeURIComponent(lang)}` : '';
    return this.request('GET', `/f/${this.resourceId}/${slug}/is-active${langParam}`);
  }

  /**
   * Validate form data without submitting
   */
  async validate(
    slug: string,
    data: Record<string, unknown>
  ): Promise<ValidationResponse> {
    return this.request('POST', `/f/${this.resourceId}/${slug}/validate`, {
      data,
    });
  }

  /**
   * Submit form data (supports files)
   */
  async submit(
    slug: string,
    data: Record<string, unknown>,
    options?: SubmitOptions
  ): Promise<SubmissionResponse> {
    const url = this.buildUrl(`/f/${this.resourceId}/${slug}`);
    
    // Check if data contains files
    const hasFiles = Object.values(data).some(
      (v) => v instanceof File || (v instanceof FileList && v.length > 0)
    );

    if (hasFiles || options?.onProgress) {
      // Use FormData and XMLHttpRequest for file uploads with progress
      return this.submitWithFormData(url, data, options);
    }

    // Use regular JSON request for non-file submissions
    return this.request('POST', `/f/${this.resourceId}/${slug}`, {
      data,
      pageUrl: options?.pageUrl || (typeof window !== 'undefined' ? window.location.href : undefined),
      captchaToken: options?.captchaToken,
    });
  }

  /**
   * Submit with FormData (for file uploads with progress tracking)
   */
  private submitWithFormData(
    url: string,
    data: Record<string, unknown>,
    options?: SubmitOptions
  ): Promise<SubmissionResponse> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();

      // Add data fields
      for (const [key, value] of Object.entries(data)) {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (value instanceof FileList) {
          Array.from(value).forEach((file) => formData.append(key, file));
        } else if (value !== undefined && value !== null) {
          formData.append(`data[${key}]`, String(value));
        }
      }

      // Add metadata
      const pageUrl = options?.pageUrl || (typeof window !== 'undefined' ? window.location.href : '');
      if (pageUrl) {
        formData.append('pageUrl', pageUrl);
      }
      if (options?.captchaToken) {
        formData.append('captchaToken', options.captchaToken);
      }

      const xhr = new XMLHttpRequest();

      // Progress tracking
      if (options?.onProgress) {
        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            options.onProgress!({
              loaded: event.loaded,
              total: event.total,
              percentage: Math.round((event.loaded / event.total) * 100),
            });
          }
        });
      }

      xhr.addEventListener('load', () => {
        try {
          const response = JSON.parse(xhr.responseText);
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(response);
          } else {
            reject(new FormsError(
              response.message || 'Submission failed',
              response.code || 'UNKNOWN_ERROR',
              xhr.status,
              response.retryAfter
            ));
          }
        } catch {
          reject(new FormsError('Invalid response', 'PARSE_ERROR', xhr.status));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new FormsError('Network error', 'NETWORK_ERROR', 0));
      });

      xhr.addEventListener('abort', () => {
        reject(new FormsError('Request aborted', 'ABORTED', 0));
      });

      xhr.open('POST', url);
      xhr.send(formData);
    });
  }

  /**
   * Track a form view (for analytics completion rate)
   */
  async trackView(slug: string): Promise<void> {
    const url = this.buildUrl(`/f/${this.resourceId}/${slug}/view`);
    await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' } }).catch(() => {});
  }

  /**
   * Get resource ID
   */
  getResourceId(): string {
    return this.resourceId;
  }

  /**
   * Get base URL
   */
  getBaseUrl(): string {
    return this.baseUrl;
  }
}
