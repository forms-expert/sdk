"use strict";var FormsExpert=(()=>{var E=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var I=Object.prototype.hasOwnProperty;var O=(t,e)=>{for(var s in e)E(t,s,{get:e[s],enumerable:!0})},B=(t,e,s,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of M(e))!I.call(t,a)&&a!==s&&E(t,a,{get:()=>e[a],enumerable:!(i=U(e,a))||i.enumerable});return t};var H=t=>B(E({},"__esModule",{value:!0}),t);var Q={};O(Q,{FormWidget:()=>C,autoInit:()=>T,errorsToRecord:()=>$,generateFormStyles:()=>v,renderField:()=>z,renderForm:()=>k,renderSuccess:()=>F});var L={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function V(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function q(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function W(t){switch(t){case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem";default:return"1rem"}}function D(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function K(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function j(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function _(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function G(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function Y(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function v(t=L){let e={...L,...t},s=V(e.borderRadius),i=q(e.buttonRadius),a=W(e.fontSize),c=D(e.placeholderFontSize),o=K(e.fieldSpacing),n=j(e.formPadding),d=_(e.labelSpacing),l=G(e.formWidth),m=e.primaryColor,r=e.buttonColor,p=e.fontFamily?e.fontFamily.includes(",")?e.fontFamily:`${e.fontFamily}, sans-serif`:"inherit",u=Y(e.buttonAlign),S={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],w=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:S.px,P=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:S.py,R=e.buttonFontSize!=null?`${e.buttonFontSize}px`:S.fs,A=e.buttonGradient||(e.buttonStyle==="filled"?m:"transparent");return`
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
  font-size: ${a};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${n};
  border-radius: ${s};
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
  border-radius: ${s} ${s} 0 0;
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
  font-size: ${a};
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
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":s};
  font-size: ${a};
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
  padding: ${P} ${w};
  font-weight: 500;
  font-size: ${R};
  font-family: inherit;
  border-radius: ${i};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  max-width: 100%;
  box-sizing: border-box;
  flex-shrink: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${e.buttonStyle==="filled"?`background: ${A}; color: ${r||"white"}; border: none;`:`background: transparent; color: ${m}; border: 2px solid ${m};`}
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
  font-size: ${a};
  font-family: inherit;
  border-radius: ${i};
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

/* Responsive button scaling */
@media (max-width: 480px) {
  .forms-expert-button,
  .forms-expert-secondary-btn {
    padding-left: max(0.5rem, min(${w}, 3vw));
    padding-right: max(0.5rem, min(${w}, 3vw));
    font-size: max(0.75rem, min(${R}, 3.5vw));
  }
}

${e.customCss||""}
`.trim()}function b(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function X(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function J(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function g(t,e){return e?`${t} ${e}`:t}function z(t,e,s,i){let a=document.createElement("div");if(t.type==="heading"){a.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=X(i?.headingSize),n.textContent=t.label||"",a.appendChild(n),t.content){let d=document.createElement("p");d.className="forms-expert-heading-subtitle",d.textContent=t.content,a.appendChild(d)}return a}if(t.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(t.type==="paragraph"){a.className="forms-expert-group";let n=t.paragraphFontSize?`${t.paragraphFontSize}px`:J(i?.paragraphSize);if(t.label){let d=document.createElement("p");d.className="forms-expert-paragraph-label",d.style.fontSize=n,d.textContent=t.label,a.appendChild(d)}if(t.content){let d=document.createElement("div");d.className="forms-expert-paragraph",d.style.fontSize=n,d.innerHTML=t.content,a.appendChild(d)}return a}if(t.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=t.name,n.value=String(t.defaultValue??e??""),a.appendChild(n),a.style.display="none",a}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){a.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${t.name}`,n.name=t.name,n.className="forms-expert-checkbox",n.checked=!!e,t.required&&(n.required=!0);let d=document.createElement("label");d.htmlFor=n.id;let l=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(d.innerHTML=`${b(l)}${t.required?'<span class="forms-expert-required">*</span>':""}`,a.appendChild(n),a.appendChild(d),t.type==="consent"&&t.consentUrl){let m=document.createElement("a");m.href=t.consentUrl,m.target="_blank",m.rel="noopener noreferrer",m.textContent="View policy",m.className="forms-expert-consent-link",a.appendChild(m)}if(s){let m=document.createElement("div");m.className="forms-expert-error-message",m.textContent=s,a.appendChild(m)}return a}if(a.className="forms-expert-group",t.label){let n=document.createElement("label");n.className=`forms-expert-label${i?.labelClassName?" "+i.labelClassName:""}`,n.htmlFor=`mira-field-${t.name}`,n.innerHTML=`${b(t.label)}${t.required?'<span class="forms-expert-required">*</span>':""}`,a.appendChild(n)}let c=document.createElement("div");c.className="forms-expert-input-wrapper";let o;switch(t.type){case"textarea":case"richText":o=document.createElement("textarea"),o.className=g("forms-expert-textarea",i?.fieldClassName),o.value=String(e||""),t.maxLength&&(o.maxLength=t.maxLength);break;case"select":case"dropdown":{o=document.createElement("select"),o.className=g("forms-expert-select",i?.fieldClassName);let n=document.createElement("option");n.value="",n.textContent=t.placeholder||"Select an option...",o.appendChild(n),(t.options||[]).forEach(l=>{let m=document.createElement("option");m.value=l,m.textContent=l,e===l&&(m.selected=!0),o.appendChild(m)});break}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(t.options||[]).forEach(l=>{let m=document.createElement("label");m.className="forms-expert-radio-item";let r=document.createElement("input");r.type="radio",r.name=t.name,r.value=l,r.checked=e===l,m.appendChild(r),m.appendChild(document.createTextNode(` ${l}`)),n.appendChild(m)}),c.appendChild(n),s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,c.appendChild(l)}return a.appendChild(c),a}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let d=e||[];if((t.options||[]).forEach(m=>{let r=document.createElement("label");r.className="forms-expert-checkbox-item";let p=document.createElement("input");p.type="checkbox",p.name=t.name,p.value=m,p.checked=d.includes(m),r.appendChild(p),r.appendChild(document.createTextNode(` ${m}`)),n.appendChild(r)}),c.appendChild(n),s){let m=document.createElement("div");m.className="forms-expert-error-message",m.textContent=s,c.appendChild(m)}return a.appendChild(c),a}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let d=t.ratingMax||5,l=e||0;for(let m=1;m<=d;m++){let r=document.createElement("button");r.type="button",r.className=`forms-expert-rating-star ${m<=l?"active":""}`,r.textContent="\u2605",r.dataset.value=String(m),n.appendChild(r)}if(c.appendChild(n),s){let m=document.createElement("div");m.className="forms-expert-error-message",m.textContent=s,c.appendChild(m)}return a.appendChild(c),a}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let d=t.min??(t.type==="opinionScale"?0:1),l=t.max??(t.type==="opinionScale"?10:5),m=e;for(let r=d;r<=l;r++){let p=document.createElement("button");p.type="button",p.className=`forms-expert-scale-btn ${m===r?"active":""}`,p.textContent=String(r),p.dataset.value=String(r),n.appendChild(p)}if(c.appendChild(n),t.lowLabel||t.highLabel){let r=document.createElement("div");r.className="forms-expert-scale-labels",r.innerHTML=`<span>${b(t.lowLabel||"")}</span><span>${b(t.highLabel||"")}</span>`,c.appendChild(r)}if(s){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=s,c.appendChild(r)}return a.appendChild(c),a}case"slider":{o=document.createElement("input"),o.type="range",o.className="forms-expert-slider",o.min=String(t.min??0),o.max=String(t.max??100),o.step=String(t.step??1),o.value=String(e??t.min??0);break}case"file":o=document.createElement("input"),o.type="file",o.className="forms-expert-file",t.allowedMimeTypes?.length&&(o.accept=t.allowedMimeTypes.join(",")),t.multiple&&(o.multiple=!0);break;case"currency":{o=document.createElement("input"),o.type="number",o.className=g("forms-expert-input",i?.fieldClassName),o.value=String(e??""),t.min!==void 0&&(o.min=String(t.min)),t.max!==void 0&&(o.max=String(t.max)),o.step=String(t.step||.01);break}case"phone":o=document.createElement("input"),o.type="tel",o.className=g("forms-expert-input",i?.fieldClassName),o.value=String(e||"");break;case"url":o=document.createElement("input"),o.type="url",o.className=g("forms-expert-input",i?.fieldClassName),o.value=String(e||"");break;case"password":o=document.createElement("input"),o.type="password",o.className=g("forms-expert-input",i?.fieldClassName),o.value=String(e||"");break;case"time":o=document.createElement("input"),o.type="time",o.className=g("forms-expert-input",i?.fieldClassName),o.value=String(e||"");break;case"datetime":o=document.createElement("input"),o.type="datetime-local",o.className=g("forms-expert-input",i?.fieldClassName),o.value=String(e||"");break;case"colorPicker":o=document.createElement("input"),o.type="color",o.className="forms-expert-color",o.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let d=e||{},l=document.createElement("input");l.type="date",l.className=g("forms-expert-input",i?.fieldClassName),l.name=`${t.name}.start`,l.value=d.start||"";let m=document.createElement("input");if(m.type="date",m.className=g("forms-expert-input",i?.fieldClassName),m.name=`${t.name}.end`,m.value=d.end||"",n.appendChild(l),n.appendChild(m),c.appendChild(n),s){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=s,c.appendChild(r)}return a.appendChild(c),a}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let d=t.addressFields||["street","city","state","zip","country"],l=e||{},m={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(d.forEach(r=>{let p=document.createElement("input");p.type="text",p.className=g("forms-expert-input",i?.fieldClassName),p.name=`${t.name}.${r}`,p.placeholder=m[r]||r,p.value=l[r]||"",n.appendChild(p)}),c.appendChild(n),s){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=s,c.appendChild(r)}return a.appendChild(c),a}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let d=t.nameFields||["first","last"],l=e||{},m={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(d.forEach(r=>{let p=document.createElement("input");p.type="text",p.className=g("forms-expert-input",i?.fieldClassName),p.name=`${t.name}.${r}`,p.placeholder=m[r]||r,p.value=l[r]||"",n.appendChild(p)}),c.appendChild(n),s){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=s,c.appendChild(r)}return a.appendChild(c),a}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let d=t.options||[],l=e;if(d.forEach(m=>{let r=document.createElement("button");if(r.type="button",r.className=`forms-expert-image-choice-item ${l===m.value?"active":""}`,r.dataset.value=m.value,m.imageUrl){let u=document.createElement("img");u.src=m.imageUrl,u.alt=m.label,r.appendChild(u)}let p=document.createElement("span");p.textContent=m.label,r.appendChild(p),n.appendChild(r)}),c.appendChild(n),s){let m=document.createElement("div");m.className="forms-expert-error-message",m.textContent=s,c.appendChild(m)}return a.appendChild(c),a}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let d=t.options||[];if((e||[...d]).forEach((m,r)=>{let p=document.createElement("div");p.className="forms-expert-ranking-item",p.textContent=`${r+1}. ${m}`,p.dataset.value=m,n.appendChild(p)}),c.appendChild(n),s){let m=document.createElement("div");m.className="forms-expert-error-message",m.textContent=s,c.appendChild(m)}return a.appendChild(c),a}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let d=e||{},l=document.createElement("input");l.type="text",l.className=g("forms-expert-input",i?.fieldClassName),l.name=`${t.name}.address`,l.placeholder="Address",l.value=d.address||"",n.appendChild(l);let m=document.createElement("div");m.className="forms-expert-location-coords";let r=document.createElement("input");r.type="number",r.className=g("forms-expert-input",i?.fieldClassName),r.name=`${t.name}.lat`,r.placeholder="Latitude",r.step="any",r.value=d.lat!==void 0?String(d.lat):"";let p=document.createElement("input");if(p.type="number",p.className=g("forms-expert-input",i?.fieldClassName),p.name=`${t.name}.lng`,p.placeholder="Longitude",p.step="any",p.value=d.lng!==void 0?String(d.lng):"",m.appendChild(r),m.appendChild(p),n.appendChild(m),c.appendChild(n),s){let u=document.createElement("div");u.className="forms-expert-error-message",u.textContent=s,c.appendChild(u)}return a.appendChild(c),a}default:o=document.createElement("input"),o.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",o.className=g("forms-expert-input",i?.fieldClassName),o.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(o.min=String(t.min)),t.max!==void 0&&(o.max=String(t.max)),t.step!==void 0&&(o.step=String(t.step)));break}if(o.id=`mira-field-${t.name}`,o.name=t.name,t.placeholder&&"placeholder"in o&&(o.placeholder=t.placeholder),t.required&&(o.required=!0),s&&o.classList.add("forms-expert-error"),c.appendChild(o),s){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=s,c.appendChild(n)}return a.appendChild(c),a}function k(t,e={},s={},i={}){let a=document.createElement("form");if(a.className="forms-expert",i.hideRequiredAsterisk){let r=document.createElement("style");r.textContent=".forms-expert .forms-expert-required { display: none; }",a.appendChild(r)}if(i.showFormName!==!1&&i.formName){let r=document.createElement("h1");r.className="forms-expert-title",r.textContent=i.formName,r.style.fontSize=i.formNameFontSize!=null?`${i.formNameFontSize}px`:"1.5rem";let p={normal:"400",medium:"500",semibold:"600",bold:"700"};r.style.fontWeight=p[i.formNameFontWeight||"bold"]||"700",r.style.marginBottom="0.5rem",a.appendChild(r)}let c=t.styling;if(t.fields.forEach(r=>{let p=z(r,e[r.name],s[r.name],c);a.appendChild(p)}),i.honeypot){let r=document.createElement("input");r.type="text",r.name="_hp",r.className="forms-expert-honeypot",r.tabIndex=-1,r.autocomplete="off",a.appendChild(r)}let o=document.createElement("input");o.type="hidden",o.name="pageUrl",o.value=typeof window<"u"?window.location.href:"",a.appendChild(o);let n=document.createElement("div");n.className="forms-expert-button-wrapper";let d=document.createElement("button");d.type="submit",d.className=g("forms-expert-button",i.buttonClassName),d.disabled=i.isLoading||!1,i.isLoading?d.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `:d.textContent=i.submitText||"Submit";let l=i.secondaryButton,m=()=>{if(!l?.enabled)return null;let r=document.createElement("a");r.className="forms-expert-secondary-btn",r.href=l.href||"#",r.textContent=l.text||"Learn More",l.openInNewTab&&(r.target="_blank",r.rel="noopener noreferrer");let p=c?.primaryColor||"#3b82f6",u=l.color||p;return l.style==="filled"?(r.style.background=u,r.style.color=l.textColor||"#ffffff",r.style.border="none"):l.style==="outlined"?(r.style.background="transparent",r.style.color=l.textColor||u,r.style.border=`2px solid ${u}`):l.style==="link"?(r.style.background="transparent",r.style.color=l.textColor||u,r.style.border="none",r.style.textDecoration="underline"):(r.style.background="transparent",r.style.color=l.textColor||u,r.style.border="none"),l.marginTop!=null&&(r.style.marginTop=`${l.marginTop}px`),l.marginBottom!=null&&(r.style.marginBottom=`${l.marginBottom}px`),l.fontSize!=null&&(r.style.fontSize=`${l.fontSize}px`),r};if(l?.enabled&&l.position==="left"){let r=m();r&&n.appendChild(r)}if(n.appendChild(d),l?.enabled&&l.position!=="left"&&l.position!=="below"){let r=m();r&&(r.style.marginLeft="auto",n.appendChild(r))}if(a.appendChild(n),l?.enabled&&l.position==="below"){let r=document.createElement("div");r.className="forms-expert-secondary-below";let p=l.align||i.buttonAlign||"left";r.style.justifyContent=p==="center"?"center":p==="right"?"flex-end":"flex-start",l.marginTop!=null&&(r.style.marginTop=`${l.marginTop}px`),l.marginBottom!=null&&(r.style.marginBottom=`${l.marginBottom}px`);let u=m();u&&(u.style.marginTop="0",u.style.marginBottom="0",r.appendChild(u)),a.appendChild(r)}if(i.showBranding!==!1){let r=i.brandingText||"Powered by Forms Expert",p=i.brandingUrl||"https://mira.io",u=document.createElement("div");u.className="forms-expert-branding",u.innerHTML=`<a href="${p}" target="_blank" rel="noopener">${r}</a>`,a.appendChild(u)}return a}function F(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${b(t)}</div>
  `,e}function $(t){return t.reduce((e,s)=>({...e,[s.field]:s.message}),{})}var f=class extends Error{constructor(s,i,a,c){super(s);this.code=i;this.statusCode=a;this.retryAfter=c;this.name="FormsError"}},h=class extends Error{constructor(s){super("Validation failed");this.errors=s;this.name="FormValidationError"}};var x=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let s=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${s}token=${encodeURIComponent(this.apiKey)}`}async request(e,s,i){let a=this.buildUrl(s),c=await fetch(a,{method:e,headers:{"Content-Type":"application/json"},body:i?JSON.stringify(i):void 0}),o=await c.json();if(!c.ok)throw new f(o.message||"Request failed",o.code||"UNKNOWN_ERROR",c.status,o.retryAfter);return o}async isActive(e,s){let i=s?`?lang=${encodeURIComponent(s)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${i}`)}async validate(e,s){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:s})}async submit(e,s,i){let a=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(s).some(o=>o instanceof File||o instanceof FileList&&o.length>0)||i?.onProgress?this.submitWithFormData(a,s,i):this.request("POST",`/f/${this.resourceId}/${e}`,{data:s,pageUrl:i?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:i?.captchaToken})}submitWithFormData(e,s,i){return new Promise((a,c)=>{let o=new FormData;for(let[l,m]of Object.entries(s))m instanceof File?o.append(l,m):m instanceof FileList?Array.from(m).forEach(r=>o.append(l,r)):m!=null&&o.append(`data[${l}]`,String(m));let n=i?.pageUrl||(typeof window<"u"?window.location.href:"");n&&o.append("pageUrl",n),i?.captchaToken&&o.append("captchaToken",i.captchaToken);let d=new XMLHttpRequest;i?.onProgress&&d.upload.addEventListener("progress",l=>{l.lengthComputable&&i.onProgress({loaded:l.loaded,total:l.total,percentage:Math.round(l.loaded/l.total*100)})}),d.addEventListener("load",()=>{try{let l=JSON.parse(d.responseText);d.status>=200&&d.status<300?a(l):c(new f(l.message||"Submission failed",l.code||"UNKNOWN_ERROR",d.status,l.retryAfter))}catch{c(new f("Invalid response","PARSE_ERROR",d.status))}}),d.addEventListener("error",()=>{c(new f("Network error","NETWORK_ERROR",0))}),d.addEventListener("abort",()=>{c(new f("Request aborted","ABORTED",0))}),d.open("POST",e),d.send(o)})}async trackView(e){let s=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var N=class{constructor(e,s,i={}){this.config=null;this.apiClient=e,this.slug=s,this.options=i}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,s){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let a=await this.validate(e);if(!a.valid)throw this.options.onValidationError?.(a.errors),new h(a.errors)}let i=await this.apiClient.submit(this.slug,e,s);return this.options.onSubmitSuccess?.(i),i}catch(i){throw i instanceof f&&this.options.onSubmitError?.(i),i}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},y=class{constructor(e){this.apiClient=new x(e)}async isActive(e,s){return this.apiClient.isActive(e,s)}async validate(e,s){return this.apiClient.validate(e,s)}async submit(e,s,i){return this.apiClient.submit(e,s,i)}form(e,s){return new N(this.apiClient,e,s)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,s,i){let a=i?.maxRetries??3,c=null;for(let o=0;o<a;o++)try{return await this.submit(e,s,i)}catch(n){if(c=n,n instanceof f){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(n.code))throw n;if(n.code.includes("RATE_LIMIT")){let d=n.retryAfter||Math.pow(2,o)*1e3;await new Promise(l=>setTimeout(l,d));continue}}await new Promise(d=>setTimeout(d,Math.pow(2,o)*1e3))}throw c}};var C=class{constructor(e,s){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new y(e),this.options=s;let i=s.target;if(typeof i=="string"){let a=document.querySelector(i);if(!a)throw new Error(`Element not found: ${i}`);this.container=a}else this.container=i}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=v(e),document.head.appendChild(this.styleEl),this.injectGoogleFont(e?.fontFamily)}injectGoogleFont(e){if(!e)return;let s=["Inter","Roboto","Open Sans","Lato","Poppins","Montserrat","Nunito","Source Sans Pro","Raleway","Ubuntu","Playfair Display","Merriweather"],i=e.split(",")[0]?.trim();if(!i||!s.includes(i))return;let a=`forms-expert-font-${this.options.slug}`;if(document.getElementById(a))return;let c=document.createElement("link");c.id=a,c.rel="stylesheet",c.href=`https://fonts.googleapis.com/css2?family=${i.replace(/ /g,"+")}:wght@400;500;600;700&display=swap`,document.head.appendChild(c)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let a=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(F(a));return}let e={...this.config.schema.styling,...this.config.styling},s={...this.config.schema,styling:e},i=k(s,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign,buttonClassName:e.buttonClassName,formNameFontSize:e.formNameFontSize,formNameFontWeight:e.formNameFontWeight});i.addEventListener("input",a=>{let c=a.target;c.name&&c.name!=="_hp"&&c.name!=="pageUrl"&&(c.type==="checkbox"?this.values[c.name]=c.checked:c.type==="file"?this.values[c.name]=c.multiple?c.files:c.files?.[0]:this.values[c.name]=c.value,this.errors[c.name]&&(delete this.errors[c.name],this.render()))}),i.addEventListener("submit",a=>{a.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(i)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let s=this.options.redirectUrl||this.config.settings?.redirectUrl;s&&setTimeout(()=>{window.location.href=s},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof h?(this.errors=$(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function T(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let s=e.getAttribute("data-api-key"),i=e.getAttribute("data-resource-id"),a=e.getAttribute("data-forms-expert"),c=e.getAttribute("data-base-url")||void 0;if(!s||!i||!a){console.error("Forms Expert: Missing required attributes",{apiKey:!!s,resourceId:!!i,slug:!!a});return}new C({apiKey:s,resourceId:i,baseUrl:c},{target:e,slug:a,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T());return H(Q);})();
//# sourceMappingURL=index.global.js.map