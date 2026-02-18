"use strict";var FormsExpert=(()=>{var L=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var H=Object.getOwnPropertyNames;var V=Object.prototype.hasOwnProperty;var W=(t,e)=>{for(var i in e)L(t,i,{get:e[i],enumerable:!0})},q=(t,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of H(e))!V.call(t,s)&&s!==i&&L(t,s,{get:()=>e[s],enumerable:!(n=O(e,s))||n.enumerable});return t};var D=t=>q(L({},"__esModule",{value:!0}),t);var ie={};W(ie,{FormWidget:()=>T,autoInit:()=>A,errorsToRecord:()=>I,generateFormStyles:()=>z,renderField:()=>$,renderForm:()=>P,renderSuccess:()=>B});var U={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function j(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function K(t){switch(t){case"none":return"0";case"small":return"0.25rem";case"medium":return"0.375rem";case"large":return"0.75rem";case"full":return"9999px";default:return"0.375rem"}}function _(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function Y(t){switch(t){case"sm":case"small":return"0.875rem";case"md":case"medium":return"1rem";case"lg":case"large":return"1.125rem";default:return"1rem"}}function X(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function G(t){switch(t){case"none":return"0";case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function J(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function Q(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function Z(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function ee(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function z(t=U){let e={...U,...t},i=j(e.borderRadius),n=K(e.fieldBorderRadius),s=_(e.buttonRadius),d=Y(e.fontSize),m=X(e.placeholderFontSize),o=G(e.fieldSpacing),c=J(e.formPadding),p=Q(e.labelSpacing),l=Z(e.formWidth),r=e.primaryColor,u=e.buttonColor,g=e.fieldBorderColor||(e.theme==="dark"?"#4b5563":"#d1d5db"),h=e.separatorColor||(e.theme==="dark"?"#4b5563":"#d1d5db"),a=e.fontFamily?e.fontFamily.includes(",")?e.fontFamily:`${e.fontFamily}, sans-serif`:"inherit",f=ee(e.buttonAlign),x={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],C=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:x.px,w=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:x.py,E=e.buttonFontSize!=null?`${e.buttonFontSize}px`:x.fs,R=e.buttonGradient||(e.buttonStyle==="filled"?r:"transparent");return`
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
  font-size: ${d};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${c};
  border-radius: ${i};
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
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${g}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${g};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":n};
  font-size: ${d};
  font-family: inherit;
  background-color: ${e.inputBackgroundColor||(e.theme==="dark"?"#374151":"#ffffff")};
  color: ${e.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${m};${e.placeholderColor?`
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

.forms-expert-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 50;
  margin-top: 4px;
  background-color: ${e.inputBackgroundColor||(e.theme==="dark"?"#374151":"#ffffff")};
  border: 1px solid ${g};
  border-radius: ${n};
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  max-height: 200px;
  overflow-y: auto;
}

.forms-expert-select-option {
  padding: ${e.fieldPaddingX!=null||e.fieldPaddingY!=null?`${e.fieldPaddingY??8}px ${e.fieldPaddingX??12}px`:"0.5rem 0.75rem"};
  cursor: pointer;
  font-size: ${d};
  transition: background-color 0.1s;
}

.forms-expert-select-option:hover {
  background-color: ${e.primaryColor}15;
}

.forms-expert-select-option.active {
  background-color: ${e.primaryColor}20;
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
  border: 2px dashed ${g};
  border-radius: ${n};
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
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${g}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${g};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":n};
  font-size: ${d};
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
  border-top: 1px solid ${h};
  margin: ${o} 0;
}

.forms-expert-button-wrapper {
  display: flex;
  justify-content: ${f};
  margin-top: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.forms-expert-button {
  ${e.buttonFullWidth?"width: 100%;":e.buttonAlign?"":"width: 100%;"}
  padding: ${w} ${C};
  font-weight: 500;
  font-size: ${E};
  font-family: inherit;
  border-radius: ${s};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  max-width: 100%;
  box-sizing: border-box;
  flex-shrink: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${e.buttonStyle==="filled"?`background: ${R}; color: ${u||"white"}; border: none;`:`background: transparent; color: ${r}; border: 2px solid ${r};`}
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
  border-top: 1px solid ${h};
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
  font-size: ${d};
  font-family: inherit;
  border-radius: ${s};
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
.forms-expert-multiselect-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: ${e.fieldPaddingX!=null||e.fieldPaddingY!=null?`${e.fieldPaddingY??8}px ${e.fieldPaddingX??12}px`:"0.5rem 0.75rem"};
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${g}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${g};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":n};
  background-color: ${e.inputBackgroundColor||(e.theme==="dark"?"#374151":"#ffffff")};
  box-sizing: border-box;
}
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
    padding-left: max(0.5rem, min(${C}, 3vw));
    padding-right: max(0.5rem, min(${C}, 3vw));
    font-size: max(0.75rem, min(${E}, 3.5vw));
  }
}

${e.customCss||""}
`.trim()}function k(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function te(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function re(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function y(t,e){return e?`${t} ${e}`:t}function ne(t){return t.map(e=>typeof e=="string"?{value:e,label:e}:e)}function oe(t){switch(t){case"1/4":return"25%";case"1/3":return"33.333%";case"1/2":return"50%";case"2/3":return"66.666%";case"3/4":return"75%";case"full":return"100%";default:return}}function $(t,e,i,n){let s=document.createElement("div");if(t.type==="heading"){s.className="forms-expert-group";let o=document.createElement("h3");if(o.className="forms-expert-heading",o.style.fontSize=te(n?.headingSize),o.textContent=t.label||"",s.appendChild(o),t.content){let c=document.createElement("p");c.className="forms-expert-heading-subtitle",c.textContent=t.content,s.appendChild(c)}return s}if(t.type==="divider"){let o=document.createElement("hr");return o.className="forms-expert-divider",o}if(t.type==="paragraph"){s.className="forms-expert-group";let o=t.paragraphFontSize?`${t.paragraphFontSize}px`:re(n?.paragraphSize);if(t.label){let c=document.createElement("p");c.className="forms-expert-paragraph-label",c.style.fontSize=o,c.textContent=t.label,s.appendChild(c)}if(t.content){let c=document.createElement("div");c.className="forms-expert-paragraph",c.style.fontSize=o,c.innerHTML=t.content,s.appendChild(c)}return s}if(t.type==="hidden"){let o=document.createElement("input");return o.type="hidden",o.name=t.name,o.value=String(t.defaultValue??e??""),s.appendChild(o),s.style.display="none",s}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){s.className="forms-expert-checkbox-group";let o=document.createElement("input");o.type="checkbox",o.id=`mira-field-${t.name}`,o.name=t.name,o.className="forms-expert-checkbox",o.checked=!!e,t.required&&(o.required=!0);let c=document.createElement("div"),p=document.createElement("label");p.htmlFor=o.id,p.style.cursor="pointer",t.type==="consent"&&t.consentFontSize&&(p.style.fontSize=`${t.consentFontSize}px`);let l=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(p.innerHTML=`${k(l)}${t.required?'<span class="forms-expert-required">*</span>':""}`,c.appendChild(p),t.type==="consent"&&t.consentUrl){let r=document.createElement("a");r.href=t.consentUrl,r.target="_blank",r.rel="noopener noreferrer",r.textContent="View policy",r.className="forms-expert-consent-link",c.appendChild(r)}if(s.appendChild(o),s.appendChild(c),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,s.appendChild(r)}return s}if(s.className="forms-expert-group",t.label){let o=document.createElement("label");o.className=`forms-expert-label${n?.labelClassName?" "+n.labelClassName:""}`,o.htmlFor=`mira-field-${t.name}`,o.innerHTML=`${k(t.label)}${t.required?'<span class="forms-expert-required">*</span>':""}`,s.appendChild(o)}let d=document.createElement("div");d.className="forms-expert-input-wrapper";let m;switch(t.type){case"textarea":case"richText":m=document.createElement("textarea"),m.className=y("forms-expert-textarea",n?.fieldClassName),m.value=String(e||""),t.maxLength&&(m.maxLength=t.maxLength);break;case"select":case"dropdown":{let o=document.createElement("div");o.style.position="relative",o.style.width="100%",n?.fieldClassName&&(o.className=n.fieldClassName);let c=document.createElement("button");c.type="button",c.className="forms-expert-select",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="space-between",c.style.cursor="pointer",c.style.textAlign="left",c.style.width="100%";let p=ne(t.options||[]),l=p.find(a=>a.value===String(e||"")),r=document.createElement("span");r.textContent=l?.label||t.placeholder||"Select an option...",!l&&n?.placeholderColor&&(r.style.color=n.placeholderColor),c.appendChild(r);let u=document.createElement("span");u.innerHTML='<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',u.style.flexShrink="0",u.style.opacity="0.5",c.appendChild(u);let g=document.createElement("div");g.className="forms-expert-select-dropdown",g.style.display="none",p.forEach(a=>{let f=document.createElement("div");f.className="forms-expert-select-option",f.textContent=a.label,String(e||"")===a.value&&f.classList.add("active"),f.addEventListener("mousedown",b=>{b.preventDefault(),h.value=a.value,r.textContent=a.label,n?.placeholderColor&&(r.style.color=""),g.querySelectorAll(".forms-expert-select-option").forEach(x=>x.classList.remove("active")),f.classList.add("active"),g.style.display="none",h.dispatchEvent(new Event("input",{bubbles:!0}))}),g.appendChild(f)}),c.addEventListener("click",()=>{g.style.display=g.style.display==="none"?"block":"none"}),c.addEventListener("blur",()=>{setTimeout(()=>{g.style.display="none"},150)});let h=document.createElement("input");if(h.type="hidden",h.name=t.name,h.value=String(e||""),t.required&&(h.required=!0),o.appendChild(c),o.appendChild(g),o.appendChild(h),d.appendChild(o),i){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=i,d.appendChild(a)}return s.appendChild(d),s}case"radio":{let o=document.createElement("div");if(o.className="forms-expert-radio-group",(t.options||[]).forEach(p=>{let l=document.createElement("label");l.className="forms-expert-radio-item";let r=document.createElement("input");r.type="radio",r.name=t.name,r.value=p,r.checked=e===p,l.appendChild(r),l.appendChild(document.createTextNode(` ${p}`)),o.appendChild(l)}),d.appendChild(o),i){let p=document.createElement("div");p.className="forms-expert-error-message",p.textContent=i,d.appendChild(p)}return s.appendChild(d),s}case"multiselect":{let o=document.createElement("div");o.className="forms-expert-multiselect-group";let c=e||[];if((t.options||[]).forEach(l=>{let r=document.createElement("label");r.className="forms-expert-checkbox-item";let u=document.createElement("input");u.type="checkbox",u.name=t.name,u.value=l,u.checked=c.includes(l),r.appendChild(u),r.appendChild(document.createTextNode(` ${l}`)),o.appendChild(r)}),d.appendChild(o),i){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=i,d.appendChild(l)}return s.appendChild(d),s}case"rating":{let o=document.createElement("div");o.className="forms-expert-rating";let c=t.ratingMax||5,p=e||0;for(let l=1;l<=c;l++){let r=document.createElement("button");r.type="button",r.className=`forms-expert-rating-star ${l<=p?"active":""}`,r.textContent="\u2605",r.dataset.value=String(l),o.appendChild(r)}if(d.appendChild(o),i){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=i,d.appendChild(l)}return s.appendChild(d),s}case"scale":case"opinionScale":{let o=document.createElement("div");o.className="forms-expert-scale";let c=t.min??(t.type==="opinionScale"?0:1),p=t.max??(t.type==="opinionScale"?10:5),l=e;for(let r=c;r<=p;r++){let u=document.createElement("button");u.type="button",u.className=`forms-expert-scale-btn ${l===r?"active":""}`,u.textContent=String(r),u.dataset.value=String(r),o.appendChild(u)}if(d.appendChild(o),t.lowLabel||t.highLabel){let r=document.createElement("div");r.className="forms-expert-scale-labels",r.innerHTML=`<span>${k(t.lowLabel||"")}</span><span>${k(t.highLabel||"")}</span>`,d.appendChild(r)}if(i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,d.appendChild(r)}return s.appendChild(d),s}case"slider":{m=document.createElement("input"),m.type="range",m.className="forms-expert-slider",m.min=String(t.min??0),m.max=String(t.max??100),m.step=String(t.step??1),m.value=String(e??t.min??0);break}case"file":{let o=n?.theme==="dark"?"#4b5563":"#d1d5db",c=n?.theme==="dark"?"#9ca3af":"#6b7280",p=n?.primaryColor||"#3b82f6",l=document.createElement("label");l.htmlFor=`mira-field-${t.name}`,l.className="forms-expert-dropzone";let r=document.createElement("input");r.id=`mira-field-${t.name}`,r.name=t.name,r.type="file",r.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0",t.allowedMimeTypes?.length&&(r.accept=t.allowedMimeTypes.join(",")),t.multiple&&(r.multiple=!0),l.appendChild(r);let u=document.createElement("div");u.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,l.appendChild(u);let g=document.createElement("span");if(g.style.cssText="font-size:0.875rem;font-weight:500",g.textContent="Drag & drop a file here, or click to browse",l.appendChild(g),t.allowedMimeTypes?.length){let h=document.createElement("span");h.style.cssText=`font-size:0.75rem;color:${c}`,h.textContent=t.allowedMimeTypes.join(", "),l.appendChild(h)}if(t.maxFileSize){let h=document.createElement("span");h.style.cssText=`font-size:0.75rem;color:${c}`;let a=t.maxFileSize;h.textContent=`Max size: ${a<1048576?`${(a/1024).toFixed(0)} KB`:`${(a/1048576).toFixed(0)} MB`}`,l.appendChild(h)}if(l.addEventListener("dragover",h=>{h.preventDefault(),l.style.borderColor=p,l.style.backgroundColor=n?.theme==="dark"?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.04)"}),l.addEventListener("dragleave",()=>{l.style.borderColor=o,l.style.backgroundColor="transparent"}),l.addEventListener("drop",h=>{h.preventDefault(),l.style.borderColor=o,l.style.backgroundColor="transparent"}),s.appendChild(l),i){let h=document.createElement("div");h.className="forms-expert-error-message",h.textContent=i,s.appendChild(h)}return s}case"currency":{m=document.createElement("input"),m.type="number",m.className=y("forms-expert-input",n?.fieldClassName),m.value=String(e??""),t.min!==void 0&&(m.min=String(t.min)),t.max!==void 0&&(m.max=String(t.max)),m.step=String(t.step||.01);break}case"phone":m=document.createElement("input"),m.type="tel",m.className=y("forms-expert-input",n?.fieldClassName),m.value=String(e||"");break;case"url":m=document.createElement("input"),m.type="url",m.className=y("forms-expert-input",n?.fieldClassName),m.value=String(e||"");break;case"password":m=document.createElement("input"),m.type="password",m.className=y("forms-expert-input",n?.fieldClassName),m.value=String(e||"");break;case"time":m=document.createElement("input"),m.type="time",m.className=y("forms-expert-input",n?.fieldClassName),m.value=String(e||"");break;case"datetime":m=document.createElement("input"),m.type="datetime-local",m.className=y("forms-expert-input",n?.fieldClassName),m.value=String(e||"");break;case"colorPicker":m=document.createElement("input"),m.type="color",m.className="forms-expert-color",m.value=String(e||"#000000");break;case"dateRange":{let o=document.createElement("div");o.className="forms-expert-date-range";let c=e||{},p=document.createElement("input");p.type="date",p.className=y("forms-expert-input",n?.fieldClassName),p.name=`${t.name}.start`,p.value=c.start||"";let l=document.createElement("input");if(l.type="date",l.className=y("forms-expert-input",n?.fieldClassName),l.name=`${t.name}.end`,l.value=c.end||"",o.appendChild(p),o.appendChild(l),d.appendChild(o),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,d.appendChild(r)}return s.appendChild(d),s}case"address":{let o=document.createElement("div");o.className="forms-expert-address";let c=t.addressFields||["street","city","state","zip","country"],p=e||{},l={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(c.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=y("forms-expert-input",n?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=l[r]||r,u.value=p[r]||"",o.appendChild(u)}),d.appendChild(o),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,d.appendChild(r)}return s.appendChild(d),s}case"name":{let o=document.createElement("div");o.className="forms-expert-name";let c=t.nameFields||["first","last"],p=e||{},l={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(c.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=y("forms-expert-input",n?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=l[r]||r,u.value=p[r]||"",o.appendChild(u)}),d.appendChild(o),i){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=i,d.appendChild(r)}return s.appendChild(d),s}case"imageChoice":{let o=document.createElement("div");o.className="forms-expert-image-choice";let c=t.options||[],p=e;if(c.forEach(l=>{let r=document.createElement("button");if(r.type="button",r.className=`forms-expert-image-choice-item ${p===l.value?"active":""}`,r.dataset.value=l.value,l.imageUrl){let g=document.createElement("img");g.src=l.imageUrl,g.alt=l.label,r.appendChild(g)}let u=document.createElement("span");u.textContent=l.label,r.appendChild(u),o.appendChild(r)}),d.appendChild(o),i){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=i,d.appendChild(l)}return s.appendChild(d),s}case"ranking":{let o=document.createElement("div");o.className="forms-expert-ranking";let c=t.options||[];if((e||[...c]).forEach((l,r)=>{let u=document.createElement("div");u.className="forms-expert-ranking-item",u.textContent=`${r+1}. ${l}`,u.dataset.value=l,o.appendChild(u)}),d.appendChild(o),i){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=i,d.appendChild(l)}return s.appendChild(d),s}case"location":{let o=document.createElement("div");o.className="forms-expert-location";let c=e||{},p=document.createElement("input");p.type="text",p.className=y("forms-expert-input",n?.fieldClassName),p.name=`${t.name}.address`,p.placeholder="Address",p.value=c.address||"",o.appendChild(p);let l=document.createElement("div");l.className="forms-expert-location-coords";let r=document.createElement("input");r.type="number",r.className=y("forms-expert-input",n?.fieldClassName),r.name=`${t.name}.lat`,r.placeholder="Latitude",r.step="any",r.value=c.lat!==void 0?String(c.lat):"";let u=document.createElement("input");if(u.type="number",u.className=y("forms-expert-input",n?.fieldClassName),u.name=`${t.name}.lng`,u.placeholder="Longitude",u.step="any",u.value=c.lng!==void 0?String(c.lng):"",l.appendChild(r),l.appendChild(u),o.appendChild(l),d.appendChild(o),i){let g=document.createElement("div");g.className="forms-expert-error-message",g.textContent=i,d.appendChild(g)}return s.appendChild(d),s}default:m=document.createElement("input"),m.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",m.className=y("forms-expert-input",n?.fieldClassName),m.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(m.min=String(t.min)),t.max!==void 0&&(m.max=String(t.max)),t.step!==void 0&&(m.step=String(t.step)));break}if(m.id=`mira-field-${t.name}`,m.name=t.name,t.placeholder&&"placeholder"in m&&(m.placeholder=t.placeholder),t.required&&(m.required=!0),i&&m.classList.add("forms-expert-error"),d.appendChild(m),i){let o=document.createElement("div");o.className="forms-expert-error-message",o.textContent=i,d.appendChild(o)}return s.appendChild(d),s}function P(t,e={},i={},n={}){let s=document.createElement("form");if(s.className="forms-expert",n.hideRequiredAsterisk){let a=document.createElement("style");a.textContent=".forms-expert .forms-expert-required { display: none; }",s.appendChild(a)}if(n.showFormName!==!1&&n.formName){let a=document.createElement("h1");a.className="forms-expert-title",a.textContent=n.formName,a.style.fontSize=n.formNameFontSize!=null?`${n.formNameFontSize}px`:"1.5rem";let f={normal:"400",medium:"500",semibold:"600",bold:"700"};a.style.fontWeight=f[n.formNameFontWeight||"bold"]||"700",a.style.marginBottom="0.5rem",s.appendChild(a)}let d=t.styling,m=t.fields,o=d?.buttonAlign==="inline",c=document.createElement("div");o&&(c.style.flex="1 1 0",c.style.minWidth="180px");let p=0;for(;p<m.length;){let a=m[p];if(a.row!=null){let f=[a],b=p+1;for(;b<m.length&&m[b].row===a.row;)f.push(m[b]),b++;if(f.length>1){let x=document.createElement("div");x.style.display="flex",x.style.gap="0.75rem",x.style.flexWrap="wrap",f.forEach(C=>{let w=document.createElement("div"),E=oe(C.width);E?w.style.flex=`0 0 calc(${E} - 0.75rem)`:w.style.flex="1 1 0",w.style.minWidth="180px";let R=$(C,e[C.name],i[C.name],d);w.appendChild(R),x.appendChild(w)}),c.appendChild(x)}else{let x=$(a,e[a.name],i[a.name],d);c.appendChild(x)}p=b}else{let f=$(a,e[a.name],i[a.name],d);c.appendChild(f),p++}}if(s.appendChild(c),n.honeypot){let a=document.createElement("input");a.type="text",a.name="_hp",a.className="forms-expert-honeypot",a.tabIndex=-1,a.autocomplete="off",s.appendChild(a)}let l=document.createElement("input");l.type="hidden",l.name="pageUrl",l.value=typeof window<"u"?window.location.href:"",s.appendChild(l);let r=document.createElement("div");r.className="forms-expert-button-wrapper";let u=document.createElement("button");if(u.type="submit",u.className=y("forms-expert-button",n.buttonClassName),u.disabled=n.isLoading||!1,n.isLoading)u.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `;else{let a=d?.buttonIcon,f=d?.buttonIconPosition||"left";if(a){u.style.display="inline-flex",u.style.alignItems="center",u.style.gap="0.5rem";let b=document.createElement("span");b.style.display="inline-flex",b.style.flexShrink="0",b.innerHTML=a;let x=document.createElement("span");x.textContent=n.submitText||"Submit",f==="right"?(u.appendChild(x),u.appendChild(b)):(u.appendChild(b),u.appendChild(x))}else u.textContent=n.submitText||"Submit"}let g=n.secondaryButton,h=()=>{if(!g?.enabled)return null;let a=document.createElement("a");if(a.className="forms-expert-secondary-btn",a.href=g.href||"#",a.style.display="inline-flex",a.style.alignItems="center",a.style.gap="0.5rem",g.icon){let x=document.createElement("span");x.style.display="inline-flex",x.style.flexShrink="0",x.innerHTML=g.icon;let C=document.createElement("span");C.textContent=g.text||"Learn More",g.iconPosition==="right"?(a.appendChild(C),a.appendChild(x)):(a.appendChild(x),a.appendChild(C))}else a.textContent=g.text||"Learn More";g.openInNewTab&&(a.target="_blank",a.rel="noopener noreferrer");let f=d?.primaryColor||"#3b82f6",b=g.color||f;return g.style==="filled"?(a.style.background=b,a.style.color=g.textColor||"#ffffff",a.style.border="none"):g.style==="outlined"?(a.style.background="transparent",a.style.color=g.textColor||b,a.style.border=`2px solid ${b}`):g.style==="link"?(a.style.background="transparent",a.style.color=g.textColor||b,a.style.border="none",a.style.textDecoration="underline"):(a.style.background="transparent",a.style.color=g.textColor||b,a.style.border="none"),g.marginTop!=null&&(a.style.marginTop=`${g.marginTop}px`),g.marginBottom!=null&&(a.style.marginBottom=`${g.marginBottom}px`),g.fontSize!=null&&(a.style.fontSize=`${g.fontSize}px`),a};if(g?.enabled&&g.position==="left"){let a=h();a&&r.appendChild(a)}if(r.appendChild(u),g?.enabled&&g.position!=="left"&&g.position!=="below"){let a=h();a&&(a.style.marginLeft="auto",r.appendChild(a))}if(o){r.style.marginTop="0",r.style.alignSelf="flex-end";let a=c.lastElementChild;a&&(a.style.marginBottom="0"),s.removeChild(c);let f=document.createElement("div");f.style.display="flex",f.style.gap="0.75rem",f.style.flexWrap="wrap",f.appendChild(c),f.appendChild(r),s.appendChild(f)}else s.appendChild(r);if(g?.enabled&&g.position==="below"){let a=document.createElement("div");a.className="forms-expert-secondary-below";let f=g.align||n.buttonAlign||"left";a.style.justifyContent=f==="center"?"center":f==="right"?"flex-end":"flex-start",g.marginTop!=null&&(a.style.marginTop=`${g.marginTop}px`),g.marginBottom!=null&&(a.style.marginBottom=`${g.marginBottom}px`);let b=h();b&&(b.style.marginTop="0",b.style.marginBottom="0",a.appendChild(b)),s.appendChild(a)}if(n.showBranding!==!1){let a=n.brandingText||"Powered by Forms Expert",f=n.brandingUrl||"https://mira.io",b=document.createElement("div");b.className="forms-expert-branding",b.innerHTML=`<a href="${f}" target="_blank" rel="noopener">${a}</a>`,s.appendChild(b)}return s}function B(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${k(t)}</div>
  `,e}function I(t){return t.reduce((e,i)=>({...e,[i.field]:i.message}),{})}var S=class extends Error{constructor(i,n,s,d){super(i);this.code=n;this.statusCode=s;this.retryAfter=d;this.name="FormsError"}},v=class extends Error{constructor(i){super("Validation failed");this.errors=i;this.name="FormValidationError"}};var F=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let i=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${i}token=${encodeURIComponent(this.apiKey)}`}async request(e,i,n){let s=this.buildUrl(i),d=await fetch(s,{method:e,headers:{"Content-Type":"application/json"},body:n?JSON.stringify(n):void 0}),m=await d.json();if(!d.ok)throw new S(m.message||"Request failed",m.code||"UNKNOWN_ERROR",d.status,m.retryAfter);return m}async isActive(e,i){let n=i?`?lang=${encodeURIComponent(i)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${n}`)}async validate(e,i){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:i})}async submit(e,i,n){let s=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(i).some(m=>m instanceof File||m instanceof FileList&&m.length>0)||n?.onProgress?this.submitWithFormData(s,i,n):this.request("POST",`/f/${this.resourceId}/${e}`,{data:i,pageUrl:n?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:n?.captchaToken})}submitWithFormData(e,i,n){return new Promise((s,d)=>{let m=new FormData;for(let[p,l]of Object.entries(i))l instanceof File?m.append(p,l):l instanceof FileList?Array.from(l).forEach(r=>m.append(p,r)):l!=null&&m.append(`data[${p}]`,String(l));let o=n?.pageUrl||(typeof window<"u"?window.location.href:"");o&&m.append("pageUrl",o),n?.captchaToken&&m.append("captchaToken",n.captchaToken);let c=new XMLHttpRequest;n?.onProgress&&c.upload.addEventListener("progress",p=>{p.lengthComputable&&n.onProgress({loaded:p.loaded,total:p.total,percentage:Math.round(p.loaded/p.total*100)})}),c.addEventListener("load",()=>{try{let p=JSON.parse(c.responseText);c.status>=200&&c.status<300?s(p):d(new S(p.message||"Submission failed",p.code||"UNKNOWN_ERROR",c.status,p.retryAfter))}catch{d(new S("Invalid response","PARSE_ERROR",c.status))}}),c.addEventListener("error",()=>{d(new S("Network error","NETWORK_ERROR",0))}),c.addEventListener("abort",()=>{d(new S("Request aborted","ABORTED",0))}),c.open("POST",e),c.send(m)})}async trackView(e){let i=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var M=class{constructor(e,i,n={}){this.config=null;this.apiClient=e,this.slug=i,this.options=n}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,i){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let s=await this.validate(e);if(!s.valid)throw this.options.onValidationError?.(s.errors),new v(s.errors)}let n=await this.apiClient.submit(this.slug,e,i);return this.options.onSubmitSuccess?.(n),n}catch(n){throw n instanceof S&&this.options.onSubmitError?.(n),n}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},N=class{constructor(e){this.apiClient=new F(e)}async isActive(e,i){return this.apiClient.isActive(e,i)}async validate(e,i){return this.apiClient.validate(e,i)}async submit(e,i,n){return this.apiClient.submit(e,i,n)}form(e,i){return new M(this.apiClient,e,i)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,i,n){let s=n?.maxRetries??3,d=null;for(let m=0;m<s;m++)try{return await this.submit(e,i,n)}catch(o){if(d=o,o instanceof S){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(o.code))throw o;if(o.code.includes("RATE_LIMIT")){let c=o.retryAfter||Math.pow(2,m)*1e3;await new Promise(p=>setTimeout(p,c));continue}}await new Promise(c=>setTimeout(c,Math.pow(2,m)*1e3))}throw d}};var T=class{constructor(e,i){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new N(e),this.options=i;let n=i.target;if(typeof n=="string"){let s=document.querySelector(n);if(!s)throw new Error(`Element not found: ${n}`);this.container=s}else this.container=n}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=z(e),document.head.appendChild(this.styleEl),this.injectGoogleFont(e?.fontFamily)}injectGoogleFont(e){if(!e)return;let i=["Inter","Roboto","Open Sans","Lato","Poppins","Montserrat","Nunito","Source Sans Pro","Raleway","Ubuntu","Playfair Display","Merriweather"],n=e.split(",")[0]?.trim();if(!n||!i.includes(n))return;let s=`forms-expert-font-${this.options.slug}`;if(document.getElementById(s))return;let d=document.createElement("link");d.id=s,d.rel="stylesheet",d.href=`https://fonts.googleapis.com/css2?family=${n.replace(/ /g,"+")}:wght@400;500;600;700&display=swap`,document.head.appendChild(d)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let s=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(B(s));return}let e={...this.config.schema.styling,...this.config.styling},i={...this.config.schema,styling:e},n=P(i,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign,buttonClassName:e.buttonClassName,formNameFontSize:e.formNameFontSize,formNameFontWeight:e.formNameFontWeight});n.addEventListener("input",s=>{let d=s.target;d.name&&d.name!=="_hp"&&d.name!=="pageUrl"&&(d.type==="checkbox"?this.values[d.name]=d.checked:d.type==="file"?this.values[d.name]=d.multiple?d.files:d.files?.[0]:this.values[d.name]=d.value,this.errors[d.name]&&(delete this.errors[d.name],this.render()))}),n.addEventListener("submit",s=>{s.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(n)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let i=this.options.redirectUrl||this.config.settings?.redirectUrl;i&&setTimeout(()=>{window.location.href=i},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof v?(this.errors=I(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function A(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let i=e.getAttribute("data-api-key"),n=e.getAttribute("data-resource-id"),s=e.getAttribute("data-forms-expert"),d=e.getAttribute("data-base-url")||void 0;if(!i||!n||!s){console.error("Forms Expert: Missing required attributes",{apiKey:!!i,resourceId:!!n,slug:!!s});return}new T({apiKey:i,resourceId:n,baseUrl:d},{target:e,slug:s,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",A):A());return D(ie);})();
//# sourceMappingURL=index.global.js.map