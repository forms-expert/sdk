import { FormField, FormSchema, FormStyling, SecondaryButton, ValidationError } from '../core/types';

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
 * Heading size map
 */
function getHeadingSizePx(size?: string): string {
  switch (size) {
    case 'small': return '18px';
    case 'large': return '30px';
    case 'extra-large': return '36px';
    default: return '24px';
  }
}

/**
 * Paragraph size map
 */
function getParagraphSizePx(size?: string): string {
  switch (size) {
    case 'small': return '14px';
    case 'large': return '18px';
    default: return '16px';
  }
}

/**
 * Helper to add custom class names to elements
 */
function addCustomClass(baseClass: string, customClass?: string): string {
  return customClass ? `${baseClass} ${customClass}` : baseClass;
}

function normalizeOpts(options: unknown[]): { value: string; label: string }[] {
  return options.map((o) => typeof o === 'string' ? { value: o, label: o } : o as { value: string; label: string });
}

function getWidthPercent(width?: string): string | undefined {
  switch (width) {
    case '1/4': return '25%';
    case '1/3': return '33.333%';
    case '1/2': return '50%';
    case '2/3': return '66.666%';
    case '3/4': return '75%';
    case 'full': return '100%';
    default: return undefined;
  }
}

/**
 * Create a form field element
 */
export function renderField(
  field: FormField,
  value: unknown,
  error?: string,
  styling?: Partial<FormStyling>
): HTMLElement {
  const group = document.createElement('div');

  // Layout fields
  if (field.type === 'heading') {
    group.className = 'forms-expert-group';
    const h = document.createElement('h3');
    h.className = 'forms-expert-heading';
    h.style.fontSize = getHeadingSizePx(styling?.headingSize);
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
    const pFontSize = field.paragraphFontSize
      ? `${field.paragraphFontSize}px`
      : getParagraphSizePx(styling?.paragraphSize);
    if (field.label) {
      const p = document.createElement('p');
      p.className = 'forms-expert-paragraph-label';
      p.style.fontSize = pFontSize;
      p.textContent = field.label;
      group.appendChild(p);
    }
    if (field.content) {
      const div = document.createElement('div');
      div.className = 'forms-expert-paragraph';
      div.style.fontSize = pFontSize;
      div.innerHTML = field.content;
      group.appendChild(div);
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
    
    const wrapper = document.createElement('div');

    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.style.cursor = 'pointer';
    if (field.type === 'consent' && field.consentFontSize) {
      label.style.fontSize = `${field.consentFontSize}px`;
    }
    const text = field.type === 'consent' ? (field.consentText || field.label || field.name) : (field.label || field.name);
    label.innerHTML = `${escapeHtml(text)}${field.required ? '<span class="forms-expert-required">*</span>' : ''}`;
    wrapper.appendChild(label);

    if (field.type === 'consent' && field.consentUrl) {
      const link = document.createElement('a');
      link.href = field.consentUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'View policy';
      link.className = 'forms-expert-consent-link';
      wrapper.appendChild(link);
    }
    
    group.appendChild(input);
    group.appendChild(wrapper);

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
  if (field.label) {
    const label = document.createElement('label');
    label.className = `forms-expert-label${styling?.labelClassName ? ' ' + styling.labelClassName : ''}`;
    label.htmlFor = `mira-field-${field.name}`;
    label.innerHTML = `${escapeHtml(field.label)}${field.required ? '<span class="forms-expert-required">*</span>' : ''}`;
    group.appendChild(label);
  }
  
  // Input wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'forms-expert-input-wrapper';
  
  let input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  
  switch (field.type) {
    case 'textarea':
    case 'richText':
      input = document.createElement('textarea');
      input.className = addCustomClass('forms-expert-textarea', styling?.fieldClassName);
      input.value = String(value || '');
      if (field.maxLength) input.maxLength = field.maxLength;
      break;
      
    case 'select':
    case 'dropdown': {
      const selectWrapper = document.createElement('div');
      selectWrapper.style.position = 'relative';
      selectWrapper.style.width = '100%';
      if (styling?.fieldClassName) selectWrapper.className = styling.fieldClassName;

      const selectBtn = document.createElement('button');
      selectBtn.type = 'button';
      selectBtn.className = 'forms-expert-select';
      selectBtn.style.display = 'flex';
      selectBtn.style.alignItems = 'center';
      selectBtn.style.justifyContent = 'space-between';
      selectBtn.style.cursor = 'pointer';
      selectBtn.style.textAlign = 'left';
      selectBtn.style.width = '100%';

      const opts = normalizeOpts(field.options || []);
      const selectedOpt = opts.find((o) => o.value === String(value || ''));

      const labelSpan = document.createElement('span');
      labelSpan.textContent = selectedOpt?.label || field.placeholder || 'Select an option...';
      if (!selectedOpt && styling?.placeholderColor) labelSpan.style.color = styling.placeholderColor;
      selectBtn.appendChild(labelSpan);

      const arrow = document.createElement('span');
      arrow.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      arrow.style.flexShrink = '0';
      arrow.style.opacity = '0.5';
      selectBtn.appendChild(arrow);

      const dropdown = document.createElement('div');
      dropdown.className = 'forms-expert-select-dropdown';
      dropdown.style.display = 'none';

      opts.forEach((opt) => {
        const item = document.createElement('div');
        item.className = 'forms-expert-select-option';
        item.textContent = opt.label;
        if (String(value || '') === opt.value) item.classList.add('active');
        item.addEventListener('mousedown', (e) => {
          e.preventDefault();
          hiddenInput.value = opt.value;
          labelSpan.textContent = opt.label;
          if (styling?.placeholderColor) labelSpan.style.color = '';
          dropdown.querySelectorAll('.forms-expert-select-option').forEach((el) => el.classList.remove('active'));
          item.classList.add('active');
          dropdown.style.display = 'none';
          hiddenInput.dispatchEvent(new Event('input', { bubbles: true }));
        });
        dropdown.appendChild(item);
      });

      selectBtn.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
      });
      selectBtn.addEventListener('blur', () => {
        setTimeout(() => { dropdown.style.display = 'none'; }, 150);
      });

      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = field.name;
      hiddenInput.value = String(value || '');
      if (field.required) hiddenInput.required = true;

      selectWrapper.appendChild(selectBtn);
      selectWrapper.appendChild(dropdown);
      selectWrapper.appendChild(hiddenInput);

      wrapper.appendChild(selectWrapper);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        wrapper.appendChild(errorEl);
      }
      group.appendChild(wrapper);
      return group;
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

    case 'file': {
      const borderColor = styling?.theme === 'dark' ? '#4b5563' : '#d1d5db';
      const mutedColor = styling?.theme === 'dark' ? '#9ca3af' : '#6b7280';
      const primaryColor = styling?.primaryColor || '#3b82f6';

      const dropzone = document.createElement('label');
      dropzone.htmlFor = `mira-field-${field.name}`;
      dropzone.className = 'forms-expert-dropzone';

      const fileInput = document.createElement('input');
      fileInput.id = `mira-field-${field.name}`;
      fileInput.name = field.name;
      fileInput.type = 'file';
      fileInput.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0';
      if (field.allowedMimeTypes?.length) fileInput.accept = field.allowedMimeTypes.join(',');
      if (field.multiple) fileInput.multiple = true;
      dropzone.appendChild(fileInput);

      const icon = document.createElement('div');
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="${mutedColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`;
      dropzone.appendChild(icon);

      const text = document.createElement('span');
      text.style.cssText = 'font-size:0.875rem;font-weight:500';
      text.textContent = 'Drag & drop a file here, or click to browse';
      dropzone.appendChild(text);

      if (field.allowedMimeTypes?.length) {
        const types = document.createElement('span');
        types.style.cssText = `font-size:0.75rem;color:${mutedColor}`;
        types.textContent = field.allowedMimeTypes.join(', ');
        dropzone.appendChild(types);
      }
      if (field.maxFileSize) {
        const sizeInfo = document.createElement('span');
        sizeInfo.style.cssText = `font-size:0.75rem;color:${mutedColor}`;
        const s = field.maxFileSize;
        sizeInfo.textContent = `Max size: ${s < 1048576 ? `${(s / 1024).toFixed(0)} KB` : `${(s / 1048576).toFixed(0)} MB`}`;
        dropzone.appendChild(sizeInfo);
      }

      dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.style.borderColor = primaryColor; dropzone.style.backgroundColor = styling?.theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)'; });
      dropzone.addEventListener('dragleave', () => { dropzone.style.borderColor = borderColor; dropzone.style.backgroundColor = 'transparent'; });
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = borderColor;
        dropzone.style.backgroundColor = 'transparent';
      });

      group.appendChild(dropzone);
      if (error) {
        const errorEl = document.createElement('div');
        errorEl.className = 'forms-expert-error-message';
        errorEl.textContent = error;
        group.appendChild(errorEl);
      }
      return group;
    }

    case 'currency': {
      input = document.createElement('input');
      input.type = 'number';
      input.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
      input.value = String(value ?? '');
      if (field.min !== undefined) input.min = String(field.min);
      if (field.max !== undefined) input.max = String(field.max);
      input.step = String(field.step || 0.01);
      break;
    }

    case 'phone':
      input = document.createElement('input');
      input.type = 'tel';
      input.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
      input.value = String(value || '');
      break;

    case 'url':
      input = document.createElement('input');
      input.type = 'url';
      input.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
      input.value = String(value || '');
      break;

    case 'password':
      input = document.createElement('input');
      input.type = 'password';
      input.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
      input.value = String(value || '');
      break;

    case 'time':
      input = document.createElement('input');
      input.type = 'time';
      input.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
      input.value = String(value || '');
      break;

    case 'datetime':
      input = document.createElement('input');
      input.type = 'datetime-local';
      input.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
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
      startInput.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
      startInput.name = `${field.name}.start`;
      startInput.value = range.start || '';
      const endInput = document.createElement('input');
      endInput.type = 'date';
      endInput.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
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
        inp.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
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
        inp.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
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
      addrInput.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
      addrInput.name = `${field.name}.address`;
      addrInput.placeholder = 'Address';
      addrInput.value = loc.address || '';
      locContainer.appendChild(addrInput);
      const coordRow = document.createElement('div');
      coordRow.className = 'forms-expert-location-coords';
      const latInput = document.createElement('input');
      latInput.type = 'number';
      latInput.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
      latInput.name = `${field.name}.lat`;
      latInput.placeholder = 'Latitude';
      latInput.step = 'any';
      latInput.value = loc.lat !== undefined ? String(loc.lat) : '';
      const lngInput = document.createElement('input');
      lngInput.type = 'number';
      lngInput.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
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
      input.className = addCustomClass('forms-expert-input', styling?.fieldClassName);
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
    formName?: string;
    showFormName?: boolean;
    secondaryButton?: SecondaryButton;
    buttonAlign?: string;
    buttonClassName?: string;
    formNameFontSize?: number;
    formNameFontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
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

  // Form name
  if (options.showFormName !== false && options.formName) {
    const title = document.createElement('h1');
    title.className = 'forms-expert-title';
    title.textContent = options.formName;
    title.style.fontSize = options.formNameFontSize != null ? `${options.formNameFontSize}px` : '1.5rem';
    const weightMap: Record<string, string> = { normal: '400', medium: '500', semibold: '600', bold: '700' };
    title.style.fontWeight = weightMap[options.formNameFontWeight || 'bold'] || '700';
    title.style.marginBottom = '0.5rem';
    form.appendChild(title);
  }
  
  // Render fields with row grouping
  const styling = schema.styling;
  const fields = schema.fields;
  const isInlineBtn = styling?.buttonAlign === 'inline';
  const fieldsContainer = document.createElement('div');
  if (isInlineBtn) { fieldsContainer.style.flex = '1 1 0'; fieldsContainer.style.minWidth = '180px'; }
  let i = 0;
  while (i < fields.length) {
    const field = fields[i];
    if (field.row != null) {
      const rowFields: FormField[] = [field];
      let j = i + 1;
      while (j < fields.length && fields[j].row === field.row) {
        rowFields.push(fields[j]);
        j++;
      }
      if (rowFields.length > 1) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.gap = '0.75rem';
        rowDiv.style.flexWrap = 'wrap';
        rowFields.forEach((f) => {
          const wrapper = document.createElement('div');
          const wp = getWidthPercent(f.width);
          if (wp) {
            wrapper.style.flex = `0 0 calc(${wp} - 0.75rem)`;
          } else {
            wrapper.style.flex = '1 1 0';
          }
          wrapper.style.minWidth = '180px';
          const fieldEl = renderField(f, values[f.name], errors[f.name], styling);
          wrapper.appendChild(fieldEl);
          rowDiv.appendChild(wrapper);
        });
        fieldsContainer.appendChild(rowDiv);
      } else {
        const fieldEl = renderField(field, values[field.name], errors[field.name], styling);
        fieldsContainer.appendChild(fieldEl);
      }
      i = j;
    } else {
      const fieldEl = renderField(field, values[field.name], errors[field.name], styling);
      fieldsContainer.appendChild(fieldEl);
      i++;
    }
  }
  form.appendChild(fieldsContainer);
  
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
  
  // Button wrapper
  const btnWrapper = document.createElement('div');
  btnWrapper.className = 'forms-expert-button-wrapper';

  // Submit button
  const button = document.createElement('button');
  button.type = 'submit';
  button.className = addCustomClass('forms-expert-button', options.buttonClassName);
  button.disabled = options.isLoading || false;
  
  if (options.isLoading) {
    button.innerHTML = `
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `;
  } else {
    const btnIcon = styling?.buttonIcon;
    const btnIconPos = styling?.buttonIconPosition || 'left';
    if (btnIcon) {
      button.style.display = 'inline-flex';
      button.style.alignItems = 'center';
      button.style.gap = '0.5rem';
      const iconSpan = document.createElement('span');
      iconSpan.style.display = 'inline-flex';
      iconSpan.style.flexShrink = '0';
      iconSpan.innerHTML = btnIcon;
      const textSpan = document.createElement('span');
      textSpan.textContent = options.submitText || 'Submit';
      if (btnIconPos === 'right') {
        button.appendChild(textSpan);
        button.appendChild(iconSpan);
      } else {
        button.appendChild(iconSpan);
        button.appendChild(textSpan);
      }
    } else {
      button.textContent = options.submitText || 'Submit';
    }
  }

  // Secondary button helper
  const sec = options.secondaryButton;
  const createSecondaryLink = (): HTMLAnchorElement | null => {
    if (!sec?.enabled) return null;
    const a = document.createElement('a');
    a.className = 'forms-expert-secondary-btn';
    a.href = sec.href || '#';
    a.style.display = 'inline-flex';
    a.style.alignItems = 'center';
    a.style.gap = '0.5rem';
    if (sec.icon) {
      const iconSpan = document.createElement('span');
      iconSpan.style.display = 'inline-flex';
      iconSpan.style.flexShrink = '0';
      iconSpan.innerHTML = sec.icon;
      const textSpan = document.createElement('span');
      textSpan.textContent = sec.text || 'Learn More';
      if (sec.iconPosition === 'right') {
        a.appendChild(textSpan);
        a.appendChild(iconSpan);
      } else {
        a.appendChild(iconSpan);
        a.appendChild(textSpan);
      }
    } else {
      a.textContent = sec.text || 'Learn More';
    }
    if (sec.openInNewTab) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    const btnColor = styling?.primaryColor || '#3b82f6';
    const secColor = sec.color || btnColor;
    if (sec.style === 'filled') {
      a.style.background = secColor;
      a.style.color = sec.textColor || '#ffffff';
      a.style.border = 'none';
    } else if (sec.style === 'outlined') {
      a.style.background = 'transparent';
      a.style.color = sec.textColor || secColor;
      a.style.border = `2px solid ${secColor}`;
    } else if (sec.style === 'link') {
      a.style.background = 'transparent';
      a.style.color = sec.textColor || secColor;
      a.style.border = 'none';
      a.style.textDecoration = 'underline';
    } else {
      a.style.background = 'transparent';
      a.style.color = sec.textColor || secColor;
      a.style.border = 'none';
    }
    if (sec.marginTop != null) a.style.marginTop = `${sec.marginTop}px`;
    if (sec.marginBottom != null) a.style.marginBottom = `${sec.marginBottom}px`;
    if (sec.fontSize != null) a.style.fontSize = `${sec.fontSize}px`;
    return a;
  };

  // Inline secondary button (left)
  if (sec?.enabled && sec.position === 'left') {
    const link = createSecondaryLink();
    if (link) btnWrapper.appendChild(link);
  }

  btnWrapper.appendChild(button);

  // Inline secondary button (right or default)
  if (sec?.enabled && sec.position !== 'left' && sec.position !== 'below') {
    const link = createSecondaryLink();
    if (link) {
      link.style.marginLeft = 'auto';
      btnWrapper.appendChild(link);
    }
  }

  if (isInlineBtn) {
    btnWrapper.style.marginTop = '0';
    // Re-parent: remove fieldsContainer from form, put both in inline wrapper
    form.removeChild(fieldsContainer);
    const inlineWrapper = document.createElement('div');
    inlineWrapper.style.display = 'flex';
    inlineWrapper.style.alignItems = 'flex-end';
    inlineWrapper.style.gap = '0.75rem';
    inlineWrapper.style.flexWrap = 'wrap';
    inlineWrapper.appendChild(fieldsContainer);
    inlineWrapper.appendChild(btnWrapper);
    form.appendChild(inlineWrapper);
  } else {
    form.appendChild(btnWrapper);
  }

  // Secondary button (below)
  if (sec?.enabled && sec.position === 'below') {
    const belowDiv = document.createElement('div');
    belowDiv.className = 'forms-expert-secondary-below';
    const secAlign = sec.align || options.buttonAlign || 'left';
    belowDiv.style.justifyContent = secAlign === 'center' ? 'center' : secAlign === 'right' ? 'flex-end' : 'flex-start';
    if (sec.marginTop != null) belowDiv.style.marginTop = `${sec.marginTop}px`;
    if (sec.marginBottom != null) belowDiv.style.marginBottom = `${sec.marginBottom}px`;
    const link = createSecondaryLink();
    if (link) {
      link.style.marginTop = '0';
      link.style.marginBottom = '0';
      belowDiv.appendChild(link);
    }
    form.appendChild(belowDiv);
  }
  
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
