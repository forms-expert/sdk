var T={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function M(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function U(t){switch(t){case"none":return"0";case"small":return"0.25rem";case"medium":return"0.375rem";case"large":return"0.75rem";case"full":return"9999px";default:return"0.375rem"}}function B(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function O(t){switch(t){case"sm":case"small":return"0.875rem";case"md":case"medium":return"1rem";case"lg":case"large":return"1.125rem";default:return"1rem"}}function H(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function V(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function W(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function q(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function D(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function K(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function L(t=T){let e={...T,...t},i=M(e.borderRadius),s=U(e.fieldBorderRadius),l=B(e.buttonRadius),m=O(e.fontSize),o=H(e.placeholderFontSize),n=V(e.fieldSpacing),p=W(e.formPadding),d=q(e.labelSpacing),a=D(e.formWidth),r=e.primaryColor,u=e.buttonColor,c=e.fontFamily?e.fontFamily.includes(",")?e.fontFamily:`${e.fontFamily}, sans-serif`:"inherit",h=K(e.buttonAlign),f={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],x=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:f.px,C=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:f.py,w=e.buttonFontSize!=null?`${e.buttonFontSize}px`:f.fs,F=e.buttonGradient||(e.buttonStyle==="filled"?r:"transparent");return`
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
  font-family: ${c};
  font-size: ${m};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${p};
  border-radius: ${i};
  box-sizing: border-box;
  max-width: ${a};
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
  border-radius: ${i} ${i} 0 0;
  margin-bottom: 1rem;
}

.forms-expert-group {
  margin-bottom: ${n};
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"display: flex; align-items: flex-start; gap: 1rem;":""}
}

.forms-expert-label {
  display: block;
  font-weight: 500;
  color: ${e.textColor};
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"width: 33%; flex-shrink: 0; padding-top: 0.5rem; margin-bottom: 0;":`margin-bottom: ${d};`}
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
  font-size: ${m};
  font-family: inherit;
  background-color: ${e.inputBackgroundColor||(e.theme==="dark"?"#374151":"#ffffff")};
  color: ${e.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${o};${e.placeholderColor?`
  color: ${e.placeholderColor};`:""}
}

.forms-expert-input:focus,
.forms-expert-textarea:focus,
.forms-expert-select:focus {
  outline: none !important;
  border-color: ${e.primaryColor} !important;
  box-shadow: 0 0 0 2px ${e.primaryColor}33 !important;
  -webkit-appearance: none;
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
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: ${n};
}

.forms-expert-checkbox {
  width: 1rem;
  height: 1rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
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
  font-size: ${m};
  background-color: ${e.inputBackgroundColor||(e.theme==="dark"?"#374151":"#ffffff")};
  cursor: pointer;
}

.forms-expert-error-message {
  color: ${e.errorColor||"#ef4444"};
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.forms-expert-button-wrapper {
  display: flex;
  justify-content: ${h};
  margin-top: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.forms-expert-button {
  ${e.buttonFullWidth?"width: 100%;":e.buttonAlign?"":"width: 100%;"}
  padding: ${C} ${x};
  font-weight: 500;
  font-size: ${w};
  font-family: inherit;
  border-radius: ${l};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  max-width: 100%;
  box-sizing: border-box;
  flex-shrink: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${e.buttonStyle==="filled"?`background: ${F}; color: ${u||"white"}; border: none;`:`background: transparent; color: ${r}; border: 2px solid ${r};`}
}

.forms-expert-button:hover {
  filter: brightness(0.9);
}

.forms-expert-button:active {
  transform: scale(0.98);
  filter: brightness(0.85);
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
  font-size: ${m};
  font-family: inherit;
  border-radius: ${l};
  cursor: pointer;
  transition: opacity 0.2s;
  text-decoration: none;
  max-width: 100%;
  box-sizing: border-box;
  flex-shrink: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.forms-expert-secondary-btn:hover { filter: brightness(0.9); }
.forms-expert-secondary-btn:active { filter: brightness(0.85); }

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
  min-width: 2.25rem; height: 2.25rem; border-radius: ${i}; cursor: pointer;
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
  border: 2px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}; border-radius: ${i};
  padding: 0.5rem; cursor: pointer; text-align: center; transition: border-color 0.15s;
}
.forms-expert-image-choice-item.active { border-color: ${e.primaryColor}; }
.forms-expert-image-choice-item img { max-width: 80px; max-height: 80px; object-fit: cover; border-radius: ${i}; }

/* Responsive button scaling */
@media (max-width: 480px) {
  .forms-expert-button,
  .forms-expert-secondary-btn {
    padding-left: max(0.5rem, min(${x}, 3vw));
    padding-right: max(0.5rem, min(${x}, 3vw));
    font-size: max(0.75rem, min(${w}, 3.5vw));
  }
}

${e.customCss||""}
`.trim()}function E(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function j(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function _(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function b(t,e){return e?`${t} ${e}`:t}function G(t){switch(t){case"1/4":return"25%";case"1/3":return"33.333%";case"1/2":return"50%";case"2/3":return"66.666%";case"3/4":return"75%";case"full":return"100%";default:return}}function $(t,e,i,s){let l=document.createElement("div");if(t.type==="heading"){l.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=j(s?.headingSize),n.textContent=t.label||"",l.appendChild(n),t.content){let p=document.createElement("p");p.className="forms-expert-heading-subtitle",p.textContent=t.content,l.appendChild(p)}return l}if(t.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(t.type==="paragraph"){l.className="forms-expert-group";let n=t.paragraphFontSize?`${t.paragraphFontSize}px`:_(s?.paragraphSize);if(t.label){let p=document.createElement("p");p.className="forms-expert-paragraph-label",p.style.fontSize=n,p.textContent=t.label,l.appendChild(p)}if(t.content){let p=document.createElement("div");p.className="forms-expert-paragraph",p.style.fontSize=n,p.innerHTML=t.content,l.appendChild(p)}return l}if(t.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=t.name,n.value=String(t.defaultValue??e??""),l.appendChild(n),l.style.display="none",l}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){l.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${t.name}`,n.name=t.name,n.className="forms-expert-checkbox",n.checked=!!e,t.required&&(n.required=!0);let p=document.createElement("div"),d=document.createElement("label");d.htmlFor=n.id,d.style.cursor="pointer",t.type==="consent"&&t.consentFontSize&&(d.style.fontSize=`${t.consentFontSize}px`);let a=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(d.innerHTML=`${E(a)}${t.required?'<span class="forms-expert-required">*</span>':""}`,p.appendChild(d),t.type==="consent"&&t.consentUrl){let r=document.createElement("a");r.href=t.consentUrl,r.target="_blank",r.rel="noopener noreferrer",r.textContent="View policy",r.className="forms-expert-consent-link",p.appendChild(r)}if(l.appendChild(n),l.appendChild(p),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,l.appendChild(r)}return l}if(l.className="forms-expert-group",t.label){let n=document.createElement("label");n.className=`forms-expert-label${s?.labelClassName?" "+s.labelClassName:""}`,n.htmlFor=`mira-field-${t.name}`,n.innerHTML=`${E(t.label)}${t.required?'<span class="forms-expert-required">*</span>':""}`,l.appendChild(n)}let m=document.createElement("div");m.className="forms-expert-input-wrapper";let o;switch(t.type){case"textarea":case"richText":o=document.createElement("textarea"),o.className=b("forms-expert-textarea",s?.fieldClassName),o.value=String(e||""),t.maxLength&&(o.maxLength=t.maxLength);break;case"select":case"dropdown":{o=document.createElement("select"),o.className=b("forms-expert-select",s?.fieldClassName);let n=document.createElement("option");n.value="",n.textContent=t.placeholder||"Select an option...",o.appendChild(n),(t.options||[]).forEach(d=>{let a=document.createElement("option");a.value=d,a.textContent=d,e===d&&(a.selected=!0),o.appendChild(a)});break}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(t.options||[]).forEach(d=>{let a=document.createElement("label");a.className="forms-expert-radio-item";let r=document.createElement("input");r.type="radio",r.name=t.name,r.value=d,r.checked=e===d,a.appendChild(r),a.appendChild(document.createTextNode(` ${d}`)),n.appendChild(a)}),m.appendChild(n),i){let d=document.createElement("div");d.className="forms-expert-error-message",d.textContent=i,m.appendChild(d)}return l.appendChild(m),l}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let p=e||[];if((t.options||[]).forEach(a=>{let r=document.createElement("label");r.className="forms-expert-checkbox-item";let u=document.createElement("input");u.type="checkbox",u.name=t.name,u.value=a,u.checked=p.includes(a),r.appendChild(u),r.appendChild(document.createTextNode(` ${a}`)),n.appendChild(r)}),m.appendChild(n),i){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=i,m.appendChild(a)}return l.appendChild(m),l}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let p=t.ratingMax||5,d=e||0;for(let a=1;a<=p;a++){let r=document.createElement("button");r.type="button",r.className=`forms-expert-rating-star ${a<=d?"active":""}`,r.textContent="\u2605",r.dataset.value=String(a),n.appendChild(r)}if(m.appendChild(n),i){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=i,m.appendChild(a)}return l.appendChild(m),l}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let p=t.min??(t.type==="opinionScale"?0:1),d=t.max??(t.type==="opinionScale"?10:5),a=e;for(let r=p;r<=d;r++){let u=document.createElement("button");u.type="button",u.className=`forms-expert-scale-btn ${a===r?"active":""}`,u.textContent=String(r),u.dataset.value=String(r),n.appendChild(u)}if(m.appendChild(n),t.lowLabel||t.highLabel){let r=document.createElement("div");r.className="forms-expert-scale-labels",r.innerHTML=`<span>${E(t.lowLabel||"")}</span><span>${E(t.highLabel||"")}</span>`,m.appendChild(r)}if(i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,m.appendChild(r)}return l.appendChild(m),l}case"slider":{o=document.createElement("input"),o.type="range",o.className="forms-expert-slider",o.min=String(t.min??0),o.max=String(t.max??100),o.step=String(t.step??1),o.value=String(e??t.min??0);break}case"file":o=document.createElement("input"),o.type="file",o.className="forms-expert-file",t.allowedMimeTypes?.length&&(o.accept=t.allowedMimeTypes.join(",")),t.multiple&&(o.multiple=!0);break;case"currency":{o=document.createElement("input"),o.type="number",o.className=b("forms-expert-input",s?.fieldClassName),o.value=String(e??""),t.min!==void 0&&(o.min=String(t.min)),t.max!==void 0&&(o.max=String(t.max)),o.step=String(t.step||.01);break}case"phone":o=document.createElement("input"),o.type="tel",o.className=b("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"url":o=document.createElement("input"),o.type="url",o.className=b("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"password":o=document.createElement("input"),o.type="password",o.className=b("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"time":o=document.createElement("input"),o.type="time",o.className=b("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"datetime":o=document.createElement("input"),o.type="datetime-local",o.className=b("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"colorPicker":o=document.createElement("input"),o.type="color",o.className="forms-expert-color",o.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let p=e||{},d=document.createElement("input");d.type="date",d.className=b("forms-expert-input",s?.fieldClassName),d.name=`${t.name}.start`,d.value=p.start||"";let a=document.createElement("input");if(a.type="date",a.className=b("forms-expert-input",s?.fieldClassName),a.name=`${t.name}.end`,a.value=p.end||"",n.appendChild(d),n.appendChild(a),m.appendChild(n),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,m.appendChild(r)}return l.appendChild(m),l}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let p=t.addressFields||["street","city","state","zip","country"],d=e||{},a={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(p.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=b("forms-expert-input",s?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=a[r]||r,u.value=d[r]||"",n.appendChild(u)}),m.appendChild(n),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,m.appendChild(r)}return l.appendChild(m),l}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let p=t.nameFields||["first","last"],d=e||{},a={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(p.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=b("forms-expert-input",s?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=a[r]||r,u.value=d[r]||"",n.appendChild(u)}),m.appendChild(n),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,m.appendChild(r)}return l.appendChild(m),l}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let p=t.options||[],d=e;if(p.forEach(a=>{let r=document.createElement("button");if(r.type="button",r.className=`forms-expert-image-choice-item ${d===a.value?"active":""}`,r.dataset.value=a.value,a.imageUrl){let c=document.createElement("img");c.src=a.imageUrl,c.alt=a.label,r.appendChild(c)}let u=document.createElement("span");u.textContent=a.label,r.appendChild(u),n.appendChild(r)}),m.appendChild(n),i){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=i,m.appendChild(a)}return l.appendChild(m),l}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let p=t.options||[];if((e||[...p]).forEach((a,r)=>{let u=document.createElement("div");u.className="forms-expert-ranking-item",u.textContent=`${r+1}. ${a}`,u.dataset.value=a,n.appendChild(u)}),m.appendChild(n),i){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=i,m.appendChild(a)}return l.appendChild(m),l}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let p=e||{},d=document.createElement("input");d.type="text",d.className=b("forms-expert-input",s?.fieldClassName),d.name=`${t.name}.address`,d.placeholder="Address",d.value=p.address||"",n.appendChild(d);let a=document.createElement("div");a.className="forms-expert-location-coords";let r=document.createElement("input");r.type="number",r.className=b("forms-expert-input",s?.fieldClassName),r.name=`${t.name}.lat`,r.placeholder="Latitude",r.step="any",r.value=p.lat!==void 0?String(p.lat):"";let u=document.createElement("input");if(u.type="number",u.className=b("forms-expert-input",s?.fieldClassName),u.name=`${t.name}.lng`,u.placeholder="Longitude",u.step="any",u.value=p.lng!==void 0?String(p.lng):"",a.appendChild(r),a.appendChild(u),n.appendChild(a),m.appendChild(n),i){let c=document.createElement("div");c.className="forms-expert-error-message",c.textContent=i,m.appendChild(c)}return l.appendChild(m),l}default:o=document.createElement("input"),o.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",o.className=b("forms-expert-input",s?.fieldClassName),o.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(o.min=String(t.min)),t.max!==void 0&&(o.max=String(t.max)),t.step!==void 0&&(o.step=String(t.step)));break}if(o.id=`mira-field-${t.name}`,o.name=t.name,t.placeholder&&"placeholder"in o&&(o.placeholder=t.placeholder),t.required&&(o.required=!0),i&&o.classList.add("forms-expert-error"),m.appendChild(o),i){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=i,m.appendChild(n)}return l.appendChild(m),l}function z(t,e={},i={},s={}){let l=document.createElement("form");if(l.className="forms-expert",s.hideRequiredAsterisk){let c=document.createElement("style");c.textContent=".forms-expert .forms-expert-required { display: none; }",l.appendChild(c)}if(s.showFormName!==!1&&s.formName){let c=document.createElement("h1");c.className="forms-expert-title",c.textContent=s.formName,c.style.fontSize=s.formNameFontSize!=null?`${s.formNameFontSize}px`:"1.5rem";let h={normal:"400",medium:"500",semibold:"600",bold:"700"};c.style.fontWeight=h[s.formNameFontWeight||"bold"]||"700",c.style.marginBottom="0.5rem",l.appendChild(c)}let m=t.styling,o=t.fields,n=0;for(;n<o.length;){let c=o[n];if(c.row!=null){let h=[c],g=n+1;for(;g<o.length&&o[g].row===c.row;)h.push(o[g]),g++;if(h.length>1){let f=document.createElement("div");f.style.display="flex",f.style.gap="0.75rem",f.style.flexWrap="wrap",h.forEach(x=>{let C=document.createElement("div"),w=G(x.width);w?C.style.flex=`0 0 calc(${w} - 0.75rem)`:C.style.flex="1 1 0",C.style.minWidth="120px";let F=$(x,e[x.name],i[x.name],m);C.appendChild(F),f.appendChild(C)}),l.appendChild(f)}else{let f=$(c,e[c.name],i[c.name],m);l.appendChild(f)}n=g}else{let h=$(c,e[c.name],i[c.name],m);l.appendChild(h),n++}}if(s.honeypot){let c=document.createElement("input");c.type="text",c.name="_hp",c.className="forms-expert-honeypot",c.tabIndex=-1,c.autocomplete="off",l.appendChild(c)}let p=document.createElement("input");p.type="hidden",p.name="pageUrl",p.value=typeof window<"u"?window.location.href:"",l.appendChild(p);let d=document.createElement("div");d.className="forms-expert-button-wrapper";let a=document.createElement("button");if(a.type="submit",a.className=b("forms-expert-button",s.buttonClassName),a.disabled=s.isLoading||!1,s.isLoading)a.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `;else{let c=m?.buttonIcon,h=m?.buttonIconPosition||"left";if(c){a.style.display="inline-flex",a.style.alignItems="center",a.style.gap="0.5rem";let g=document.createElement("span");g.style.display="inline-flex",g.style.flexShrink="0",g.innerHTML=c;let f=document.createElement("span");f.textContent=s.submitText||"Submit",h==="right"?(a.appendChild(f),a.appendChild(g)):(a.appendChild(g),a.appendChild(f))}else a.textContent=s.submitText||"Submit"}let r=s.secondaryButton,u=()=>{if(!r?.enabled)return null;let c=document.createElement("a");if(c.className="forms-expert-secondary-btn",c.href=r.href||"#",c.style.display="inline-flex",c.style.alignItems="center",c.style.gap="0.5rem",r.icon){let f=document.createElement("span");f.style.display="inline-flex",f.style.flexShrink="0",f.innerHTML=r.icon;let x=document.createElement("span");x.textContent=r.text||"Learn More",r.iconPosition==="right"?(c.appendChild(x),c.appendChild(f)):(c.appendChild(f),c.appendChild(x))}else c.textContent=r.text||"Learn More";r.openInNewTab&&(c.target="_blank",c.rel="noopener noreferrer");let h=m?.primaryColor||"#3b82f6",g=r.color||h;return r.style==="filled"?(c.style.background=g,c.style.color=r.textColor||"#ffffff",c.style.border="none"):r.style==="outlined"?(c.style.background="transparent",c.style.color=r.textColor||g,c.style.border=`2px solid ${g}`):r.style==="link"?(c.style.background="transparent",c.style.color=r.textColor||g,c.style.border="none",c.style.textDecoration="underline"):(c.style.background="transparent",c.style.color=r.textColor||g,c.style.border="none"),r.marginTop!=null&&(c.style.marginTop=`${r.marginTop}px`),r.marginBottom!=null&&(c.style.marginBottom=`${r.marginBottom}px`),r.fontSize!=null&&(c.style.fontSize=`${r.fontSize}px`),c};if(r?.enabled&&r.position==="left"){let c=u();c&&d.appendChild(c)}if(d.appendChild(a),r?.enabled&&r.position!=="left"&&r.position!=="below"){let c=u();c&&(c.style.marginLeft="auto",d.appendChild(c))}if(l.appendChild(d),r?.enabled&&r.position==="below"){let c=document.createElement("div");c.className="forms-expert-secondary-below";let h=r.align||s.buttonAlign||"left";c.style.justifyContent=h==="center"?"center":h==="right"?"flex-end":"flex-start",r.marginTop!=null&&(c.style.marginTop=`${r.marginTop}px`),r.marginBottom!=null&&(c.style.marginBottom=`${r.marginBottom}px`);let g=u();g&&(g.style.marginTop="0",g.style.marginBottom="0",c.appendChild(g)),l.appendChild(c)}if(s.showBranding!==!1){let c=s.brandingText||"Powered by Forms Expert",h=s.brandingUrl||"https://mira.io",g=document.createElement("div");g.className="forms-expert-branding",g.innerHTML=`<a href="${h}" target="_blank" rel="noopener">${c}</a>`,l.appendChild(g)}return l}function P(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${E(t)}</div>
  `,e}function I(t){return t.reduce((e,i)=>({...e,[i.field]:i.message}),{})}var y=class extends Error{constructor(i,s,l,m){super(i);this.code=s;this.statusCode=l;this.retryAfter=m;this.name="FormsError"}},S=class extends Error{constructor(i){super("Validation failed");this.errors=i;this.name="FormValidationError"}};var v=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let i=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${i}token=${encodeURIComponent(this.apiKey)}`}async request(e,i,s){let l=this.buildUrl(i),m=await fetch(l,{method:e,headers:{"Content-Type":"application/json"},body:s?JSON.stringify(s):void 0}),o=await m.json();if(!m.ok)throw new y(o.message||"Request failed",o.code||"UNKNOWN_ERROR",m.status,o.retryAfter);return o}async isActive(e,i){let s=i?`?lang=${encodeURIComponent(i)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${s}`)}async validate(e,i){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:i})}async submit(e,i,s){let l=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(i).some(o=>o instanceof File||o instanceof FileList&&o.length>0)||s?.onProgress?this.submitWithFormData(l,i,s):this.request("POST",`/f/${this.resourceId}/${e}`,{data:i,pageUrl:s?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:s?.captchaToken})}submitWithFormData(e,i,s){return new Promise((l,m)=>{let o=new FormData;for(let[d,a]of Object.entries(i))a instanceof File?o.append(d,a):a instanceof FileList?Array.from(a).forEach(r=>o.append(d,r)):a!=null&&o.append(`data[${d}]`,String(a));let n=s?.pageUrl||(typeof window<"u"?window.location.href:"");n&&o.append("pageUrl",n),s?.captchaToken&&o.append("captchaToken",s.captchaToken);let p=new XMLHttpRequest;s?.onProgress&&p.upload.addEventListener("progress",d=>{d.lengthComputable&&s.onProgress({loaded:d.loaded,total:d.total,percentage:Math.round(d.loaded/d.total*100)})}),p.addEventListener("load",()=>{try{let d=JSON.parse(p.responseText);p.status>=200&&p.status<300?l(d):m(new y(d.message||"Submission failed",d.code||"UNKNOWN_ERROR",p.status,d.retryAfter))}catch{m(new y("Invalid response","PARSE_ERROR",p.status))}}),p.addEventListener("error",()=>{m(new y("Network error","NETWORK_ERROR",0))}),p.addEventListener("abort",()=>{m(new y("Request aborted","ABORTED",0))}),p.open("POST",e),p.send(o)})}async trackView(e){let i=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var N=class{constructor(e,i,s={}){this.config=null;this.apiClient=e,this.slug=i,this.options=s}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,i){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let l=await this.validate(e);if(!l.valid)throw this.options.onValidationError?.(l.errors),new S(l.errors)}let s=await this.apiClient.submit(this.slug,e,i);return this.options.onSubmitSuccess?.(s),s}catch(s){throw s instanceof y&&this.options.onSubmitError?.(s),s}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},k=class{constructor(e){this.apiClient=new v(e)}async isActive(e,i){return this.apiClient.isActive(e,i)}async validate(e,i){return this.apiClient.validate(e,i)}async submit(e,i,s){return this.apiClient.submit(e,i,s)}form(e,i){return new N(this.apiClient,e,i)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,i,s){let l=s?.maxRetries??3,m=null;for(let o=0;o<l;o++)try{return await this.submit(e,i,s)}catch(n){if(m=n,n instanceof y){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(n.code))throw n;if(n.code.includes("RATE_LIMIT")){let p=n.retryAfter||Math.pow(2,o)*1e3;await new Promise(d=>setTimeout(d,p));continue}}await new Promise(p=>setTimeout(p,Math.pow(2,o)*1e3))}throw m}};var R=class{constructor(e,i){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new k(e),this.options=i;let s=i.target;if(typeof s=="string"){let l=document.querySelector(s);if(!l)throw new Error(`Element not found: ${s}`);this.container=l}else this.container=s}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=L(e),document.head.appendChild(this.styleEl),this.injectGoogleFont(e?.fontFamily)}injectGoogleFont(e){if(!e)return;let i=["Inter","Roboto","Open Sans","Lato","Poppins","Montserrat","Nunito","Source Sans Pro","Raleway","Ubuntu","Playfair Display","Merriweather"],s=e.split(",")[0]?.trim();if(!s||!i.includes(s))return;let l=`forms-expert-font-${this.options.slug}`;if(document.getElementById(l))return;let m=document.createElement("link");m.id=l,m.rel="stylesheet",m.href=`https://fonts.googleapis.com/css2?family=${s.replace(/ /g,"+")}:wght@400;500;600;700&display=swap`,document.head.appendChild(m)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let l=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(P(l));return}let e={...this.config.schema.styling,...this.config.styling},i={...this.config.schema,styling:e},s=z(i,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign,buttonClassName:e.buttonClassName,formNameFontSize:e.formNameFontSize,formNameFontWeight:e.formNameFontWeight});s.addEventListener("input",l=>{let m=l.target;m.name&&m.name!=="_hp"&&m.name!=="pageUrl"&&(m.type==="checkbox"?this.values[m.name]=m.checked:m.type==="file"?this.values[m.name]=m.multiple?m.files:m.files?.[0]:this.values[m.name]=m.value,this.errors[m.name]&&(delete this.errors[m.name],this.render()))}),s.addEventListener("submit",l=>{l.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(s)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let i=this.options.redirectUrl||this.config.settings?.redirectUrl;i&&setTimeout(()=>{window.location.href=i},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof S?(this.errors=I(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function A(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let i=e.getAttribute("data-api-key"),s=e.getAttribute("data-resource-id"),l=e.getAttribute("data-forms-expert"),m=e.getAttribute("data-base-url")||void 0;if(!i||!s||!l){console.error("Forms Expert: Missing required attributes",{apiKey:!!i,resourceId:!!s,slug:!!l});return}new R({apiKey:i,resourceId:s,baseUrl:m},{target:e,slug:l,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",A):A());export{R as FormWidget,A as autoInit,I as errorsToRecord,L as generateFormStyles,$ as renderField,z as renderForm,P as renderSuccess};
//# sourceMappingURL=index.js.map