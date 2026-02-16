var w={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function P(r){switch(r){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function A(r){switch(r){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function z(r){switch(r){case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem";default:return"1rem"}}function U(r){switch(r){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function M(r){switch(r){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function I(r){switch(r){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function O(r){switch(r){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function B(r){switch(r){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function H(r){switch(r){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function v(r=w){let e={...w,...r},s=P(e.borderRadius),m=A(e.buttonRadius),i=z(e.fontSize),u=U(e.placeholderFontSize),c=M(e.fieldSpacing),a=I(e.formPadding),n=O(e.labelSpacing),o=B(e.formWidth),p=e.primaryColor,t=e.buttonColor,l=e.fontFamily||"system-ui, -apple-system, sans-serif",d=H(e.buttonAlign),S={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],R=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:S.px,N=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:S.py,L=e.buttonGradient||(e.buttonStyle==="filled"?p:"transparent");return`
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
  font-family: ${l};
  font-size: ${i};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${a};
  border-radius: ${s};
  box-sizing: border-box;
  max-width: ${o};
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
  border-radius: ${s} ${s} 0 0;
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
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"width: 33%; flex-shrink: 0; padding-top: 0.5rem; margin-bottom: 0;":`margin-bottom: ${n};`}
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
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":s};
  font-size: ${i};
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
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":s};
  font-size: ${i};
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
  gap: 0.5rem;
  flex-wrap: wrap;
}

.forms-expert-button {
  ${e.buttonFullWidth?"width: 100%;":e.buttonAlign?"":"width: 100%;"}
  padding: ${N} ${R};
  font-weight: 500;
  font-size: ${S.fs};
  font-family: inherit;
  border-radius: ${m};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  ${e.buttonStyle==="filled"?`background: ${L}; color: ${t||"white"}; border: none;`:`background: transparent; color: ${p}; border: 2px solid ${p};`}
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
  font-size: ${i};
  font-family: inherit;
  border-radius: ${m};
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
  min-width: 2.25rem; height: 2.25rem; border-radius: ${s}; cursor: pointer;
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
  border: 2px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}; border-radius: ${s};
  padding: 0.5rem; cursor: pointer; text-align: center; transition: border-color 0.15s;
}
.forms-expert-image-choice-item.active { border-color: ${e.primaryColor}; }
.forms-expert-image-choice-item img { max-width: 80px; max-height: 80px; object-fit: cover; border-radius: ${s}; }

${e.customCss||""}
`.trim()}function b(r){let e=document.createElement("div");return e.textContent=r,e.innerHTML}function V(r){switch(r){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function q(r){switch(r){case"small":return"14px";case"large":return"18px";default:return"16px"}}function W(r,e,s,m){let i=document.createElement("div");if(r.type==="heading"){i.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=V(m?.headingSize),n.textContent=r.label||"",i.appendChild(n),r.content){let o=document.createElement("p");o.className="forms-expert-heading-subtitle",o.textContent=r.content,i.appendChild(o)}return i}if(r.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(r.type==="paragraph"){i.className="forms-expert-group";let n=r.paragraphFontSize?`${r.paragraphFontSize}px`:q(m?.paragraphSize);if(r.label){let o=document.createElement("p");o.className="forms-expert-paragraph-label",o.style.fontSize=n,o.textContent=r.label,i.appendChild(o)}if(r.content){let o=document.createElement("div");o.className="forms-expert-paragraph",o.style.fontSize=n,o.innerHTML=r.content,i.appendChild(o)}return i}if(r.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=r.name,n.value=String(r.defaultValue??e??""),i.appendChild(n),i.style.display="none",i}if(r.type==="checkbox"||r.type==="toggle"||r.type==="consent"){i.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${r.name}`,n.name=r.name,n.className="forms-expert-checkbox",n.checked=!!e,r.required&&(n.required=!0);let o=document.createElement("label");o.htmlFor=n.id;let p=r.type==="consent"?r.consentText||r.label||r.name:r.label||r.name;if(o.innerHTML=`${b(p)}${r.required?'<span class="forms-expert-required">*</span>':""}`,i.appendChild(n),i.appendChild(o),r.type==="consent"&&r.consentUrl){let t=document.createElement("a");t.href=r.consentUrl,t.target="_blank",t.rel="noopener noreferrer",t.textContent="View policy",t.className="forms-expert-consent-link",i.appendChild(t)}if(s){let t=document.createElement("div");t.className="forms-expert-error-message",t.textContent=s,i.appendChild(t)}return i}i.className="forms-expert-group";let u=document.createElement("label");u.className="forms-expert-label",u.htmlFor=`mira-field-${r.name}`,u.innerHTML=`${b(r.label||r.name)}${r.required?'<span class="forms-expert-required">*</span>':""}`,i.appendChild(u);let c=document.createElement("div");c.className="forms-expert-input-wrapper";let a;switch(r.type){case"textarea":case"richText":a=document.createElement("textarea"),a.className="forms-expert-textarea",a.value=String(e||""),r.maxLength&&(a.maxLength=r.maxLength);break;case"select":case"dropdown":{a=document.createElement("select"),a.className="forms-expert-select";let n=document.createElement("option");n.value="",n.textContent=r.placeholder||"Select an option...",a.appendChild(n),(r.options||[]).forEach(p=>{let t=document.createElement("option");t.value=p,t.textContent=p,e===p&&(t.selected=!0),a.appendChild(t)});break}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(r.options||[]).forEach(p=>{let t=document.createElement("label");t.className="forms-expert-radio-item";let l=document.createElement("input");l.type="radio",l.name=r.name,l.value=p,l.checked=e===p,t.appendChild(l),t.appendChild(document.createTextNode(` ${p}`)),n.appendChild(t)}),c.appendChild(n),s){let p=document.createElement("div");p.className="forms-expert-error-message",p.textContent=s,c.appendChild(p)}return i.appendChild(c),i}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let o=e||[];if((r.options||[]).forEach(t=>{let l=document.createElement("label");l.className="forms-expert-checkbox-item";let d=document.createElement("input");d.type="checkbox",d.name=r.name,d.value=t,d.checked=o.includes(t),l.appendChild(d),l.appendChild(document.createTextNode(` ${t}`)),n.appendChild(l)}),c.appendChild(n),s){let t=document.createElement("div");t.className="forms-expert-error-message",t.textContent=s,c.appendChild(t)}return i.appendChild(c),i}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let o=r.ratingMax||5,p=e||0;for(let t=1;t<=o;t++){let l=document.createElement("button");l.type="button",l.className=`forms-expert-rating-star ${t<=p?"active":""}`,l.textContent="\u2605",l.dataset.value=String(t),n.appendChild(l)}if(c.appendChild(n),s){let t=document.createElement("div");t.className="forms-expert-error-message",t.textContent=s,c.appendChild(t)}return i.appendChild(c),i}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let o=r.min??(r.type==="opinionScale"?0:1),p=r.max??(r.type==="opinionScale"?10:5),t=e;for(let l=o;l<=p;l++){let d=document.createElement("button");d.type="button",d.className=`forms-expert-scale-btn ${t===l?"active":""}`,d.textContent=String(l),d.dataset.value=String(l),n.appendChild(d)}if(c.appendChild(n),r.lowLabel||r.highLabel){let l=document.createElement("div");l.className="forms-expert-scale-labels",l.innerHTML=`<span>${b(r.lowLabel||"")}</span><span>${b(r.highLabel||"")}</span>`,c.appendChild(l)}if(s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,c.appendChild(l)}return i.appendChild(c),i}case"slider":{a=document.createElement("input"),a.type="range",a.className="forms-expert-slider",a.min=String(r.min??0),a.max=String(r.max??100),a.step=String(r.step??1),a.value=String(e??r.min??0);break}case"file":a=document.createElement("input"),a.type="file",a.className="forms-expert-file",r.allowedMimeTypes?.length&&(a.accept=r.allowedMimeTypes.join(",")),r.multiple&&(a.multiple=!0);break;case"currency":{a=document.createElement("input"),a.type="number",a.className="forms-expert-input",a.value=String(e??""),r.min!==void 0&&(a.min=String(r.min)),r.max!==void 0&&(a.max=String(r.max)),a.step=String(r.step||.01);break}case"phone":a=document.createElement("input"),a.type="tel",a.className="forms-expert-input",a.value=String(e||"");break;case"url":a=document.createElement("input"),a.type="url",a.className="forms-expert-input",a.value=String(e||"");break;case"password":a=document.createElement("input"),a.type="password",a.className="forms-expert-input",a.value=String(e||"");break;case"time":a=document.createElement("input"),a.type="time",a.className="forms-expert-input",a.value=String(e||"");break;case"datetime":a=document.createElement("input"),a.type="datetime-local",a.className="forms-expert-input",a.value=String(e||"");break;case"colorPicker":a=document.createElement("input"),a.type="color",a.className="forms-expert-color",a.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let o=e||{},p=document.createElement("input");p.type="date",p.className="forms-expert-input",p.name=`${r.name}.start`,p.value=o.start||"";let t=document.createElement("input");if(t.type="date",t.className="forms-expert-input",t.name=`${r.name}.end`,t.value=o.end||"",n.appendChild(p),n.appendChild(t),c.appendChild(n),s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,c.appendChild(l)}return i.appendChild(c),i}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let o=r.addressFields||["street","city","state","zip","country"],p=e||{},t={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(o.forEach(l=>{let d=document.createElement("input");d.type="text",d.className="forms-expert-input",d.name=`${r.name}.${l}`,d.placeholder=t[l]||l,d.value=p[l]||"",n.appendChild(d)}),c.appendChild(n),s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,c.appendChild(l)}return i.appendChild(c),i}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let o=r.nameFields||["first","last"],p=e||{},t={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(o.forEach(l=>{let d=document.createElement("input");d.type="text",d.className="forms-expert-input",d.name=`${r.name}.${l}`,d.placeholder=t[l]||l,d.value=p[l]||"",n.appendChild(d)}),c.appendChild(n),s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,c.appendChild(l)}return i.appendChild(c),i}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let o=r.options||[],p=e;if(o.forEach(t=>{let l=document.createElement("button");if(l.type="button",l.className=`forms-expert-image-choice-item ${p===t.value?"active":""}`,l.dataset.value=t.value,t.imageUrl){let f=document.createElement("img");f.src=t.imageUrl,f.alt=t.label,l.appendChild(f)}let d=document.createElement("span");d.textContent=t.label,l.appendChild(d),n.appendChild(l)}),c.appendChild(n),s){let t=document.createElement("div");t.className="forms-expert-error-message",t.textContent=s,c.appendChild(t)}return i.appendChild(c),i}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let o=r.options||[];if((e||[...o]).forEach((t,l)=>{let d=document.createElement("div");d.className="forms-expert-ranking-item",d.textContent=`${l+1}. ${t}`,d.dataset.value=t,n.appendChild(d)}),c.appendChild(n),s){let t=document.createElement("div");t.className="forms-expert-error-message",t.textContent=s,c.appendChild(t)}return i.appendChild(c),i}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let o=e||{},p=document.createElement("input");p.type="text",p.className="forms-expert-input",p.name=`${r.name}.address`,p.placeholder="Address",p.value=o.address||"",n.appendChild(p);let t=document.createElement("div");t.className="forms-expert-location-coords";let l=document.createElement("input");l.type="number",l.className="forms-expert-input",l.name=`${r.name}.lat`,l.placeholder="Latitude",l.step="any",l.value=o.lat!==void 0?String(o.lat):"";let d=document.createElement("input");if(d.type="number",d.className="forms-expert-input",d.name=`${r.name}.lng`,d.placeholder="Longitude",d.step="any",d.value=o.lng!==void 0?String(o.lng):"",t.appendChild(l),t.appendChild(d),n.appendChild(t),c.appendChild(n),s){let f=document.createElement("div");f.className="forms-expert-error-message",f.textContent=s,c.appendChild(f)}return i.appendChild(c),i}default:a=document.createElement("input"),a.type=r.type==="email"?"email":r.type==="number"?"number":r.type==="date"?"date":"text",a.className="forms-expert-input",a.value=String(e||""),r.type==="number"&&(r.min!==void 0&&(a.min=String(r.min)),r.max!==void 0&&(a.max=String(r.max)),r.step!==void 0&&(a.step=String(r.step)));break}if(a.id=`mira-field-${r.name}`,a.name=r.name,r.placeholder&&"placeholder"in a&&(a.placeholder=r.placeholder),r.required&&(a.required=!0),s&&a.classList.add("forms-expert-error"),c.appendChild(a),s){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=s,c.appendChild(n)}return i.appendChild(c),i}function k(r,e={},s={},m={}){let i=document.createElement("form");if(i.className="forms-expert",m.hideRequiredAsterisk){let t=document.createElement("style");t.textContent=".forms-expert .forms-expert-required { display: none; }",i.appendChild(t)}if(m.showFormName!==!1&&m.formName){let t=document.createElement("h1");t.className="forms-expert-title",t.textContent=m.formName,t.style.fontSize="1.5rem",t.style.fontWeight="700",t.style.marginBottom="0.5rem",i.appendChild(t)}let u=r.styling;if(r.fields.forEach(t=>{let l=W(t,e[t.name],s[t.name],u);i.appendChild(l)}),m.honeypot){let t=document.createElement("input");t.type="text",t.name="_hp",t.className="forms-expert-honeypot",t.tabIndex=-1,t.autocomplete="off",i.appendChild(t)}let c=document.createElement("input");c.type="hidden",c.name="pageUrl",c.value=typeof window<"u"?window.location.href:"",i.appendChild(c);let a=document.createElement("div");a.className="forms-expert-button-wrapper";let n=document.createElement("button");n.type="submit",n.className="forms-expert-button",n.disabled=m.isLoading||!1,m.isLoading?n.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `:n.textContent=m.submitText||"Submit";let o=m.secondaryButton,p=()=>{if(!o?.enabled)return null;let t=document.createElement("a");t.className="forms-expert-secondary-btn",t.href=o.href||"#",t.textContent=o.text||"Learn More",o.openInNewTab&&(t.target="_blank",t.rel="noopener noreferrer");let l=u?.primaryColor||"#3b82f6",d=o.color||l;return o.style==="filled"?(t.style.background=d,t.style.color=o.textColor||"#ffffff",t.style.border="none"):o.style==="outlined"?(t.style.background="transparent",t.style.color=o.textColor||d,t.style.border=`2px solid ${d}`):o.style==="link"?(t.style.background="transparent",t.style.color=o.textColor||d,t.style.border="none",t.style.textDecoration="underline"):(t.style.background="transparent",t.style.color=o.textColor||d,t.style.border="none"),o.marginTop!=null&&(t.style.marginTop=`${o.marginTop}px`),o.marginBottom!=null&&(t.style.marginBottom=`${o.marginBottom}px`),t};if(o?.enabled&&o.position==="left"){let t=p();t&&a.appendChild(t)}if(a.appendChild(n),o?.enabled&&o.position!=="left"&&o.position!=="below"){let t=p();t&&a.appendChild(t)}if(i.appendChild(a),o?.enabled&&o.position==="below"){let t=document.createElement("div");t.className="forms-expert-secondary-below";let l=o.align||m.buttonAlign||"left";t.style.justifyContent=l==="center"?"center":l==="right"?"flex-end":"flex-start",o.marginTop!=null&&(t.style.marginTop=`${o.marginTop}px`),o.marginBottom!=null&&(t.style.marginBottom=`${o.marginBottom}px`);let d=p();d&&(d.style.marginTop="0",d.style.marginBottom="0",t.appendChild(d)),i.appendChild(t)}if(m.showBranding!==!1){let t=m.brandingText||"Powered by Forms Expert",l=m.brandingUrl||"https://mira.io",d=document.createElement("div");d.className="forms-expert-branding",d.innerHTML=`<a href="${l}" target="_blank" rel="noopener">${t}</a>`,i.appendChild(d)}return i}function F(r){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${b(r)}</div>
  `,e}function $(r){return r.reduce((e,s)=>({...e,[s.field]:s.message}),{})}var g=class extends Error{constructor(s,m,i,u){super(s);this.code=m;this.statusCode=i;this.retryAfter=u;this.name="FormsError"}},h=class extends Error{constructor(s){super("Validation failed");this.errors=s;this.name="FormValidationError"}};var x=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let s=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${s}token=${encodeURIComponent(this.apiKey)}`}async request(e,s,m){let i=this.buildUrl(s),u=await fetch(i,{method:e,headers:{"Content-Type":"application/json"},body:m?JSON.stringify(m):void 0}),c=await u.json();if(!u.ok)throw new g(c.message||"Request failed",c.code||"UNKNOWN_ERROR",u.status,c.retryAfter);return c}async isActive(e,s){let m=s?`?lang=${encodeURIComponent(s)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${m}`)}async validate(e,s){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:s})}async submit(e,s,m){let i=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(s).some(c=>c instanceof File||c instanceof FileList&&c.length>0)||m?.onProgress?this.submitWithFormData(i,s,m):this.request("POST",`/f/${this.resourceId}/${e}`,{data:s,pageUrl:m?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:m?.captchaToken})}submitWithFormData(e,s,m){return new Promise((i,u)=>{let c=new FormData;for(let[o,p]of Object.entries(s))p instanceof File?c.append(o,p):p instanceof FileList?Array.from(p).forEach(t=>c.append(o,t)):p!=null&&c.append(`data[${o}]`,String(p));let a=m?.pageUrl||(typeof window<"u"?window.location.href:"");a&&c.append("pageUrl",a),m?.captchaToken&&c.append("captchaToken",m.captchaToken);let n=new XMLHttpRequest;m?.onProgress&&n.upload.addEventListener("progress",o=>{o.lengthComputable&&m.onProgress({loaded:o.loaded,total:o.total,percentage:Math.round(o.loaded/o.total*100)})}),n.addEventListener("load",()=>{try{let o=JSON.parse(n.responseText);n.status>=200&&n.status<300?i(o):u(new g(o.message||"Submission failed",o.code||"UNKNOWN_ERROR",n.status,o.retryAfter))}catch{u(new g("Invalid response","PARSE_ERROR",n.status))}}),n.addEventListener("error",()=>{u(new g("Network error","NETWORK_ERROR",0))}),n.addEventListener("abort",()=>{u(new g("Request aborted","ABORTED",0))}),n.open("POST",e),n.send(c)})}async trackView(e){let s=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"}}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var C=class{constructor(e,s,m={}){this.config=null;this.apiClient=e,this.slug=s,this.options=m}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,s){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let i=await this.validate(e);if(!i.valid)throw this.options.onValidationError?.(i.errors),new h(i.errors)}let m=await this.apiClient.submit(this.slug,e,s);return this.options.onSubmitSuccess?.(m),m}catch(m){throw m instanceof g&&this.options.onSubmitError?.(m),m}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},y=class{constructor(e){this.apiClient=new x(e)}async isActive(e,s){return this.apiClient.isActive(e,s)}async validate(e,s){return this.apiClient.validate(e,s)}async submit(e,s,m){return this.apiClient.submit(e,s,m)}form(e,s){return new C(this.apiClient,e,s)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,s,m){let i=m?.maxRetries??3,u=null;for(let c=0;c<i;c++)try{return await this.submit(e,s,m)}catch(a){if(u=a,a instanceof g){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(a.code))throw a;if(a.code.includes("RATE_LIMIT")){let n=a.retryAfter||Math.pow(2,c)*1e3;await new Promise(o=>setTimeout(o,n));continue}}await new Promise(n=>setTimeout(n,Math.pow(2,c)*1e3))}throw u}};var E=class{constructor(e,s){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new y(e),this.options=s;let m=s.target;if(typeof m=="string"){let i=document.querySelector(m);if(!i)throw new Error(`Element not found: ${m}`);this.container=i}else this.container=m}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=v(e),document.head.appendChild(this.styleEl)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let i=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(F(i));return}let e={...this.config.schema.styling,...this.config.styling},s={...this.config.schema,styling:e},m=k(s,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign});m.addEventListener("input",i=>{let u=i.target;u.name&&u.name!=="_hp"&&u.name!=="pageUrl"&&(u.type==="checkbox"?this.values[u.name]=u.checked:u.type==="file"?this.values[u.name]=u.multiple?u.files:u.files?.[0]:this.values[u.name]=u.value,this.errors[u.name]&&(delete this.errors[u.name],this.render()))}),m.addEventListener("submit",i=>{i.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(m)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let s=this.options.redirectUrl||this.config.settings?.redirectUrl;s&&setTimeout(()=>{window.location.href=s},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof h?(this.errors=$(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function T(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let s=e.getAttribute("data-api-key"),m=e.getAttribute("data-resource-id"),i=e.getAttribute("data-forms-expert"),u=e.getAttribute("data-base-url")||void 0;if(!s||!m||!i){console.error("Forms Expert: Missing required attributes",{apiKey:!!s,resourceId:!!m,slug:!!i});return}new E({apiKey:s,resourceId:m,baseUrl:u},{target:e,slug:i,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T());export{E as FormWidget,T as autoInit,$ as errorsToRecord,v as generateFormStyles,W as renderField,k as renderForm,F as renderSuccess};
//# sourceMappingURL=index.js.map