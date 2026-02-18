var T={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function M(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function U(t){switch(t){case"none":return"0";case"small":return"0.25rem";case"medium":return"0.375rem";case"large":return"0.75rem";case"full":return"9999px";default:return"0.375rem"}}function B(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function O(t){switch(t){case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem";default:return"1rem"}}function H(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function V(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function W(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function q(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function D(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function K(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function L(t=T){let e={...T,...t},a=M(e.borderRadius),i=U(e.fieldBorderRadius),l=B(e.buttonRadius),m=O(e.fontSize),s=H(e.placeholderFontSize),n=V(e.fieldSpacing),d=W(e.formPadding),p=q(e.labelSpacing),o=D(e.formWidth),r=e.primaryColor,u=e.buttonColor,c=e.fontFamily?e.fontFamily.includes(",")?e.fontFamily:`${e.fontFamily}, sans-serif`:"inherit",h=K(e.buttonAlign),f={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],x=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:f.px,C=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:f.py,w=e.buttonFontSize!=null?`${e.buttonFontSize}px`:f.fs,F=e.buttonGradient||(e.buttonStyle==="filled"?r:"transparent");return`
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
  padding: ${d};
  border-radius: ${a};
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
  border-radius: ${a} ${a} 0 0;
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
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"width: 33%; flex-shrink: 0; padding-top: 0.5rem; margin-bottom: 0;":`margin-bottom: ${p};`}
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
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":i};
  font-size: ${m};
  font-family: inherit;
  background-color: ${e.inputBackgroundColor||(e.theme==="dark"?"#374151":"#ffffff")};
  color: ${e.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${s};${e.placeholderColor?`
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
  align-items: center;
  gap: 0.5rem;
  margin-bottom: ${n};
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
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":i};
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
`.trim()}function E(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function j(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function _(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function b(t,e){return e?`${t} ${e}`:t}function G(t){switch(t){case"1/4":return"25%";case"1/3":return"33.333%";case"1/2":return"50%";case"2/3":return"66.666%";case"3/4":return"75%";case"full":return"100%";default:return}}function $(t,e,a,i){let l=document.createElement("div");if(t.type==="heading"){l.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=j(i?.headingSize),n.textContent=t.label||"",l.appendChild(n),t.content){let d=document.createElement("p");d.className="forms-expert-heading-subtitle",d.textContent=t.content,l.appendChild(d)}return l}if(t.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(t.type==="paragraph"){l.className="forms-expert-group";let n=t.paragraphFontSize?`${t.paragraphFontSize}px`:_(i?.paragraphSize);if(t.label){let d=document.createElement("p");d.className="forms-expert-paragraph-label",d.style.fontSize=n,d.textContent=t.label,l.appendChild(d)}if(t.content){let d=document.createElement("div");d.className="forms-expert-paragraph",d.style.fontSize=n,d.innerHTML=t.content,l.appendChild(d)}return l}if(t.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=t.name,n.value=String(t.defaultValue??e??""),l.appendChild(n),l.style.display="none",l}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){l.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${t.name}`,n.name=t.name,n.className="forms-expert-checkbox",n.checked=!!e,t.required&&(n.required=!0);let d=document.createElement("label");d.htmlFor=n.id;let p=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(d.innerHTML=`${E(p)}${t.required?'<span class="forms-expert-required">*</span>':""}`,l.appendChild(n),l.appendChild(d),t.type==="consent"&&t.consentUrl){let o=document.createElement("a");o.href=t.consentUrl,o.target="_blank",o.rel="noopener noreferrer",o.textContent="View policy",o.className="forms-expert-consent-link",l.appendChild(o)}if(a){let o=document.createElement("div");o.className="forms-expert-error-message",o.textContent=a,l.appendChild(o)}return l}if(l.className="forms-expert-group",t.label){let n=document.createElement("label");n.className=`forms-expert-label${i?.labelClassName?" "+i.labelClassName:""}`,n.htmlFor=`mira-field-${t.name}`,n.innerHTML=`${E(t.label)}${t.required?'<span class="forms-expert-required">*</span>':""}`,l.appendChild(n)}let m=document.createElement("div");m.className="forms-expert-input-wrapper";let s;switch(t.type){case"textarea":case"richText":s=document.createElement("textarea"),s.className=b("forms-expert-textarea",i?.fieldClassName),s.value=String(e||""),t.maxLength&&(s.maxLength=t.maxLength);break;case"select":case"dropdown":{s=document.createElement("select"),s.className=b("forms-expert-select",i?.fieldClassName);let n=document.createElement("option");n.value="",n.textContent=t.placeholder||"Select an option...",s.appendChild(n),(t.options||[]).forEach(p=>{let o=document.createElement("option");o.value=p,o.textContent=p,e===p&&(o.selected=!0),s.appendChild(o)});break}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(t.options||[]).forEach(p=>{let o=document.createElement("label");o.className="forms-expert-radio-item";let r=document.createElement("input");r.type="radio",r.name=t.name,r.value=p,r.checked=e===p,o.appendChild(r),o.appendChild(document.createTextNode(` ${p}`)),n.appendChild(o)}),m.appendChild(n),a){let p=document.createElement("div");p.className="forms-expert-error-message",p.textContent=a,m.appendChild(p)}return l.appendChild(m),l}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let d=e||[];if((t.options||[]).forEach(o=>{let r=document.createElement("label");r.className="forms-expert-checkbox-item";let u=document.createElement("input");u.type="checkbox",u.name=t.name,u.value=o,u.checked=d.includes(o),r.appendChild(u),r.appendChild(document.createTextNode(` ${o}`)),n.appendChild(r)}),m.appendChild(n),a){let o=document.createElement("div");o.className="forms-expert-error-message",o.textContent=a,m.appendChild(o)}return l.appendChild(m),l}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let d=t.ratingMax||5,p=e||0;for(let o=1;o<=d;o++){let r=document.createElement("button");r.type="button",r.className=`forms-expert-rating-star ${o<=p?"active":""}`,r.textContent="\u2605",r.dataset.value=String(o),n.appendChild(r)}if(m.appendChild(n),a){let o=document.createElement("div");o.className="forms-expert-error-message",o.textContent=a,m.appendChild(o)}return l.appendChild(m),l}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let d=t.min??(t.type==="opinionScale"?0:1),p=t.max??(t.type==="opinionScale"?10:5),o=e;for(let r=d;r<=p;r++){let u=document.createElement("button");u.type="button",u.className=`forms-expert-scale-btn ${o===r?"active":""}`,u.textContent=String(r),u.dataset.value=String(r),n.appendChild(u)}if(m.appendChild(n),t.lowLabel||t.highLabel){let r=document.createElement("div");r.className="forms-expert-scale-labels",r.innerHTML=`<span>${E(t.lowLabel||"")}</span><span>${E(t.highLabel||"")}</span>`,m.appendChild(r)}if(a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,m.appendChild(r)}return l.appendChild(m),l}case"slider":{s=document.createElement("input"),s.type="range",s.className="forms-expert-slider",s.min=String(t.min??0),s.max=String(t.max??100),s.step=String(t.step??1),s.value=String(e??t.min??0);break}case"file":s=document.createElement("input"),s.type="file",s.className="forms-expert-file",t.allowedMimeTypes?.length&&(s.accept=t.allowedMimeTypes.join(",")),t.multiple&&(s.multiple=!0);break;case"currency":{s=document.createElement("input"),s.type="number",s.className=b("forms-expert-input",i?.fieldClassName),s.value=String(e??""),t.min!==void 0&&(s.min=String(t.min)),t.max!==void 0&&(s.max=String(t.max)),s.step=String(t.step||.01);break}case"phone":s=document.createElement("input"),s.type="tel",s.className=b("forms-expert-input",i?.fieldClassName),s.value=String(e||"");break;case"url":s=document.createElement("input"),s.type="url",s.className=b("forms-expert-input",i?.fieldClassName),s.value=String(e||"");break;case"password":s=document.createElement("input"),s.type="password",s.className=b("forms-expert-input",i?.fieldClassName),s.value=String(e||"");break;case"time":s=document.createElement("input"),s.type="time",s.className=b("forms-expert-input",i?.fieldClassName),s.value=String(e||"");break;case"datetime":s=document.createElement("input"),s.type="datetime-local",s.className=b("forms-expert-input",i?.fieldClassName),s.value=String(e||"");break;case"colorPicker":s=document.createElement("input"),s.type="color",s.className="forms-expert-color",s.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let d=e||{},p=document.createElement("input");p.type="date",p.className=b("forms-expert-input",i?.fieldClassName),p.name=`${t.name}.start`,p.value=d.start||"";let o=document.createElement("input");if(o.type="date",o.className=b("forms-expert-input",i?.fieldClassName),o.name=`${t.name}.end`,o.value=d.end||"",n.appendChild(p),n.appendChild(o),m.appendChild(n),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,m.appendChild(r)}return l.appendChild(m),l}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let d=t.addressFields||["street","city","state","zip","country"],p=e||{},o={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(d.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=b("forms-expert-input",i?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=o[r]||r,u.value=p[r]||"",n.appendChild(u)}),m.appendChild(n),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,m.appendChild(r)}return l.appendChild(m),l}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let d=t.nameFields||["first","last"],p=e||{},o={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(d.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=b("forms-expert-input",i?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=o[r]||r,u.value=p[r]||"",n.appendChild(u)}),m.appendChild(n),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,m.appendChild(r)}return l.appendChild(m),l}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let d=t.options||[],p=e;if(d.forEach(o=>{let r=document.createElement("button");if(r.type="button",r.className=`forms-expert-image-choice-item ${p===o.value?"active":""}`,r.dataset.value=o.value,o.imageUrl){let c=document.createElement("img");c.src=o.imageUrl,c.alt=o.label,r.appendChild(c)}let u=document.createElement("span");u.textContent=o.label,r.appendChild(u),n.appendChild(r)}),m.appendChild(n),a){let o=document.createElement("div");o.className="forms-expert-error-message",o.textContent=a,m.appendChild(o)}return l.appendChild(m),l}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let d=t.options||[];if((e||[...d]).forEach((o,r)=>{let u=document.createElement("div");u.className="forms-expert-ranking-item",u.textContent=`${r+1}. ${o}`,u.dataset.value=o,n.appendChild(u)}),m.appendChild(n),a){let o=document.createElement("div");o.className="forms-expert-error-message",o.textContent=a,m.appendChild(o)}return l.appendChild(m),l}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let d=e||{},p=document.createElement("input");p.type="text",p.className=b("forms-expert-input",i?.fieldClassName),p.name=`${t.name}.address`,p.placeholder="Address",p.value=d.address||"",n.appendChild(p);let o=document.createElement("div");o.className="forms-expert-location-coords";let r=document.createElement("input");r.type="number",r.className=b("forms-expert-input",i?.fieldClassName),r.name=`${t.name}.lat`,r.placeholder="Latitude",r.step="any",r.value=d.lat!==void 0?String(d.lat):"";let u=document.createElement("input");if(u.type="number",u.className=b("forms-expert-input",i?.fieldClassName),u.name=`${t.name}.lng`,u.placeholder="Longitude",u.step="any",u.value=d.lng!==void 0?String(d.lng):"",o.appendChild(r),o.appendChild(u),n.appendChild(o),m.appendChild(n),a){let c=document.createElement("div");c.className="forms-expert-error-message",c.textContent=a,m.appendChild(c)}return l.appendChild(m),l}default:s=document.createElement("input"),s.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",s.className=b("forms-expert-input",i?.fieldClassName),s.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(s.min=String(t.min)),t.max!==void 0&&(s.max=String(t.max)),t.step!==void 0&&(s.step=String(t.step)));break}if(s.id=`mira-field-${t.name}`,s.name=t.name,t.placeholder&&"placeholder"in s&&(s.placeholder=t.placeholder),t.required&&(s.required=!0),a&&s.classList.add("forms-expert-error"),m.appendChild(s),a){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=a,m.appendChild(n)}return l.appendChild(m),l}function P(t,e={},a={},i={}){let l=document.createElement("form");if(l.className="forms-expert",i.hideRequiredAsterisk){let c=document.createElement("style");c.textContent=".forms-expert .forms-expert-required { display: none; }",l.appendChild(c)}if(i.showFormName!==!1&&i.formName){let c=document.createElement("h1");c.className="forms-expert-title",c.textContent=i.formName,c.style.fontSize=i.formNameFontSize!=null?`${i.formNameFontSize}px`:"1.5rem";let h={normal:"400",medium:"500",semibold:"600",bold:"700"};c.style.fontWeight=h[i.formNameFontWeight||"bold"]||"700",c.style.marginBottom="0.5rem",l.appendChild(c)}let m=t.styling,s=t.fields,n=0;for(;n<s.length;){let c=s[n];if(c.row!=null){let h=[c],g=n+1;for(;g<s.length&&s[g].row===c.row;)h.push(s[g]),g++;if(h.length>1){let f=document.createElement("div");f.style.display="flex",f.style.gap="0.75rem",f.style.flexWrap="wrap",h.forEach(x=>{let C=document.createElement("div"),w=G(x.width);w?C.style.flex=`0 0 calc(${w} - 0.75rem)`:C.style.flex="1 1 0",C.style.minWidth="120px";let F=$(x,e[x.name],a[x.name],m);C.appendChild(F),f.appendChild(C)}),l.appendChild(f)}else{let f=$(c,e[c.name],a[c.name],m);l.appendChild(f)}n=g}else{let h=$(c,e[c.name],a[c.name],m);l.appendChild(h),n++}}if(i.honeypot){let c=document.createElement("input");c.type="text",c.name="_hp",c.className="forms-expert-honeypot",c.tabIndex=-1,c.autocomplete="off",l.appendChild(c)}let d=document.createElement("input");d.type="hidden",d.name="pageUrl",d.value=typeof window<"u"?window.location.href:"",l.appendChild(d);let p=document.createElement("div");p.className="forms-expert-button-wrapper";let o=document.createElement("button");if(o.type="submit",o.className=b("forms-expert-button",i.buttonClassName),o.disabled=i.isLoading||!1,i.isLoading)o.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `;else{let c=m?.buttonIcon,h=m?.buttonIconPosition||"left";if(c){o.style.display="inline-flex",o.style.alignItems="center",o.style.gap="0.5rem";let g=document.createElement("span");g.style.display="inline-flex",g.style.flexShrink="0",g.innerHTML=c;let f=document.createElement("span");f.textContent=i.submitText||"Submit",h==="right"?(o.appendChild(f),o.appendChild(g)):(o.appendChild(g),o.appendChild(f))}else o.textContent=i.submitText||"Submit"}let r=i.secondaryButton,u=()=>{if(!r?.enabled)return null;let c=document.createElement("a");if(c.className="forms-expert-secondary-btn",c.href=r.href||"#",c.style.display="inline-flex",c.style.alignItems="center",c.style.gap="0.5rem",r.icon){let f=document.createElement("span");f.style.display="inline-flex",f.style.flexShrink="0",f.innerHTML=r.icon;let x=document.createElement("span");x.textContent=r.text||"Learn More",r.iconPosition==="right"?(c.appendChild(x),c.appendChild(f)):(c.appendChild(f),c.appendChild(x))}else c.textContent=r.text||"Learn More";r.openInNewTab&&(c.target="_blank",c.rel="noopener noreferrer");let h=m?.primaryColor||"#3b82f6",g=r.color||h;return r.style==="filled"?(c.style.background=g,c.style.color=r.textColor||"#ffffff",c.style.border="none"):r.style==="outlined"?(c.style.background="transparent",c.style.color=r.textColor||g,c.style.border=`2px solid ${g}`):r.style==="link"?(c.style.background="transparent",c.style.color=r.textColor||g,c.style.border="none",c.style.textDecoration="underline"):(c.style.background="transparent",c.style.color=r.textColor||g,c.style.border="none"),r.marginTop!=null&&(c.style.marginTop=`${r.marginTop}px`),r.marginBottom!=null&&(c.style.marginBottom=`${r.marginBottom}px`),r.fontSize!=null&&(c.style.fontSize=`${r.fontSize}px`),c};if(r?.enabled&&r.position==="left"){let c=u();c&&p.appendChild(c)}if(p.appendChild(o),r?.enabled&&r.position!=="left"&&r.position!=="below"){let c=u();c&&(c.style.marginLeft="auto",p.appendChild(c))}if(l.appendChild(p),r?.enabled&&r.position==="below"){let c=document.createElement("div");c.className="forms-expert-secondary-below";let h=r.align||i.buttonAlign||"left";c.style.justifyContent=h==="center"?"center":h==="right"?"flex-end":"flex-start",r.marginTop!=null&&(c.style.marginTop=`${r.marginTop}px`),r.marginBottom!=null&&(c.style.marginBottom=`${r.marginBottom}px`);let g=u();g&&(g.style.marginTop="0",g.style.marginBottom="0",c.appendChild(g)),l.appendChild(c)}if(i.showBranding!==!1){let c=i.brandingText||"Powered by Forms Expert",h=i.brandingUrl||"https://mira.io",g=document.createElement("div");g.className="forms-expert-branding",g.innerHTML=`<a href="${h}" target="_blank" rel="noopener">${c}</a>`,l.appendChild(g)}return l}function z(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${E(t)}</div>
  `,e}function I(t){return t.reduce((e,a)=>({...e,[a.field]:a.message}),{})}var y=class extends Error{constructor(a,i,l,m){super(a);this.code=i;this.statusCode=l;this.retryAfter=m;this.name="FormsError"}},S=class extends Error{constructor(a){super("Validation failed");this.errors=a;this.name="FormValidationError"}};var v=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let a=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${a}token=${encodeURIComponent(this.apiKey)}`}async request(e,a,i){let l=this.buildUrl(a),m=await fetch(l,{method:e,headers:{"Content-Type":"application/json"},body:i?JSON.stringify(i):void 0}),s=await m.json();if(!m.ok)throw new y(s.message||"Request failed",s.code||"UNKNOWN_ERROR",m.status,s.retryAfter);return s}async isActive(e,a){let i=a?`?lang=${encodeURIComponent(a)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${i}`)}async validate(e,a){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:a})}async submit(e,a,i){let l=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(a).some(s=>s instanceof File||s instanceof FileList&&s.length>0)||i?.onProgress?this.submitWithFormData(l,a,i):this.request("POST",`/f/${this.resourceId}/${e}`,{data:a,pageUrl:i?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:i?.captchaToken})}submitWithFormData(e,a,i){return new Promise((l,m)=>{let s=new FormData;for(let[p,o]of Object.entries(a))o instanceof File?s.append(p,o):o instanceof FileList?Array.from(o).forEach(r=>s.append(p,r)):o!=null&&s.append(`data[${p}]`,String(o));let n=i?.pageUrl||(typeof window<"u"?window.location.href:"");n&&s.append("pageUrl",n),i?.captchaToken&&s.append("captchaToken",i.captchaToken);let d=new XMLHttpRequest;i?.onProgress&&d.upload.addEventListener("progress",p=>{p.lengthComputable&&i.onProgress({loaded:p.loaded,total:p.total,percentage:Math.round(p.loaded/p.total*100)})}),d.addEventListener("load",()=>{try{let p=JSON.parse(d.responseText);d.status>=200&&d.status<300?l(p):m(new y(p.message||"Submission failed",p.code||"UNKNOWN_ERROR",d.status,p.retryAfter))}catch{m(new y("Invalid response","PARSE_ERROR",d.status))}}),d.addEventListener("error",()=>{m(new y("Network error","NETWORK_ERROR",0))}),d.addEventListener("abort",()=>{m(new y("Request aborted","ABORTED",0))}),d.open("POST",e),d.send(s)})}async trackView(e){let a=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var N=class{constructor(e,a,i={}){this.config=null;this.apiClient=e,this.slug=a,this.options=i}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,a){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let l=await this.validate(e);if(!l.valid)throw this.options.onValidationError?.(l.errors),new S(l.errors)}let i=await this.apiClient.submit(this.slug,e,a);return this.options.onSubmitSuccess?.(i),i}catch(i){throw i instanceof y&&this.options.onSubmitError?.(i),i}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},k=class{constructor(e){this.apiClient=new v(e)}async isActive(e,a){return this.apiClient.isActive(e,a)}async validate(e,a){return this.apiClient.validate(e,a)}async submit(e,a,i){return this.apiClient.submit(e,a,i)}form(e,a){return new N(this.apiClient,e,a)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,a,i){let l=i?.maxRetries??3,m=null;for(let s=0;s<l;s++)try{return await this.submit(e,a,i)}catch(n){if(m=n,n instanceof y){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(n.code))throw n;if(n.code.includes("RATE_LIMIT")){let d=n.retryAfter||Math.pow(2,s)*1e3;await new Promise(p=>setTimeout(p,d));continue}}await new Promise(d=>setTimeout(d,Math.pow(2,s)*1e3))}throw m}};var R=class{constructor(e,a){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new k(e),this.options=a;let i=a.target;if(typeof i=="string"){let l=document.querySelector(i);if(!l)throw new Error(`Element not found: ${i}`);this.container=l}else this.container=i}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=L(e),document.head.appendChild(this.styleEl),this.injectGoogleFont(e?.fontFamily)}injectGoogleFont(e){if(!e)return;let a=["Inter","Roboto","Open Sans","Lato","Poppins","Montserrat","Nunito","Source Sans Pro","Raleway","Ubuntu","Playfair Display","Merriweather"],i=e.split(",")[0]?.trim();if(!i||!a.includes(i))return;let l=`forms-expert-font-${this.options.slug}`;if(document.getElementById(l))return;let m=document.createElement("link");m.id=l,m.rel="stylesheet",m.href=`https://fonts.googleapis.com/css2?family=${i.replace(/ /g,"+")}:wght@400;500;600;700&display=swap`,document.head.appendChild(m)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let l=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(z(l));return}let e={...this.config.schema.styling,...this.config.styling},a={...this.config.schema,styling:e},i=P(a,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign,buttonClassName:e.buttonClassName,formNameFontSize:e.formNameFontSize,formNameFontWeight:e.formNameFontWeight});i.addEventListener("input",l=>{let m=l.target;m.name&&m.name!=="_hp"&&m.name!=="pageUrl"&&(m.type==="checkbox"?this.values[m.name]=m.checked:m.type==="file"?this.values[m.name]=m.multiple?m.files:m.files?.[0]:this.values[m.name]=m.value,this.errors[m.name]&&(delete this.errors[m.name],this.render()))}),i.addEventListener("submit",l=>{l.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(i)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let a=this.options.redirectUrl||this.config.settings?.redirectUrl;a&&setTimeout(()=>{window.location.href=a},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof S?(this.errors=I(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function A(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let a=e.getAttribute("data-api-key"),i=e.getAttribute("data-resource-id"),l=e.getAttribute("data-forms-expert"),m=e.getAttribute("data-base-url")||void 0;if(!a||!i||!l){console.error("Forms Expert: Missing required attributes",{apiKey:!!a,resourceId:!!i,slug:!!l});return}new R({apiKey:a,resourceId:i,baseUrl:m},{target:e,slug:l,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",A):A());export{R as FormWidget,A as autoInit,I as errorsToRecord,L as generateFormStyles,$ as renderField,P as renderForm,z as renderSuccess};
//# sourceMappingURL=index.js.map