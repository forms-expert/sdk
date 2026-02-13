"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// react/index.ts
var react_exports = {};
__export(react_exports, {
  FormsExpertForm: () => FormsExpertForm,
  FormsProvider: () => FormsProvider,
  useForm: () => useForm,
  useFormsSDK: () => useFormsSDK
});
module.exports = __toCommonJS(react_exports);

// react/use-form.tsx
var import_react = require("react");

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

// react/use-form.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var FormsContext = (0, import_react.createContext)(null);
function FormsProvider({ config, children }) {
  const sdk = (0, import_react.useMemo)(() => new FormsSDK(config), [config]);
  const value = (0, import_react.useMemo)(() => ({ sdk, isReady: true }), [sdk]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormsContext.Provider, { value, children });
}
function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
function useFormsSDK() {
  const context = (0, import_react.useContext)(FormsContext);
  if (!context) {
    throw new Error("useFormsSDK must be used within a FormsProvider");
  }
  return context.sdk;
}
function useForm(options) {
  const context = (0, import_react.useContext)(FormsContext);
  const sdk = (0, import_react.useMemo)(() => {
    if (options.config) {
      return new FormsSDK(options.config);
    }
    if (!context) {
      throw new Error("Either provide config to useForm or use FormsProvider");
    }
    return context.sdk;
  }, [options.config, context]);
  const [config, setConfig] = (0, import_react.useState)(null);
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  const [isInitializing, setIsInitializing] = (0, import_react.useState)(false);
  const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
  const [errors, setErrors] = (0, import_react.useState)({});
  const [fileErrors, setFileErrors] = (0, import_react.useState)([]);
  const [values, setValues] = (0, import_react.useState)({});
  const [error, setError] = (0, import_react.useState)(null);
  const [uploadProgress, setUploadProgress] = (0, import_react.useState)(null);
  const initialize = (0, import_react.useCallback)(async () => {
    setIsInitializing(true);
    try {
      const formConfig = await sdk.isActive(options.slug, options.lang);
      setConfig(formConfig);
      if (options.trackViews) {
        sdk.trackView(options.slug);
      }
      return formConfig;
    } finally {
      setIsInitializing(false);
    }
  }, [sdk, options.slug, options.trackViews, options.lang]);
  (0, import_react.useEffect)(() => {
    if (options.autoInit !== false) {
      initialize();
    }
  }, [initialize, options.autoInit]);
  const setValue = (0, import_react.useCallback)((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (prev[name]) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return prev;
    });
  }, []);
  const setValuesHandler = (0, import_react.useCallback)((newValues) => {
    setValues((prev) => ({ ...prev, ...newValues }));
  }, []);
  const validate = (0, import_react.useCallback)(async () => {
    const result = await sdk.validate(options.slug, values);
    if (!result.valid) {
      const errorMap = result.errors.reduce(
        (acc, err) => ({ ...acc, [err.field]: err.message }),
        {}
      );
      setErrors(errorMap);
    }
    return result.valid;
  }, [sdk, options.slug, values]);
  const submit = (0, import_react.useCallback)(
    async (captchaToken) => {
      setIsLoading(true);
      setErrors({});
      setFileErrors([]);
      setError(null);
      setUploadProgress(null);
      try {
        const submitData = config?.settings?.honeypot ? { ...values, _hp: "" } : values;
        const response = await sdk.submit(options.slug, submitData, {
          captchaToken,
          onProgress: setUploadProgress
        });
        setIsSubmitted(true);
        options.onSuccess?.(response);
        return response;
      } catch (err) {
        if (err instanceof FormValidationError) {
          const errorMap = err.errors.reduce(
            (acc, e) => ({ ...acc, [e.field]: e.message }),
            {}
          );
          setErrors(errorMap);
          options.onValidationError?.(err.errors);
        } else {
          setError(err);
          options.onError?.(err);
        }
        return null;
      } finally {
        setIsLoading(false);
        setUploadProgress(null);
      }
    },
    [sdk, options, values]
  );
  const reset = (0, import_react.useCallback)(() => {
    setValues({});
    setErrors({});
    setFileErrors([]);
    setError(null);
    setIsSubmitted(false);
    setIsLoading(false);
    setUploadProgress(null);
  }, []);
  const clearErrors = (0, import_react.useCallback)(() => {
    setErrors({});
    setFileErrors([]);
  }, []);
  const validateFiles = (0, import_react.useCallback)((files) => {
    const errors2 = [];
    const maxSize = config?.settings?.maxAttachmentSize ?? 10 * 1024 * 1024;
    const maxCount = config?.settings?.maxAttachments ?? 5;
    if (files.length > maxCount) {
      errors2.push({
        field: "attachments",
        file: "",
        error: "count",
        message: `Maximum ${maxCount} files allowed`
      });
    }
    files.forEach((file) => {
      if (file.size > maxSize) {
        errors2.push({
          field: "attachments",
          file: file.name,
          error: "size",
          message: `File "${file.name}" exceeds maximum size of ${formatBytes(maxSize)}`
        });
      }
    });
    setFileErrors(errors2);
    return errors2;
  }, [config?.settings?.maxAttachmentSize, config?.settings?.maxAttachments]);
  const allowsAttachments = config?.settings?.allowAttachments ?? false;
  const maxAttachments = config?.settings?.maxAttachments ?? 5;
  const maxAttachmentSize = config?.settings?.maxAttachmentSize ?? 10 * 1024 * 1024;
  return {
    config,
    schema: config?.schema ?? null,
    isLoading,
    isInitializing,
    isSubmitted,
    isSuccess: isSubmitted,
    errors,
    fileErrors,
    error,
    values,
    uploadProgress,
    initialize,
    setValue,
    setValues: setValuesHandler,
    validate,
    validateFiles,
    submit,
    reset,
    clearErrors,
    requiresCaptcha: config?.settings?.captcha?.enabled ?? false,
    captchaProvider: config?.settings?.captcha?.provider,
    captchaSiteKey: config?.settings?.captcha?.siteKey,
    honeypotEnabled: config?.settings?.honeypot ?? false,
    allowsAttachments,
    maxAttachments,
    maxAttachmentSize
  };
}

// react/forms-expert-form.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var defaultStyling = {
  theme: "light",
  primaryColor: "#3b82f6",
  backgroundColor: "#ffffff",
  textColor: "#1f2937",
  borderRadius: "md",
  fontSize: "md",
  buttonStyle: "filled",
  labelPosition: "top"
};
function getBorderRadius(radius) {
  switch (radius) {
    case "none":
      return "0";
    case "sm":
      return "0.125rem";
    case "md":
      return "0.375rem";
    case "lg":
      return "0.5rem";
    default:
      return "0.375rem";
  }
}
function getButtonRadius(radius) {
  switch (radius) {
    case "none":
      return "0";
    case "small":
      return "4px";
    case "medium":
      return "8px";
    case "large":
      return "12px";
    case "full":
      return "9999px";
    default:
      return "8px";
  }
}
function getFontSize(size) {
  switch (size) {
    case "sm":
      return "0.875rem";
    case "md":
      return "1rem";
    case "lg":
      return "1.125rem";
    default:
      return "1rem";
  }
}
function getPlaceholderFontSize(size) {
  switch (size) {
    case "small":
      return "0.75rem";
    case "large":
      return "1rem";
    default:
      return "0.875rem";
  }
}
function getFieldSpacing(spacing) {
  switch (spacing) {
    case "compact":
      return "0.5rem";
    case "relaxed":
      return "1.5rem";
    case "spacious":
      return "2rem";
    default:
      return "1rem";
  }
}
function getFormPadding(padding) {
  switch (padding) {
    case "compact":
      return "1rem";
    case "relaxed":
      return "2.5rem";
    case "spacious":
      return "3.5rem";
    default:
      return "1.5rem";
  }
}
function getLabelSpacing(spacing) {
  switch (spacing) {
    case "compact":
      return "0.125rem";
    case "relaxed":
      return "0.75rem";
    default:
      return "0.25rem";
  }
}
function getFormMaxWidth(width) {
  switch (width) {
    case "narrow":
      return "28rem";
    case "wide":
      return "48rem";
    case "full":
      return "100%";
    default:
      return "36rem";
  }
}
function getButtonAlign(align) {
  switch (align) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    default:
      return "center";
  }
}
function getHeadingSize(size) {
  switch (size) {
    case "small":
      return "1.125rem";
    case "large":
      return "1.875rem";
    case "extra-large":
      return "2.25rem";
    default:
      return "1.5rem";
  }
}
function getParagraphSize(size) {
  switch (size) {
    case "small":
      return "0.875rem";
    case "large":
      return "1.125rem";
    default:
      return "1rem";
  }
}
function FormsExpertForm({
  config,
  slug,
  trackViews,
  submitText = "Submit",
  onSuccess,
  onError,
  onValidationError,
  className,
  style,
  lang
}) {
  const form = useForm({
    slug,
    config,
    trackViews,
    onSuccess,
    onError,
    onValidationError,
    autoInit: true,
    lang
  });
  const [captchaToken, setCaptchaToken] = (0, import_react2.useState)(null);
  const captchaContainerRef = (0, import_react2.useRef)(null);
  const captchaWidgetId = (0, import_react2.useRef)(null);
  const captchaScriptLoaded = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (!form.requiresCaptcha || !form.captchaSiteKey || !form.captchaProvider) return;
    if (captchaScriptLoaded.current) return;
    const provider = form.captchaProvider;
    const siteKey = form.captchaSiteKey;
    const renderWidget = () => {
      if (!captchaContainerRef.current) return;
      const w2 = window;
      if (provider === "turnstile" && w2.turnstile) {
        captchaWidgetId.current = w2.turnstile.render(captchaContainerRef.current, {
          sitekey: siteKey,
          callback: (token) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(null),
          "error-callback": () => setCaptchaToken(null)
        });
      } else if (provider === "hcaptcha" && w2.hcaptcha) {
        captchaWidgetId.current = w2.hcaptcha.render(captchaContainerRef.current, {
          sitekey: siteKey,
          callback: (token) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(null),
          "error-callback": () => setCaptchaToken(null)
        });
      } else if (provider === "recaptcha" && w2.grecaptcha) {
        w2.grecaptcha.ready(() => {
          w2.grecaptcha.execute(siteKey, { action: "submit" }).then((token) => {
            setCaptchaToken(token);
          });
        });
      }
    };
    const w = window;
    if (provider === "turnstile" && w.turnstile || provider === "hcaptcha" && w.hcaptcha || provider === "recaptcha" && w.grecaptcha) {
      captchaScriptLoaded.current = true;
      renderWidget();
      return;
    }
    const script = document.createElement("script");
    if (provider === "turnstile") {
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    } else if (provider === "hcaptcha") {
      script.src = "https://js.hcaptcha.com/1/api.js?render=explicit";
    } else if (provider === "recaptcha") {
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    }
    script.async = true;
    script.defer = true;
    script.onload = () => {
      captchaScriptLoaded.current = true;
      setTimeout(renderWidget, 100);
    };
    document.head.appendChild(script);
    return () => {
      if (captchaWidgetId.current !== null) {
        const w2 = window;
        if (provider === "turnstile" && w2.turnstile) {
          w2.turnstile.remove(captchaWidgetId.current);
        } else if (provider === "hcaptcha" && w2.hcaptcha) {
          w2.hcaptcha.reset(captchaWidgetId.current);
        }
      }
    };
  }, [form.requiresCaptcha, form.captchaProvider, form.captchaSiteKey]);
  const resetCaptcha = () => {
    setCaptchaToken(null);
    if (captchaWidgetId.current !== null) {
      const w = window;
      if (form.captchaProvider === "turnstile" && w.turnstile) {
        w.turnstile.reset(captchaWidgetId.current);
      } else if (form.captchaProvider === "hcaptcha" && w.hcaptcha) {
        w.hcaptcha.reset(captchaWidgetId.current);
      } else if (form.captchaProvider === "recaptcha" && w.grecaptcha) {
        w.grecaptcha.execute(form.captchaSiteKey, { action: "submit" }).then((token) => {
          setCaptchaToken(token);
        });
      }
    }
  };
  const styling = form.config?.schema?.styling || defaultStyling;
  const radius = getBorderRadius(styling.borderRadius);
  const btnRadius = getButtonRadius(styling.buttonRadius);
  const fontSize = getFontSize(styling.fontSize);
  const phFontSize = getPlaceholderFontSize(styling.placeholderFontSize);
  const fieldSpacing = getFieldSpacing(styling.fieldSpacing);
  const formPadding = getFormPadding(styling.formPadding);
  const labelSpacing = getLabelSpacing(styling.labelSpacing);
  const formMaxWidth = getFormMaxWidth(styling.formWidth);
  const btnColor = styling.buttonColor || styling.primaryColor;
  const fontFamily = styling.fontFamily || "system-ui, -apple-system, sans-serif";
  const btnAlign = getButtonAlign(styling.buttonAlign);
  const resolvedButtonText = styling.buttonText || submitText;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await form.submit(captchaToken || void 0);
    if (!result) {
      resetCaptcha();
    }
  };
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      form.setValue(name, e.target.checked);
    } else if (type === "file") {
      form.setValue(name, e.target.files?.[0]);
    } else {
      form.setValue(name, value);
    }
  };
  if (form.isInitializing) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className,
        style: {
          padding: "2rem",
          textAlign: "center",
          color: styling.textColor,
          ...style
        },
        children: "Loading form..."
      }
    );
  }
  if (!form.config?.active) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className,
        style: {
          padding: "2rem",
          textAlign: "center",
          color: "#ef4444",
          ...style
        },
        children: "This form is not available"
      }
    );
  }
  if (form.isSubmitted) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100%",
          padding: formPadding,
          textAlign: "center",
          backgroundColor: styling.transparentBackground ? "transparent" : styling.backgroundColor,
          color: styling.textColor,
          borderRadius: radius,
          maxWidth: formMaxWidth,
          margin: "0 auto",
          fontFamily,
          ...style
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "svg",
            {
              style: {
                width: "3rem",
                height: "3rem",
                margin: "0 auto 1rem",
                color: styling.successColor || "#22c55e"
              },
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M5 13l4 4L19 7"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { fontSize: "1.125rem", fontWeight: 500 }, children: form.config.settings?.successMessage || "Form submitted successfully!" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              onClick: form.reset,
              style: {
                marginTop: "1rem",
                background: "none",
                border: "none",
                color: styling.primaryColor,
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "0.875rem"
              },
              children: "Submit again"
            }
          )
        ] })
      }
    );
  }
  const fields = form.config.schema?.fields || [];
  const showBranding = form.config.branding?.enabled !== false;
  const brandingText = form.config.branding?.text || "Powered by forms.expert";
  const brandingUrl = form.config.branding?.url || "https://forms.expert";
  const wrapperStyle = {
    ...styling.backgroundImageUrl ? {
      backgroundImage: `url(${styling.backgroundImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : {},
    position: "relative"
  };
  const formEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "form",
    {
      onSubmit: handleSubmit,
      className,
      style: {
        fontFamily,
        fontSize,
        backgroundColor: styling.transparentBackground ? "transparent" : styling.backgroundColor,
        color: styling.textColor,
        padding: formPadding,
        borderRadius: radius,
        maxWidth: formMaxWidth,
        width: "100%",
        margin: "0 auto",
        position: "relative",
        ...style
      },
      children: [
        styling.logoUrl && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: {
          textAlign: styling.logoPosition === "top-left" ? "left" : styling.logoPosition === "top-right" ? "right" : "center",
          marginBottom: "1rem"
        }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: styling.logoUrl, alt: "", style: { maxHeight: "48px" } }) }),
        styling.coverImageUrl && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "img",
          {
            src: styling.coverImageUrl,
            alt: "",
            style: {
              width: "100%",
              maxHeight: "200px",
              objectFit: "cover",
              borderRadius: `${radius} ${radius} 0 0`,
              marginBottom: "1rem"
            }
          }
        ),
        fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          FormFieldInput,
          {
            field,
            value: form.values[field.name],
            error: form.errors[field.name],
            onChange: handleChange,
            onValueChange: (name, val) => form.setValue(name, val),
            styling,
            fieldSpacing,
            labelSpacing,
            phFontSize
          },
          field.name
        )),
        form.honeypotEnabled && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "text", name: "_hp", tabIndex: -1, autoComplete: "off" }) }),
        form.requiresCaptcha && form.captchaProvider !== "recaptcha" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref: captchaContainerRef, style: { marginTop: "1rem" } }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", justifyContent: btnAlign, marginTop: "1rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "submit",
            disabled: form.isLoading,
            style: {
              ...styling.buttonAlign ? {} : { width: "100%" },
              padding: "0.625rem 1.25rem",
              fontWeight: 500,
              fontSize,
              fontFamily: "inherit",
              borderRadius: btnRadius,
              cursor: form.isLoading ? "not-allowed" : "pointer",
              opacity: form.isLoading ? 0.5 : 1,
              backgroundColor: styling.buttonStyle === "filled" ? btnColor : "transparent",
              color: styling.buttonStyle === "filled" ? "white" : btnColor,
              border: styling.buttonStyle === "filled" ? "none" : `2px solid ${btnColor}`
            },
            children: form.isLoading ? "Submitting..." : resolvedButtonText
          }
        ) }),
        showBranding && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            style: {
              textAlign: "center",
              marginTop: "1rem",
              paddingTop: "0.75rem",
              borderTop: `1px solid ${styling.theme === "dark" ? "#374151" : "#e5e7eb"}`
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "a",
              {
                href: brandingUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                  color: styling.theme === "dark" ? "#9ca3af" : "#6b7280",
                  textDecoration: "none",
                  fontSize: "0.75rem"
                },
                children: brandingText
              }
            )
          }
        )
      ]
    }
  );
  if (styling.backgroundImageUrl) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: wrapperStyle, children: [
      styling.backgroundOverlay ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: {
        position: "absolute",
        inset: 0,
        backgroundColor: `rgba(0,0,0,${styling.backgroundOverlay})`,
        pointerEvents: "none"
      } }) : null,
      formEl
    ] });
  }
  return formEl;
}
function FormFieldInput({
  field,
  value,
  error,
  onChange,
  onValueChange,
  styling,
  fieldSpacing,
  labelSpacing,
  phFontSize
}) {
  const radius = getBorderRadius(styling.borderRadius);
  const fontSize = getFontSize(styling.fontSize);
  const isInline = styling.labelPosition === "left" || styling.fieldLayout === "inline";
  const inputStyle = {
    width: "100%",
    padding: "0.5rem 0.75rem",
    border: `1px solid ${error ? "#ef4444" : styling.theme === "dark" ? "#4b5563" : "#d1d5db"}`,
    borderRadius: radius,
    fontSize,
    fontFamily: "inherit",
    backgroundColor: styling.theme === "dark" ? "#374151" : "#ffffff",
    color: styling.textColor
  };
  const getOpts = () => {
    if (!field.options) return [];
    return field.options.map((o) => typeof o === "string" ? { value: o, label: o } : o);
  };
  if (field.type === "heading") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { style: { marginBottom: fieldSpacing, fontSize: getHeadingSize(styling.headingSize), fontWeight: 600 }, children: field.content || field.label });
  }
  if (field.type === "divider") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("hr", { style: { marginBottom: fieldSpacing, border: "none", borderTop: `1px solid ${styling.theme === "dark" ? "#4b5563" : "#d1d5db"}` } });
  }
  if (field.type === "paragraph") {
    const pSize = field.paragraphFontSize ? `${field.paragraphFontSize}px` : getParagraphSize(styling.paragraphSize);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { marginBottom: fieldSpacing, fontSize: pSize, color: styling.theme === "dark" ? "#9ca3af" : "#6b7280" }, children: field.content || field.label });
  }
  if (field.type === "hidden") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "hidden", name: field.name, value: String(value || field.defaultValue || "") });
  }
  if (field.type === "checkbox" || field.type === "toggle" || field.type === "consent") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: fieldSpacing }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          type: "checkbox",
          id: field.name,
          name: field.name,
          checked: Boolean(value),
          onChange,
          required: field.required,
          style: { width: "1rem", height: "1rem", accentColor: styling.primaryColor }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: field.name, children: [
        field.type === "consent" && field.consentText ? field.consentUrl ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
          field.consentText,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: field.consentUrl, target: "_blank", rel: "noopener noreferrer", style: { color: styling.primaryColor }, children: "(link)" })
        ] }) : field.consentText : field.label || field.name,
        field.required && !styling.hideRequiredAsterisk && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { color: "#ef4444", marginLeft: "0.25rem" }, children: "*" })
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { color: styling.errorColor || "#ef4444", fontSize: "0.875rem", marginLeft: "0.5rem" }, children: error })
    ] });
  }
  const labelEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "label",
    {
      htmlFor: field.name,
      style: {
        display: "block",
        fontWeight: 500,
        ...isInline ? { width: "33%", flexShrink: 0, paddingTop: "0.5rem", marginBottom: 0 } : { marginBottom: labelSpacing }
      },
      children: [
        field.label || field.name,
        field.required && !styling.hideRequiredAsterisk && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { color: "#ef4444", marginLeft: "0.25rem" }, children: "*" })
      ]
    }
  );
  const errorEl = error ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { color: styling.errorColor || "#ef4444", fontSize: "0.875rem", marginTop: "0.25rem" }, children: error }) : null;
  let fieldEl;
  if (field.type === "textarea" || field.type === "richText") {
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "textarea",
      {
        id: field.name,
        name: field.name,
        value: String(value || ""),
        onChange,
        placeholder: field.placeholder,
        required: field.required,
        style: { ...inputStyle, minHeight: "100px", resize: "vertical" }
      }
    );
  } else if (field.type === "select" || field.type === "dropdown") {
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("select", { id: field.name, name: field.name, value: String(value || ""), onChange, required: field.required, style: inputStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "Select an option..." }),
      getOpts().map((opt) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: opt.value, children: opt.label }, opt.value))
    ] });
  } else if (field.type === "radio") {
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: getOpts().map((opt) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { style: { display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          type: "radio",
          name: field.name,
          value: opt.value,
          checked: value === opt.value,
          onChange: () => onValueChange(field.name, opt.value),
          style: { accentColor: styling.primaryColor }
        }
      ),
      opt.label
    ] }, opt.value)) });
  } else if (field.type === "multiselect") {
    const selected = Array.isArray(value) ? value : [];
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: getOpts().map((opt) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { style: { display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          type: "checkbox",
          checked: selected.includes(opt.value),
          onChange: () => {
            const next = selected.includes(opt.value) ? selected.filter((v) => v !== opt.value) : [...selected, opt.value];
            onValueChange(field.name, next);
          },
          style: { accentColor: styling.primaryColor }
        }
      ),
      opt.label
    ] }, opt.value)) });
  } else if (field.type === "rating") {
    const max = field.ratingMax || 5;
    const current = Number(value) || 0;
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", gap: "0.25rem" }, children: Array.from({ length: max }, (_, i) => i + 1).map((n) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        onClick: () => onValueChange(field.name, n),
        style: {
          width: "2rem",
          height: "2rem",
          cursor: "pointer",
          border: "none",
          background: "none",
          padding: 0,
          fontSize: "1.5rem",
          color: n <= current ? "#f59e0b" : styling.theme === "dark" ? "#4b5563" : "#d1d5db",
          transition: "color 0.15s"
        },
        children: "\u2605"
      },
      n
    )) });
  } else if (field.type === "scale" || field.type === "opinionScale") {
    const min = field.min ?? 1;
    const max = field.max ?? 10;
    const current = value;
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", gap: "0.25rem", flexWrap: "wrap" }, children: Array.from({ length: max - min + 1 }, (_, i) => min + i).map((n) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onValueChange(field.name, n),
          style: {
            minWidth: "2.25rem",
            height: "2.25rem",
            borderRadius: radius,
            cursor: "pointer",
            border: `1px solid ${styling.theme === "dark" ? "#4b5563" : "#d1d5db"}`,
            background: current === n ? styling.primaryColor : styling.theme === "dark" ? "#374151" : "#ffffff",
            color: current === n ? "white" : styling.textColor,
            fontSize: "0.875rem",
            transition: "all 0.15s"
          },
          children: n
        },
        n
      )) }),
      (field.lowLabel || field.highLabel) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: styling.theme === "dark" ? "#9ca3af" : "#6b7280", marginTop: "0.25rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: field.lowLabel }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: field.highLabel })
      ] })
    ] });
  } else if (field.type === "slider") {
    const min = field.min ?? 0;
    const max = field.max ?? 100;
    const step = field.step ?? 1;
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          type: "range",
          id: field.name,
          name: field.name,
          min,
          max,
          step,
          value: Number(value) || min,
          onChange: (e) => onValueChange(field.name, Number(e.target.value)),
          style: { width: "100%", accentColor: styling.primaryColor }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { textAlign: "center", fontSize: "0.875rem", marginTop: "0.25rem" }, children: String(value ?? min) })
    ] });
  } else if (field.type === "imageChoice") {
    const selected = value;
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: "0.5rem" }, children: getOpts().map((opt) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        type: "button",
        onClick: () => onValueChange(field.name, opt.value),
        style: {
          border: `2px solid ${selected === opt.value ? styling.primaryColor : styling.theme === "dark" ? "#4b5563" : "#d1d5db"}`,
          borderRadius: radius,
          padding: "0.5rem",
          cursor: "pointer",
          textAlign: "center",
          background: "none",
          transition: "border-color 0.15s"
        },
        children: [
          opt.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: opt.imageUrl, alt: opt.label, style: { maxWidth: "80px", maxHeight: "80px", objectFit: "cover", borderRadius: radius } }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontSize: "0.875rem", marginTop: "0.25rem" }, children: opt.label })
        ]
      },
      opt.value
    )) });
  } else if (field.type === "file") {
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        type: "file",
        id: field.name,
        name: field.name,
        onChange,
        required: field.required,
        accept: field.allowedMimeTypes?.join(","),
        multiple: field.multiple,
        style: inputStyle
      }
    );
  } else if (field.type === "name") {
    const nameVal = value || {};
    const nameFields = field.nameFields || ["first", "last"];
    const labels = { prefix: "Prefix", first: "First Name", middle: "Middle", last: "Last Name", suffix: "Suffix" };
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", gap: "0.5rem", flexWrap: "wrap" }, children: nameFields.map((nf) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        placeholder: labels[nf] || nf,
        value: nameVal[nf] || "",
        onChange: (e) => onValueChange(field.name, { ...nameVal, [nf]: e.target.value }),
        style: { ...inputStyle, flex: 1, minWidth: "120px" }
      },
      nf
    )) });
  } else if (field.type === "address") {
    const addr = value || {};
    const addrFields = field.addressFields || ["street", "city", "state", "zip", "country"];
    const labels = { street: "Street", street2: "Street 2", city: "City", state: "State", zip: "ZIP", country: "Country" };
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: addrFields.map((af) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        placeholder: labels[af] || af,
        value: addr[af] || "",
        onChange: (e) => onValueChange(field.name, { ...addr, [af]: e.target.value }),
        style: inputStyle
      },
      af
    )) });
  } else if (field.type === "currency") {
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "0.25rem" }, children: [
      field.currencySymbol && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: field.currencySymbol }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          type: "number",
          id: field.name,
          name: field.name,
          value: String(value || ""),
          onChange,
          step: 0.01,
          min: field.min,
          max: field.max,
          required: field.required,
          style: inputStyle
        }
      )
    ] });
  } else if (field.type === "colorPicker") {
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", gap: "0.5rem", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          type: "color",
          id: field.name,
          value: String(value || "#000000"),
          onChange: (e) => onValueChange(field.name, e.target.value),
          style: { width: "3rem", height: "2.25rem", border: "none", cursor: "pointer", padding: 0 }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          type: "text",
          value: String(value || ""),
          onChange: (e) => onValueChange(field.name, e.target.value),
          placeholder: "#000000",
          style: { ...inputStyle, flex: 1 }
        }
      )
    ] });
  } else if (field.type === "dateRange") {
    const range = value || {};
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", gap: "0.5rem", alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "date", value: range.start || "", onChange: (e) => onValueChange(field.name, { ...range, start: e.target.value }), style: { ...inputStyle, flex: 1 } }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "to" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "date", value: range.end || "", onChange: (e) => onValueChange(field.name, { ...range, end: e.target.value }), style: { ...inputStyle, flex: 1 } })
    ] });
  } else {
    const typeMap = {
      phone: "tel",
      url: "url",
      datetime: "datetime-local",
      time: "time",
      date: "date",
      number: "number",
      email: "email",
      password: "password"
    };
    fieldEl = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        type: typeMap[field.type] || "text",
        id: field.name,
        name: field.name,
        value: String(value || ""),
        onChange,
        placeholder: field.placeholder,
        required: field.required,
        min: field.min,
        max: field.max,
        step: field.step,
        maxLength: field.maxLength,
        style: inputStyle
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      style: {
        marginBottom: fieldSpacing,
        ...isInline ? { display: "flex", alignItems: "flex-start", gap: "1rem" } : {}
      },
      children: [
        labelEl,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: isInline ? { flex: 1 } : {}, children: [
          fieldEl,
          errorEl
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormsExpertForm,
  FormsProvider,
  useForm,
  useFormsSDK
});
//# sourceMappingURL=index.cjs.map