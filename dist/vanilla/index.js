var k={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function A(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function U(t){switch(t){case"none":return"0";case"small":return"0.25rem";case"medium":return"0.375rem";case"large":return"0.75rem";case"full":return"9999px";default:return"0.375rem"}}function M(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function I(t){switch(t){case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem";default:return"1rem"}}function B(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function O(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function H(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function V(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function q(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function W(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function F(t=k){let e={...k,...t},l=A(e.borderRadius),s=U(e.fieldBorderRadius),m=M(e.buttonRadius),c=I(e.fontSize),o=B(e.placeholderFontSize),n=O(e.fieldSpacing),d=H(e.formPadding),i=V(e.labelSpacing),a=q(e.formWidth),r=e.primaryColor,p=e.buttonColor,u=e.fontFamily?e.fontFamily.includes(",")?e.fontFamily:`${e.fontFamily}, sans-serif`:"inherit",L=W(e.buttonAlign),C={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],S=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:C.px,z=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:C.py,v=e.buttonFontSize!=null?`${e.buttonFontSize}px`:C.fs,P=e.buttonGradient||(e.buttonStyle==="filled"?r:"transparent");return`
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
  font-family: ${u};
  font-size: ${c};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${d};
  border-radius: ${l};
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
  border-radius: ${l} ${l} 0 0;
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
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"width: 33%; flex-shrink: 0; padding-top: 0.5rem; margin-bottom: 0;":`margin-bottom: ${i};`}
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
  font-size: ${c};
  font-family: inherit;
  background-color: ${e.theme==="dark"?"#374151":"#ffffff"};
  color: ${e.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${o};
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
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":s};
  font-size: ${c};
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
  justify-content: ${L};
  margin-top: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.forms-expert-button {
  ${e.buttonFullWidth?"width: 100%;":e.buttonAlign?"":"width: 100%;"}
  padding: ${z} ${S};
  font-weight: 500;
  font-size: ${v};
  font-family: inherit;
  border-radius: ${m};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  max-width: 100%;
  box-sizing: border-box;
  flex-shrink: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${e.buttonStyle==="filled"?`background: ${P}; color: ${p||"white"}; border: none;`:`background: transparent; color: ${r}; border: 2px solid ${r};`}
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
  font-size: ${c};
  font-family: inherit;
  border-radius: ${m};
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
  min-width: 2.25rem; height: 2.25rem; border-radius: ${l}; cursor: pointer;
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
  border: 2px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}; border-radius: ${l};
  padding: 0.5rem; cursor: pointer; text-align: center; transition: border-color 0.15s;
}
.forms-expert-image-choice-item.active { border-color: ${e.primaryColor}; }
.forms-expert-image-choice-item img { max-width: 80px; max-height: 80px; object-fit: cover; border-radius: ${l}; }

/* Responsive button scaling */
@media (max-width: 480px) {
  .forms-expert-button,
  .forms-expert-secondary-btn {
    padding-left: max(0.5rem, min(${S}, 3vw));
    padding-right: max(0.5rem, min(${S}, 3vw));
    font-size: max(0.75rem, min(${v}, 3.5vw));
  }
}

${e.customCss||""}
`.trim()}function b(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function D(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function K(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function g(t,e){return e?`${t} ${e}`:t}function j(t,e,l,s){let m=document.createElement("div");if(t.type==="heading"){m.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=D(s?.headingSize),n.textContent=t.label||"",m.appendChild(n),t.content){let d=document.createElement("p");d.className="forms-expert-heading-subtitle",d.textContent=t.content,m.appendChild(d)}return m}if(t.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(t.type==="paragraph"){m.className="forms-expert-group";let n=t.paragraphFontSize?`${t.paragraphFontSize}px`:K(s?.paragraphSize);if(t.label){let d=document.createElement("p");d.className="forms-expert-paragraph-label",d.style.fontSize=n,d.textContent=t.label,m.appendChild(d)}if(t.content){let d=document.createElement("div");d.className="forms-expert-paragraph",d.style.fontSize=n,d.innerHTML=t.content,m.appendChild(d)}return m}if(t.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=t.name,n.value=String(t.defaultValue??e??""),m.appendChild(n),m.style.display="none",m}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){m.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${t.name}`,n.name=t.name,n.className="forms-expert-checkbox",n.checked=!!e,t.required&&(n.required=!0);let d=document.createElement("label");d.htmlFor=n.id;let i=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(d.innerHTML=`${b(i)}${t.required?'<span class="forms-expert-required">*</span>':""}`,m.appendChild(n),m.appendChild(d),t.type==="consent"&&t.consentUrl){let a=document.createElement("a");a.href=t.consentUrl,a.target="_blank",a.rel="noopener noreferrer",a.textContent="View policy",a.className="forms-expert-consent-link",m.appendChild(a)}if(l){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=l,m.appendChild(a)}return m}if(m.className="forms-expert-group",t.label){let n=document.createElement("label");n.className=`forms-expert-label${s?.labelClassName?" "+s.labelClassName:""}`,n.htmlFor=`mira-field-${t.name}`,n.innerHTML=`${b(t.label)}${t.required?'<span class="forms-expert-required">*</span>':""}`,m.appendChild(n)}let c=document.createElement("div");c.className="forms-expert-input-wrapper";let o;switch(t.type){case"textarea":case"richText":o=document.createElement("textarea"),o.className=g("forms-expert-textarea",s?.fieldClassName),o.value=String(e||""),t.maxLength&&(o.maxLength=t.maxLength);break;case"select":case"dropdown":{o=document.createElement("select"),o.className=g("forms-expert-select",s?.fieldClassName);let n=document.createElement("option");n.value="",n.textContent=t.placeholder||"Select an option...",o.appendChild(n),(t.options||[]).forEach(i=>{let a=document.createElement("option");a.value=i,a.textContent=i,e===i&&(a.selected=!0),o.appendChild(a)});break}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(t.options||[]).forEach(i=>{let a=document.createElement("label");a.className="forms-expert-radio-item";let r=document.createElement("input");r.type="radio",r.name=t.name,r.value=i,r.checked=e===i,a.appendChild(r),a.appendChild(document.createTextNode(` ${i}`)),n.appendChild(a)}),c.appendChild(n),l){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=l,c.appendChild(i)}return m.appendChild(c),m}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let d=e||[];if((t.options||[]).forEach(a=>{let r=document.createElement("label");r.className="forms-expert-checkbox-item";let p=document.createElement("input");p.type="checkbox",p.name=t.name,p.value=a,p.checked=d.includes(a),r.appendChild(p),r.appendChild(document.createTextNode(` ${a}`)),n.appendChild(r)}),c.appendChild(n),l){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=l,c.appendChild(a)}return m.appendChild(c),m}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let d=t.ratingMax||5,i=e||0;for(let a=1;a<=d;a++){let r=document.createElement("button");r.type="button",r.className=`forms-expert-rating-star ${a<=i?"active":""}`,r.textContent="\u2605",r.dataset.value=String(a),n.appendChild(r)}if(c.appendChild(n),l){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=l,c.appendChild(a)}return m.appendChild(c),m}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let d=t.min??(t.type==="opinionScale"?0:1),i=t.max??(t.type==="opinionScale"?10:5),a=e;for(let r=d;r<=i;r++){let p=document.createElement("button");p.type="button",p.className=`forms-expert-scale-btn ${a===r?"active":""}`,p.textContent=String(r),p.dataset.value=String(r),n.appendChild(p)}if(c.appendChild(n),t.lowLabel||t.highLabel){let r=document.createElement("div");r.className="forms-expert-scale-labels",r.innerHTML=`<span>${b(t.lowLabel||"")}</span><span>${b(t.highLabel||"")}</span>`,c.appendChild(r)}if(l){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=l,c.appendChild(r)}return m.appendChild(c),m}case"slider":{o=document.createElement("input"),o.type="range",o.className="forms-expert-slider",o.min=String(t.min??0),o.max=String(t.max??100),o.step=String(t.step??1),o.value=String(e??t.min??0);break}case"file":o=document.createElement("input"),o.type="file",o.className="forms-expert-file",t.allowedMimeTypes?.length&&(o.accept=t.allowedMimeTypes.join(",")),t.multiple&&(o.multiple=!0);break;case"currency":{o=document.createElement("input"),o.type="number",o.className=g("forms-expert-input",s?.fieldClassName),o.value=String(e??""),t.min!==void 0&&(o.min=String(t.min)),t.max!==void 0&&(o.max=String(t.max)),o.step=String(t.step||.01);break}case"phone":o=document.createElement("input"),o.type="tel",o.className=g("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"url":o=document.createElement("input"),o.type="url",o.className=g("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"password":o=document.createElement("input"),o.type="password",o.className=g("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"time":o=document.createElement("input"),o.type="time",o.className=g("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"datetime":o=document.createElement("input"),o.type="datetime-local",o.className=g("forms-expert-input",s?.fieldClassName),o.value=String(e||"");break;case"colorPicker":o=document.createElement("input"),o.type="color",o.className="forms-expert-color",o.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let d=e||{},i=document.createElement("input");i.type="date",i.className=g("forms-expert-input",s?.fieldClassName),i.name=`${t.name}.start`,i.value=d.start||"";let a=document.createElement("input");if(a.type="date",a.className=g("forms-expert-input",s?.fieldClassName),a.name=`${t.name}.end`,a.value=d.end||"",n.appendChild(i),n.appendChild(a),c.appendChild(n),l){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=l,c.appendChild(r)}return m.appendChild(c),m}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let d=t.addressFields||["street","city","state","zip","country"],i=e||{},a={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(d.forEach(r=>{let p=document.createElement("input");p.type="text",p.className=g("forms-expert-input",s?.fieldClassName),p.name=`${t.name}.${r}`,p.placeholder=a[r]||r,p.value=i[r]||"",n.appendChild(p)}),c.appendChild(n),l){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=l,c.appendChild(r)}return m.appendChild(c),m}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let d=t.nameFields||["first","last"],i=e||{},a={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(d.forEach(r=>{let p=document.createElement("input");p.type="text",p.className=g("forms-expert-input",s?.fieldClassName),p.name=`${t.name}.${r}`,p.placeholder=a[r]||r,p.value=i[r]||"",n.appendChild(p)}),c.appendChild(n),l){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=l,c.appendChild(r)}return m.appendChild(c),m}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let d=t.options||[],i=e;if(d.forEach(a=>{let r=document.createElement("button");if(r.type="button",r.className=`forms-expert-image-choice-item ${i===a.value?"active":""}`,r.dataset.value=a.value,a.imageUrl){let u=document.createElement("img");u.src=a.imageUrl,u.alt=a.label,r.appendChild(u)}let p=document.createElement("span");p.textContent=a.label,r.appendChild(p),n.appendChild(r)}),c.appendChild(n),l){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=l,c.appendChild(a)}return m.appendChild(c),m}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let d=t.options||[];if((e||[...d]).forEach((a,r)=>{let p=document.createElement("div");p.className="forms-expert-ranking-item",p.textContent=`${r+1}. ${a}`,p.dataset.value=a,n.appendChild(p)}),c.appendChild(n),l){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=l,c.appendChild(a)}return m.appendChild(c),m}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let d=e||{},i=document.createElement("input");i.type="text",i.className=g("forms-expert-input",s?.fieldClassName),i.name=`${t.name}.address`,i.placeholder="Address",i.value=d.address||"",n.appendChild(i);let a=document.createElement("div");a.className="forms-expert-location-coords";let r=document.createElement("input");r.type="number",r.className=g("forms-expert-input",s?.fieldClassName),r.name=`${t.name}.lat`,r.placeholder="Latitude",r.step="any",r.value=d.lat!==void 0?String(d.lat):"";let p=document.createElement("input");if(p.type="number",p.className=g("forms-expert-input",s?.fieldClassName),p.name=`${t.name}.lng`,p.placeholder="Longitude",p.step="any",p.value=d.lng!==void 0?String(d.lng):"",a.appendChild(r),a.appendChild(p),n.appendChild(a),c.appendChild(n),l){let u=document.createElement("div");u.className="forms-expert-error-message",u.textContent=l,c.appendChild(u)}return m.appendChild(c),m}default:o=document.createElement("input"),o.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",o.className=g("forms-expert-input",s?.fieldClassName),o.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(o.min=String(t.min)),t.max!==void 0&&(o.max=String(t.max)),t.step!==void 0&&(o.step=String(t.step)));break}if(o.id=`mira-field-${t.name}`,o.name=t.name,t.placeholder&&"placeholder"in o&&(o.placeholder=t.placeholder),t.required&&(o.required=!0),l&&o.classList.add("forms-expert-error"),c.appendChild(o),l){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=l,c.appendChild(n)}return m.appendChild(c),m}function $(t,e={},l={},s={}){let m=document.createElement("form");if(m.className="forms-expert",s.hideRequiredAsterisk){let r=document.createElement("style");r.textContent=".forms-expert .forms-expert-required { display: none; }",m.appendChild(r)}if(s.showFormName!==!1&&s.formName){let r=document.createElement("h1");r.className="forms-expert-title",r.textContent=s.formName,r.style.fontSize=s.formNameFontSize!=null?`${s.formNameFontSize}px`:"1.5rem";let p={normal:"400",medium:"500",semibold:"600",bold:"700"};r.style.fontWeight=p[s.formNameFontWeight||"bold"]||"700",r.style.marginBottom="0.5rem",m.appendChild(r)}let c=t.styling;if(t.fields.forEach(r=>{let p=j(r,e[r.name],l[r.name],c);m.appendChild(p)}),s.honeypot){let r=document.createElement("input");r.type="text",r.name="_hp",r.className="forms-expert-honeypot",r.tabIndex=-1,r.autocomplete="off",m.appendChild(r)}let o=document.createElement("input");o.type="hidden",o.name="pageUrl",o.value=typeof window<"u"?window.location.href:"",m.appendChild(o);let n=document.createElement("div");n.className="forms-expert-button-wrapper";let d=document.createElement("button");d.type="submit",d.className=g("forms-expert-button",s.buttonClassName),d.disabled=s.isLoading||!1,s.isLoading?d.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `:d.textContent=s.submitText||"Submit";let i=s.secondaryButton,a=()=>{if(!i?.enabled)return null;let r=document.createElement("a");r.className="forms-expert-secondary-btn",r.href=i.href||"#",r.textContent=i.text||"Learn More",i.openInNewTab&&(r.target="_blank",r.rel="noopener noreferrer");let p=c?.primaryColor||"#3b82f6",u=i.color||p;return i.style==="filled"?(r.style.background=u,r.style.color=i.textColor||"#ffffff",r.style.border="none"):i.style==="outlined"?(r.style.background="transparent",r.style.color=i.textColor||u,r.style.border=`2px solid ${u}`):i.style==="link"?(r.style.background="transparent",r.style.color=i.textColor||u,r.style.border="none",r.style.textDecoration="underline"):(r.style.background="transparent",r.style.color=i.textColor||u,r.style.border="none"),i.marginTop!=null&&(r.style.marginTop=`${i.marginTop}px`),i.marginBottom!=null&&(r.style.marginBottom=`${i.marginBottom}px`),i.fontSize!=null&&(r.style.fontSize=`${i.fontSize}px`),r};if(i?.enabled&&i.position==="left"){let r=a();r&&n.appendChild(r)}if(n.appendChild(d),i?.enabled&&i.position!=="left"&&i.position!=="below"){let r=a();r&&(r.style.marginLeft="auto",n.appendChild(r))}if(m.appendChild(n),i?.enabled&&i.position==="below"){let r=document.createElement("div");r.className="forms-expert-secondary-below";let p=i.align||s.buttonAlign||"left";r.style.justifyContent=p==="center"?"center":p==="right"?"flex-end":"flex-start",i.marginTop!=null&&(r.style.marginTop=`${i.marginTop}px`),i.marginBottom!=null&&(r.style.marginBottom=`${i.marginBottom}px`);let u=a();u&&(u.style.marginTop="0",u.style.marginBottom="0",r.appendChild(u)),m.appendChild(r)}if(s.showBranding!==!1){let r=s.brandingText||"Powered by Forms Expert",p=s.brandingUrl||"https://mira.io",u=document.createElement("div");u.className="forms-expert-branding",u.innerHTML=`<a href="${p}" target="_blank" rel="noopener">${r}</a>`,m.appendChild(u)}return m}function N(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${b(t)}</div>
  `,e}function R(t){return t.reduce((e,l)=>({...e,[l.field]:l.message}),{})}var f=class extends Error{constructor(l,s,m,c){super(l);this.code=s;this.statusCode=m;this.retryAfter=c;this.name="FormsError"}},h=class extends Error{constructor(l){super("Validation failed");this.errors=l;this.name="FormValidationError"}};var x=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let l=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${l}token=${encodeURIComponent(this.apiKey)}`}async request(e,l,s){let m=this.buildUrl(l),c=await fetch(m,{method:e,headers:{"Content-Type":"application/json"},body:s?JSON.stringify(s):void 0}),o=await c.json();if(!c.ok)throw new f(o.message||"Request failed",o.code||"UNKNOWN_ERROR",c.status,o.retryAfter);return o}async isActive(e,l){let s=l?`?lang=${encodeURIComponent(l)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${s}`)}async validate(e,l){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:l})}async submit(e,l,s){let m=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(l).some(o=>o instanceof File||o instanceof FileList&&o.length>0)||s?.onProgress?this.submitWithFormData(m,l,s):this.request("POST",`/f/${this.resourceId}/${e}`,{data:l,pageUrl:s?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:s?.captchaToken})}submitWithFormData(e,l,s){return new Promise((m,c)=>{let o=new FormData;for(let[i,a]of Object.entries(l))a instanceof File?o.append(i,a):a instanceof FileList?Array.from(a).forEach(r=>o.append(i,r)):a!=null&&o.append(`data[${i}]`,String(a));let n=s?.pageUrl||(typeof window<"u"?window.location.href:"");n&&o.append("pageUrl",n),s?.captchaToken&&o.append("captchaToken",s.captchaToken);let d=new XMLHttpRequest;s?.onProgress&&d.upload.addEventListener("progress",i=>{i.lengthComputable&&s.onProgress({loaded:i.loaded,total:i.total,percentage:Math.round(i.loaded/i.total*100)})}),d.addEventListener("load",()=>{try{let i=JSON.parse(d.responseText);d.status>=200&&d.status<300?m(i):c(new f(i.message||"Submission failed",i.code||"UNKNOWN_ERROR",d.status,i.retryAfter))}catch{c(new f("Invalid response","PARSE_ERROR",d.status))}}),d.addEventListener("error",()=>{c(new f("Network error","NETWORK_ERROR",0))}),d.addEventListener("abort",()=>{c(new f("Request aborted","ABORTED",0))}),d.open("POST",e),d.send(o)})}async trackView(e){let l=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var w=class{constructor(e,l,s={}){this.config=null;this.apiClient=e,this.slug=l,this.options=s}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,l){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let m=await this.validate(e);if(!m.valid)throw this.options.onValidationError?.(m.errors),new h(m.errors)}let s=await this.apiClient.submit(this.slug,e,l);return this.options.onSubmitSuccess?.(s),s}catch(s){throw s instanceof f&&this.options.onSubmitError?.(s),s}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},y=class{constructor(e){this.apiClient=new x(e)}async isActive(e,l){return this.apiClient.isActive(e,l)}async validate(e,l){return this.apiClient.validate(e,l)}async submit(e,l,s){return this.apiClient.submit(e,l,s)}form(e,l){return new w(this.apiClient,e,l)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,l,s){let m=s?.maxRetries??3,c=null;for(let o=0;o<m;o++)try{return await this.submit(e,l,s)}catch(n){if(c=n,n instanceof f){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(n.code))throw n;if(n.code.includes("RATE_LIMIT")){let d=n.retryAfter||Math.pow(2,o)*1e3;await new Promise(i=>setTimeout(i,d));continue}}await new Promise(d=>setTimeout(d,Math.pow(2,o)*1e3))}throw c}};var E=class{constructor(e,l){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new y(e),this.options=l;let s=l.target;if(typeof s=="string"){let m=document.querySelector(s);if(!m)throw new Error(`Element not found: ${s}`);this.container=m}else this.container=s}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=F(e),document.head.appendChild(this.styleEl),this.injectGoogleFont(e?.fontFamily)}injectGoogleFont(e){if(!e)return;let l=["Inter","Roboto","Open Sans","Lato","Poppins","Montserrat","Nunito","Source Sans Pro","Raleway","Ubuntu","Playfair Display","Merriweather"],s=e.split(",")[0]?.trim();if(!s||!l.includes(s))return;let m=`forms-expert-font-${this.options.slug}`;if(document.getElementById(m))return;let c=document.createElement("link");c.id=m,c.rel="stylesheet",c.href=`https://fonts.googleapis.com/css2?family=${s.replace(/ /g,"+")}:wght@400;500;600;700&display=swap`,document.head.appendChild(c)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let m=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(N(m));return}let e={...this.config.schema.styling,...this.config.styling},l={...this.config.schema,styling:e},s=$(l,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign,buttonClassName:e.buttonClassName,formNameFontSize:e.formNameFontSize,formNameFontWeight:e.formNameFontWeight});s.addEventListener("input",m=>{let c=m.target;c.name&&c.name!=="_hp"&&c.name!=="pageUrl"&&(c.type==="checkbox"?this.values[c.name]=c.checked:c.type==="file"?this.values[c.name]=c.multiple?c.files:c.files?.[0]:this.values[c.name]=c.value,this.errors[c.name]&&(delete this.errors[c.name],this.render()))}),s.addEventListener("submit",m=>{m.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(s)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let l=this.options.redirectUrl||this.config.settings?.redirectUrl;l&&setTimeout(()=>{window.location.href=l},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof h?(this.errors=R(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function T(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let l=e.getAttribute("data-api-key"),s=e.getAttribute("data-resource-id"),m=e.getAttribute("data-forms-expert"),c=e.getAttribute("data-base-url")||void 0;if(!l||!s||!m){console.error("Forms Expert: Missing required attributes",{apiKey:!!l,resourceId:!!s,slug:!!m});return}new E({apiKey:l,resourceId:s,baseUrl:c},{target:e,slug:m,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T());export{E as FormWidget,T as autoInit,R as errorsToRecord,F as generateFormStyles,j as renderField,$ as renderForm,N as renderSuccess};
//# sourceMappingURL=index.js.map