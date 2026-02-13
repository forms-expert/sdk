var E={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function R(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function N(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function T(t){switch(t){case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem";default:return"1rem"}}function L(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function P(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function U(t){switch(t){case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function A(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function z(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function I(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function v(t=E){let e={...E,...t},n=R(e.borderRadius),m=N(e.buttonRadius),o=T(e.fontSize),u=L(e.placeholderFontSize),c=P(e.fieldSpacing),s=U(e.formPadding),r=A(e.labelSpacing),l=z(e.formWidth),p=e.primaryColor,i=e.buttonColor,a=e.fontFamily||"system-ui, -apple-system, sans-serif",d=I(e.buttonAlign);return`
.forms-expert-wrapper {
  ${e.backgroundImageUrl?`background-image: url(${e.backgroundImageUrl}); background-size: cover; background-position: center;`:""}
  ${e.backgroundImageUrl?"":`background-color: ${e.backgroundColor};`}
  position: relative;
}

.forms-expert-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0,0,0,${e.backgroundOverlay||0});
  pointer-events: none;
}

.forms-expert {
  font-family: ${a};
  font-size: ${o};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${s};
  border-radius: ${n};
  box-sizing: border-box;
  max-width: ${l};
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
  border-radius: ${n} ${n} 0 0;
  margin-bottom: 1rem;
}

.forms-expert-group {
  margin-bottom: ${c};
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"display: flex; align-items: flex-start; gap: 1rem;":""}
}

.forms-expert-label {
  display: block;
  font-weight: 500;
  color: ${e.textColor};
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"width: 33%; flex-shrink: 0; padding-top: 0.5rem; margin-bottom: 0;":`margin-bottom: ${r};`}
}

.forms-expert-required {
  color: #ef4444;
  margin-left: 0.25rem;
}

.forms-expert-input-wrapper {
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"flex: 1;":""}
}

.forms-expert-input,
.forms-expert-textarea,
.forms-expert-select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"};
  border-radius: ${n};
  font-size: ${o};
  font-family: inherit;
  background-color: ${e.theme==="dark"?"#374151":"#ffffff"};
  color: ${e.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${u};
}

.forms-expert-input:focus,
.forms-expert-textarea:focus,
.forms-expert-select:focus {
  outline: none;
  border-color: ${e.primaryColor};
  box-shadow: 0 0 0 2px ${e.primaryColor}33;
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
  margin-bottom: ${c};
}

.forms-expert-checkbox {
  width: 1rem;
  height: 1rem;
  accent-color: ${e.primaryColor};
  cursor: pointer;
}

.forms-expert-file-wrapper {
  position: relative;
}

.forms-expert-file {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"};
  border-radius: ${n};
  font-size: ${o};
  background-color: ${e.theme==="dark"?"#374151":"#ffffff"};
  cursor: pointer;
}

.forms-expert-error-message {
  color: ${e.errorColor||"#ef4444"};
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.forms-expert-button-wrapper {
  display: flex;
  justify-content: ${d};
  margin-top: 1rem;
}

.forms-expert-button {
  ${e.buttonAlign?"":"width: 100%;"}
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  font-size: ${o};
  font-family: inherit;
  border-radius: ${m};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  ${e.buttonStyle==="filled"?`background-color: ${p}; color: ${i||"white"}; border: none;`:`background-color: transparent; color: ${p}; border: 2px solid ${p};`}
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
  color: ${e.textColor};
}

.forms-expert-success-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  color: ${e.successColor||"#22c55e"};
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
  border-top: 1px solid ${e.theme==="dark"?"#374151":"#e5e7eb"};
}

.forms-expert-branding a {
  color: ${e.theme==="dark"?"#9ca3af":"#6b7280"};
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
  background: none; padding: 0; font-size: 1.5rem; color: ${e.theme==="dark"?"#4b5563":"#d1d5db"};
  transition: color 0.15s;
}
.forms-expert-rating-star.active { color: #f59e0b; }

/* Scale buttons */
.forms-expert-scale { display: flex; gap: 0.25rem; flex-wrap: wrap; }
.forms-expert-scale-labels { display: flex; justify-content: space-between; font-size: 0.75rem; color: ${e.theme==="dark"?"#9ca3af":"#6b7280"}; margin-top: 0.25rem; }
.forms-expert-scale-btn {
  min-width: 2.25rem; height: 2.25rem; border-radius: ${n}; cursor: pointer;
  border: 1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"};
  background: ${e.theme==="dark"?"#374151":"#ffffff"}; color: ${e.textColor};
  font-size: 0.875rem; transition: all 0.15s;
}
.forms-expert-scale-btn.active {
  background-color: ${e.primaryColor}; color: white; border-color: ${e.primaryColor};
}

/* Radio & multiselect groups */
.forms-expert-radio-group,
.forms-expert-multiselect-group { display: flex; flex-direction: column; gap: 0.5rem; }
.forms-expert-radio-item,
.forms-expert-multiselect-item { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
.forms-expert-radio-item input,
.forms-expert-multiselect-item input { accent-color: ${e.primaryColor}; }

/* Slider */
.forms-expert-slider { width: 100%; accent-color: ${e.primaryColor}; }
.forms-expert-slider-value { text-align: center; font-size: 0.875rem; margin-top: 0.25rem; }

/* Image choice */
.forms-expert-image-choice { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.forms-expert-image-choice-item {
  border: 2px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}; border-radius: ${n};
  padding: 0.5rem; cursor: pointer; text-align: center; transition: border-color 0.15s;
}
.forms-expert-image-choice-item.active { border-color: ${e.primaryColor}; }
.forms-expert-image-choice-item img { max-width: 80px; max-height: 80px; object-fit: cover; border-radius: ${n}; }

${e.customCss||""}
`.trim()}function x(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function O(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function M(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function H(t,e,n,m){let o=document.createElement("div");if(t.type==="heading"){o.className="forms-expert-group";let r=document.createElement("h3");if(r.className="forms-expert-heading",r.style.fontSize=O(m?.headingSize),r.textContent=t.label||"",o.appendChild(r),t.content){let l=document.createElement("p");l.className="forms-expert-heading-subtitle",l.textContent=t.content,o.appendChild(l)}return o}if(t.type==="divider"){let r=document.createElement("hr");return r.className="forms-expert-divider",r}if(t.type==="paragraph"){o.className="forms-expert-group";let r=t.paragraphFontSize?`${t.paragraphFontSize}px`:M(m?.paragraphSize);if(t.label){let l=document.createElement("p");l.className="forms-expert-paragraph-label",l.style.fontSize=r,l.textContent=t.label,o.appendChild(l)}if(t.content){let l=document.createElement("div");l.className="forms-expert-paragraph",l.style.fontSize=r,l.innerHTML=t.content,o.appendChild(l)}return o}if(t.type==="hidden"){let r=document.createElement("input");return r.type="hidden",r.name=t.name,r.value=String(t.defaultValue??e??""),o.appendChild(r),o.style.display="none",o}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){o.className="forms-expert-checkbox-group";let r=document.createElement("input");r.type="checkbox",r.id=`mira-field-${t.name}`,r.name=t.name,r.className="forms-expert-checkbox",r.checked=!!e,t.required&&(r.required=!0);let l=document.createElement("label");l.htmlFor=r.id;let p=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(l.innerHTML=`${x(p)}${t.required?'<span class="forms-expert-required">*</span>':""}`,o.appendChild(r),o.appendChild(l),t.type==="consent"&&t.consentUrl){let i=document.createElement("a");i.href=t.consentUrl,i.target="_blank",i.rel="noopener noreferrer",i.textContent="View policy",i.className="forms-expert-consent-link",o.appendChild(i)}if(n){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=n,o.appendChild(i)}return o}o.className="forms-expert-group";let u=document.createElement("label");u.className="forms-expert-label",u.htmlFor=`mira-field-${t.name}`,u.innerHTML=`${x(t.label||t.name)}${t.required?'<span class="forms-expert-required">*</span>':""}`,o.appendChild(u);let c=document.createElement("div");c.className="forms-expert-input-wrapper";let s;switch(t.type){case"textarea":case"richText":s=document.createElement("textarea"),s.className="forms-expert-textarea",s.value=String(e||""),t.maxLength&&(s.maxLength=t.maxLength);break;case"select":case"dropdown":{s=document.createElement("select"),s.className="forms-expert-select";let r=document.createElement("option");r.value="",r.textContent=t.placeholder||"Select an option...",s.appendChild(r),(t.options||[]).forEach(p=>{let i=document.createElement("option");i.value=p,i.textContent=p,e===p&&(i.selected=!0),s.appendChild(i)});break}case"radio":{let r=document.createElement("div");if(r.className="forms-expert-radio-group",(t.options||[]).forEach(p=>{let i=document.createElement("label");i.className="forms-expert-radio-item";let a=document.createElement("input");a.type="radio",a.name=t.name,a.value=p,a.checked=e===p,i.appendChild(a),i.appendChild(document.createTextNode(` ${p}`)),r.appendChild(i)}),c.appendChild(r),n){let p=document.createElement("div");p.className="forms-expert-error-message",p.textContent=n,c.appendChild(p)}return o.appendChild(c),o}case"multiselect":{let r=document.createElement("div");r.className="forms-expert-multiselect-group";let l=e||[];if((t.options||[]).forEach(i=>{let a=document.createElement("label");a.className="forms-expert-checkbox-item";let d=document.createElement("input");d.type="checkbox",d.name=t.name,d.value=i,d.checked=l.includes(i),a.appendChild(d),a.appendChild(document.createTextNode(` ${i}`)),r.appendChild(a)}),c.appendChild(r),n){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=n,c.appendChild(i)}return o.appendChild(c),o}case"rating":{let r=document.createElement("div");r.className="forms-expert-rating";let l=t.ratingMax||5,p=e||0;for(let i=1;i<=l;i++){let a=document.createElement("button");a.type="button",a.className=`forms-expert-rating-star ${i<=p?"active":""}`,a.textContent="\u2605",a.dataset.value=String(i),r.appendChild(a)}if(c.appendChild(r),n){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=n,c.appendChild(i)}return o.appendChild(c),o}case"scale":case"opinionScale":{let r=document.createElement("div");r.className="forms-expert-scale";let l=t.min??(t.type==="opinionScale"?0:1),p=t.max??(t.type==="opinionScale"?10:5),i=e;for(let a=l;a<=p;a++){let d=document.createElement("button");d.type="button",d.className=`forms-expert-scale-btn ${i===a?"active":""}`,d.textContent=String(a),d.dataset.value=String(a),r.appendChild(d)}if(c.appendChild(r),t.lowLabel||t.highLabel){let a=document.createElement("div");a.className="forms-expert-scale-labels",a.innerHTML=`<span>${x(t.lowLabel||"")}</span><span>${x(t.highLabel||"")}</span>`,c.appendChild(a)}if(n){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=n,c.appendChild(a)}return o.appendChild(c),o}case"slider":{s=document.createElement("input"),s.type="range",s.className="forms-expert-slider",s.min=String(t.min??0),s.max=String(t.max??100),s.step=String(t.step??1),s.value=String(e??t.min??0);break}case"file":s=document.createElement("input"),s.type="file",s.className="forms-expert-file",t.allowedMimeTypes?.length&&(s.accept=t.allowedMimeTypes.join(",")),t.multiple&&(s.multiple=!0);break;case"currency":{s=document.createElement("input"),s.type="number",s.className="forms-expert-input",s.value=String(e??""),t.min!==void 0&&(s.min=String(t.min)),t.max!==void 0&&(s.max=String(t.max)),s.step=String(t.step||.01);break}case"phone":s=document.createElement("input"),s.type="tel",s.className="forms-expert-input",s.value=String(e||"");break;case"url":s=document.createElement("input"),s.type="url",s.className="forms-expert-input",s.value=String(e||"");break;case"password":s=document.createElement("input"),s.type="password",s.className="forms-expert-input",s.value=String(e||"");break;case"time":s=document.createElement("input"),s.type="time",s.className="forms-expert-input",s.value=String(e||"");break;case"datetime":s=document.createElement("input"),s.type="datetime-local",s.className="forms-expert-input",s.value=String(e||"");break;case"colorPicker":s=document.createElement("input"),s.type="color",s.className="forms-expert-color",s.value=String(e||"#000000");break;case"dateRange":{let r=document.createElement("div");r.className="forms-expert-date-range";let l=e||{},p=document.createElement("input");p.type="date",p.className="forms-expert-input",p.name=`${t.name}.start`,p.value=l.start||"";let i=document.createElement("input");if(i.type="date",i.className="forms-expert-input",i.name=`${t.name}.end`,i.value=l.end||"",r.appendChild(p),r.appendChild(i),c.appendChild(r),n){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=n,c.appendChild(a)}return o.appendChild(c),o}case"address":{let r=document.createElement("div");r.className="forms-expert-address";let l=t.addressFields||["street","city","state","zip","country"],p=e||{},i={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(l.forEach(a=>{let d=document.createElement("input");d.type="text",d.className="forms-expert-input",d.name=`${t.name}.${a}`,d.placeholder=i[a]||a,d.value=p[a]||"",r.appendChild(d)}),c.appendChild(r),n){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=n,c.appendChild(a)}return o.appendChild(c),o}case"name":{let r=document.createElement("div");r.className="forms-expert-name";let l=t.nameFields||["first","last"],p=e||{},i={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(l.forEach(a=>{let d=document.createElement("input");d.type="text",d.className="forms-expert-input",d.name=`${t.name}.${a}`,d.placeholder=i[a]||a,d.value=p[a]||"",r.appendChild(d)}),c.appendChild(r),n){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=n,c.appendChild(a)}return o.appendChild(c),o}case"imageChoice":{let r=document.createElement("div");r.className="forms-expert-image-choice";let l=t.options||[],p=e;if(l.forEach(i=>{let a=document.createElement("button");if(a.type="button",a.className=`forms-expert-image-choice-item ${p===i.value?"active":""}`,a.dataset.value=i.value,i.imageUrl){let h=document.createElement("img");h.src=i.imageUrl,h.alt=i.label,a.appendChild(h)}let d=document.createElement("span");d.textContent=i.label,a.appendChild(d),r.appendChild(a)}),c.appendChild(r),n){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=n,c.appendChild(i)}return o.appendChild(c),o}case"ranking":{let r=document.createElement("div");r.className="forms-expert-ranking";let l=t.options||[];if((e||[...l]).forEach((i,a)=>{let d=document.createElement("div");d.className="forms-expert-ranking-item",d.textContent=`${a+1}. ${i}`,d.dataset.value=i,r.appendChild(d)}),c.appendChild(r),n){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=n,c.appendChild(i)}return o.appendChild(c),o}case"location":{let r=document.createElement("div");r.className="forms-expert-location";let l=e||{},p=document.createElement("input");p.type="text",p.className="forms-expert-input",p.name=`${t.name}.address`,p.placeholder="Address",p.value=l.address||"",r.appendChild(p);let i=document.createElement("div");i.className="forms-expert-location-coords";let a=document.createElement("input");a.type="number",a.className="forms-expert-input",a.name=`${t.name}.lat`,a.placeholder="Latitude",a.step="any",a.value=l.lat!==void 0?String(l.lat):"";let d=document.createElement("input");if(d.type="number",d.className="forms-expert-input",d.name=`${t.name}.lng`,d.placeholder="Longitude",d.step="any",d.value=l.lng!==void 0?String(l.lng):"",i.appendChild(a),i.appendChild(d),r.appendChild(i),c.appendChild(r),n){let h=document.createElement("div");h.className="forms-expert-error-message",h.textContent=n,c.appendChild(h)}return o.appendChild(c),o}default:s=document.createElement("input"),s.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",s.className="forms-expert-input",s.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(s.min=String(t.min)),t.max!==void 0&&(s.max=String(t.max)),t.step!==void 0&&(s.step=String(t.step)));break}if(s.id=`mira-field-${t.name}`,s.name=t.name,t.placeholder&&"placeholder"in s&&(s.placeholder=t.placeholder),t.required&&(s.required=!0),n&&s.classList.add("forms-expert-error"),c.appendChild(s),n){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=n,c.appendChild(r)}return o.appendChild(c),o}function w(t,e={},n={},m={}){let o=document.createElement("form");if(o.className="forms-expert",m.hideRequiredAsterisk){let r=document.createElement("style");r.textContent=".forms-expert .forms-expert-required { display: none; }",o.appendChild(r)}if(m.showFormName!==!1&&m.formName){let r=document.createElement("h1");r.className="forms-expert-title",r.textContent=m.formName,r.style.fontSize="1.5rem",r.style.fontWeight="700",r.style.marginBottom="0.5rem",o.appendChild(r)}let u=t.styling;if(t.fields.forEach(r=>{let l=H(r,e[r.name],n[r.name],u);o.appendChild(l)}),m.honeypot){let r=document.createElement("input");r.type="text",r.name="_hp",r.className="forms-expert-honeypot",r.tabIndex=-1,r.autocomplete="off",o.appendChild(r)}let c=document.createElement("input");c.type="hidden",c.name="pageUrl",c.value=typeof window<"u"?window.location.href:"",o.appendChild(c);let s=document.createElement("button");if(s.type="submit",s.className="forms-expert-button",s.disabled=m.isLoading||!1,m.isLoading?s.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `:s.textContent=m.submitText||"Submit",o.appendChild(s),m.showBranding!==!1){let r=m.brandingText||"Powered by Forms Expert",l=m.brandingUrl||"https://mira.io",p=document.createElement("div");p.className="forms-expert-branding",p.innerHTML=`<a href="${l}" target="_blank" rel="noopener">${r}</a>`,o.appendChild(p)}return o}function k(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${x(t)}</div>
  `,e}function F(t){return t.reduce((e,n)=>({...e,[n.field]:n.message}),{})}var g=class extends Error{constructor(n,m,o,u){super(n);this.code=m;this.statusCode=o;this.retryAfter=u;this.name="FormsError"}},f=class extends Error{constructor(n){super("Validation failed");this.errors=n;this.name="FormValidationError"}};var b=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let n=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${n}token=${encodeURIComponent(this.apiKey)}`}async request(e,n,m){let o=this.buildUrl(n),u=await fetch(o,{method:e,headers:{"Content-Type":"application/json"},body:m?JSON.stringify(m):void 0}),c=await u.json();if(!u.ok)throw new g(c.message||"Request failed",c.code||"UNKNOWN_ERROR",u.status,c.retryAfter);return c}async isActive(e,n){let m=n?`?lang=${encodeURIComponent(n)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${m}`)}async validate(e,n){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:n})}async submit(e,n,m){let o=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(n).some(c=>c instanceof File||c instanceof FileList&&c.length>0)||m?.onProgress?this.submitWithFormData(o,n,m):this.request("POST",`/f/${this.resourceId}/${e}`,{data:n,pageUrl:m?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:m?.captchaToken})}submitWithFormData(e,n,m){return new Promise((o,u)=>{let c=new FormData;for(let[l,p]of Object.entries(n))p instanceof File?c.append(l,p):p instanceof FileList?Array.from(p).forEach(i=>c.append(l,i)):p!=null&&c.append(`data[${l}]`,String(p));let s=m?.pageUrl||(typeof window<"u"?window.location.href:"");s&&c.append("pageUrl",s),m?.captchaToken&&c.append("captchaToken",m.captchaToken);let r=new XMLHttpRequest;m?.onProgress&&r.upload.addEventListener("progress",l=>{l.lengthComputable&&m.onProgress({loaded:l.loaded,total:l.total,percentage:Math.round(l.loaded/l.total*100)})}),r.addEventListener("load",()=>{try{let l=JSON.parse(r.responseText);r.status>=200&&r.status<300?o(l):u(new g(l.message||"Submission failed",l.code||"UNKNOWN_ERROR",r.status,l.retryAfter))}catch{u(new g("Invalid response","PARSE_ERROR",r.status))}}),r.addEventListener("error",()=>{u(new g("Network error","NETWORK_ERROR",0))}),r.addEventListener("abort",()=>{u(new g("Request aborted","ABORTED",0))}),r.open("POST",e),r.send(c)})}async trackView(e){let n=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"}}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var C=class{constructor(e,n,m={}){this.config=null;this.apiClient=e,this.slug=n,this.options=m}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,n){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let o=await this.validate(e);if(!o.valid)throw this.options.onValidationError?.(o.errors),new f(o.errors)}let m=await this.apiClient.submit(this.slug,e,n);return this.options.onSubmitSuccess?.(m),m}catch(m){throw m instanceof g&&this.options.onSubmitError?.(m),m}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},y=class{constructor(e){this.apiClient=new b(e)}async isActive(e,n){return this.apiClient.isActive(e,n)}async validate(e,n){return this.apiClient.validate(e,n)}async submit(e,n,m){return this.apiClient.submit(e,n,m)}form(e,n){return new C(this.apiClient,e,n)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,n,m){let o=m?.maxRetries??3,u=null;for(let c=0;c<o;c++)try{return await this.submit(e,n,m)}catch(s){if(u=s,s instanceof g){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(s.code))throw s;if(s.code.includes("RATE_LIMIT")){let r=s.retryAfter||Math.pow(2,c)*1e3;await new Promise(l=>setTimeout(l,r));continue}}await new Promise(r=>setTimeout(r,Math.pow(2,c)*1e3))}throw u}};var S=class{constructor(e,n){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new y(e),this.options=n;let m=n.target;if(typeof m=="string"){let o=document.querySelector(m);if(!o)throw new Error(`Element not found: ${m}`);this.container=o}else this.container=m}async init(){try{if(this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=v(e),document.head.appendChild(this.styleEl)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let o=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(k(o));return}let e={...this.config.schema.styling,...this.config.styling},n={...this.config.schema,styling:e},m=w(n,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.hostedConfig?.showFormName});m.addEventListener("input",o=>{let u=o.target;u.name&&u.name!=="_hp"&&u.name!=="pageUrl"&&(u.type==="checkbox"?this.values[u.name]=u.checked:u.type==="file"?this.values[u.name]=u.multiple?u.files:u.files?.[0]:this.values[u.name]=u.value,this.errors[u.name]&&(delete this.errors[u.name],this.render()))}),m.addEventListener("submit",o=>{o.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(m)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let n=this.options.redirectUrl||this.config.settings?.redirectUrl;n&&setTimeout(()=>{window.location.href=n},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof f?(this.errors=F(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderError(e){this.container.innerHTML=`
      <div class="forms-expert" style="text-align: center; padding: 2rem; color: #ef4444;">
        <p>${e}</p>
      </div>
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function $(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let n=e.getAttribute("data-api-key"),m=e.getAttribute("data-resource-id"),o=e.getAttribute("data-forms-expert"),u=e.getAttribute("data-base-url")||void 0;if(!n||!m||!o){console.error("Forms Expert: Missing required attributes",{apiKey:!!n,resourceId:!!m,slug:!!o});return}new S({apiKey:n,resourceId:m,baseUrl:u},{target:e,slug:o,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$):$());export{S as FormWidget,$ as autoInit,F as errorsToRecord,v as generateFormStyles,H as renderField,w as renderForm,k as renderSuccess};
//# sourceMappingURL=index.js.map