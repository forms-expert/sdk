// vue/use-form.ts
import { ref, computed, onMounted } from "vue";

// core/types.ts
var FormsError = class extends Error {
  constructor(message, code, statusCode, retryAfter) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.retryAfter = retryAfter;
    this.name = "FormsError";
  }
};
var FormValidationError = class extends Error {
  constructor(errors) {
    super("Validation failed");
    this.errors = errors;
    this.name = "FormValidationError";
  }
};

// core/api-client.ts
var FormsApiClient = class {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.resourceId = config.resourceId;
    this.baseUrl = (config.baseUrl || "https://api.forms.expert/api/v1").replace(/\/$/, "");
  }
  /**
   * Build URL with token query parameter
   */
  buildUrl(path) {
    const separator = path.includes("?") ? "&" : "?";
    return `${this.baseUrl}${path}${separator}token=${encodeURIComponent(this.apiKey)}`;
  }
  /**
   * Make an API request
   */
  async request(method, path, body) {
    const url = this.buildUrl(path);
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : void 0
    });
    const data = await response.json();
    if (!response.ok) {
      throw new FormsError(
        data.message || "Request failed",
        data.code || "UNKNOWN_ERROR",
        response.status,
        data.retryAfter
      );
    }
    return data;
  }
  /**
   * Check if form is active and get configuration
   */
  async isActive(slug, lang) {
    const langParam = lang ? `?lang=${encodeURIComponent(lang)}` : "";
    return this.request("GET", `/f/${this.resourceId}/${slug}/is-active${langParam}`);
  }
  /**
   * Validate form data without submitting
   */
  async validate(slug, data) {
    return this.request("POST", `/f/${this.resourceId}/${slug}/validate`, {
      data
    });
  }
  /**
   * Submit form data (supports files)
   */
  async submit(slug, data, options) {
    const url = this.buildUrl(`/f/${this.resourceId}/${slug}`);
    const hasFiles = Object.values(data).some(
      (v) => v instanceof File || v instanceof FileList && v.length > 0
    );
    if (hasFiles || options?.onProgress) {
      return this.submitWithFormData(url, data, options);
    }
    return this.request("POST", `/f/${this.resourceId}/${slug}`, {
      data,
      pageUrl: options?.pageUrl || (typeof window !== "undefined" ? window.location.href : void 0),
      captchaToken: options?.captchaToken
    });
  }
  /**
   * Submit with FormData (for file uploads with progress tracking)
   */
  submitWithFormData(url, data, options) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (value instanceof FileList) {
          Array.from(value).forEach((file) => formData.append(key, file));
        } else if (value !== void 0 && value !== null) {
          formData.append(`data[${key}]`, String(value));
        }
      }
      const pageUrl = options?.pageUrl || (typeof window !== "undefined" ? window.location.href : "");
      if (pageUrl) {
        formData.append("pageUrl", pageUrl);
      }
      if (options?.captchaToken) {
        formData.append("captchaToken", options.captchaToken);
      }
      const xhr = new XMLHttpRequest();
      if (options?.onProgress) {
        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            options.onProgress({
              loaded: event.loaded,
              total: event.total,
              percentage: Math.round(event.loaded / event.total * 100)
            });
          }
        });
      }
      xhr.addEventListener("load", () => {
        try {
          const response = JSON.parse(xhr.responseText);
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(response);
          } else {
            reject(new FormsError(
              response.message || "Submission failed",
              response.code || "UNKNOWN_ERROR",
              xhr.status,
              response.retryAfter
            ));
          }
        } catch {
          reject(new FormsError("Invalid response", "PARSE_ERROR", xhr.status));
        }
      });
      xhr.addEventListener("error", () => {
        reject(new FormsError("Network error", "NETWORK_ERROR", 0));
      });
      xhr.addEventListener("abort", () => {
        reject(new FormsError("Request aborted", "ABORTED", 0));
      });
      xhr.open("POST", url);
      xhr.send(formData);
    });
  }
  /**
   * Track a form view (for analytics completion rate)
   */
  async trackView(slug) {
    const url = this.buildUrl(`/f/${this.resourceId}/${slug}/view`);
    await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" } }).catch(() => {
    });
  }
  /**
   * Get resource ID
   */
  getResourceId() {
    return this.resourceId;
  }
  /**
   * Get base URL
   */
  getBaseUrl() {
    return this.baseUrl;
  }
};

// core/forms-sdk.ts
var FormHandler = class {
  constructor(apiClient, slug, options = {}) {
    this.config = null;
    this.apiClient = apiClient;
    this.slug = slug;
    this.options = options;
  }
  /**
   * Initialize form handler and fetch configuration
   */
  async initialize(lang) {
    this.config = await this.apiClient.isActive(this.slug, lang);
    if (this.options.trackViews) {
      this.apiClient.trackView(this.slug);
    }
    return this.config;
  }
  /**
   * Get cached form configuration
   */
  getConfig() {
    return this.config;
  }
  /**
   * Check if form is active
   */
  isActive() {
    return this.config?.active ?? false;
  }
  /**
   * Check if captcha is required
   */
  requiresCaptcha() {
    return this.config?.settings?.captcha?.enabled ?? false;
  }
  /**
   * Get captcha provider
   */
  getCaptchaProvider() {
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
  async validate(data) {
    return this.apiClient.validate(this.slug, data);
  }
  /**
   * Submit form data
   */
  async submit(data, options) {
    this.options.onSubmitStart?.();
    try {
      if (this.config?.mode === "schema") {
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
  getSuccessMessage() {
    return this.config?.settings?.successMessage || "Form submitted successfully!";
  }
  /**
   * Get redirect URL from config
   */
  getRedirectUrl() {
    return this.config?.settings?.redirectUrl;
  }
};
var FormsSDK = class {
  constructor(config) {
    this.apiClient = new FormsApiClient(config);
  }
  /**
   * Check if form is active and get configuration
   */
  async isActive(slug, lang) {
    return this.apiClient.isActive(slug, lang);
  }
  /**
   * Validate form data without submitting
   */
  async validate(slug, data) {
    return this.apiClient.validate(slug, data);
  }
  /**
   * Submit form data
   */
  async submit(slug, data, options) {
    return this.apiClient.submit(slug, data, options);
  }
  /**
   * Create a form handler for a specific form
   */
  form(slug, options) {
    return new FormHandler(this.apiClient, slug, options);
  }
  /**
   * Track a form view (for analytics completion rate)
   */
  async trackView(slug) {
    return this.apiClient.trackView(slug);
  }
  /**
   * Submit with retry logic for rate limits
   */
  async submitWithRetry(slug, data, options) {
    const maxRetries = options?.maxRetries ?? 3;
    let lastError = null;
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        return await this.submit(slug, data, options);
      } catch (error) {
        lastError = error;
        if (error instanceof FormsError) {
          if ([
            "VALIDATION_ERROR",
            "CAPTCHA_REQUIRED",
            "ORIGIN_NOT_ALLOWED"
          ].includes(error.code)) {
            throw error;
          }
          if (error.code.includes("RATE_LIMIT")) {
            const retryAfter = error.retryAfter || Math.pow(2, attempt) * 1e3;
            await new Promise((resolve) => setTimeout(resolve, retryAfter));
            continue;
          }
        }
        await new Promise(
          (resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1e3)
        );
      }
    }
    throw lastError;
  }
};

// vue/use-form.ts
function useForm(options) {
  const sdk = new FormsSDK(options.config);
  const config = ref(null);
  const isLoading = ref(false);
  const isInitializing = ref(false);
  const isSubmitted = ref(false);
  const errors = ref({});
  const values = ref({});
  const initialize = async () => {
    isInitializing.value = true;
    try {
      const formConfig = await sdk.isActive(options.slug, options.lang);
      config.value = formConfig;
      return formConfig;
    } finally {
      isInitializing.value = false;
    }
  };
  const setValue = (name, value) => {
    values.value = { ...values.value, [name]: value };
    if (errors.value[name]) {
      const { [name]: _, ...rest } = errors.value;
      errors.value = rest;
    }
  };
  const setValues = (newValues) => {
    values.value = { ...values.value, ...newValues };
  };
  const validate = async () => {
    const result = await sdk.validate(options.slug, values.value);
    if (!result.valid) {
      const errorMap = result.errors.reduce(
        (acc, err) => ({ ...acc, [err.field]: err.message }),
        {}
      );
      errors.value = errorMap;
    }
    return result.valid;
  };
  const submit = async (captchaToken) => {
    isLoading.value = true;
    errors.value = {};
    try {
      const submitData = config.value?.settings?.honeypot ? { ...values.value, _hp: "" } : values.value;
      const response = await sdk.submit(options.slug, submitData, {
        captchaToken
      });
      isSubmitted.value = true;
      options.onSuccess?.(response);
      return response;
    } catch (error) {
      if (error instanceof FormValidationError) {
        const errorMap = error.errors.reduce(
          (acc, err) => ({ ...acc, [err.field]: err.message }),
          {}
        );
        errors.value = errorMap;
        options.onValidationError?.(error.errors);
      } else {
        options.onError?.(error);
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
    honeypotEnabled
  };
}

// vue/plugin.ts
var FORMS_SDK_KEY = /* @__PURE__ */ Symbol("forms-sdk");
function createFormsPlugin(config) {
  const sdk = new FormsSDK(config);
  return {
    install(app) {
      app.provide(FORMS_SDK_KEY, sdk);
      app.config.globalProperties.$formsSDK = sdk;
    }
  };
}
export {
  FORMS_SDK_KEY,
  createFormsPlugin,
  useForm
};
//# sourceMappingURL=index.js.map