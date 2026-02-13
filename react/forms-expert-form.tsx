import { useState, useEffect, useRef, useMemo, FormEvent, ChangeEvent, CSSProperties } from 'react';
import {
  FormsSDKConfig,
  FormField,
  FormStyling,
  SubmissionResponse,
  ValidationError,
} from '../core';
import { useForm, UseFormOptions } from './use-form';

const defaultStyling: FormStyling = {
  theme: 'light',
  primaryColor: '#3b82f6',
  backgroundColor: '#ffffff',
  textColor: '#1f2937',
  borderRadius: 'md',
  fontSize: 'md',
  buttonStyle: 'filled',
  labelPosition: 'top',
};

function getBorderRadius(radius: FormStyling['borderRadius']): string {
  switch (radius) {
    case 'none': return '0';
    case 'sm': return '0.125rem';
    case 'md': return '0.375rem';
    case 'lg': return '0.5rem';
    default: return '0.375rem';
  }
}

function getButtonRadius(radius?: FormStyling['buttonRadius']): string {
  switch (radius) {
    case 'none': return '0';
    case 'small': return '4px';
    case 'medium': return '8px';
    case 'large': return '12px';
    case 'full': return '9999px';
    default: return '8px';
  }
}

function getFontSize(size: FormStyling['fontSize']): string {
  switch (size) {
    case 'sm': return '0.875rem';
    case 'md': return '1rem';
    case 'lg': return '1.125rem';
    default: return '1rem';
  }
}

function getPlaceholderFontSize(size?: FormStyling['placeholderFontSize']): string {
  switch (size) {
    case 'small': return '0.75rem';
    case 'large': return '1rem';
    default: return '0.875rem';
  }
}

function getFieldSpacing(spacing?: FormStyling['fieldSpacing']): string {
  switch (spacing) {
    case 'compact': return '0.5rem';
    case 'relaxed': return '1.5rem';
    case 'spacious': return '2rem';
    default: return '1rem';
  }
}

function getFormPadding(padding?: FormStyling['formPadding']): string {
  switch (padding) {
    case 'none': return '0';
    case 'compact': return '1rem';
    case 'relaxed': return '2.5rem';
    case 'spacious': return '3.5rem';
    default: return '1.5rem';
  }
}

function getLabelSpacing(spacing?: FormStyling['labelSpacing']): string {
  switch (spacing) {
    case 'compact': return '0.125rem';
    case 'relaxed': return '0.75rem';
    default: return '0.25rem';
  }
}

function getFormMaxWidth(width?: FormStyling['formWidth']): string {
  switch (width) {
    case 'narrow': return '28rem';
    case 'wide': return '48rem';
    case 'full': return '100%';
    default: return '36rem';
  }
}

function getButtonAlign(align?: FormStyling['buttonAlign']): string {
  switch (align) {
    case 'left': return 'flex-start';
    case 'right': return 'flex-end';
    default: return 'center';
  }
}

function getHeadingSize(size?: FormStyling['headingSize']): string {
  switch (size) {
    case 'small': return '1.125rem';
    case 'large': return '1.875rem';
    case 'extra-large': return '2.25rem';
    default: return '1.5rem';
  }
}

function getParagraphSize(size?: FormStyling['paragraphSize']): string {
  switch (size) {
    case 'small': return '0.875rem';
    case 'large': return '1.125rem';
    default: return '1rem';
  }
}

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
export function FormsExpertForm({
  config,
  slug,
  trackViews,
  submitText = 'Submit',
  onSuccess,
  onError,
  onValidationError,
  className,
  style,
  lang,
}: FormsExpertFormProps) {
  const form = useForm({
    slug,
    config,
    trackViews,
    onSuccess,
    onError,
    onValidationError,
    autoInit: true,
    lang,
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const captchaWidgetId = useRef<string | null>(null);
  const captchaScriptLoaded = useRef(false);
  const formScopeId = useMemo(() => 'fe-' + Math.random().toString(36).slice(2, 8), []);

  // Load captcha script and render widget
  useEffect(() => {
    if (!form.requiresCaptcha || !form.captchaSiteKey || !form.captchaProvider) return;
    if (captchaScriptLoaded.current) return;

    const provider = form.captchaProvider;
    const siteKey = form.captchaSiteKey;

    const renderWidget = () => {
      if (!captchaContainerRef.current) return;

      const w = window as any;
      if (provider === 'turnstile' && w.turnstile) {
        captchaWidgetId.current = w.turnstile.render(captchaContainerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => setCaptchaToken(token),
          'expired-callback': () => setCaptchaToken(null),
          'error-callback': () => setCaptchaToken(null),
        });
      } else if (provider === 'hcaptcha' && w.hcaptcha) {
        captchaWidgetId.current = w.hcaptcha.render(captchaContainerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => setCaptchaToken(token),
          'expired-callback': () => setCaptchaToken(null),
          'error-callback': () => setCaptchaToken(null),
        });
      } else if (provider === 'recaptcha' && w.grecaptcha) {
        // reCAPTCHA v3 — execute immediately, no visible widget
        w.grecaptcha.ready(() => {
          w.grecaptcha.execute(siteKey, { action: 'submit' }).then((token: string) => {
            setCaptchaToken(token);
          });
        });
      }
    };

    // Check if script already loaded
    const w = window as any;
    if (
      (provider === 'turnstile' && w.turnstile) ||
      (provider === 'hcaptcha' && w.hcaptcha) ||
      (provider === 'recaptcha' && w.grecaptcha)
    ) {
      captchaScriptLoaded.current = true;
      renderWidget();
      return;
    }

    // Load script
    const script = document.createElement('script');
    if (provider === 'turnstile') {
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    } else if (provider === 'hcaptcha') {
      script.src = 'https://js.hcaptcha.com/1/api.js?render=explicit';
    } else if (provider === 'recaptcha') {
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    }
    script.async = true;
    script.defer = true;
    script.onload = () => {
      captchaScriptLoaded.current = true;
      // Small delay for script initialization
      setTimeout(renderWidget, 100);
    };
    document.head.appendChild(script);

    return () => {
      // Clean up widget on unmount
      if (captchaWidgetId.current !== null) {
        const w = window as any;
        if (provider === 'turnstile' && w.turnstile) {
          w.turnstile.remove(captchaWidgetId.current);
        } else if (provider === 'hcaptcha' && w.hcaptcha) {
          w.hcaptcha.reset(captchaWidgetId.current);
        }
      }
    };
  }, [form.requiresCaptcha, form.captchaProvider, form.captchaSiteKey]);

  const resetCaptcha = () => {
    setCaptchaToken(null);
    if (captchaWidgetId.current !== null) {
      const w = window as any;
      if (form.captchaProvider === 'turnstile' && w.turnstile) {
        w.turnstile.reset(captchaWidgetId.current);
      } else if (form.captchaProvider === 'hcaptcha' && w.hcaptcha) {
        w.hcaptcha.reset(captchaWidgetId.current);
      } else if (form.captchaProvider === 'recaptcha' && w.grecaptcha) {
        w.grecaptcha.execute(form.captchaSiteKey, { action: 'submit' }).then((token: string) => {
          setCaptchaToken(token);
        });
      }
    }
  };

  const styling = { ...defaultStyling, ...form.config?.schema?.styling, ...form.config?.styling };
  const radius = getBorderRadius(styling.borderRadius);
  const btnRadius = getButtonRadius(styling.buttonRadius);
  const fontSize = getFontSize(styling.fontSize);
  const phFontSize = getPlaceholderFontSize(styling.placeholderFontSize);
  const fieldSpacing = getFieldSpacing(styling.fieldSpacing);
  const formPadding = getFormPadding(styling.formPadding);
  const labelSpacing = getLabelSpacing(styling.labelSpacing);
  const formMaxWidth = getFormMaxWidth(styling.formWidth);
  const btnBgColor = styling.primaryColor;
  const btnTextColor = styling.buttonColor;
  const fontFamily = styling.fontFamily || 'system-ui, -apple-system, sans-serif';
  const btnAlign = getButtonAlign(styling.buttonAlign);
  const resolvedButtonText = styling.buttonText || submitText;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await form.submit(captchaToken || undefined);
    if (!result) {
      // Reset captcha on failure
      resetCaptcha();
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      form.setValue(name, (e.target as HTMLInputElement).checked);
    } else if (type === 'file') {
      form.setValue(name, (e.target as HTMLInputElement).files?.[0]);
    } else {
      form.setValue(name, value);
    }
  };

  if (form.isInitializing) {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          ...style,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" style={{ animation: 'spin 1s linear infinite', color: '#9ca3af' }}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31.4 31.4" strokeLinecap="round"/>
        </svg>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!form.config?.active) {
    return (
      <div
        className={className}
        style={{
          padding: '2rem',
          textAlign: 'center',
          color: '#ef4444',
          ...style,
        }}
      >
        This form is not available
      </div>
    );
  }

  if (form.isSubmitted) {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100%',
          padding: formPadding,
          textAlign: 'center',
          backgroundColor: styling.transparentBackground ? 'transparent' : styling.backgroundColor,
          color: styling.textColor,
          borderRadius: radius,
          maxWidth: formMaxWidth,
          margin: '0 auto',
          fontFamily,
          ...style,
        }}
      >
        <div>
          <svg
            style={{
              width: '3rem',
              height: '3rem',
              margin: '0 auto 1rem',
              color: styling.successColor || '#22c55e',
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>
            {form.config.settings?.successMessage || 'Form submitted successfully!'}
          </p>
          <button
            type="button"
            onClick={form.reset}
            style={{
              marginTop: '1rem',
              background: 'none',
              border: 'none',
              color: styling.primaryColor,
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '0.875rem',
            }}
          >
            Submit again
          </button>
        </div>
      </div>
    );
  }

  const fields = form.config.schema?.fields || [];
  const showBranding = form.config.branding?.enabled !== false;
  const brandingText = form.config.branding?.text || 'Powered by forms.expert';
  const brandingUrl = form.config.branding?.url || 'https://forms.expert';

  const wrapperStyle: CSSProperties = {
    ...(styling.backgroundImageUrl ? {
      backgroundImage: `url(${styling.backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    } : {}),
    position: 'relative' as const,
  };

  const formEl = (
    <form
      onSubmit={handleSubmit}
      className={className}
      data-fe-scope={formScopeId}
      style={{
        fontFamily,
        fontSize,
        backgroundColor: styling.transparentBackground ? 'transparent' : styling.backgroundColor,
        color: styling.textColor,
        padding: formPadding,
        borderRadius: radius,
        maxWidth: formMaxWidth,
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        ...style,
      }}
    >
      {/* Scoped placeholder styles */}
      <style dangerouslySetInnerHTML={{ __html: `form[data-fe-scope="${formScopeId}"] input::placeholder, form[data-fe-scope="${formScopeId}"] textarea::placeholder { font-size: ${phFontSize}; }` }} />
      {/* Logo */}
      {styling.logoUrl && (
        <div style={{
          textAlign: styling.logoPosition === 'top-left' ? 'left' : styling.logoPosition === 'top-right' ? 'right' : 'center',
          marginBottom: '1rem',
        }}>
          <img src={styling.logoUrl} alt="" style={{ maxHeight: '48px' }} />
        </div>
      )}

      {/* Cover image */}
      {styling.coverImageUrl && (
        <img
          src={styling.coverImageUrl}
          alt=""
          style={{
            width: '100%',
            maxHeight: '200px',
            objectFit: 'cover',
            borderRadius: `${radius} ${radius} 0 0`,
            marginBottom: '1rem',
          }}
        />
      )}

      {/* Form name */}
      {(form.config.settings?.showFormName !== false) && form.config.name && (
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: styling.textColor,
        }}>
          {form.config.hostedConfig?.pageTitle || form.config.name}
        </h1>
      )}

      {fields.map((field) => (
        <FormFieldInput
          key={field.name}
          field={field}
          value={form.values[field.name]}
          error={form.errors[field.name]}
          onChange={handleChange}
          onValueChange={(name, val) => form.setValue(name, val)}
          styling={styling}
          fieldSpacing={fieldSpacing}
          labelSpacing={labelSpacing}
          phFontSize={phFontSize}
        />
      ))}

      {/* Honeypot field — hidden from users, catches bots */}
      {form.honeypotEnabled && (
        <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
          <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
        </div>
      )}

      {/* Captcha widget */}
      {form.requiresCaptcha && form.captchaProvider !== 'recaptcha' && (
        <div ref={captchaContainerRef} style={{ marginTop: '1rem' }} />
      )}

      <div style={{ display: 'flex', justifyContent: btnAlign, marginTop: '1rem' }}>
        <button
          type="submit"
          disabled={form.isLoading}
          style={{
            ...(styling.buttonAlign ? {} : { width: '100%' }),
            padding: '0.625rem 1.25rem',
            fontWeight: 500,
            fontSize,
            fontFamily: 'inherit',
            borderRadius: btnRadius,
            cursor: form.isLoading ? 'not-allowed' : 'pointer',
            opacity: form.isLoading ? 0.5 : 1,
            backgroundColor:
              styling.buttonStyle === 'filled' ? btnBgColor : 'transparent',
            color:
              styling.buttonStyle === 'filled'
                ? (btnTextColor || 'white')
                : btnBgColor,
            border:
              styling.buttonStyle === 'filled'
                ? 'none'
                : `2px solid ${btnBgColor}`,
          }}
        >
          {form.isLoading ? 'Submitting...' : resolvedButtonText}
        </button>
      </div>

      {showBranding && (
        <div
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            paddingTop: '0.75rem',
            borderTop: `1px solid ${styling.theme === 'dark' ? '#374151' : '#e5e7eb'}`,
          }}
        >
          <a
            href={brandingUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: styling.theme === 'dark' ? '#9ca3af' : '#6b7280',
              textDecoration: 'none',
              fontSize: '0.75rem',
            }}
          >
            {brandingText}
          </a>
        </div>
      )}
    </form>
  );

  if (styling.backgroundImageUrl) {
    return (
      <div style={wrapperStyle}>
        {styling.backgroundOverlay ? (
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: `rgba(0,0,0,${styling.backgroundOverlay})`,
            pointerEvents: 'none',
          }} />
        ) : null}
        {formEl}
      </div>
    );
  }

  return formEl;
}

interface FormFieldInputProps {
  field: FormField;
  value: unknown;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onValueChange: (name: string, value: unknown) => void;
  styling: FormStyling;
  fieldSpacing: string;
  labelSpacing: string;
  phFontSize: string;
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
  phFontSize,
}: FormFieldInputProps) {
  const radius = getBorderRadius(styling.borderRadius);
  const fontSize = getFontSize(styling.fontSize);
  const isInline = styling.labelPosition === 'left' || styling.fieldLayout === 'inline';

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '0.5rem 0.75rem',
    border: `1px solid ${error ? '#ef4444' : styling.theme === 'dark' ? '#4b5563' : '#d1d5db'}`,
    borderRadius: radius,
    fontSize,
    fontFamily: 'inherit',
    backgroundColor: styling.theme === 'dark' ? '#374151' : '#ffffff',
    color: styling.textColor,
  };

  const getOpts = (): { value: string; label: string; imageUrl?: string }[] => {
    if (!field.options) return [];
    return field.options.map((o) => typeof o === 'string' ? { value: o, label: o } : o);
  };

  // Layout fields (no data)
  if (field.type === 'heading') {
    return (
      <div style={{ marginBottom: fieldSpacing }}>
        <h2 style={{ fontSize: getHeadingSize(styling.headingSize), fontWeight: 600 }}>{field.label}</h2>
        {field.content && (
          <p style={{ fontSize: '0.875rem', color: styling.theme === 'dark' ? '#9ca3af' : '#6b7280', marginTop: '0.25rem' }}>{field.content}</p>
        )}
      </div>
    );
  }
  if (field.type === 'divider') {
    return <hr style={{ marginBottom: fieldSpacing, border: 'none', borderTop: `1px solid ${styling.theme === 'dark' ? '#4b5563' : '#d1d5db'}` }} />;
  }
  if (field.type === 'paragraph') {
    const pSize = field.paragraphFontSize ? `${field.paragraphFontSize}px` : getParagraphSize(styling.paragraphSize);
    return (
      <div style={{ marginBottom: fieldSpacing }}>
        {field.label && (
          <p style={{ fontWeight: 500, fontSize: pSize, marginBottom: '0.25rem' }}>{field.label}</p>
        )}
        {field.content && (
          <div
            style={{ fontSize: pSize, color: styling.theme === 'dark' ? '#9ca3af' : '#6b7280' }}
            dangerouslySetInnerHTML={{ __html: field.content }}
          />
        )}
      </div>
    );
  }
  if (field.type === 'hidden') {
    return <input type="hidden" name={field.name} value={String(value || field.defaultValue || '')} />;
  }

  // Checkbox / toggle / consent — inline layout
  if (field.type === 'checkbox' || field.type === 'toggle' || field.type === 'consent') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: fieldSpacing }}>
        <input
          type="checkbox"
          id={field.name}
          name={field.name}
          checked={Boolean(value)}
          onChange={onChange}
          required={field.required}
          style={{ width: '1rem', height: '1rem', accentColor: styling.primaryColor }}
        />
        <label htmlFor={field.name}>
          {field.type === 'consent' && field.consentText
            ? (field.consentUrl
              ? <span>{field.consentText} <a href={field.consentUrl} target="_blank" rel="noopener noreferrer" style={{ color: styling.primaryColor }}>(link)</a></span>
              : field.consentText)
            : (field.label || field.name)}
          {field.required && !styling.hideRequiredAsterisk && <span style={{ color: '#ef4444', marginLeft: '0.25rem' }}>*</span>}
        </label>
        {error && <span style={{ color: styling.errorColor || '#ef4444', fontSize: '0.875rem', marginLeft: '0.5rem' }}>{error}</span>}
      </div>
    );
  }

  const labelEl = (
    <label
      htmlFor={field.name}
      style={{
        display: 'block',
        fontWeight: 500,
        ...(isInline
          ? { width: '33%', flexShrink: 0, paddingTop: '0.5rem', marginBottom: 0 }
          : { marginBottom: labelSpacing }),
      }}
    >
      {field.label || field.name}
      {field.required && !styling.hideRequiredAsterisk && <span style={{ color: '#ef4444', marginLeft: '0.25rem' }}>*</span>}
    </label>
  );

  const errorEl = error ? (
    <div style={{ color: styling.errorColor || '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</div>
  ) : null;

  let fieldEl: JSX.Element;

  if (field.type === 'textarea' || field.type === 'richText') {
    fieldEl = (
      <textarea
        id={field.name}
        name={field.name}
        value={String(value || '')}
        onChange={onChange}
        placeholder={field.placeholder}
        required={field.required}
        style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
      />
    );
  } else if (field.type === 'select' || field.type === 'dropdown') {
    fieldEl = (
      <select id={field.name} name={field.name} value={String(value || '')} onChange={onChange} required={field.required} style={inputStyle}>
        <option value="">Select an option...</option>
        {getOpts().map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    );
  } else if (field.type === 'radio') {
    fieldEl = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {getOpts().map((opt) => (
          <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="radio"
              name={field.name}
              value={opt.value}
              checked={(value as string) === opt.value}
              onChange={() => onValueChange(field.name, opt.value)}
              style={{ accentColor: styling.primaryColor }}
            />
            {opt.label}
          </label>
        ))}
      </div>
    );
  } else if (field.type === 'multiselect') {
    const selected = Array.isArray(value) ? (value as string[]) : [];
    fieldEl = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {getOpts().map((opt) => (
          <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={selected.includes(opt.value)}
              onChange={() => {
                const next = selected.includes(opt.value)
                  ? selected.filter((v) => v !== opt.value)
                  : [...selected, opt.value];
                onValueChange(field.name, next);
              }}
              style={{ accentColor: styling.primaryColor }}
            />
            {opt.label}
          </label>
        ))}
      </div>
    );
  } else if (field.type === 'rating') {
    const max = field.ratingMax || 5;
    const current = Number(value) || 0;
    fieldEl = (
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onValueChange(field.name, n)}
            style={{
              width: '2rem', height: '2rem', cursor: 'pointer', border: 'none',
              background: 'none', padding: 0, fontSize: '1.5rem',
              color: n <= current ? '#f59e0b' : (styling.theme === 'dark' ? '#4b5563' : '#d1d5db'),
              transition: 'color 0.15s',
            }}
          >★</button>
        ))}
      </div>
    );
  } else if (field.type === 'scale' || field.type === 'opinionScale') {
    const min = field.min ?? 1;
    const max = field.max ?? 10;
    const current = value as number | undefined;
    fieldEl = (
      <div>
        <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
          {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onValueChange(field.name, n)}
              style={{
                minWidth: '2.25rem', height: '2.25rem', borderRadius: radius, cursor: 'pointer',
                border: `1px solid ${styling.theme === 'dark' ? '#4b5563' : '#d1d5db'}`,
                background: current === n ? styling.primaryColor : (styling.theme === 'dark' ? '#374151' : '#ffffff'),
                color: current === n ? 'white' : styling.textColor,
                fontSize: '0.875rem', transition: 'all 0.15s',
              }}
            >{n}</button>
          ))}
        </div>
        {(field.lowLabel || field.highLabel) && (
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: styling.theme === 'dark' ? '#9ca3af' : '#6b7280', marginTop: '0.25rem' }}>
            <span>{field.lowLabel}</span>
            <span>{field.highLabel}</span>
          </div>
        )}
      </div>
    );
  } else if (field.type === 'slider') {
    const min = field.min ?? 0;
    const max = field.max ?? 100;
    const step = field.step ?? 1;
    fieldEl = (
      <div>
        <input
          type="range"
          id={field.name}
          name={field.name}
          min={min}
          max={max}
          step={step}
          value={Number(value) || min}
          onChange={(e) => onValueChange(field.name, Number(e.target.value))}
          style={{ width: '100%', accentColor: styling.primaryColor }}
        />
        <div style={{ textAlign: 'center', fontSize: '0.875rem', marginTop: '0.25rem' }}>{String(value ?? min)}</div>
      </div>
    );
  } else if (field.type === 'imageChoice') {
    const selected = value as string | undefined;
    fieldEl = (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {getOpts().map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onValueChange(field.name, opt.value)}
            style={{
              border: `2px solid ${selected === opt.value ? styling.primaryColor : (styling.theme === 'dark' ? '#4b5563' : '#d1d5db')}`,
              borderRadius: radius, padding: '0.5rem', cursor: 'pointer', textAlign: 'center',
              background: 'none', transition: 'border-color 0.15s',
            }}
          >
            {opt.imageUrl && <img src={opt.imageUrl} alt={opt.label} style={{ maxWidth: '80px', maxHeight: '80px', objectFit: 'cover', borderRadius: radius }} />}
            <div style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>{opt.label}</div>
          </button>
        ))}
      </div>
    );
  } else if (field.type === 'file') {
    fieldEl = (
      <input
        type="file"
        id={field.name}
        name={field.name}
        onChange={onChange}
        required={field.required}
        accept={field.allowedMimeTypes?.join(',')}
        multiple={field.multiple}
        style={inputStyle}
      />
    );
  } else if (field.type === 'name') {
    const nameVal = (value || {}) as Record<string, string>;
    const nameFields = field.nameFields || ['first', 'last'];
    const labels: Record<string, string> = { prefix: 'Prefix', first: 'First Name', middle: 'Middle', last: 'Last Name', suffix: 'Suffix' };
    fieldEl = (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {nameFields.map((nf) => (
          <input
            key={nf}
            placeholder={labels[nf] || nf}
            value={nameVal[nf] || ''}
            onChange={(e) => onValueChange(field.name, { ...nameVal, [nf]: e.target.value })}
            style={{ ...inputStyle, flex: 1, minWidth: '120px' }}
          />
        ))}
      </div>
    );
  } else if (field.type === 'address') {
    const addr = (value || {}) as Record<string, string>;
    const addrFields = field.addressFields || ['street', 'city', 'state', 'zip', 'country'];
    const labels: Record<string, string> = { street: 'Street', street2: 'Street 2', city: 'City', state: 'State', zip: 'ZIP', country: 'Country' };
    fieldEl = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {addrFields.map((af) => (
          <input
            key={af}
            placeholder={labels[af] || af}
            value={addr[af] || ''}
            onChange={(e) => onValueChange(field.name, { ...addr, [af]: e.target.value })}
            style={inputStyle}
          />
        ))}
      </div>
    );
  } else if (field.type === 'currency') {
    fieldEl = (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        {field.currencySymbol && <span>{field.currencySymbol}</span>}
        <input
          type="number"
          id={field.name}
          name={field.name}
          value={String(value || '')}
          onChange={onChange}
          step={0.01}
          min={field.min}
          max={field.max}
          required={field.required}
          style={inputStyle}
        />
      </div>
    );
  } else if (field.type === 'colorPicker') {
    fieldEl = (
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <input
          type="color"
          id={field.name}
          value={String(value || '#000000')}
          onChange={(e) => onValueChange(field.name, e.target.value)}
          style={{ width: '3rem', height: '2.25rem', border: 'none', cursor: 'pointer', padding: 0 }}
        />
        <input
          type="text"
          value={String(value || '')}
          onChange={(e) => onValueChange(field.name, e.target.value)}
          placeholder="#000000"
          style={{ ...inputStyle, flex: 1 }}
        />
      </div>
    );
  } else if (field.type === 'dateRange') {
    const range = (value || {}) as { start?: string; end?: string };
    fieldEl = (
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <input type="date" value={range.start || ''} onChange={(e) => onValueChange(field.name, { ...range, start: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
        <span>to</span>
        <input type="date" value={range.end || ''} onChange={(e) => onValueChange(field.name, { ...range, end: e.target.value })} style={{ ...inputStyle, flex: 1 }} />
      </div>
    );
  } else {
    // Default: text, email, number, date, phone, url, password, time, datetime, etc.
    const typeMap: Record<string, string> = {
      phone: 'tel', url: 'url', datetime: 'datetime-local', time: 'time', date: 'date',
      number: 'number', email: 'email', password: 'password',
    };
    fieldEl = (
      <input
        type={typeMap[field.type] || 'text'}
        id={field.name}
        name={field.name}
        value={String(value || '')}
        onChange={onChange}
        placeholder={field.placeholder}
        required={field.required}
        min={field.min}
        max={field.max}
        step={field.step}
        maxLength={field.maxLength}
        style={inputStyle}
      />
    );
  }

  return (
    <div
      style={{
        marginBottom: fieldSpacing,
        ...(isInline ? { display: 'flex', alignItems: 'flex-start', gap: '1rem' } : {}),
      }}
    >
      {labelEl}
      <div style={isInline ? { flex: 1 } : {}}>
        {fieldEl}
        {errorEl}
      </div>
    </div>
  );
}
