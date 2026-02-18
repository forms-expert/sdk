"use strict";var FormsExpert=(()=>{var T=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var H=Object.getOwnPropertyNames;var V=Object.prototype.hasOwnProperty;var q=(t,e)=>{for(var a in e)T(t,a,{get:e[a],enumerable:!0})},W=(t,e,a,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of H(e))!V.call(t,l)&&l!==a&&T(t,l,{get:()=>e[l],enumerable:!(i=O(e,l))||i.enumerable});return t};var D=t=>W(T({},"__esModule",{value:!0}),t);var ie={};q(ie,{FormWidget:()=>F,autoInit:()=>I,errorsToRecord:()=>P,generateFormStyles:()=>R,renderField:()=>E,renderForm:()=>L,renderSuccess:()=>z});var A={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function j(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function K(t){switch(t){case"none":return"0";case"small":return"0.25rem";case"medium":return"0.375rem";case"large":return"0.75rem";case"full":return"9999px";default:return"0.375rem"}}function _(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function Y(t){switch(t){case"sm":case"small":return"0.875rem";case"md":case"medium":return"1rem";case"lg":case"large":return"1.125rem";default:return"1rem"}}function X(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function G(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function J(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function Q(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function Z(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function ee(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function R(t=A){let e={...A,...t},a=j(e.borderRadius),i=K(e.fieldBorderRadius),l=_(e.buttonRadius),c=Y(e.fontSize),d=X(e.placeholderFontSize),n=G(e.fieldSpacing),m=J(e.formPadding),p=Q(e.labelSpacing),s=Z(e.formWidth),r=e.primaryColor,u=e.buttonColor,o=e.fieldBorderColor||(e.theme==="dark"?"#4b5563":"#d1d5db"),g=e.separatorColor||(e.theme==="dark"?"#4b5563":"#d1d5db"),f=e.fontFamily?e.fontFamily.includes(",")?e.fontFamily:`${e.fontFamily}, sans-serif`:"inherit",h=ee(e.buttonAlign),y={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],S=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:y.px,N=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:y.py,M=e.buttonFontSize!=null?`${e.buttonFontSize}px`:y.fs,U=e.buttonGradient||(e.buttonStyle==="filled"?r:"transparent");return`
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
  font-size: ${c};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${m};
  border-radius: ${a};
  box-sizing: border-box;
  max-width: ${s};
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
  padding: ${e.fieldPaddingX!=null||e.fieldPaddingY!=null?`${e.fieldPaddingY??8}px ${e.fieldPaddingX??12}px`:"0.5rem 0.75rem"};
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${o}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${o};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":i};
  font-size: ${c};
  font-family: inherit;
  background-color: ${e.inputBackgroundColor||(e.theme==="dark"?"#374151":"#ffffff")};
  color: ${e.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${d};${e.placeholderColor?`
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
  border: 1px solid ${o};
  border-radius: ${i};
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  max-height: 200px;
  overflow-y: auto;
}

.forms-expert-select-option {
  padding: ${e.fieldPaddingX!=null||e.fieldPaddingY!=null?`${e.fieldPaddingY??8}px ${e.fieldPaddingX??12}px`:"0.5rem 0.75rem"};
  cursor: pointer;
  font-size: ${c};
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
  margin-bottom: ${n};
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
  border: 2px dashed ${o};
  border-radius: ${i};
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
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${o}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${o};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":i};
  font-size: ${c};
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
  margin: ${n} 0;
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
  font-size: ${M};
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
  font-size: ${c};
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
.forms-expert-multiselect-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: ${e.fieldPaddingX!=null||e.fieldPaddingY!=null?`${e.fieldPaddingY??8}px ${e.fieldPaddingX??12}px`:"0.5rem 0.75rem"};
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${o}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${o};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":i};
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
  border: 2px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}; border-radius: ${a};
  padding: 0.5rem; cursor: pointer; text-align: center; transition: border-color 0.15s;
}
.forms-expert-image-choice-item.active { border-color: ${e.primaryColor}; }
.forms-expert-image-choice-item img { max-width: 80px; max-height: 80px; object-fit: cover; border-radius: ${a}; }

/* Responsive button scaling */
@media (max-width: 480px) {
  .forms-expert-button,
  .forms-expert-secondary-btn {
    padding-left: max(0.5rem, min(${S}, 3vw));
    padding-right: max(0.5rem, min(${S}, 3vw));
    font-size: max(0.75rem, min(${M}, 3.5vw));
  }
}

${e.customCss||""}
`.trim()}function v(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function te(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function re(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function b(t,e){return e?`${t} ${e}`:t}function ne(t){return t.map(e=>typeof e=="string"?{value:e,label:e}:e)}function oe(t){switch(t){case"1/4":return"25%";case"1/3":return"33.333%";case"1/2":return"50%";case"2/3":return"66.666%";case"3/4":return"75%";case"full":return"100%";default:return}}function E(t,e,a,i){let l=document.createElement("div");if(t.type==="heading"){l.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=te(i?.headingSize),n.textContent=t.label||"",l.appendChild(n),t.content){let m=document.createElement("p");m.className="forms-expert-heading-subtitle",m.textContent=t.content,l.appendChild(m)}return l}if(t.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(t.type==="paragraph"){l.className="forms-expert-group";let n=t.paragraphFontSize?`${t.paragraphFontSize}px`:re(i?.paragraphSize);if(t.label){let m=document.createElement("p");m.className="forms-expert-paragraph-label",m.style.fontSize=n,m.textContent=t.label,l.appendChild(m)}if(t.content){let m=document.createElement("div");m.className="forms-expert-paragraph",m.style.fontSize=n,m.innerHTML=t.content,l.appendChild(m)}return l}if(t.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=t.name,n.value=String(t.defaultValue??e??""),l.appendChild(n),l.style.display="none",l}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){l.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${t.name}`,n.name=t.name,n.className="forms-expert-checkbox",n.checked=!!e,t.required&&(n.required=!0);let m=document.createElement("div"),p=document.createElement("label");p.htmlFor=n.id,p.style.cursor="pointer",t.type==="consent"&&t.consentFontSize&&(p.style.fontSize=`${t.consentFontSize}px`);let s=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(p.innerHTML=`${v(s)}${t.required?'<span class="forms-expert-required">*</span>':""}`,m.appendChild(p),t.type==="consent"&&t.consentUrl){let r=document.createElement("a");r.href=t.consentUrl,r.target="_blank",r.rel="noopener noreferrer",r.textContent="View policy",r.className="forms-expert-consent-link",m.appendChild(r)}if(l.appendChild(n),l.appendChild(m),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,l.appendChild(r)}return l}if(l.className="forms-expert-group",t.label){let n=document.createElement("label");n.className=`forms-expert-label${i?.labelClassName?" "+i.labelClassName:""}`,n.htmlFor=`mira-field-${t.name}`,n.innerHTML=`${v(t.label)}${t.required?'<span class="forms-expert-required">*</span>':""}`,l.appendChild(n)}let c=document.createElement("div");c.className="forms-expert-input-wrapper";let d;switch(t.type){case"textarea":case"richText":d=document.createElement("textarea"),d.className=b("forms-expert-textarea",i?.fieldClassName),d.value=String(e||""),t.maxLength&&(d.maxLength=t.maxLength);break;case"select":case"dropdown":{let n=document.createElement("div");n.style.position="relative",n.style.width="100%",i?.fieldClassName&&(n.className=i.fieldClassName);let m=document.createElement("button");m.type="button",m.className="forms-expert-select",m.style.display="flex",m.style.alignItems="center",m.style.justifyContent="space-between",m.style.cursor="pointer",m.style.textAlign="left",m.style.width="100%";let p=ne(t.options||[]),s=p.find(f=>f.value===String(e||"")),r=document.createElement("span");r.textContent=s?.label||t.placeholder||"Select an option...",!s&&i?.placeholderColor&&(r.style.color=i.placeholderColor),m.appendChild(r);let u=document.createElement("span");u.innerHTML='<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',u.style.flexShrink="0",u.style.opacity="0.5",m.appendChild(u);let o=document.createElement("div");o.className="forms-expert-select-dropdown",o.style.display="none",p.forEach(f=>{let h=document.createElement("div");h.className="forms-expert-select-option",h.textContent=f.label,String(e||"")===f.value&&h.classList.add("active"),h.addEventListener("mousedown",x=>{x.preventDefault(),g.value=f.value,r.textContent=f.label,i?.placeholderColor&&(r.style.color=""),o.querySelectorAll(".forms-expert-select-option").forEach(y=>y.classList.remove("active")),h.classList.add("active"),o.style.display="none",g.dispatchEvent(new Event("input",{bubbles:!0}))}),o.appendChild(h)}),m.addEventListener("click",()=>{o.style.display=o.style.display==="none"?"block":"none"}),m.addEventListener("blur",()=>{setTimeout(()=>{o.style.display="none"},150)});let g=document.createElement("input");if(g.type="hidden",g.name=t.name,g.value=String(e||""),t.required&&(g.required=!0),n.appendChild(m),n.appendChild(o),n.appendChild(g),c.appendChild(n),a){let f=document.createElement("div");f.className="forms-expert-error-message",f.textContent=a,c.appendChild(f)}return l.appendChild(c),l}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(t.options||[]).forEach(p=>{let s=document.createElement("label");s.className="forms-expert-radio-item";let r=document.createElement("input");r.type="radio",r.name=t.name,r.value=p,r.checked=e===p,s.appendChild(r),s.appendChild(document.createTextNode(` ${p}`)),n.appendChild(s)}),c.appendChild(n),a){let p=document.createElement("div");p.className="forms-expert-error-message",p.textContent=a,c.appendChild(p)}return l.appendChild(c),l}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let m=e||[];if((t.options||[]).forEach(s=>{let r=document.createElement("label");r.className="forms-expert-checkbox-item";let u=document.createElement("input");u.type="checkbox",u.name=t.name,u.value=s,u.checked=m.includes(s),r.appendChild(u),r.appendChild(document.createTextNode(` ${s}`)),n.appendChild(r)}),c.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,c.appendChild(s)}return l.appendChild(c),l}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let m=t.ratingMax||5,p=e||0;for(let s=1;s<=m;s++){let r=document.createElement("button");r.type="button",r.className=`forms-expert-rating-star ${s<=p?"active":""}`,r.textContent="\u2605",r.dataset.value=String(s),n.appendChild(r)}if(c.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,c.appendChild(s)}return l.appendChild(c),l}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let m=t.min??(t.type==="opinionScale"?0:1),p=t.max??(t.type==="opinionScale"?10:5),s=e;for(let r=m;r<=p;r++){let u=document.createElement("button");u.type="button",u.className=`forms-expert-scale-btn ${s===r?"active":""}`,u.textContent=String(r),u.dataset.value=String(r),n.appendChild(u)}if(c.appendChild(n),t.lowLabel||t.highLabel){let r=document.createElement("div");r.className="forms-expert-scale-labels",r.innerHTML=`<span>${v(t.lowLabel||"")}</span><span>${v(t.highLabel||"")}</span>`,c.appendChild(r)}if(a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,c.appendChild(r)}return l.appendChild(c),l}case"slider":{d=document.createElement("input"),d.type="range",d.className="forms-expert-slider",d.min=String(t.min??0),d.max=String(t.max??100),d.step=String(t.step??1),d.value=String(e??t.min??0);break}case"file":{let n=i?.theme==="dark"?"#4b5563":"#d1d5db",m=i?.theme==="dark"?"#9ca3af":"#6b7280",p=i?.primaryColor||"#3b82f6",s=document.createElement("label");s.htmlFor=`mira-field-${t.name}`,s.className="forms-expert-dropzone";let r=document.createElement("input");r.id=`mira-field-${t.name}`,r.name=t.name,r.type="file",r.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0",t.allowedMimeTypes?.length&&(r.accept=t.allowedMimeTypes.join(",")),t.multiple&&(r.multiple=!0),s.appendChild(r);let u=document.createElement("div");u.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="${m}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,s.appendChild(u);let o=document.createElement("span");if(o.style.cssText="font-size:0.875rem;font-weight:500",o.textContent="Drag & drop a file here, or click to browse",s.appendChild(o),t.allowedMimeTypes?.length){let g=document.createElement("span");g.style.cssText=`font-size:0.75rem;color:${m}`,g.textContent=t.allowedMimeTypes.join(", "),s.appendChild(g)}if(t.maxFileSize){let g=document.createElement("span");g.style.cssText=`font-size:0.75rem;color:${m}`;let f=t.maxFileSize;g.textContent=`Max size: ${f<1048576?`${(f/1024).toFixed(0)} KB`:`${(f/1048576).toFixed(0)} MB`}`,s.appendChild(g)}if(s.addEventListener("dragover",g=>{g.preventDefault(),s.style.borderColor=p,s.style.backgroundColor=i?.theme==="dark"?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.04)"}),s.addEventListener("dragleave",()=>{s.style.borderColor=n,s.style.backgroundColor="transparent"}),s.addEventListener("drop",g=>{g.preventDefault(),s.style.borderColor=n,s.style.backgroundColor="transparent"}),l.appendChild(s),a){let g=document.createElement("div");g.className="forms-expert-error-message",g.textContent=a,l.appendChild(g)}return l}case"currency":{d=document.createElement("input"),d.type="number",d.className=b("forms-expert-input",i?.fieldClassName),d.value=String(e??""),t.min!==void 0&&(d.min=String(t.min)),t.max!==void 0&&(d.max=String(t.max)),d.step=String(t.step||.01);break}case"phone":d=document.createElement("input"),d.type="tel",d.className=b("forms-expert-input",i?.fieldClassName),d.value=String(e||"");break;case"url":d=document.createElement("input"),d.type="url",d.className=b("forms-expert-input",i?.fieldClassName),d.value=String(e||"");break;case"password":d=document.createElement("input"),d.type="password",d.className=b("forms-expert-input",i?.fieldClassName),d.value=String(e||"");break;case"time":d=document.createElement("input"),d.type="time",d.className=b("forms-expert-input",i?.fieldClassName),d.value=String(e||"");break;case"datetime":d=document.createElement("input"),d.type="datetime-local",d.className=b("forms-expert-input",i?.fieldClassName),d.value=String(e||"");break;case"colorPicker":d=document.createElement("input"),d.type="color",d.className="forms-expert-color",d.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let m=e||{},p=document.createElement("input");p.type="date",p.className=b("forms-expert-input",i?.fieldClassName),p.name=`${t.name}.start`,p.value=m.start||"";let s=document.createElement("input");if(s.type="date",s.className=b("forms-expert-input",i?.fieldClassName),s.name=`${t.name}.end`,s.value=m.end||"",n.appendChild(p),n.appendChild(s),c.appendChild(n),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,c.appendChild(r)}return l.appendChild(c),l}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let m=t.addressFields||["street","city","state","zip","country"],p=e||{},s={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(m.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=b("forms-expert-input",i?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=s[r]||r,u.value=p[r]||"",n.appendChild(u)}),c.appendChild(n),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,c.appendChild(r)}return l.appendChild(c),l}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let m=t.nameFields||["first","last"],p=e||{},s={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(m.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=b("forms-expert-input",i?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=s[r]||r,u.value=p[r]||"",n.appendChild(u)}),c.appendChild(n),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,c.appendChild(r)}return l.appendChild(c),l}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let m=t.options||[],p=e;if(m.forEach(s=>{let r=document.createElement("button");if(r.type="button",r.className=`forms-expert-image-choice-item ${p===s.value?"active":""}`,r.dataset.value=s.value,s.imageUrl){let o=document.createElement("img");o.src=s.imageUrl,o.alt=s.label,r.appendChild(o)}let u=document.createElement("span");u.textContent=s.label,r.appendChild(u),n.appendChild(r)}),c.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,c.appendChild(s)}return l.appendChild(c),l}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let m=t.options||[];if((e||[...m]).forEach((s,r)=>{let u=document.createElement("div");u.className="forms-expert-ranking-item",u.textContent=`${r+1}. ${s}`,u.dataset.value=s,n.appendChild(u)}),c.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,c.appendChild(s)}return l.appendChild(c),l}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let m=e||{},p=document.createElement("input");p.type="text",p.className=b("forms-expert-input",i?.fieldClassName),p.name=`${t.name}.address`,p.placeholder="Address",p.value=m.address||"",n.appendChild(p);let s=document.createElement("div");s.className="forms-expert-location-coords";let r=document.createElement("input");r.type="number",r.className=b("forms-expert-input",i?.fieldClassName),r.name=`${t.name}.lat`,r.placeholder="Latitude",r.step="any",r.value=m.lat!==void 0?String(m.lat):"";let u=document.createElement("input");if(u.type="number",u.className=b("forms-expert-input",i?.fieldClassName),u.name=`${t.name}.lng`,u.placeholder="Longitude",u.step="any",u.value=m.lng!==void 0?String(m.lng):"",s.appendChild(r),s.appendChild(u),n.appendChild(s),c.appendChild(n),a){let o=document.createElement("div");o.className="forms-expert-error-message",o.textContent=a,c.appendChild(o)}return l.appendChild(c),l}default:d=document.createElement("input"),d.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",d.className=b("forms-expert-input",i?.fieldClassName),d.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(d.min=String(t.min)),t.max!==void 0&&(d.max=String(t.max)),t.step!==void 0&&(d.step=String(t.step)));break}if(d.id=`mira-field-${t.name}`,d.name=t.name,t.placeholder&&"placeholder"in d&&(d.placeholder=t.placeholder),t.required&&(d.required=!0),a&&d.classList.add("forms-expert-error"),c.appendChild(d),a){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=a,c.appendChild(n)}return l.appendChild(c),l}function L(t,e={},a={},i={}){let l=document.createElement("form");if(l.className="forms-expert",i.hideRequiredAsterisk){let o=document.createElement("style");o.textContent=".forms-expert .forms-expert-required { display: none; }",l.appendChild(o)}if(i.showFormName!==!1&&i.formName){let o=document.createElement("h1");o.className="forms-expert-title",o.textContent=i.formName,o.style.fontSize=i.formNameFontSize!=null?`${i.formNameFontSize}px`:"1.5rem";let g={normal:"400",medium:"500",semibold:"600",bold:"700"};o.style.fontWeight=g[i.formNameFontWeight||"bold"]||"700",o.style.marginBottom="0.5rem",l.appendChild(o)}let c=t.styling,d=t.fields,n=0;for(;n<d.length;){let o=d[n];if(o.row!=null){let g=[o],f=n+1;for(;f<d.length&&d[f].row===o.row;)g.push(d[f]),f++;if(g.length>1){let h=document.createElement("div");h.style.display="flex",h.style.gap="0.75rem",h.style.flexWrap="wrap",g.forEach(x=>{let y=document.createElement("div"),S=oe(x.width);S?y.style.flex=`0 0 calc(${S} - 0.75rem)`:y.style.flex="1 1 0",y.style.minWidth="180px";let N=E(x,e[x.name],a[x.name],c);y.appendChild(N),h.appendChild(y)}),l.appendChild(h)}else{let h=E(o,e[o.name],a[o.name],c);l.appendChild(h)}n=f}else{let g=E(o,e[o.name],a[o.name],c);l.appendChild(g),n++}}if(i.honeypot){let o=document.createElement("input");o.type="text",o.name="_hp",o.className="forms-expert-honeypot",o.tabIndex=-1,o.autocomplete="off",l.appendChild(o)}let m=document.createElement("input");m.type="hidden",m.name="pageUrl",m.value=typeof window<"u"?window.location.href:"",l.appendChild(m);let p=document.createElement("div");p.className="forms-expert-button-wrapper";let s=document.createElement("button");if(s.type="submit",s.className=b("forms-expert-button",i.buttonClassName),s.disabled=i.isLoading||!1,i.isLoading)s.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `;else{let o=c?.buttonIcon,g=c?.buttonIconPosition||"left";if(o){s.style.display="inline-flex",s.style.alignItems="center",s.style.gap="0.5rem";let f=document.createElement("span");f.style.display="inline-flex",f.style.flexShrink="0",f.innerHTML=o;let h=document.createElement("span");h.textContent=i.submitText||"Submit",g==="right"?(s.appendChild(h),s.appendChild(f)):(s.appendChild(f),s.appendChild(h))}else s.textContent=i.submitText||"Submit"}let r=i.secondaryButton,u=()=>{if(!r?.enabled)return null;let o=document.createElement("a");if(o.className="forms-expert-secondary-btn",o.href=r.href||"#",o.style.display="inline-flex",o.style.alignItems="center",o.style.gap="0.5rem",r.icon){let h=document.createElement("span");h.style.display="inline-flex",h.style.flexShrink="0",h.innerHTML=r.icon;let x=document.createElement("span");x.textContent=r.text||"Learn More",r.iconPosition==="right"?(o.appendChild(x),o.appendChild(h)):(o.appendChild(h),o.appendChild(x))}else o.textContent=r.text||"Learn More";r.openInNewTab&&(o.target="_blank",o.rel="noopener noreferrer");let g=c?.primaryColor||"#3b82f6",f=r.color||g;return r.style==="filled"?(o.style.background=f,o.style.color=r.textColor||"#ffffff",o.style.border="none"):r.style==="outlined"?(o.style.background="transparent",o.style.color=r.textColor||f,o.style.border=`2px solid ${f}`):r.style==="link"?(o.style.background="transparent",o.style.color=r.textColor||f,o.style.border="none",o.style.textDecoration="underline"):(o.style.background="transparent",o.style.color=r.textColor||f,o.style.border="none"),r.marginTop!=null&&(o.style.marginTop=`${r.marginTop}px`),r.marginBottom!=null&&(o.style.marginBottom=`${r.marginBottom}px`),r.fontSize!=null&&(o.style.fontSize=`${r.fontSize}px`),o};if(r?.enabled&&r.position==="left"){let o=u();o&&p.appendChild(o)}if(p.appendChild(s),r?.enabled&&r.position!=="left"&&r.position!=="below"){let o=u();o&&(o.style.marginLeft="auto",p.appendChild(o))}if(l.appendChild(p),r?.enabled&&r.position==="below"){let o=document.createElement("div");o.className="forms-expert-secondary-below";let g=r.align||i.buttonAlign||"left";o.style.justifyContent=g==="center"?"center":g==="right"?"flex-end":"flex-start",r.marginTop!=null&&(o.style.marginTop=`${r.marginTop}px`),r.marginBottom!=null&&(o.style.marginBottom=`${r.marginBottom}px`);let f=u();f&&(f.style.marginTop="0",f.style.marginBottom="0",o.appendChild(f)),l.appendChild(o)}if(i.showBranding!==!1){let o=i.brandingText||"Powered by Forms Expert",g=i.brandingUrl||"https://mira.io",f=document.createElement("div");f.className="forms-expert-branding",f.innerHTML=`<a href="${g}" target="_blank" rel="noopener">${o}</a>`,l.appendChild(f)}return l}function z(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${v(t)}</div>
  `,e}function P(t){return t.reduce((e,a)=>({...e,[a.field]:a.message}),{})}var C=class extends Error{constructor(a,i,l,c){super(a);this.code=i;this.statusCode=l;this.retryAfter=c;this.name="FormsError"}},w=class extends Error{constructor(a){super("Validation failed");this.errors=a;this.name="FormValidationError"}};var k=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let a=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${a}token=${encodeURIComponent(this.apiKey)}`}async request(e,a,i){let l=this.buildUrl(a),c=await fetch(l,{method:e,headers:{"Content-Type":"application/json"},body:i?JSON.stringify(i):void 0}),d=await c.json();if(!c.ok)throw new C(d.message||"Request failed",d.code||"UNKNOWN_ERROR",c.status,d.retryAfter);return d}async isActive(e,a){let i=a?`?lang=${encodeURIComponent(a)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${i}`)}async validate(e,a){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:a})}async submit(e,a,i){let l=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(a).some(d=>d instanceof File||d instanceof FileList&&d.length>0)||i?.onProgress?this.submitWithFormData(l,a,i):this.request("POST",`/f/${this.resourceId}/${e}`,{data:a,pageUrl:i?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:i?.captchaToken})}submitWithFormData(e,a,i){return new Promise((l,c)=>{let d=new FormData;for(let[p,s]of Object.entries(a))s instanceof File?d.append(p,s):s instanceof FileList?Array.from(s).forEach(r=>d.append(p,r)):s!=null&&d.append(`data[${p}]`,String(s));let n=i?.pageUrl||(typeof window<"u"?window.location.href:"");n&&d.append("pageUrl",n),i?.captchaToken&&d.append("captchaToken",i.captchaToken);let m=new XMLHttpRequest;i?.onProgress&&m.upload.addEventListener("progress",p=>{p.lengthComputable&&i.onProgress({loaded:p.loaded,total:p.total,percentage:Math.round(p.loaded/p.total*100)})}),m.addEventListener("load",()=>{try{let p=JSON.parse(m.responseText);m.status>=200&&m.status<300?l(p):c(new C(p.message||"Submission failed",p.code||"UNKNOWN_ERROR",m.status,p.retryAfter))}catch{c(new C("Invalid response","PARSE_ERROR",m.status))}}),m.addEventListener("error",()=>{c(new C("Network error","NETWORK_ERROR",0))}),m.addEventListener("abort",()=>{c(new C("Request aborted","ABORTED",0))}),m.open("POST",e),m.send(d)})}async trackView(e){let a=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var B=class{constructor(e,a,i={}){this.config=null;this.apiClient=e,this.slug=a,this.options=i}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,a){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let l=await this.validate(e);if(!l.valid)throw this.options.onValidationError?.(l.errors),new w(l.errors)}let i=await this.apiClient.submit(this.slug,e,a);return this.options.onSubmitSuccess?.(i),i}catch(i){throw i instanceof C&&this.options.onSubmitError?.(i),i}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},$=class{constructor(e){this.apiClient=new k(e)}async isActive(e,a){return this.apiClient.isActive(e,a)}async validate(e,a){return this.apiClient.validate(e,a)}async submit(e,a,i){return this.apiClient.submit(e,a,i)}form(e,a){return new B(this.apiClient,e,a)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,a,i){let l=i?.maxRetries??3,c=null;for(let d=0;d<l;d++)try{return await this.submit(e,a,i)}catch(n){if(c=n,n instanceof C){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(n.code))throw n;if(n.code.includes("RATE_LIMIT")){let m=n.retryAfter||Math.pow(2,d)*1e3;await new Promise(p=>setTimeout(p,m));continue}}await new Promise(m=>setTimeout(m,Math.pow(2,d)*1e3))}throw c}};var F=class{constructor(e,a){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new $(e),this.options=a;let i=a.target;if(typeof i=="string"){let l=document.querySelector(i);if(!l)throw new Error(`Element not found: ${i}`);this.container=l}else this.container=i}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=R(e),document.head.appendChild(this.styleEl),this.injectGoogleFont(e?.fontFamily)}injectGoogleFont(e){if(!e)return;let a=["Inter","Roboto","Open Sans","Lato","Poppins","Montserrat","Nunito","Source Sans Pro","Raleway","Ubuntu","Playfair Display","Merriweather"],i=e.split(",")[0]?.trim();if(!i||!a.includes(i))return;let l=`forms-expert-font-${this.options.slug}`;if(document.getElementById(l))return;let c=document.createElement("link");c.id=l,c.rel="stylesheet",c.href=`https://fonts.googleapis.com/css2?family=${i.replace(/ /g,"+")}:wght@400;500;600;700&display=swap`,document.head.appendChild(c)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let l=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(z(l));return}let e={...this.config.schema.styling,...this.config.styling},a={...this.config.schema,styling:e},i=L(a,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign,buttonClassName:e.buttonClassName,formNameFontSize:e.formNameFontSize,formNameFontWeight:e.formNameFontWeight});i.addEventListener("input",l=>{let c=l.target;c.name&&c.name!=="_hp"&&c.name!=="pageUrl"&&(c.type==="checkbox"?this.values[c.name]=c.checked:c.type==="file"?this.values[c.name]=c.multiple?c.files:c.files?.[0]:this.values[c.name]=c.value,this.errors[c.name]&&(delete this.errors[c.name],this.render()))}),i.addEventListener("submit",l=>{l.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(i)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let a=this.options.redirectUrl||this.config.settings?.redirectUrl;a&&setTimeout(()=>{window.location.href=a},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof w?(this.errors=P(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function I(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let a=e.getAttribute("data-api-key"),i=e.getAttribute("data-resource-id"),l=e.getAttribute("data-forms-expert"),c=e.getAttribute("data-base-url")||void 0;if(!a||!i||!l){console.error("Forms Expert: Missing required attributes",{apiKey:!!a,resourceId:!!i,slug:!!l});return}new F({apiKey:a,resourceId:i,baseUrl:c},{target:e,slug:l,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",I):I());return D(ie);})();
//# sourceMappingURL=index.global.js.map