import { FormField, FormSchema, ValidationError } from '../core/types';

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Layout field types that don't capture data
 */
const LAYOUT_TYPES = new Set(['heading', 'divider', 'paragraph']);

/**
 * Create a form field element
 */
export function renderField(
  field: FormField,
  value: unknown,
  error?: string
): HTMLElement {
  const group = document.createElement('div');

  // Layout fields
  if (field.type === 'heading') {
    group.className = 'forms-expert-group';
    const h = document.createElement('h3');
    h.className = 'forms-expert-heading';
    h.textContent = field.label || '';
    group.appendChild(h);
    if (field.content) {
      const p = document.createElement('p');
      p.className = 'forms-expert-heading-subtitle';
      p.textContent = field.content;
      group.appendChild(p);
    }
    return group;
  }

  if (field.type === 'divider') {
    const hr = document.createElement('hr');
    hr.className = 'forms-expert-divider';
    return hr;
  }

  if (field.type === 'paragraph') {
    group.className = 'forms-expert-group';
    if (field.label) {
      const p = document.createElement('p');
      p.className = 'forms-expert-paragraph-label';
      p.textContent = field.label;
      group.appendChild(p);
    }
    if (field.content) {
      const p = document.createElement('p');
      p.className = 'forms-expert-paragraph';
      p.textContent = field.content;
      if (field.paragraphFontSize) {
        p.style.fontSize = `${field.paragraphFontSize}px`;
      }
      group.appendChild(p);
    }
    return group;
  }

  // Hidden field
  if (field.type === 'hidden') {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = field.name;
    input.value = String(field.defaultValue ?? value ?? '');
    group.appendChild(input);
    group.style.display = 'none';
    return group;
  }

  // Checkbox / toggle / consent
  if (field.type === 'checkbox' || field.type === 'toggle' || field.type === 'consent') {
    group.className = 'forms-expert-checkbox-group';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `mira-field-${field.name}`;
    input.name = field.name;
    input.className = 'forms-expert-checkbox';
    input.checked = Boolean(value);
    if (field.required) input.required = true;
    
    const label = document.createElement('label');
    label.htmlFor = input.id;
    const text = field.type === 'consent' ? (field.consentText || field.label || field.name) : (field.label || field.name);
    label.innerHTML = `${escapeHtml(text)}${field.required ? '<span class="forms-expert-required">*</span>' : ''}`;
    
    group.appendChild(input);
    group.appendChild(label);

    if (field.type === 'consent' && field.consentUrl) {
      const link = document.createElement('a');
      link.href = field.consentUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'View policy';
      link.className = 'forms-expert-consent-link';
      group.appendChild(link);
    }

    if (error) {
      const errorEl = document.createElement('div');
      errorEl.className = 'forms-expert-error-message';
      errorEl.textContent = error;
      group.appendChild(errorEl);
    }
    return group;
  }

  // All other fields
  group.className = 'forms-expert-group';
  
  // Label
  const label = document.createElement('label');
  label.className = 'forms-expert-label';
  label.htmlFor = `mira-field-${field.name}`;
  label.innerHTML = `${escapeHtml(field.label || field.name)}${field.required ? '<span class="forms-expert-required">*</span>' : ''}`;
  group.appendChild(label);
  
  // Input wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'forms-expert-input-wrapper';
  
  let input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  
  switch (field.type) {
    case 'textarea':
    case 'richText':
      input = document.createElement('textarea');
      input.className = 'forms-expert-textarea';
      input.value = String(value || '');
      if (field.maxLength) input.maxLength = field.maxLength;
      break;
      
    case 'select':
    case 'dropdown': {
      input = document.createElement('select');
      input.className = 'forms-expert-select';
      
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = field.placeholder || 'Select an option...';
      input.appendChild(defaultOption);
      
      const opts = (field.options || []) as string[];
      opts.forEach((opt) => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        if (value === opt) option.selected = true;
        input.appendChild(option);
      });
      break;
    }

    case 'radio': {
      // Render as radio group
      const radioGroup = document.createElement('div');
      radioGroup.className = 'forms-expert-radio-group';
      const opts = (field.options || []) as string[];
      opts.forEach((opt) => {
        const radioWrapper = document.createElement('label');
        radioWrapper.className = 'forms-expert-radio-item';
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = field.name;
        radioInput.value = opt;
        radioInput.checked = value === opt;
        radioWrapper.appendChild(radioInput);
        radioWrapper.appendChild(document.createTextNode(` ${opt}`));
        radioGroup.appendChild(radioWrapper);
      });
      wrapper.appendChild(radioGroup);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    case 'multiselect': {
      const checkGroup = document.createElement('div');
      checkGroup.className = 'forms-expert-multiselect-group';
      const selected = (value as string[]) || [];
      const opts = (field.options || []) as string[];
      opts.forEach((opt) => {
        const checkWrapper = document.createElement('label');
        checkWrapper.className = 'forms-expert-checkbox-item';
        const checkInput = document.createElement('input');
        checkInput.type = 'checkbox';
        checkInput.name = field.name;
        checkInput.value = opt;
        checkInput.checked = selected.includes(opt);
        checkWrapper.appendChild(checkInput);
        checkWrapper.appendChild(document.createTextNode(` ${opt}`));
        checkGroup.appendChild(checkWrapper);
      });
      wrapper.appendChild(checkGroup);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    case 'rating': {
      const ratingContainer = document.createElement('div');
      ratingContainer.className = 'forms-expert-rating';
      const max = field.ratingMax || 5;
      const current = (value as number) || 0;
      for (let i = 1; i <= max; i++) {
        const star = document.createElement('button');
        star.type = 'button';
        star.className = `forms-expert-rating-star ${i <= current ? 'active' : ''}`;
        star.textContent = '★';
        star.dataset.value = String(i);
        ratingContainer.appendChild(star);
      }
      wrapper.appendChild(ratingContainer);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    case 'scale':
    case 'opinionScale': {
      const scaleContainer = document.createElement('div');
      scaleContainer.className = 'forms-expert-scale';
      const min = field.min ?? (field.type === 'opinionScale' ? 0 : 1);
      const max = field.max ?? (field.type === 'opinionScale' ? 10 : 5);
      const current = value as number | undefined;
      for (let i = min; i <= max; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `forms-expert-scale-btn ${current === i ? 'active' : ''}`;
        btn.textContent = String(i);
        btn.dataset.value = String(i);
        scaleContainer.appendChild(btn);
      }
      wrapper.appendChild(scaleContainer);
      if (field.lowLabel || field.highLabel) {
        const labels = document.createElement('div');
        labels.className = 'forms-expert-scale-labels';
        labels.innerHTML = `<span>${escapeHtml(field.lowLabel || '')}</span><span>${escapeHtml(field.highLabel || '')}</span>`;
        wrapper.appendChild(labels);
      }
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    case 'slider': {
      input = document.createElement('input');
      input.type = 'range';
      input.className = 'forms-expert-slider';
      input.min = String(field.min ?? 0);
      input.max = String(field.max ?? 100);
      input.step = String(field.step ?? 1);
      input.value = String(value ?? field.min ?? 0);
      break;
    }

    case 'file':
      input = document.createElement('input');
      input.type = 'file';
      input.className = 'forms-expert-file';
      if (field.allowedMimeTypes?.length) {
        input.accept = field.allowedMimeTypes.join(',');
      }
      if (field.multiple) {
        input.multiple = true;
      }
      break;

    case 'currency': {
      input = document.createElement('input');
      input.type = 'number';
      input.className = 'forms-expert-input';
      input.value = String(value ?? '');
      if (field.min !== undefined) input.min = String(field.min);
      if (field.max !== undefined) input.max = String(field.max);
      input.step = String(field.step || 0.01);
      break;
    }

    case 'phone':
      input = document.createElement('input');
      input.type = 'tel';
      input.className = 'forms-expert-input';
      input.value = String(value || '');
      break;

    case 'url':
      input = document.createElement('input');
      input.type = 'url';
      input.className = 'forms-expert-input';
      input.value = String(value || '');
      break;

    case 'password':
      input = document.createElement('input');
      input.type = 'password';
      input.className = 'forms-expert-input';
      input.value = String(value || '');
      break;

    case 'time':
      input = document.createElement('input');
      input.type = 'time';
      input.className = 'forms-expert-input';
      input.value = String(value || '');
      break;

    case 'datetime':
      input = document.createElement('input');
      input.type = 'datetime-local';
      input.className = 'forms-expert-input';
      input.value = String(value || '');
      break;

    case 'colorPicker':
      input = document.createElement('input');
      input.type = 'color';
      input.className = 'forms-expert-color';
      input.value = String(value || '#000000');
      break;

    case 'dateRange': {
      // Two date inputs
      const rangeContainer = document.createElement('div');
      rangeContainer.className = 'forms-expert-date-range';
      const range = (value as { start?: string; end?: string }) || {};
      const startInput = document.createElement('input');
      startInput.type = 'date';
      startInput.className = 'forms-expert-input';
      startInput.name = `${field.name}.start`;
      startInput.value = range.start || '';
      const endInput = document.createElement('input');
      endInput.type = 'date';
      endInput.className = 'forms-expert-input';
      endInput.name = `${field.name}.end`;
      endInput.value = range.end || '';
      rangeContainer.appendChild(startInput);
      rangeContainer.appendChild(endInput);
      wrapper.appendChild(rangeContainer);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    case 'address': {
      const addrContainer = document.createElement('div');
      addrContainer.className = 'forms-expert-address';
      const addrFields = field.addressFields || ['street', 'city', 'state', 'zip', 'country'];
      const addr = (value as Record<string, string>) || {};
      const labels: Record<string, string> = { street: 'Street', street2: 'Street Line 2', city: 'City', state: 'State', zip: 'ZIP', country: 'Country' };
      addrFields.forEach((af) => {
        const inp = document.createElement('input');
        inp.type = 'text';
        inp.className = 'forms-expert-input';
        inp.name = `${field.name}.${af}`;
        inp.placeholder = labels[af] || af;
        inp.value = addr[af] || '';
        addrContainer.appendChild(inp);
      });
      wrapper.appendChild(addrContainer);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    case 'name': {
      const nameContainer = document.createElement('div');
      nameContainer.className = 'forms-expert-name';
      const nameFields = field.nameFields || ['first', 'last'];
      const nameVal = (value as Record<string, string>) || {};
      const labels: Record<string, string> = { prefix: 'Prefix', first: 'First Name', middle: 'Middle', last: 'Last Name', suffix: 'Suffix' };
      nameFields.forEach((nf) => {
        const inp = document.createElement('input');
        inp.type = 'text';
        inp.className = 'forms-expert-input';
        inp.name = `${field.name}.${nf}`;
        inp.placeholder = labels[nf] || nf;
        inp.value = nameVal[nf] || '';
        nameContainer.appendChild(inp);
      });
      wrapper.appendChild(nameContainer);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    case 'imageChoice': {
      const imgContainer = document.createElement('div');
      imgContainer.className = 'forms-expert-image-choice';
      const opts = (field.options || []) as Array<{ label: string; value: string; imageUrl?: string }>;
      const selected = value as string;
      opts.forEach((opt) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = `forms-expert-image-choice-item ${selected === opt.value ? 'active' : ''}`;
        card.dataset.value = opt.value;
        if (opt.imageUrl) {
          const img = document.createElement('img');
          img.src = opt.imageUrl;
          img.alt = opt.label;
          card.appendChild(img);
        }
        const lbl = document.createElement('span');
        lbl.textContent = opt.label;
        card.appendChild(lbl);
        imgContainer.appendChild(card);
      });
      wrapper.appendChild(imgContainer);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    case 'ranking': {
      const rankContainer = document.createElement('div');
      rankContainer.className = 'forms-expert-ranking';
      const opts = (field.options || []) as string[];
      const ranked = (value as string[]) || [...opts];
      ranked.forEach((item, i) => {
        const row = document.createElement('div');
        row.className = 'forms-expert-ranking-item';
        row.textContent = `${i + 1}. ${item}`;
        row.dataset.value = item;
        rankContainer.appendChild(row);
      });
      wrapper.appendChild(rankContainer);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    case 'location': {
      const locContainer = document.createElement('div');
      locContainer.className = 'forms-expert-location';
      const loc = (value as { lat?: number; lng?: number; address?: string }) || {};
      const addrInput = document.createElement('input');
      addrInput.type = 'text';
      addrInput.className = 'forms-expert-input';
      addrInput.name = `${field.name}.address`;
      addrInput.placeholder = 'Address';
      addrInput.value = loc.address || '';
      locContainer.appendChild(addrInput);
      const coordRow = document.createElement('div');
      coordRow.className = 'forms-expert-location-coords';
      const latInput = document.createElement('input');
      latInput.type = 'number';
      latInput.className = 'forms-expert-input';
      latInput.name = `${field.name}.lat`;
      latInput.placeholder = 'Latitude';
      latInput.step = 'any';
      latInput.value = loc.lat !== undefined ? String(loc.lat) : '';
      const lngInput = document.createElement('input');
      lngInput.type = 'number';
      lngInput.className = 'forms-expert-input';
      lngInput.name = `${field.name}.lng`;
      lngInput.placeholder = 'Longitude';
      lngInput.step = 'any';
      lngInput.value = loc.lng !== undefined ? String(loc.lng) : '';
      coordRow.appendChild(latInput);
      coordRow.appendChild(lngInput);
      locContainer.appendChild(coordRow);
      wrapper.appendChild(locContainer);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
    }

    default:
      input = document.createElement('input');
      input.type = field.type === 'email' ? 'email' : field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text';
      input.className = 'forms-expert-input';
      input.value = String(value || '');
      if (field.type === 'number') {
        if (field.min !== undefined) input.min = String(field.min);
        if (field.max !== undefined) input.max = String(field.max);
        if (field.step !== undefined) input.step = String(field.step);
      }
      break;
  }
  
  input!.id = `mira-field-${field.name}`;
  input!.name = field.name;
  if (field.placeholder && 'placeholder' in input!) {
    (input as HTMLInputElement | HTMLTextAreaElement).placeholder = field.placeholder;
  }
  if (field.required) input!.required = true;
  
  if (error) {
    input!.classList.add('forms-expert-error');
  }
  
  wrapper.appendChild(input!);
  
  // Error message
  if (error) {
    const errorEl = document.createElement('div');
    errorEl.className = 'forms-expert-error-message';
    errorEl.textContent = error;
    wrapper.appendChild(errorEl);
  }
  
  group.appendChild(wrapper);
  
  return group;
}

/**
 * Render the entire form
 */
export function renderForm(
  schema: FormSchema,
  values: Record<string, unknown> = {},
  errors: Record<string, string> = {},
  options: {
    honeypot?: boolean;
    showBranding?: boolean;
    brandingText?: string;
    brandingUrl?: string;
    submitText?: string;
    isLoading?: boolean;
    hideRequiredAsterisk?: boolean;
  } = {}
): HTMLFormElement {
  const form = document.createElement('form');
  form.className = 'forms-expert';
  
  // Hide required asterisks via CSS if configured
  if (options.hideRequiredAsterisk) {
    const style = document.createElement('style');
    style.textContent = '.forms-expert .forms-expert-required { display: none; }';
    form.appendChild(style);
  }
  
  // Render fields
  schema.fields.forEach((field) => {
    const fieldEl = renderField(field, values[field.name], errors[field.name]);
    form.appendChild(fieldEl);
  });
  
  // Honeypot
  if (options.honeypot) {
    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = '_hp';
    honeypot.className = 'forms-expert-honeypot';
    honeypot.tabIndex = -1;
    honeypot.autocomplete = 'off';
    form.appendChild(honeypot);
  }
  
  // Hidden page URL
  const pageUrl = document.createElement('input');
  pageUrl.type = 'hidden';
  pageUrl.name = 'pageUrl';
  pageUrl.value = typeof window !== 'undefined' ? window.location.href : '';
  form.appendChild(pageUrl);
  
  // Submit button
  const button = document.createElement('button');
  button.type = 'submit';
  button.className = 'forms-expert-button';
  button.disabled = options.isLoading || false;
  
  if (options.isLoading) {
    button.innerHTML = `
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `;
  } else {
    button.textContent = options.submitText || 'Submit';
  }
  
  form.appendChild(button);
  
  // Branding
  if (options.showBranding !== false) {
    const brandingText = options.brandingText || 'Powered by Forms Expert';
    const brandingUrl = options.brandingUrl || 'https://mira.io';
    const branding = document.createElement('div');
    branding.className = 'forms-expert-branding';
    branding.innerHTML = `<a href="${brandingUrl}" target="_blank" rel="noopener">${brandingText}</a>`;
    form.appendChild(branding);
  }
  
  return form;
}

/**
 * Render success message
 */
export function renderSuccess(message: string): HTMLElement {
  const container = document.createElement('div');
  container.className = 'forms-expert-success';
  
  container.innerHTML = `
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${escapeHtml(message)}</div>
  `;
  
  return container;
}

/**
 * Convert validation errors array to record
 */
export function errorsToRecord(errors: ValidationError[]): Record<string, string> {
  return errors.reduce(
    (acc, err) => ({ ...acc, [err.field]: err.message }),
    {}
  );
}
