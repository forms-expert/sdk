import { FormStyling } from '../core/types';

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

function getFormWidth(width?: FormStyling['formWidth']): string {
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

export function generateFormStyles(styling: FormStyling = defaultStyling): string {
  const s = { ...defaultStyling, ...styling };
  const radius = getBorderRadius(s.borderRadius);
  const btnRadius = getButtonRadius(s.buttonRadius);
  const fontSize = getFontSize(s.fontSize);
  const phFontSize = getPlaceholderFontSize(s.placeholderFontSize);
  const fieldSpacing = getFieldSpacing(s.fieldSpacing);
  const formPadding = getFormPadding(s.formPadding);
  const labelSpacing = getLabelSpacing(s.labelSpacing);
  const formWidth = getFormWidth(s.formWidth);
  const btnColor = s.buttonColor || s.primaryColor;
  const fontFamily = s.fontFamily || 'system-ui, -apple-system, sans-serif';
  const btnAlign = getButtonAlign(s.buttonAlign);

  return `
.forms-expert-wrapper {
  ${s.backgroundImageUrl ? `background-image: url(${s.backgroundImageUrl}); background-size: cover; background-position: center;` : ''}
  ${!s.backgroundImageUrl ? `background-color: ${s.backgroundColor};` : ''}
  position: relative;
}

.forms-expert-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0,0,0,${s.backgroundOverlay || 0});
  pointer-events: none;
}

.forms-expert {
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${s.textColor};
  background-color: ${s.transparentBackground ? 'transparent' : s.backgroundColor};
  padding: ${formPadding};
  border-radius: ${radius};
  box-sizing: border-box;
  max-width: ${formWidth};
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.forms-expert * {
  box-sizing: border-box;
}

.forms-expert-logo {
  display: block;
  max-height: 48px;
  margin-bottom: 1rem;
}
.forms-expert-logo-top-left { text-align: left; }
.forms-expert-logo-top-center { text-align: center; }
.forms-expert-logo-top-right { text-align: right; }
.forms-expert-logo img { max-height: 48px; }

.forms-expert-cover {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: ${radius} ${radius} 0 0;
  margin-bottom: 1rem;
}

.forms-expert-group {
  margin-bottom: ${fieldSpacing};
  ${s.labelPosition === 'left' || s.fieldLayout === 'inline' ? 'display: flex; align-items: flex-start; gap: 1rem;' : ''}
}

.forms-expert-label {
  display: block;
  font-weight: 500;
  color: ${s.textColor};
  ${s.labelPosition === 'left' || s.fieldLayout === 'inline'
    ? `width: 33%; flex-shrink: 0; padding-top: 0.5rem; margin-bottom: 0;`
    : `margin-bottom: ${labelSpacing};`
  }
}

.forms-expert-required {
  color: #ef4444;
  margin-left: 0.25rem;
}

.forms-expert-input-wrapper {
  ${s.labelPosition === 'left' || s.fieldLayout === 'inline' ? 'flex: 1;' : ''}
}

.forms-expert-input,
.forms-expert-textarea,
.forms-expert-select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${s.theme === 'dark' ? '#4b5563' : '#d1d5db'};
  border-radius: ${radius};
  font-size: ${fontSize};
  font-family: inherit;
  background-color: ${s.theme === 'dark' ? '#374151' : '#ffffff'};
  color: ${s.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${phFontSize};
}

.forms-expert-input:focus,
.forms-expert-textarea:focus,
.forms-expert-select:focus {
  outline: none;
  border-color: ${s.primaryColor};
  box-shadow: 0 0 0 2px ${s.primaryColor}33;
}

.forms-expert-input.forms-expert-error,
.forms-expert-textarea.forms-expert-error,
.forms-expert-select.forms-expert-error {
  border-color: #ef4444;
}

.forms-expert-textarea {
  min-height: 100px;
  resize: vertical;
}

.forms-expert-checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: ${fieldSpacing};
}

.forms-expert-checkbox {
  width: 1rem;
  height: 1rem;
  accent-color: ${s.primaryColor};
  cursor: pointer;
}

.forms-expert-file-wrapper {
  position: relative;
}

.forms-expert-file {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${s.theme === 'dark' ? '#4b5563' : '#d1d5db'};
  border-radius: ${radius};
  font-size: ${fontSize};
  background-color: ${s.theme === 'dark' ? '#374151' : '#ffffff'};
  cursor: pointer;
}

.forms-expert-error-message {
  color: ${s.errorColor || '#ef4444'};
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.forms-expert-button-wrapper {
  display: flex;
  justify-content: ${btnAlign};
  margin-top: 1rem;
}

.forms-expert-button {
  ${s.buttonAlign ? '' : 'width: 100%;'}
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  font-size: ${fontSize};
  font-family: inherit;
  border-radius: ${btnRadius};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  ${s.buttonStyle === 'filled' 
    ? `background-color: ${btnColor}; color: white; border: none;`
    : `background-color: transparent; color: ${btnColor}; border: 2px solid ${btnColor};`
  }
}

.forms-expert-button:hover {
  opacity: 0.9;
}

.forms-expert-button:active {
  transform: scale(0.98);
}

.forms-expert-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.forms-expert-button-loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.forms-expert-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: forms-expert-spin 0.6s linear infinite;
}

@keyframes forms-expert-spin {
  to { transform: rotate(360deg); }
}

.forms-expert-honeypot {
  position: absolute;
  left: -9999px;
  opacity: 0;
}

.forms-expert-success {
  text-align: center;
  padding: 2rem;
  color: ${s.textColor};
}

.forms-expert-success-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  color: ${s.successColor || '#22c55e'};
}

.forms-expert-success-message {
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.forms-expert-branding {
  text-align: center;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${s.theme === 'dark' ? '#374151' : '#e5e7eb'};
}

.forms-expert-branding a {
  color: ${s.theme === 'dark' ? '#9ca3af' : '#6b7280'};
  text-decoration: none;
  font-size: 0.75rem;
}

.forms-expert-branding a:hover {
  text-decoration: underline;
}

/* Rating stars */
.forms-expert-rating { display: flex; gap: 0.25rem; }
.forms-expert-rating-star {
  width: 2rem; height: 2rem; cursor: pointer; border: none;
  background: none; padding: 0; font-size: 1.5rem; color: ${s.theme === 'dark' ? '#4b5563' : '#d1d5db'};
  transition: color 0.15s;
}
.forms-expert-rating-star.active { color: #f59e0b; }

/* Scale buttons */
.forms-expert-scale { display: flex; gap: 0.25rem; flex-wrap: wrap; }
.forms-expert-scale-labels { display: flex; justify-content: space-between; font-size: 0.75rem; color: ${s.theme === 'dark' ? '#9ca3af' : '#6b7280'}; margin-top: 0.25rem; }
.forms-expert-scale-btn {
  min-width: 2.25rem; height: 2.25rem; border-radius: ${radius}; cursor: pointer;
  border: 1px solid ${s.theme === 'dark' ? '#4b5563' : '#d1d5db'};
  background: ${s.theme === 'dark' ? '#374151' : '#ffffff'}; color: ${s.textColor};
  font-size: 0.875rem; transition: all 0.15s;
}
.forms-expert-scale-btn.active {
  background-color: ${s.primaryColor}; color: white; border-color: ${s.primaryColor};
}

/* Radio & multiselect groups */
.forms-expert-radio-group,
.forms-expert-multiselect-group { display: flex; flex-direction: column; gap: 0.5rem; }
.forms-expert-radio-item,
.forms-expert-multiselect-item { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
.forms-expert-radio-item input,
.forms-expert-multiselect-item input { accent-color: ${s.primaryColor}; }

/* Slider */
.forms-expert-slider { width: 100%; accent-color: ${s.primaryColor}; }
.forms-expert-slider-value { text-align: center; font-size: 0.875rem; margin-top: 0.25rem; }

/* Image choice */
.forms-expert-image-choice { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.forms-expert-image-choice-item {
  border: 2px solid ${s.theme === 'dark' ? '#4b5563' : '#d1d5db'}; border-radius: ${radius};
  padding: 0.5rem; cursor: pointer; text-align: center; transition: border-color 0.15s;
}
.forms-expert-image-choice-item.active { border-color: ${s.primaryColor}; }
.forms-expert-image-choice-item img { max-width: 80px; max-height: 80px; object-fit: cover; border-radius: ${radius}; }

${s.customCss || ''}
`.trim();
}
