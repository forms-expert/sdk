var E={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function L(r){switch(r){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function P(r){switch(r){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function A(r){switch(r){case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem";default:return"1rem"}}function z(r){switch(r){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function U(r){switch(r){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function M(r){switch(r){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function I(r){switch(r){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function O(r){switch(r){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function B(r){switch(r){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function w(r=E){let e={...E,...r},a=L(e.borderRadius),d=P(e.buttonRadius),l=A(e.fontSize),c=z(e.placeholderFontSize),o=U(e.fieldSpacing),n=M(e.formPadding),m=I(e.labelSpacing),i=O(e.formWidth),s=e.primaryColor,t=e.buttonColor,p=e.fontFamily||"system-ui, -apple-system, sans-serif",u=B(e.buttonAlign),y={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],T=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:y.px,R=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:y.py,N=e.buttonGradient||(e.buttonStyle==="filled"?s:"transparent");return`
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
  font-family: ${p};
  font-size: ${l};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${n};
  border-radius: ${a};
  box-sizing: border-box;
  max-width: ${i};
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
  border-radius: ${a} ${a} 0 0;
  margin-bottom: 1rem;
}

.forms-expert-group {
  margin-bottom: ${o};
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"display: flex; align-items: flex-start; gap: 1rem;":""}
}

.forms-expert-label {
  display: block;
  font-weight: 500;
  color: ${e.textColor};
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"width: 33%; flex-shrink: 0; padding-top: 0.5rem; margin-bottom: 0;":`margin-bottom: ${m};`}
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
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":a};
  font-size: ${l};
  font-family: inherit;
  background-color: ${e.theme==="dark"?"#374151":"#ffffff"};
  color: ${e.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${c};
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
  margin-bottom: ${o};
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
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":a};
  font-size: ${l};
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
  justify-content: ${u};
  margin-top: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.forms-expert-button {
  ${e.buttonFullWidth?"width: 100%;":e.buttonAlign?"":"width: 100%;"}
  padding: ${R} ${T};
  font-weight: 500;
  font-size: ${y.fs};
  font-family: inherit;
  border-radius: ${d};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  ${e.buttonStyle==="filled"?`background: ${N}; color: ${t||"white"}; border: none;`:`background: transparent; color: ${s}; border: 2px solid ${s};`}
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

.forms-expert-secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  font-size: ${l};
  font-family: inherit;
  border-radius: ${d};
  cursor: pointer;
  transition: opacity 0.2s;
  text-decoration: none;
}
.forms-expert-secondary-btn:hover { opacity: 0.9; }

.forms-expert-secondary-below {
  display: flex;
  margin-top: 0.5rem;
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
  min-width: 2.25rem; height: 2.25rem; border-radius: ${a}; cursor: pointer;
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
  border: 2px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}; border-radius: ${a};
  padding: 0.5rem; cursor: pointer; text-align: center; transition: border-color 0.15s;
}
.forms-expert-image-choice-item.active { border-color: ${e.primaryColor}; }
.forms-expert-image-choice-item img { max-width: 80px; max-height: 80px; object-fit: cover; border-radius: ${a}; }

${e.customCss||""}
`.trim()}function h(r){let e=document.createElement("div");return e.textContent=r,e.innerHTML}function H(r){switch(r){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function V(r){switch(r){case"small":return"14px";case"large":return"18px";default:return"16px"}}function q(r,e,a,d){let l=document.createElement("div");if(r.type==="heading"){l.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=H(d?.headingSize),n.textContent=r.label||"",l.appendChild(n),r.content){let m=document.createElement("p");m.className="forms-expert-heading-subtitle",m.textContent=r.content,l.appendChild(m)}return l}if(r.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(r.type==="paragraph"){l.className="forms-expert-group";let n=r.paragraphFontSize?`${r.paragraphFontSize}px`:V(d?.paragraphSize);if(r.label){let m=document.createElement("p");m.className="forms-expert-paragraph-label",m.style.fontSize=n,m.textContent=r.label,l.appendChild(m)}if(r.content){let m=document.createElement("div");m.className="forms-expert-paragraph",m.style.fontSize=n,m.innerHTML=r.content,l.appendChild(m)}return l}if(r.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=r.name,n.value=String(r.defaultValue??e??""),l.appendChild(n),l.style.display="none",l}if(r.type==="checkbox"||r.type==="toggle"||r.type==="consent"){l.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${r.name}`,n.name=r.name,n.className="forms-expert-checkbox",n.checked=!!e,r.required&&(n.required=!0);let m=document.createElement("label");m.htmlFor=n.id;let i=r.type==="consent"?r.consentText||r.label||r.name:r.label||r.name;if(m.innerHTML=`${h(i)}${r.required?'<span class="forms-expert-required">*</span>':""}`,l.appendChild(n),l.appendChild(m),r.type==="consent"&&r.consentUrl){let s=document.createElement("a");s.href=r.consentUrl,s.target="_blank",s.rel="noopener noreferrer",s.textContent="View policy",s.className="forms-expert-consent-link",l.appendChild(s)}if(a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,l.appendChild(s)}return l}if(l.className="forms-expert-group",r.label){let n=document.createElement("label");n.className="forms-expert-label",n.htmlFor=`mira-field-${r.name}`,n.innerHTML=`${h(r.label)}${r.required?'<span class="forms-expert-required">*</span>':""}`,l.appendChild(n)}let c=document.createElement("div");c.className="forms-expert-input-wrapper";let o;switch(r.type){case"textarea":case"richText":o=document.createElement("textarea"),o.className="forms-expert-textarea",o.value=String(e||""),r.maxLength&&(o.maxLength=r.maxLength);break;case"select":case"dropdown":{o=document.createElement("select"),o.className="forms-expert-select";let n=document.createElement("option");n.value="",n.textContent=r.placeholder||"Select an option...",o.appendChild(n),(r.options||[]).forEach(i=>{let s=document.createElement("option");s.value=i,s.textContent=i,e===i&&(s.selected=!0),o.appendChild(s)});break}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(r.options||[]).forEach(i=>{let s=document.createElement("label");s.className="forms-expert-radio-item";let t=document.createElement("input");t.type="radio",t.name=r.name,t.value=i,t.checked=e===i,s.appendChild(t),s.appendChild(document.createTextNode(` ${i}`)),n.appendChild(s)}),c.appendChild(n),a){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=a,c.appendChild(i)}return l.appendChild(c),l}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let m=e||[];if((r.options||[]).forEach(s=>{let t=document.createElement("label");t.className="forms-expert-checkbox-item";let p=document.createElement("input");p.type="checkbox",p.name=r.name,p.value=s,p.checked=m.includes(s),t.appendChild(p),t.appendChild(document.createTextNode(` ${s}`)),n.appendChild(t)}),c.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,c.appendChild(s)}return l.appendChild(c),l}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let m=r.ratingMax||5,i=e||0;for(let s=1;s<=m;s++){let t=document.createElement("button");t.type="button",t.className=`forms-expert-rating-star ${s<=i?"active":""}`,t.textContent="\u2605",t.dataset.value=String(s),n.appendChild(t)}if(c.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,c.appendChild(s)}return l.appendChild(c),l}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let m=r.min??(r.type==="opinionScale"?0:1),i=r.max??(r.type==="opinionScale"?10:5),s=e;for(let t=m;t<=i;t++){let p=document.createElement("button");p.type="button",p.className=`forms-expert-scale-btn ${s===t?"active":""}`,p.textContent=String(t),p.dataset.value=String(t),n.appendChild(p)}if(c.appendChild(n),r.lowLabel||r.highLabel){let t=document.createElement("div");t.className="forms-expert-scale-labels",t.innerHTML=`<span>${h(r.lowLabel||"")}</span><span>${h(r.highLabel||"")}</span>`,c.appendChild(t)}if(a){let t=document.createElement("div");t.className="forms-expert-error-message",t.textContent=a,c.appendChild(t)}return l.appendChild(c),l}case"slider":{o=document.createElement("input"),o.type="range",o.className="forms-expert-slider",o.min=String(r.min??0),o.max=String(r.max??100),o.step=String(r.step??1),o.value=String(e??r.min??0);break}case"file":o=document.createElement("input"),o.type="file",o.className="forms-expert-file",r.allowedMimeTypes?.length&&(o.accept=r.allowedMimeTypes.join(",")),r.multiple&&(o.multiple=!0);break;case"currency":{o=document.createElement("input"),o.type="number",o.className="forms-expert-input",o.value=String(e??""),r.min!==void 0&&(o.min=String(r.min)),r.max!==void 0&&(o.max=String(r.max)),o.step=String(r.step||.01);break}case"phone":o=document.createElement("input"),o.type="tel",o.className="forms-expert-input",o.value=String(e||"");break;case"url":o=document.createElement("input"),o.type="url",o.className="forms-expert-input",o.value=String(e||"");break;case"password":o=document.createElement("input"),o.type="password",o.className="forms-expert-input",o.value=String(e||"");break;case"time":o=document.createElement("input"),o.type="time",o.className="forms-expert-input",o.value=String(e||"");break;case"datetime":o=document.createElement("input"),o.type="datetime-local",o.className="forms-expert-input",o.value=String(e||"");break;case"colorPicker":o=document.createElement("input"),o.type="color",o.className="forms-expert-color",o.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let m=e||{},i=document.createElement("input");i.type="date",i.className="forms-expert-input",i.name=`${r.name}.start`,i.value=m.start||"";let s=document.createElement("input");if(s.type="date",s.className="forms-expert-input",s.name=`${r.name}.end`,s.value=m.end||"",n.appendChild(i),n.appendChild(s),c.appendChild(n),a){let t=document.createElement("div");t.className="forms-expert-error-message",t.textContent=a,c.appendChild(t)}return l.appendChild(c),l}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let m=r.addressFields||["street","city","state","zip","country"],i=e||{},s={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(m.forEach(t=>{let p=document.createElement("input");p.type="text",p.className="forms-expert-input",p.name=`${r.name}.${t}`,p.placeholder=s[t]||t,p.value=i[t]||"",n.appendChild(p)}),c.appendChild(n),a){let t=document.createElement("div");t.className="forms-expert-error-message",t.textContent=a,c.appendChild(t)}return l.appendChild(c),l}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let m=r.nameFields||["first","last"],i=e||{},s={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(m.forEach(t=>{let p=document.createElement("input");p.type="text",p.className="forms-expert-input",p.name=`${r.name}.${t}`,p.placeholder=s[t]||t,p.value=i[t]||"",n.appendChild(p)}),c.appendChild(n),a){let t=document.createElement("div");t.className="forms-expert-error-message",t.textContent=a,c.appendChild(t)}return l.appendChild(c),l}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let m=r.options||[],i=e;if(m.forEach(s=>{let t=document.createElement("button");if(t.type="button",t.className=`forms-expert-image-choice-item ${i===s.value?"active":""}`,t.dataset.value=s.value,s.imageUrl){let u=document.createElement("img");u.src=s.imageUrl,u.alt=s.label,t.appendChild(u)}let p=document.createElement("span");p.textContent=s.label,t.appendChild(p),n.appendChild(t)}),c.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,c.appendChild(s)}return l.appendChild(c),l}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let m=r.options||[];if((e||[...m]).forEach((s,t)=>{let p=document.createElement("div");p.className="forms-expert-ranking-item",p.textContent=`${t+1}. ${s}`,p.dataset.value=s,n.appendChild(p)}),c.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,c.appendChild(s)}return l.appendChild(c),l}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let m=e||{},i=document.createElement("input");i.type="text",i.className="forms-expert-input",i.name=`${r.name}.address`,i.placeholder="Address",i.value=m.address||"",n.appendChild(i);let s=document.createElement("div");s.className="forms-expert-location-coords";let t=document.createElement("input");t.type="number",t.className="forms-expert-input",t.name=`${r.name}.lat`,t.placeholder="Latitude",t.step="any",t.value=m.lat!==void 0?String(m.lat):"";let p=document.createElement("input");if(p.type="number",p.className="forms-expert-input",p.name=`${r.name}.lng`,p.placeholder="Longitude",p.step="any",p.value=m.lng!==void 0?String(m.lng):"",s.appendChild(t),s.appendChild(p),n.appendChild(s),c.appendChild(n),a){let u=document.createElement("div");u.className="forms-expert-error-message",u.textContent=a,c.appendChild(u)}return l.appendChild(c),l}default:o=document.createElement("input"),o.type=r.type==="email"?"email":r.type==="number"?"number":r.type==="date"?"date":"text",o.className="forms-expert-input",o.value=String(e||""),r.type==="number"&&(r.min!==void 0&&(o.min=String(r.min)),r.max!==void 0&&(o.max=String(r.max)),r.step!==void 0&&(o.step=String(r.step)));break}if(o.id=`mira-field-${r.name}`,o.name=r.name,r.placeholder&&"placeholder"in o&&(o.placeholder=r.placeholder),r.required&&(o.required=!0),a&&o.classList.add("forms-expert-error"),c.appendChild(o),a){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=a,c.appendChild(n)}return l.appendChild(c),l}function v(r,e={},a={},d={}){let l=document.createElement("form");if(l.className="forms-expert",d.hideRequiredAsterisk){let t=document.createElement("style");t.textContent=".forms-expert .forms-expert-required { display: none; }",l.appendChild(t)}if(d.showFormName!==!1&&d.formName){let t=document.createElement("h1");t.className="forms-expert-title",t.textContent=d.formName,t.style.fontSize="1.5rem",t.style.fontWeight="700",t.style.marginBottom="0.5rem",l.appendChild(t)}let c=r.styling;if(r.fields.forEach(t=>{let p=q(t,e[t.name],a[t.name],c);l.appendChild(p)}),d.honeypot){let t=document.createElement("input");t.type="text",t.name="_hp",t.className="forms-expert-honeypot",t.tabIndex=-1,t.autocomplete="off",l.appendChild(t)}let o=document.createElement("input");o.type="hidden",o.name="pageUrl",o.value=typeof window<"u"?window.location.href:"",l.appendChild(o);let n=document.createElement("div");n.className="forms-expert-button-wrapper";let m=document.createElement("button");m.type="submit",m.className="forms-expert-button",m.disabled=d.isLoading||!1,d.isLoading?m.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `:m.textContent=d.submitText||"Submit";let i=d.secondaryButton,s=()=>{if(!i?.enabled)return null;let t=document.createElement("a");t.className="forms-expert-secondary-btn",t.href=i.href||"#",t.textContent=i.text||"Learn More",i.openInNewTab&&(t.target="_blank",t.rel="noopener noreferrer");let p=c?.primaryColor||"#3b82f6",u=i.color||p;return i.style==="filled"?(t.style.background=u,t.style.color=i.textColor||"#ffffff",t.style.border="none"):i.style==="outlined"?(t.style.background="transparent",t.style.color=i.textColor||u,t.style.border=`2px solid ${u}`):i.style==="link"?(t.style.background="transparent",t.style.color=i.textColor||u,t.style.border="none",t.style.textDecoration="underline"):(t.style.background="transparent",t.style.color=i.textColor||u,t.style.border="none"),i.marginTop!=null&&(t.style.marginTop=`${i.marginTop}px`),i.marginBottom!=null&&(t.style.marginBottom=`${i.marginBottom}px`),t};if(i?.enabled&&i.position==="left"){let t=s();t&&n.appendChild(t)}if(n.appendChild(m),i?.enabled&&i.position!=="left"&&i.position!=="below"){let t=s();t&&(t.style.marginLeft="auto",n.appendChild(t))}if(l.appendChild(n),i?.enabled&&i.position==="below"){let t=document.createElement("div");t.className="forms-expert-secondary-below";let p=i.align||d.buttonAlign||"left";t.style.justifyContent=p==="center"?"center":p==="right"?"flex-end":"flex-start",i.marginTop!=null&&(t.style.marginTop=`${i.marginTop}px`),i.marginBottom!=null&&(t.style.marginBottom=`${i.marginBottom}px`);let u=s();u&&(u.style.marginTop="0",u.style.marginBottom="0",t.appendChild(u)),l.appendChild(t)}if(d.showBranding!==!1){let t=d.brandingText||"Powered by Forms Expert",p=d.brandingUrl||"https://mira.io",u=document.createElement("div");u.className="forms-expert-branding",u.innerHTML=`<a href="${p}" target="_blank" rel="noopener">${t}</a>`,l.appendChild(u)}return l}function k(r){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${h(r)}</div>
  `,e}function F(r){return r.reduce((e,a)=>({...e,[a.field]:a.message}),{})}var g=class extends Error{constructor(a,d,l,c){super(a);this.code=d;this.statusCode=l;this.retryAfter=c;this.name="FormsError"}},f=class extends Error{constructor(a){super("Validation failed");this.errors=a;this.name="FormValidationError"}};var b=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let a=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${a}token=${encodeURIComponent(this.apiKey)}`}async request(e,a,d){let l=this.buildUrl(a),c=await fetch(l,{method:e,headers:{"Content-Type":"application/json"},body:d?JSON.stringify(d):void 0}),o=await c.json();if(!c.ok)throw new g(o.message||"Request failed",o.code||"UNKNOWN_ERROR",c.status,o.retryAfter);return o}async isActive(e,a){let d=a?`?lang=${encodeURIComponent(a)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${d}`)}async validate(e,a){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:a})}async submit(e,a,d){let l=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(a).some(o=>o instanceof File||o instanceof FileList&&o.length>0)||d?.onProgress?this.submitWithFormData(l,a,d):this.request("POST",`/f/${this.resourceId}/${e}`,{data:a,pageUrl:d?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:d?.captchaToken})}submitWithFormData(e,a,d){return new Promise((l,c)=>{let o=new FormData;for(let[i,s]of Object.entries(a))s instanceof File?o.append(i,s):s instanceof FileList?Array.from(s).forEach(t=>o.append(i,t)):s!=null&&o.append(`data[${i}]`,String(s));let n=d?.pageUrl||(typeof window<"u"?window.location.href:"");n&&o.append("pageUrl",n),d?.captchaToken&&o.append("captchaToken",d.captchaToken);let m=new XMLHttpRequest;d?.onProgress&&m.upload.addEventListener("progress",i=>{i.lengthComputable&&d.onProgress({loaded:i.loaded,total:i.total,percentage:Math.round(i.loaded/i.total*100)})}),m.addEventListener("load",()=>{try{let i=JSON.parse(m.responseText);m.status>=200&&m.status<300?l(i):c(new g(i.message||"Submission failed",i.code||"UNKNOWN_ERROR",m.status,i.retryAfter))}catch{c(new g("Invalid response","PARSE_ERROR",m.status))}}),m.addEventListener("error",()=>{c(new g("Network error","NETWORK_ERROR",0))}),m.addEventListener("abort",()=>{c(new g("Request aborted","ABORTED",0))}),m.open("POST",e),m.send(o)})}async trackView(e){let a=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"}}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var S=class{constructor(e,a,d={}){this.config=null;this.apiClient=e,this.slug=a,this.options=d}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,a){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let l=await this.validate(e);if(!l.valid)throw this.options.onValidationError?.(l.errors),new f(l.errors)}let d=await this.apiClient.submit(this.slug,e,a);return this.options.onSubmitSuccess?.(d),d}catch(d){throw d instanceof g&&this.options.onSubmitError?.(d),d}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},x=class{constructor(e){this.apiClient=new b(e)}async isActive(e,a){return this.apiClient.isActive(e,a)}async validate(e,a){return this.apiClient.validate(e,a)}async submit(e,a,d){return this.apiClient.submit(e,a,d)}form(e,a){return new S(this.apiClient,e,a)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,a,d){let l=d?.maxRetries??3,c=null;for(let o=0;o<l;o++)try{return await this.submit(e,a,d)}catch(n){if(c=n,n instanceof g){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(n.code))throw n;if(n.code.includes("RATE_LIMIT")){let m=n.retryAfter||Math.pow(2,o)*1e3;await new Promise(i=>setTimeout(i,m));continue}}await new Promise(m=>setTimeout(m,Math.pow(2,o)*1e3))}throw c}};var C=class{constructor(e,a){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new x(e),this.options=a;let d=a.target;if(typeof d=="string"){let l=document.querySelector(d);if(!l)throw new Error(`Element not found: ${d}`);this.container=l}else this.container=d}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=w(e),document.head.appendChild(this.styleEl)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let l=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(k(l));return}let e={...this.config.schema.styling,...this.config.styling},a={...this.config.schema,styling:e},d=v(a,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign});d.addEventListener("input",l=>{let c=l.target;c.name&&c.name!=="_hp"&&c.name!=="pageUrl"&&(c.type==="checkbox"?this.values[c.name]=c.checked:c.type==="file"?this.values[c.name]=c.multiple?c.files:c.files?.[0]:this.values[c.name]=c.value,this.errors[c.name]&&(delete this.errors[c.name],this.render()))}),d.addEventListener("submit",l=>{l.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(d)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let a=this.options.redirectUrl||this.config.settings?.redirectUrl;a&&setTimeout(()=>{window.location.href=a},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof f?(this.errors=F(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
      <div class="forms-expert" style="display: flex; align-items: center; justify-content: center; padding: 2rem;">
        <svg width="24" height="24" viewBox="0 0 24 24" style="animation: fe-spin 1s linear infinite; color: #9ca3af;">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="31.4 31.4" stroke-linecap="round"/>
        </svg>
      </div>
      <style>@keyframes fe-spin { to { transform: rotate(360deg); } }</style>
    `}renderError(e){this.container.innerHTML=`
      <div class="forms-expert" style="text-align: center; padding: 2rem; color: #ef4444;">
        <p>${e}</p>
      </div>
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function $(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let a=e.getAttribute("data-api-key"),d=e.getAttribute("data-resource-id"),l=e.getAttribute("data-forms-expert"),c=e.getAttribute("data-base-url")||void 0;if(!a||!d||!l){console.error("Forms Expert: Missing required attributes",{apiKey:!!a,resourceId:!!d,slug:!!l});return}new C({apiKey:a,resourceId:d,baseUrl:c},{target:e,slug:l,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$):$());export{C as FormWidget,$ as autoInit,F as errorsToRecord,w as generateFormStyles,q as renderField,v as renderForm,k as renderSuccess};
//# sourceMappingURL=index.js.map