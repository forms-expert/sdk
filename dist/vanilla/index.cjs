"use strict";var T=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var H=Object.getOwnPropertyNames;var V=Object.prototype.hasOwnProperty;var W=(t,e)=>{for(var i in e)T(t,i,{get:e[i],enumerable:!0})},q=(t,e,i,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of H(e))!V.call(t,a)&&a!==i&&T(t,a,{get:()=>e[a],enumerable:!(s=O(e,a))||s.enumerable});return t};var D=t=>q(T({},"__esModule",{value:!0}),t);var oe={};W(oe,{FormWidget:()=>$,autoInit:()=>M,errorsToRecord:()=>P,generateFormStyles:()=>R,renderField:()=>E,renderForm:()=>L,renderSuccess:()=>z});module.exports=D(oe);var B={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function j(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function K(t){switch(t){case"none":return"0";case"small":return"0.25rem";case"medium":return"0.375rem";case"large":return"0.75rem";case"full":return"9999px";default:return"0.375rem"}}function _(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function G(t){switch(t){case"sm":case"small":return"0.875rem";case"md":case"medium":return"1rem";case"lg":case"large":return"1.125rem";default:return"1rem"}}function Y(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function X(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function J(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function Q(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function Z(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function ee(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function R(t=B){let e={...B,...t},i=j(e.borderRadius),s=K(e.fieldBorderRadius),a=_(e.buttonRadius),m=G(e.fontSize),c=Y(e.placeholderFontSize),o=X(e.fieldSpacing),d=J(e.formPadding),p=Q(e.labelSpacing),n=Z(e.formWidth),r=e.primaryColor,u=e.buttonColor,l=e.fieldBorderColor||(e.theme==="dark"?"#4b5563":"#d1d5db"),g=e.separatorColor||(e.theme==="dark"?"#4b5563":"#d1d5db"),f=e.fontFamily?e.fontFamily.includes(",")?e.fontFamily:`${e.fontFamily}, sans-serif`:"inherit",h=ee(e.buttonAlign),C={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],S=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:C.px,N=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:C.py,A=e.buttonFontSize!=null?`${e.buttonFontSize}px`:C.fs,U=e.buttonGradient||(e.buttonStyle==="filled"?r:"transparent");return`
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
  font-family: ${f};
  font-size: ${m};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${d};
  border-radius: ${i};
  box-sizing: border-box;
  max-width: ${n};
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
  margin-bottom: ${o};
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
  padding: ${e.fieldPaddingX!=null||e.fieldPaddingY!=null?`${e.fieldPaddingY??8}px ${e.fieldPaddingX??12}px`:"0.5rem 0.75rem"};
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${l}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${l};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":s};
  font-size: ${m};
  font-family: inherit;
  background-color: ${e.inputBackgroundColor||(e.theme==="dark"?"#374151":"#ffffff")};
  color: ${e.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${c};${e.placeholderColor?`
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
  margin-bottom: ${o};
}

.forms-expert-checkbox {
  width: 1rem;
  height: 1rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
  accent-color: ${e.primaryColor};
  background-color: transparent;
  cursor: pointer;
}

.forms-expert-file-wrapper {
  position: relative;
}

.forms-expert-dropzone {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 2px dashed ${l};
  border-radius: ${s};
  padding: 1.5rem;
  cursor: pointer;
  transition: border-color 0.15s, background-color 0.15s;
}

.forms-expert-dropzone:hover {
  border-color: ${e.primaryColor}80;
  background-color: ${e.theme==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.02)"};
}

.forms-expert-file {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${l}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${l};`:""}
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

.forms-expert-divider {
  border: none;
  border-top: 1px solid ${g};
  margin: ${o} 0;
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
  padding: ${N} ${S};
  font-weight: 500;
  font-size: ${A};
  font-family: inherit;
  border-radius: ${a};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  max-width: 100%;
  box-sizing: border-box;
  flex-shrink: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${e.buttonStyle==="filled"?`background: ${U}; color: ${u||"white"}; border: none;`:`background: transparent; color: ${r}; border: 2px solid ${r};`}
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
  border-top: 1px solid ${g};
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
  border-radius: ${a};
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
    padding-left: max(0.5rem, min(${S}, 3vw));
    padding-right: max(0.5rem, min(${S}, 3vw));
    font-size: max(0.75rem, min(${A}, 3.5vw));
  }
}

${e.customCss||""}
`.trim()}function v(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function te(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function re(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function b(t,e){return e?`${t} ${e}`:t}function ne(t){switch(t){case"1/4":return"25%";case"1/3":return"33.333%";case"1/2":return"50%";case"2/3":return"66.666%";case"3/4":return"75%";case"full":return"100%";default:return}}function E(t,e,i,s){let a=document.createElement("div");if(t.type==="heading"){a.className="forms-expert-group";let o=document.createElement("h3");if(o.className="forms-expert-heading",o.style.fontSize=te(s?.headingSize),o.textContent=t.label||"",a.appendChild(o),t.content){let d=document.createElement("p");d.className="forms-expert-heading-subtitle",d.textContent=t.content,a.appendChild(d)}return a}if(t.type==="divider"){let o=document.createElement("hr");return o.className="forms-expert-divider",o}if(t.type==="paragraph"){a.className="forms-expert-group";let o=t.paragraphFontSize?`${t.paragraphFontSize}px`:re(s?.paragraphSize);if(t.label){let d=document.createElement("p");d.className="forms-expert-paragraph-label",d.style.fontSize=o,d.textContent=t.label,a.appendChild(d)}if(t.content){let d=document.createElement("div");d.className="forms-expert-paragraph",d.style.fontSize=o,d.innerHTML=t.content,a.appendChild(d)}return a}if(t.type==="hidden"){let o=document.createElement("input");return o.type="hidden",o.name=t.name,o.value=String(t.defaultValue??e??""),a.appendChild(o),a.style.display="none",a}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){a.className="forms-expert-checkbox-group";let o=document.createElement("input");o.type="checkbox",o.id=`mira-field-${t.name}`,o.name=t.name,o.className="forms-expert-checkbox",o.checked=!!e,t.required&&(o.required=!0);let d=document.createElement("div"),p=document.createElement("label");p.htmlFor=o.id,p.style.cursor="pointer",t.type==="consent"&&t.consentFontSize&&(p.style.fontSize=`${t.consentFontSize}px`);let n=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(p.innerHTML=`${v(n)}${t.required?'<span class="forms-expert-required">*</span>':""}`,d.appendChild(p),t.type==="consent"&&t.consentUrl){let r=document.createElement("a");r.href=t.consentUrl,r.target="_blank",r.rel="noopener noreferrer",r.textContent="View policy",r.className="forms-expert-consent-link",d.appendChild(r)}if(a.appendChild(o),a.appendChild(d),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,a.appendChild(r)}return a}if(a.className="forms-expert-group",t.label){let o=document.createElement("label");o.className=`forms-expert-label${s?.labelClassName?" "+s.labelClassName:""}`,o.htmlFor=`mira-field-${t.name}`,o.innerHTML=`${v(t.label)}${t.required?'<span class="forms-expert-required">*</span>':""}`,a.appendChild(o)}let m=document.createElement("div");m.className="forms-expert-input-wrapper";let c;switch(t.type){case"textarea":case"richText":c=document.createElement("textarea"),c.className=b("forms-expert-textarea",s?.fieldClassName),c.value=String(e||""),t.maxLength&&(c.maxLength=t.maxLength);break;case"select":case"dropdown":{c=document.createElement("select"),c.className=b("forms-expert-select",s?.fieldClassName);let o=document.createElement("option");o.value="",o.textContent=t.placeholder||"Select an option...",c.appendChild(o),(t.options||[]).forEach(p=>{let n=document.createElement("option");n.value=p,n.textContent=p,e===p&&(n.selected=!0),c.appendChild(n)});break}case"radio":{let o=document.createElement("div");if(o.className="forms-expert-radio-group",(t.options||[]).forEach(p=>{let n=document.createElement("label");n.className="forms-expert-radio-item";let r=document.createElement("input");r.type="radio",r.name=t.name,r.value=p,r.checked=e===p,n.appendChild(r),n.appendChild(document.createTextNode(` ${p}`)),o.appendChild(n)}),m.appendChild(o),i){let p=document.createElement("div");p.className="forms-expert-error-message",p.textContent=i,m.appendChild(p)}return a.appendChild(m),a}case"multiselect":{let o=document.createElement("div");o.className="forms-expert-multiselect-group";let d=e||[];if((t.options||[]).forEach(n=>{let r=document.createElement("label");r.className="forms-expert-checkbox-item";let u=document.createElement("input");u.type="checkbox",u.name=t.name,u.value=n,u.checked=d.includes(n),r.appendChild(u),r.appendChild(document.createTextNode(` ${n}`)),o.appendChild(r)}),m.appendChild(o),i){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=i,m.appendChild(n)}return a.appendChild(m),a}case"rating":{let o=document.createElement("div");o.className="forms-expert-rating";let d=t.ratingMax||5,p=e||0;for(let n=1;n<=d;n++){let r=document.createElement("button");r.type="button",r.className=`forms-expert-rating-star ${n<=p?"active":""}`,r.textContent="\u2605",r.dataset.value=String(n),o.appendChild(r)}if(m.appendChild(o),i){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=i,m.appendChild(n)}return a.appendChild(m),a}case"scale":case"opinionScale":{let o=document.createElement("div");o.className="forms-expert-scale";let d=t.min??(t.type==="opinionScale"?0:1),p=t.max??(t.type==="opinionScale"?10:5),n=e;for(let r=d;r<=p;r++){let u=document.createElement("button");u.type="button",u.className=`forms-expert-scale-btn ${n===r?"active":""}`,u.textContent=String(r),u.dataset.value=String(r),o.appendChild(u)}if(m.appendChild(o),t.lowLabel||t.highLabel){let r=document.createElement("div");r.className="forms-expert-scale-labels",r.innerHTML=`<span>${v(t.lowLabel||"")}</span><span>${v(t.highLabel||"")}</span>`,m.appendChild(r)}if(i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,m.appendChild(r)}return a.appendChild(m),a}case"slider":{c=document.createElement("input"),c.type="range",c.className="forms-expert-slider",c.min=String(t.min??0),c.max=String(t.max??100),c.step=String(t.step??1),c.value=String(e??t.min??0);break}case"file":{let o=s?.theme==="dark"?"#4b5563":"#d1d5db",d=s?.theme==="dark"?"#9ca3af":"#6b7280",p=s?.primaryColor||"#3b82f6",n=document.createElement("label");n.htmlFor=`mira-field-${t.name}`,n.className="forms-expert-dropzone";let r=document.createElement("input");r.id=`mira-field-${t.name}`,r.name=t.name,r.type="file",r.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0",t.allowedMimeTypes?.length&&(r.accept=t.allowedMimeTypes.join(",")),t.multiple&&(r.multiple=!0),n.appendChild(r);let u=document.createElement("div");u.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="${d}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,n.appendChild(u);let l=document.createElement("span");if(l.style.cssText="font-size:0.875rem;font-weight:500",l.textContent="Drag & drop a file here, or click to browse",n.appendChild(l),t.allowedMimeTypes?.length){let g=document.createElement("span");g.style.cssText=`font-size:0.75rem;color:${d}`,g.textContent=t.allowedMimeTypes.join(", "),n.appendChild(g)}if(t.maxFileSize){let g=document.createElement("span");g.style.cssText=`font-size:0.75rem;color:${d}`;let f=t.maxFileSize;g.textContent=`Max size: ${f<1048576?`${(f/1024).toFixed(0)} KB`:`${(f/1048576).toFixed(0)} MB`}`,n.appendChild(g)}if(n.addEventListener("dragover",g=>{g.preventDefault(),n.style.borderColor=p,n.style.backgroundColor=s?.theme==="dark"?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.04)"}),n.addEventListener("dragleave",()=>{n.style.borderColor=o,n.style.backgroundColor="transparent"}),n.addEventListener("drop",g=>{g.preventDefault(),n.style.borderColor=o,n.style.backgroundColor="transparent"}),a.appendChild(n),i){let g=document.createElement("div");g.className="forms-expert-error-message",g.textContent=i,a.appendChild(g)}return a}case"currency":{c=document.createElement("input"),c.type="number",c.className=b("forms-expert-input",s?.fieldClassName),c.value=String(e??""),t.min!==void 0&&(c.min=String(t.min)),t.max!==void 0&&(c.max=String(t.max)),c.step=String(t.step||.01);break}case"phone":c=document.createElement("input"),c.type="tel",c.className=b("forms-expert-input",s?.fieldClassName),c.value=String(e||"");break;case"url":c=document.createElement("input"),c.type="url",c.className=b("forms-expert-input",s?.fieldClassName),c.value=String(e||"");break;case"password":c=document.createElement("input"),c.type="password",c.className=b("forms-expert-input",s?.fieldClassName),c.value=String(e||"");break;case"time":c=document.createElement("input"),c.type="time",c.className=b("forms-expert-input",s?.fieldClassName),c.value=String(e||"");break;case"datetime":c=document.createElement("input"),c.type="datetime-local",c.className=b("forms-expert-input",s?.fieldClassName),c.value=String(e||"");break;case"colorPicker":c=document.createElement("input"),c.type="color",c.className="forms-expert-color",c.value=String(e||"#000000");break;case"dateRange":{let o=document.createElement("div");o.className="forms-expert-date-range";let d=e||{},p=document.createElement("input");p.type="date",p.className=b("forms-expert-input",s?.fieldClassName),p.name=`${t.name}.start`,p.value=d.start||"";let n=document.createElement("input");if(n.type="date",n.className=b("forms-expert-input",s?.fieldClassName),n.name=`${t.name}.end`,n.value=d.end||"",o.appendChild(p),o.appendChild(n),m.appendChild(o),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,m.appendChild(r)}return a.appendChild(m),a}case"address":{let o=document.createElement("div");o.className="forms-expert-address";let d=t.addressFields||["street","city","state","zip","country"],p=e||{},n={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(d.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=b("forms-expert-input",s?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=n[r]||r,u.value=p[r]||"",o.appendChild(u)}),m.appendChild(o),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,m.appendChild(r)}return a.appendChild(m),a}case"name":{let o=document.createElement("div");o.className="forms-expert-name";let d=t.nameFields||["first","last"],p=e||{},n={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(d.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=b("forms-expert-input",s?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=n[r]||r,u.value=p[r]||"",o.appendChild(u)}),m.appendChild(o),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,m.appendChild(r)}return a.appendChild(m),a}case"imageChoice":{let o=document.createElement("div");o.className="forms-expert-image-choice";let d=t.options||[],p=e;if(d.forEach(n=>{let r=document.createElement("button");if(r.type="button",r.className=`forms-expert-image-choice-item ${p===n.value?"active":""}`,r.dataset.value=n.value,n.imageUrl){let l=document.createElement("img");l.src=n.imageUrl,l.alt=n.label,r.appendChild(l)}let u=document.createElement("span");u.textContent=n.label,r.appendChild(u),o.appendChild(r)}),m.appendChild(o),i){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=i,m.appendChild(n)}return a.appendChild(m),a}case"ranking":{let o=document.createElement("div");o.className="forms-expert-ranking";let d=t.options||[];if((e||[...d]).forEach((n,r)=>{let u=document.createElement("div");u.className="forms-expert-ranking-item",u.textContent=`${r+1}. ${n}`,u.dataset.value=n,o.appendChild(u)}),m.appendChild(o),i){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=i,m.appendChild(n)}return a.appendChild(m),a}case"location":{let o=document.createElement("div");o.className="forms-expert-location";let d=e||{},p=document.createElement("input");p.type="text",p.className=b("forms-expert-input",s?.fieldClassName),p.name=`${t.name}.address`,p.placeholder="Address",p.value=d.address||"",o.appendChild(p);let n=document.createElement("div");n.className="forms-expert-location-coords";let r=document.createElement("input");r.type="number",r.className=b("forms-expert-input",s?.fieldClassName),r.name=`${t.name}.lat`,r.placeholder="Latitude",r.step="any",r.value=d.lat!==void 0?String(d.lat):"";let u=document.createElement("input");if(u.type="number",u.className=b("forms-expert-input",s?.fieldClassName),u.name=`${t.name}.lng`,u.placeholder="Longitude",u.step="any",u.value=d.lng!==void 0?String(d.lng):"",n.appendChild(r),n.appendChild(u),o.appendChild(n),m.appendChild(o),i){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=i,m.appendChild(l)}return a.appendChild(m),a}default:c=document.createElement("input"),c.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",c.className=b("forms-expert-input",s?.fieldClassName),c.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(c.min=String(t.min)),t.max!==void 0&&(c.max=String(t.max)),t.step!==void 0&&(c.step=String(t.step)));break}if(c.id=`mira-field-${t.name}`,c.name=t.name,t.placeholder&&"placeholder"in c&&(c.placeholder=t.placeholder),t.required&&(c.required=!0),i&&c.classList.add("forms-expert-error"),m.appendChild(c),i){let o=document.createElement("div");o.className="forms-expert-error-message",o.textContent=i,m.appendChild(o)}return a.appendChild(m),a}function L(t,e={},i={},s={}){let a=document.createElement("form");if(a.className="forms-expert",s.hideRequiredAsterisk){let l=document.createElement("style");l.textContent=".forms-expert .forms-expert-required { display: none; }",a.appendChild(l)}if(s.showFormName!==!1&&s.formName){let l=document.createElement("h1");l.className="forms-expert-title",l.textContent=s.formName,l.style.fontSize=s.formNameFontSize!=null?`${s.formNameFontSize}px`:"1.5rem";let g={normal:"400",medium:"500",semibold:"600",bold:"700"};l.style.fontWeight=g[s.formNameFontWeight||"bold"]||"700",l.style.marginBottom="0.5rem",a.appendChild(l)}let m=t.styling,c=t.fields,o=0;for(;o<c.length;){let l=c[o];if(l.row!=null){let g=[l],f=o+1;for(;f<c.length&&c[f].row===l.row;)g.push(c[f]),f++;if(g.length>1){let h=document.createElement("div");h.style.display="flex",h.style.gap="0.75rem",h.style.flexWrap="wrap",g.forEach(y=>{let C=document.createElement("div"),S=ne(y.width);S?C.style.flex=`0 0 calc(${S} - 0.75rem)`:C.style.flex="1 1 0",C.style.minWidth="180px";let N=E(y,e[y.name],i[y.name],m);C.appendChild(N),h.appendChild(C)}),a.appendChild(h)}else{let h=E(l,e[l.name],i[l.name],m);a.appendChild(h)}o=f}else{let g=E(l,e[l.name],i[l.name],m);a.appendChild(g),o++}}if(s.honeypot){let l=document.createElement("input");l.type="text",l.name="_hp",l.className="forms-expert-honeypot",l.tabIndex=-1,l.autocomplete="off",a.appendChild(l)}let d=document.createElement("input");d.type="hidden",d.name="pageUrl",d.value=typeof window<"u"?window.location.href:"",a.appendChild(d);let p=document.createElement("div");p.className="forms-expert-button-wrapper";let n=document.createElement("button");if(n.type="submit",n.className=b("forms-expert-button",s.buttonClassName),n.disabled=s.isLoading||!1,s.isLoading)n.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `;else{let l=m?.buttonIcon,g=m?.buttonIconPosition||"left";if(l){n.style.display="inline-flex",n.style.alignItems="center",n.style.gap="0.5rem";let f=document.createElement("span");f.style.display="inline-flex",f.style.flexShrink="0",f.innerHTML=l;let h=document.createElement("span");h.textContent=s.submitText||"Submit",g==="right"?(n.appendChild(h),n.appendChild(f)):(n.appendChild(f),n.appendChild(h))}else n.textContent=s.submitText||"Submit"}let r=s.secondaryButton,u=()=>{if(!r?.enabled)return null;let l=document.createElement("a");if(l.className="forms-expert-secondary-btn",l.href=r.href||"#",l.style.display="inline-flex",l.style.alignItems="center",l.style.gap="0.5rem",r.icon){let h=document.createElement("span");h.style.display="inline-flex",h.style.flexShrink="0",h.innerHTML=r.icon;let y=document.createElement("span");y.textContent=r.text||"Learn More",r.iconPosition==="right"?(l.appendChild(y),l.appendChild(h)):(l.appendChild(h),l.appendChild(y))}else l.textContent=r.text||"Learn More";r.openInNewTab&&(l.target="_blank",l.rel="noopener noreferrer");let g=m?.primaryColor||"#3b82f6",f=r.color||g;return r.style==="filled"?(l.style.background=f,l.style.color=r.textColor||"#ffffff",l.style.border="none"):r.style==="outlined"?(l.style.background="transparent",l.style.color=r.textColor||f,l.style.border=`2px solid ${f}`):r.style==="link"?(l.style.background="transparent",l.style.color=r.textColor||f,l.style.border="none",l.style.textDecoration="underline"):(l.style.background="transparent",l.style.color=r.textColor||f,l.style.border="none"),r.marginTop!=null&&(l.style.marginTop=`${r.marginTop}px`),r.marginBottom!=null&&(l.style.marginBottom=`${r.marginBottom}px`),r.fontSize!=null&&(l.style.fontSize=`${r.fontSize}px`),l};if(r?.enabled&&r.position==="left"){let l=u();l&&p.appendChild(l)}if(p.appendChild(n),r?.enabled&&r.position!=="left"&&r.position!=="below"){let l=u();l&&(l.style.marginLeft="auto",p.appendChild(l))}if(a.appendChild(p),r?.enabled&&r.position==="below"){let l=document.createElement("div");l.className="forms-expert-secondary-below";let g=r.align||s.buttonAlign||"left";l.style.justifyContent=g==="center"?"center":g==="right"?"flex-end":"flex-start",r.marginTop!=null&&(l.style.marginTop=`${r.marginTop}px`),r.marginBottom!=null&&(l.style.marginBottom=`${r.marginBottom}px`);let f=u();f&&(f.style.marginTop="0",f.style.marginBottom="0",l.appendChild(f)),a.appendChild(l)}if(s.showBranding!==!1){let l=s.brandingText||"Powered by Forms Expert",g=s.brandingUrl||"https://mira.io",f=document.createElement("div");f.className="forms-expert-branding",f.innerHTML=`<a href="${g}" target="_blank" rel="noopener">${l}</a>`,a.appendChild(f)}return a}function z(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${v(t)}</div>
  `,e}function P(t){return t.reduce((e,i)=>({...e,[i.field]:i.message}),{})}var x=class extends Error{constructor(i,s,a,m){super(i);this.code=s;this.statusCode=a;this.retryAfter=m;this.name="FormsError"}},w=class extends Error{constructor(i){super("Validation failed");this.errors=i;this.name="FormValidationError"}};var k=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let i=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${i}token=${encodeURIComponent(this.apiKey)}`}async request(e,i,s){let a=this.buildUrl(i),m=await fetch(a,{method:e,headers:{"Content-Type":"application/json"},body:s?JSON.stringify(s):void 0}),c=await m.json();if(!m.ok)throw new x(c.message||"Request failed",c.code||"UNKNOWN_ERROR",m.status,c.retryAfter);return c}async isActive(e,i){let s=i?`?lang=${encodeURIComponent(i)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${s}`)}async validate(e,i){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:i})}async submit(e,i,s){let a=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(i).some(c=>c instanceof File||c instanceof FileList&&c.length>0)||s?.onProgress?this.submitWithFormData(a,i,s):this.request("POST",`/f/${this.resourceId}/${e}`,{data:i,pageUrl:s?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:s?.captchaToken})}submitWithFormData(e,i,s){return new Promise((a,m)=>{let c=new FormData;for(let[p,n]of Object.entries(i))n instanceof File?c.append(p,n):n instanceof FileList?Array.from(n).forEach(r=>c.append(p,r)):n!=null&&c.append(`data[${p}]`,String(n));let o=s?.pageUrl||(typeof window<"u"?window.location.href:"");o&&c.append("pageUrl",o),s?.captchaToken&&c.append("captchaToken",s.captchaToken);let d=new XMLHttpRequest;s?.onProgress&&d.upload.addEventListener("progress",p=>{p.lengthComputable&&s.onProgress({loaded:p.loaded,total:p.total,percentage:Math.round(p.loaded/p.total*100)})}),d.addEventListener("load",()=>{try{let p=JSON.parse(d.responseText);d.status>=200&&d.status<300?a(p):m(new x(p.message||"Submission failed",p.code||"UNKNOWN_ERROR",d.status,p.retryAfter))}catch{m(new x("Invalid response","PARSE_ERROR",d.status))}}),d.addEventListener("error",()=>{m(new x("Network error","NETWORK_ERROR",0))}),d.addEventListener("abort",()=>{m(new x("Request aborted","ABORTED",0))}),d.open("POST",e),d.send(c)})}async trackView(e){let i=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var I=class{constructor(e,i,s={}){this.config=null;this.apiClient=e,this.slug=i,this.options=s}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,i){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let a=await this.validate(e);if(!a.valid)throw this.options.onValidationError?.(a.errors),new w(a.errors)}let s=await this.apiClient.submit(this.slug,e,i);return this.options.onSubmitSuccess?.(s),s}catch(s){throw s instanceof x&&this.options.onSubmitError?.(s),s}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},F=class{constructor(e){this.apiClient=new k(e)}async isActive(e,i){return this.apiClient.isActive(e,i)}async validate(e,i){return this.apiClient.validate(e,i)}async submit(e,i,s){return this.apiClient.submit(e,i,s)}form(e,i){return new I(this.apiClient,e,i)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,i,s){let a=s?.maxRetries??3,m=null;for(let c=0;c<a;c++)try{return await this.submit(e,i,s)}catch(o){if(m=o,o instanceof x){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(o.code))throw o;if(o.code.includes("RATE_LIMIT")){let d=o.retryAfter||Math.pow(2,c)*1e3;await new Promise(p=>setTimeout(p,d));continue}}await new Promise(d=>setTimeout(d,Math.pow(2,c)*1e3))}throw m}};var $=class{constructor(e,i){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new F(e),this.options=i;let s=i.target;if(typeof s=="string"){let a=document.querySelector(s);if(!a)throw new Error(`Element not found: ${s}`);this.container=a}else this.container=s}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=R(e),document.head.appendChild(this.styleEl),this.injectGoogleFont(e?.fontFamily)}injectGoogleFont(e){if(!e)return;let i=["Inter","Roboto","Open Sans","Lato","Poppins","Montserrat","Nunito","Source Sans Pro","Raleway","Ubuntu","Playfair Display","Merriweather"],s=e.split(",")[0]?.trim();if(!s||!i.includes(s))return;let a=`forms-expert-font-${this.options.slug}`;if(document.getElementById(a))return;let m=document.createElement("link");m.id=a,m.rel="stylesheet",m.href=`https://fonts.googleapis.com/css2?family=${s.replace(/ /g,"+")}:wght@400;500;600;700&display=swap`,document.head.appendChild(m)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let a=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(z(a));return}let e={...this.config.schema.styling,...this.config.styling},i={...this.config.schema,styling:e},s=L(i,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign,buttonClassName:e.buttonClassName,formNameFontSize:e.formNameFontSize,formNameFontWeight:e.formNameFontWeight});s.addEventListener("input",a=>{let m=a.target;m.name&&m.name!=="_hp"&&m.name!=="pageUrl"&&(m.type==="checkbox"?this.values[m.name]=m.checked:m.type==="file"?this.values[m.name]=m.multiple?m.files:m.files?.[0]:this.values[m.name]=m.value,this.errors[m.name]&&(delete this.errors[m.name],this.render()))}),s.addEventListener("submit",a=>{a.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(s)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let i=this.options.redirectUrl||this.config.settings?.redirectUrl;i&&setTimeout(()=>{window.location.href=i},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof w?(this.errors=P(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function M(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let i=e.getAttribute("data-api-key"),s=e.getAttribute("data-resource-id"),a=e.getAttribute("data-forms-expert"),m=e.getAttribute("data-base-url")||void 0;if(!i||!s||!a){console.error("Forms Expert: Missing required attributes",{apiKey:!!i,resourceId:!!s,slug:!!a});return}new $({apiKey:i,resourceId:s,baseUrl:m},{target:e,slug:a,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M());0&&(module.exports={FormWidget,autoInit,errorsToRecord,generateFormStyles,renderField,renderForm,renderSuccess});
//# sourceMappingURL=index.cjs.map