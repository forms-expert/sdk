var z={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function U(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function O(t){switch(t){case"none":return"0";case"small":return"0.25rem";case"medium":return"0.375rem";case"large":return"0.75rem";case"full":return"9999px";default:return"0.375rem"}}function H(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function V(t){switch(t){case"sm":case"small":return"0.875rem";case"md":case"medium":return"1rem";case"lg":case"large":return"1.125rem";default:return"1rem"}}function W(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function q(t){switch(t){case"none":return"0";case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function D(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function j(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function K(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function _(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function P(t=z){let e={...z,...t},a=U(e.borderRadius),o=O(e.fieldBorderRadius),l=H(e.buttonRadius),d=V(e.fontSize),m=W(e.placeholderFontSize),n=q(e.fieldSpacing),c=D(e.formPadding),p=j(e.labelSpacing),s=K(e.formWidth),r=e.primaryColor,u=e.buttonColor,g=e.fieldBorderColor||(e.theme==="dark"?"#4b5563":"#d1d5db"),h=e.separatorColor||(e.theme==="dark"?"#4b5563":"#d1d5db"),i=e.fontFamily?e.fontFamily.includes(",")?e.fontFamily:`${e.fontFamily}, sans-serif`:"inherit",f=_(e.buttonAlign),x={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],C=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:x.px,w=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:x.py,E=e.buttonFontSize!=null?`${e.buttonFontSize}px`:x.fs,N=e.buttonGradient||(e.buttonStyle==="filled"?r:"transparent");return`
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
  font-family: ${i};
  font-size: ${d};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${c};
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
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${g}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${g};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":o};
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
  border-radius: ${o};
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
  border: 2px dashed ${g};
  border-radius: ${o};
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
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":o};
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
  margin: ${n} 0;
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
  ${e.buttonStyle==="filled"?`background: ${N}; color: ${u||"white"}; border: none;`:`background: transparent; color: ${r}; border: 2px solid ${r};`}
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
  border: ${e.fieldBorderStyle==="bottom"?"none":`1px solid ${g}`};
  ${e.fieldBorderStyle==="bottom"?`border-bottom: 1px solid ${g};`:""}
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":o};
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
    padding-left: max(0.5rem, min(${C}, 3vw));
    padding-right: max(0.5rem, min(${C}, 3vw));
    font-size: max(0.75rem, min(${E}, 3.5vw));
  }
}

${e.customCss||""}
`.trim()}function k(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function Y(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function X(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function y(t,e){return e?`${t} ${e}`:t}function G(t){return t.map(e=>typeof e=="string"?{value:e,label:e}:e)}function J(t){switch(t){case"1/4":return"25%";case"1/3":return"33.333%";case"1/2":return"50%";case"2/3":return"66.666%";case"3/4":return"75%";case"full":return"100%";default:return}}function T(t,e,a,o){let l=document.createElement("div");if(t.type==="heading"){l.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=Y(o?.headingSize),n.textContent=t.label||"",l.appendChild(n),t.content){let c=document.createElement("p");c.className="forms-expert-heading-subtitle",c.textContent=t.content,l.appendChild(c)}return l}if(t.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(t.type==="paragraph"){l.className="forms-expert-group";let n=t.paragraphFontSize?`${t.paragraphFontSize}px`:X(o?.paragraphSize);if(t.label){let c=document.createElement("p");c.className="forms-expert-paragraph-label",c.style.fontSize=n,c.textContent=t.label,l.appendChild(c)}if(t.content){let c=document.createElement("div");c.className="forms-expert-paragraph",c.style.fontSize=n,c.innerHTML=t.content,l.appendChild(c)}return l}if(t.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=t.name,n.value=String(t.defaultValue??e??""),l.appendChild(n),l.style.display="none",l}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){l.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${t.name}`,n.name=t.name,n.className="forms-expert-checkbox",n.checked=!!e,t.required&&(n.required=!0);let c=document.createElement("div"),p=document.createElement("label");p.htmlFor=n.id,p.style.cursor="pointer",t.type==="consent"&&t.consentFontSize&&(p.style.fontSize=`${t.consentFontSize}px`);let s=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(p.innerHTML=`${k(s)}${t.required?'<span class="forms-expert-required">*</span>':""}`,c.appendChild(p),t.type==="consent"&&t.consentUrl){let r=document.createElement("a");r.href=t.consentUrl,r.target="_blank",r.rel="noopener noreferrer",r.textContent="View policy",r.className="forms-expert-consent-link",c.appendChild(r)}if(l.appendChild(n),l.appendChild(c),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,l.appendChild(r)}return l}if(l.className="forms-expert-group",t.label){let n=document.createElement("label");n.className=`forms-expert-label${o?.labelClassName?" "+o.labelClassName:""}`,n.htmlFor=`mira-field-${t.name}`,n.innerHTML=`${k(t.label)}${t.required?'<span class="forms-expert-required">*</span>':""}`,l.appendChild(n)}let d=document.createElement("div");d.className="forms-expert-input-wrapper";let m;switch(t.type){case"textarea":case"richText":m=document.createElement("textarea"),m.className=y("forms-expert-textarea",o?.fieldClassName),m.value=String(e||""),t.maxLength&&(m.maxLength=t.maxLength);break;case"select":case"dropdown":{let n=document.createElement("div");n.style.position="relative",n.style.width="100%",o?.fieldClassName&&(n.className=o.fieldClassName);let c=document.createElement("button");c.type="button",c.className="forms-expert-select",c.style.display="flex",c.style.alignItems="center",c.style.justifyContent="space-between",c.style.cursor="pointer",c.style.textAlign="left",c.style.width="100%";let p=G(t.options||[]),s=p.find(i=>i.value===String(e||"")),r=document.createElement("span");r.textContent=s?.label||t.placeholder||"Select an option...",!s&&o?.placeholderColor&&(r.style.color=o.placeholderColor),c.appendChild(r);let u=document.createElement("span");u.innerHTML='<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',u.style.flexShrink="0",u.style.opacity="0.5",c.appendChild(u);let g=document.createElement("div");g.className="forms-expert-select-dropdown",g.style.display="none",p.forEach(i=>{let f=document.createElement("div");f.className="forms-expert-select-option",f.textContent=i.label,String(e||"")===i.value&&f.classList.add("active"),f.addEventListener("mousedown",b=>{b.preventDefault(),h.value=i.value,r.textContent=i.label,o?.placeholderColor&&(r.style.color=""),g.querySelectorAll(".forms-expert-select-option").forEach(x=>x.classList.remove("active")),f.classList.add("active"),g.style.display="none",h.dispatchEvent(new Event("input",{bubbles:!0}))}),g.appendChild(f)}),c.addEventListener("click",()=>{g.style.display=g.style.display==="none"?"block":"none"}),c.addEventListener("blur",()=>{setTimeout(()=>{g.style.display="none"},150)});let h=document.createElement("input");if(h.type="hidden",h.name=t.name,h.value=String(e||""),t.required&&(h.required=!0),n.appendChild(c),n.appendChild(g),n.appendChild(h),d.appendChild(n),a){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=a,d.appendChild(i)}return l.appendChild(d),l}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(t.options||[]).forEach(p=>{let s=document.createElement("label");s.className="forms-expert-radio-item";let r=document.createElement("input");r.type="radio",r.name=t.name,r.value=p,r.checked=e===p,s.appendChild(r),s.appendChild(document.createTextNode(` ${p}`)),n.appendChild(s)}),d.appendChild(n),a){let p=document.createElement("div");p.className="forms-expert-error-message",p.textContent=a,d.appendChild(p)}return l.appendChild(d),l}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let c=e||[];if((t.options||[]).forEach(s=>{let r=document.createElement("label");r.className="forms-expert-checkbox-item";let u=document.createElement("input");u.type="checkbox",u.name=t.name,u.value=s,u.checked=c.includes(s),r.appendChild(u),r.appendChild(document.createTextNode(` ${s}`)),n.appendChild(r)}),d.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,d.appendChild(s)}return l.appendChild(d),l}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let c=t.ratingMax||5,p=e||0;for(let s=1;s<=c;s++){let r=document.createElement("button");r.type="button",r.className=`forms-expert-rating-star ${s<=p?"active":""}`,r.textContent="\u2605",r.dataset.value=String(s),n.appendChild(r)}if(d.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,d.appendChild(s)}return l.appendChild(d),l}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let c=t.min??(t.type==="opinionScale"?0:1),p=t.max??(t.type==="opinionScale"?10:5),s=e;for(let r=c;r<=p;r++){let u=document.createElement("button");u.type="button",u.className=`forms-expert-scale-btn ${s===r?"active":""}`,u.textContent=String(r),u.dataset.value=String(r),n.appendChild(u)}if(d.appendChild(n),t.lowLabel||t.highLabel){let r=document.createElement("div");r.className="forms-expert-scale-labels",r.innerHTML=`<span>${k(t.lowLabel||"")}</span><span>${k(t.highLabel||"")}</span>`,d.appendChild(r)}if(a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,d.appendChild(r)}return l.appendChild(d),l}case"slider":{m=document.createElement("input"),m.type="range",m.className="forms-expert-slider",m.min=String(t.min??0),m.max=String(t.max??100),m.step=String(t.step??1),m.value=String(e??t.min??0);break}case"file":{let n=o?.theme==="dark"?"#4b5563":"#d1d5db",c=o?.theme==="dark"?"#9ca3af":"#6b7280",p=o?.primaryColor||"#3b82f6",s=document.createElement("label");s.htmlFor=`mira-field-${t.name}`,s.className="forms-expert-dropzone";let r=document.createElement("input");r.id=`mira-field-${t.name}`,r.name=t.name,r.type="file",r.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0",t.allowedMimeTypes?.length&&(r.accept=t.allowedMimeTypes.join(",")),t.multiple&&(r.multiple=!0),s.appendChild(r);let u=document.createElement("div");u.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,s.appendChild(u);let g=document.createElement("span");if(g.style.cssText="font-size:0.875rem;font-weight:500",g.textContent="Drag & drop a file here, or click to browse",s.appendChild(g),t.allowedMimeTypes?.length){let h=document.createElement("span");h.style.cssText=`font-size:0.75rem;color:${c}`,h.textContent=t.allowedMimeTypes.join(", "),s.appendChild(h)}if(t.maxFileSize){let h=document.createElement("span");h.style.cssText=`font-size:0.75rem;color:${c}`;let i=t.maxFileSize;h.textContent=`Max size: ${i<1048576?`${(i/1024).toFixed(0)} KB`:`${(i/1048576).toFixed(0)} MB`}`,s.appendChild(h)}if(s.addEventListener("dragover",h=>{h.preventDefault(),s.style.borderColor=p,s.style.backgroundColor=o?.theme==="dark"?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.04)"}),s.addEventListener("dragleave",()=>{s.style.borderColor=n,s.style.backgroundColor="transparent"}),s.addEventListener("drop",h=>{h.preventDefault(),s.style.borderColor=n,s.style.backgroundColor="transparent"}),l.appendChild(s),a){let h=document.createElement("div");h.className="forms-expert-error-message",h.textContent=a,l.appendChild(h)}return l}case"currency":{m=document.createElement("input"),m.type="number",m.className=y("forms-expert-input",o?.fieldClassName),m.value=String(e??""),t.min!==void 0&&(m.min=String(t.min)),t.max!==void 0&&(m.max=String(t.max)),m.step=String(t.step||.01);break}case"phone":m=document.createElement("input"),m.type="tel",m.className=y("forms-expert-input",o?.fieldClassName),m.value=String(e||"");break;case"url":m=document.createElement("input"),m.type="url",m.className=y("forms-expert-input",o?.fieldClassName),m.value=String(e||"");break;case"password":m=document.createElement("input"),m.type="password",m.className=y("forms-expert-input",o?.fieldClassName),m.value=String(e||"");break;case"time":m=document.createElement("input"),m.type="time",m.className=y("forms-expert-input",o?.fieldClassName),m.value=String(e||"");break;case"datetime":m=document.createElement("input"),m.type="datetime-local",m.className=y("forms-expert-input",o?.fieldClassName),m.value=String(e||"");break;case"colorPicker":m=document.createElement("input"),m.type="color",m.className="forms-expert-color",m.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let c=e||{},p=document.createElement("input");p.type="date",p.className=y("forms-expert-input",o?.fieldClassName),p.name=`${t.name}.start`,p.value=c.start||"";let s=document.createElement("input");if(s.type="date",s.className=y("forms-expert-input",o?.fieldClassName),s.name=`${t.name}.end`,s.value=c.end||"",n.appendChild(p),n.appendChild(s),d.appendChild(n),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,d.appendChild(r)}return l.appendChild(d),l}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let c=t.addressFields||["street","city","state","zip","country"],p=e||{},s={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(c.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=y("forms-expert-input",o?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=s[r]||r,u.value=p[r]||"",n.appendChild(u)}),d.appendChild(n),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,d.appendChild(r)}return l.appendChild(d),l}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let c=t.nameFields||["first","last"],p=e||{},s={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(c.forEach(r=>{let u=document.createElement("input");u.type="text",u.className=y("forms-expert-input",o?.fieldClassName),u.name=`${t.name}.${r}`,u.placeholder=s[r]||r,u.value=p[r]||"",n.appendChild(u)}),d.appendChild(n),a){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=a,d.appendChild(r)}return l.appendChild(d),l}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let c=t.options||[],p=e;if(c.forEach(s=>{let r=document.createElement("button");if(r.type="button",r.className=`forms-expert-image-choice-item ${p===s.value?"active":""}`,r.dataset.value=s.value,s.imageUrl){let g=document.createElement("img");g.src=s.imageUrl,g.alt=s.label,r.appendChild(g)}let u=document.createElement("span");u.textContent=s.label,r.appendChild(u),n.appendChild(r)}),d.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,d.appendChild(s)}return l.appendChild(d),l}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let c=t.options||[];if((e||[...c]).forEach((s,r)=>{let u=document.createElement("div");u.className="forms-expert-ranking-item",u.textContent=`${r+1}. ${s}`,u.dataset.value=s,n.appendChild(u)}),d.appendChild(n),a){let s=document.createElement("div");s.className="forms-expert-error-message",s.textContent=a,d.appendChild(s)}return l.appendChild(d),l}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let c=e||{},p=document.createElement("input");p.type="text",p.className=y("forms-expert-input",o?.fieldClassName),p.name=`${t.name}.address`,p.placeholder="Address",p.value=c.address||"",n.appendChild(p);let s=document.createElement("div");s.className="forms-expert-location-coords";let r=document.createElement("input");r.type="number",r.className=y("forms-expert-input",o?.fieldClassName),r.name=`${t.name}.lat`,r.placeholder="Latitude",r.step="any",r.value=c.lat!==void 0?String(c.lat):"";let u=document.createElement("input");if(u.type="number",u.className=y("forms-expert-input",o?.fieldClassName),u.name=`${t.name}.lng`,u.placeholder="Longitude",u.step="any",u.value=c.lng!==void 0?String(c.lng):"",s.appendChild(r),s.appendChild(u),n.appendChild(s),d.appendChild(n),a){let g=document.createElement("div");g.className="forms-expert-error-message",g.textContent=a,d.appendChild(g)}return l.appendChild(d),l}default:m=document.createElement("input"),m.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",m.className=y("forms-expert-input",o?.fieldClassName),m.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(m.min=String(t.min)),t.max!==void 0&&(m.max=String(t.max)),t.step!==void 0&&(m.step=String(t.step)));break}if(m.id=`mira-field-${t.name}`,m.name=t.name,t.placeholder&&"placeholder"in m&&(m.placeholder=t.placeholder),t.required&&(m.required=!0),a&&m.classList.add("forms-expert-error"),d.appendChild(m),a){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=a,d.appendChild(n)}return l.appendChild(d),l}function B(t,e={},a={},o={}){let l=document.createElement("form");if(l.className="forms-expert",o.hideRequiredAsterisk){let i=document.createElement("style");i.textContent=".forms-expert .forms-expert-required { display: none; }",l.appendChild(i)}if(o.showFormName!==!1&&o.formName){let i=document.createElement("h1");i.className="forms-expert-title",i.textContent=o.formName,i.style.fontSize=o.formNameFontSize!=null?`${o.formNameFontSize}px`:"1.5rem";let f={normal:"400",medium:"500",semibold:"600",bold:"700"};i.style.fontWeight=f[o.formNameFontWeight||"bold"]||"700",i.style.marginBottom="0.5rem",l.appendChild(i)}let d=t.styling,m=t.fields,n=d?.buttonAlign==="inline",c=document.createElement("div");n&&(c.style.flex="1 1 0",c.style.minWidth="180px");let p=0;for(;p<m.length;){let i=m[p];if(i.row!=null){let f=[i],b=p+1;for(;b<m.length&&m[b].row===i.row;)f.push(m[b]),b++;if(f.length>1){let x=document.createElement("div");x.style.display="flex",x.style.gap="0.75rem",x.style.flexWrap="wrap",f.forEach(C=>{let w=document.createElement("div"),E=J(C.width);E?w.style.flex=`0 0 calc(${E} - 0.75rem)`:w.style.flex="1 1 0",w.style.minWidth="180px";let N=T(C,e[C.name],a[C.name],d);w.appendChild(N),x.appendChild(w)}),c.appendChild(x)}else{let x=T(i,e[i.name],a[i.name],d);c.appendChild(x)}p=b}else{let f=T(i,e[i.name],a[i.name],d);c.appendChild(f),p++}}if(l.appendChild(c),o.honeypot){let i=document.createElement("input");i.type="text",i.name="_hp",i.className="forms-expert-honeypot",i.tabIndex=-1,i.autocomplete="off",l.appendChild(i)}let s=document.createElement("input");s.type="hidden",s.name="pageUrl",s.value=typeof window<"u"?window.location.href:"",l.appendChild(s);let r=document.createElement("div");r.className="forms-expert-button-wrapper";let u=document.createElement("button");if(u.type="submit",u.className=y("forms-expert-button",o.buttonClassName),u.disabled=o.isLoading||!1,o.isLoading)u.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `;else{let i=d?.buttonIcon,f=d?.buttonIconPosition||"left";if(i){u.style.display="inline-flex",u.style.alignItems="center",u.style.gap="0.5rem";let b=document.createElement("span");b.style.display="inline-flex",b.style.flexShrink="0",b.innerHTML=i;let x=document.createElement("span");x.textContent=o.submitText||"Submit",f==="right"?(u.appendChild(x),u.appendChild(b)):(u.appendChild(b),u.appendChild(x))}else u.textContent=o.submitText||"Submit"}let g=o.secondaryButton,h=()=>{if(!g?.enabled)return null;let i=document.createElement("a");if(i.className="forms-expert-secondary-btn",i.href=g.href||"#",i.style.display="inline-flex",i.style.alignItems="center",i.style.gap="0.5rem",g.icon){let x=document.createElement("span");x.style.display="inline-flex",x.style.flexShrink="0",x.innerHTML=g.icon;let C=document.createElement("span");C.textContent=g.text||"Learn More",g.iconPosition==="right"?(i.appendChild(C),i.appendChild(x)):(i.appendChild(x),i.appendChild(C))}else i.textContent=g.text||"Learn More";g.openInNewTab&&(i.target="_blank",i.rel="noopener noreferrer");let f=d?.primaryColor||"#3b82f6",b=g.color||f;return g.style==="filled"?(i.style.background=b,i.style.color=g.textColor||"#ffffff",i.style.border="none"):g.style==="outlined"?(i.style.background="transparent",i.style.color=g.textColor||b,i.style.border=`2px solid ${b}`):g.style==="link"?(i.style.background="transparent",i.style.color=g.textColor||b,i.style.border="none",i.style.textDecoration="underline"):(i.style.background="transparent",i.style.color=g.textColor||b,i.style.border="none"),g.marginTop!=null&&(i.style.marginTop=`${g.marginTop}px`),g.marginBottom!=null&&(i.style.marginBottom=`${g.marginBottom}px`),g.fontSize!=null&&(i.style.fontSize=`${g.fontSize}px`),i};if(g?.enabled&&g.position==="left"){let i=h();i&&r.appendChild(i)}if(r.appendChild(u),g?.enabled&&g.position!=="left"&&g.position!=="below"){let i=h();i&&(i.style.marginLeft="auto",r.appendChild(i))}if(n){r.style.marginTop="0",r.style.alignSelf="flex-end";let i=c.lastElementChild;i&&(i.style.marginBottom="0"),l.removeChild(c);let f=document.createElement("div");f.style.display="flex",f.style.gap="0.75rem",f.style.flexWrap="wrap",f.appendChild(c),f.appendChild(r),l.appendChild(f)}else l.appendChild(r);if(g?.enabled&&g.position==="below"){let i=document.createElement("div");i.className="forms-expert-secondary-below";let f=g.align||o.buttonAlign||"left";i.style.justifyContent=f==="center"?"center":f==="right"?"flex-end":"flex-start",g.marginTop!=null&&(i.style.marginTop=`${g.marginTop}px`),g.marginBottom!=null&&(i.style.marginBottom=`${g.marginBottom}px`);let b=h();b&&(b.style.marginTop="0",b.style.marginBottom="0",i.appendChild(b)),l.appendChild(i)}if(o.showBranding!==!1){let i=o.brandingText||"Powered by Forms Expert",f=o.brandingUrl||"https://mira.io",b=document.createElement("div");b.className="forms-expert-branding",b.innerHTML=`<a href="${f}" target="_blank" rel="noopener">${i}</a>`,l.appendChild(b)}return l}function I(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${k(t)}</div>
  `,e}function M(t){return t.reduce((e,a)=>({...e,[a.field]:a.message}),{})}var S=class extends Error{constructor(a,o,l,d){super(a);this.code=o;this.statusCode=l;this.retryAfter=d;this.name="FormsError"}},v=class extends Error{constructor(a){super("Validation failed");this.errors=a;this.name="FormValidationError"}};var $=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let a=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${a}token=${encodeURIComponent(this.apiKey)}`}async request(e,a,o){let l=this.buildUrl(a),d=await fetch(l,{method:e,headers:{"Content-Type":"application/json"},body:o?JSON.stringify(o):void 0}),m=await d.json();if(!d.ok)throw new S(m.message||"Request failed",m.code||"UNKNOWN_ERROR",d.status,m.retryAfter);return m}async isActive(e,a){let o=a?`?lang=${encodeURIComponent(a)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${o}`)}async validate(e,a){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:a})}async submit(e,a,o){let l=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(a).some(m=>m instanceof File||m instanceof FileList&&m.length>0)||o?.onProgress?this.submitWithFormData(l,a,o):this.request("POST",`/f/${this.resourceId}/${e}`,{data:a,pageUrl:o?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:o?.captchaToken})}submitWithFormData(e,a,o){return new Promise((l,d)=>{let m=new FormData;for(let[p,s]of Object.entries(a))s instanceof File?m.append(p,s):s instanceof FileList?Array.from(s).forEach(r=>m.append(p,r)):s!=null&&m.append(`data[${p}]`,String(s));let n=o?.pageUrl||(typeof window<"u"?window.location.href:"");n&&m.append("pageUrl",n),o?.captchaToken&&m.append("captchaToken",o.captchaToken);let c=new XMLHttpRequest;o?.onProgress&&c.upload.addEventListener("progress",p=>{p.lengthComputable&&o.onProgress({loaded:p.loaded,total:p.total,percentage:Math.round(p.loaded/p.total*100)})}),c.addEventListener("load",()=>{try{let p=JSON.parse(c.responseText);c.status>=200&&c.status<300?l(p):d(new S(p.message||"Submission failed",p.code||"UNKNOWN_ERROR",c.status,p.retryAfter))}catch{d(new S("Invalid response","PARSE_ERROR",c.status))}}),c.addEventListener("error",()=>{d(new S("Network error","NETWORK_ERROR",0))}),c.addEventListener("abort",()=>{d(new S("Request aborted","ABORTED",0))}),c.open("POST",e),c.send(m)})}async trackView(e){let a=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var R=class{constructor(e,a,o={}){this.config=null;this.apiClient=e,this.slug=a,this.options=o}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,a){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let l=await this.validate(e);if(!l.valid)throw this.options.onValidationError?.(l.errors),new v(l.errors)}let o=await this.apiClient.submit(this.slug,e,a);return this.options.onSubmitSuccess?.(o),o}catch(o){throw o instanceof S&&this.options.onSubmitError?.(o),o}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},F=class{constructor(e){this.apiClient=new $(e)}async isActive(e,a){return this.apiClient.isActive(e,a)}async validate(e,a){return this.apiClient.validate(e,a)}async submit(e,a,o){return this.apiClient.submit(e,a,o)}form(e,a){return new R(this.apiClient,e,a)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,a,o){let l=o?.maxRetries??3,d=null;for(let m=0;m<l;m++)try{return await this.submit(e,a,o)}catch(n){if(d=n,n instanceof S){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(n.code))throw n;if(n.code.includes("RATE_LIMIT")){let c=n.retryAfter||Math.pow(2,m)*1e3;await new Promise(p=>setTimeout(p,c));continue}}await new Promise(c=>setTimeout(c,Math.pow(2,m)*1e3))}throw d}};var L=class{constructor(e,a){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new F(e),this.options=a;let o=a.target;if(typeof o=="string"){let l=document.querySelector(o);if(!l)throw new Error(`Element not found: ${o}`);this.container=l}else this.container=o}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=P(e),document.head.appendChild(this.styleEl),this.injectGoogleFont(e?.fontFamily)}injectGoogleFont(e){if(!e)return;let a=["Inter","Roboto","Open Sans","Lato","Poppins","Montserrat","Nunito","Source Sans Pro","Raleway","Ubuntu","Playfair Display","Merriweather"],o=e.split(",")[0]?.trim();if(!o||!a.includes(o))return;let l=`forms-expert-font-${this.options.slug}`;if(document.getElementById(l))return;let d=document.createElement("link");d.id=l,d.rel="stylesheet",d.href=`https://fonts.googleapis.com/css2?family=${o.replace(/ /g,"+")}:wght@400;500;600;700&display=swap`,document.head.appendChild(d)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let l=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(I(l));return}let e={...this.config.schema.styling,...this.config.styling},a={...this.config.schema,styling:e},o=B(a,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign,buttonClassName:e.buttonClassName,formNameFontSize:e.formNameFontSize,formNameFontWeight:e.formNameFontWeight});o.addEventListener("input",l=>{let d=l.target;d.name&&d.name!=="_hp"&&d.name!=="pageUrl"&&(d.type==="checkbox"?this.values[d.name]=d.checked:d.type==="file"?this.values[d.name]=d.multiple?d.files:d.files?.[0]:this.values[d.name]=d.value,this.errors[d.name]&&(delete this.errors[d.name],this.render()))}),o.addEventListener("submit",l=>{l.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(o)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let a=this.options.redirectUrl||this.config.settings?.redirectUrl;a&&setTimeout(()=>{window.location.href=a},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof v?(this.errors=M(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function A(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let a=e.getAttribute("data-api-key"),o=e.getAttribute("data-resource-id"),l=e.getAttribute("data-forms-expert"),d=e.getAttribute("data-base-url")||void 0;if(!a||!o||!l){console.error("Forms Expert: Missing required attributes",{apiKey:!!a,resourceId:!!o,slug:!!l});return}new L({apiKey:a,resourceId:o,baseUrl:d},{target:e,slug:l,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",A):A());export{L as FormWidget,A as autoInit,M as errorsToRecord,P as generateFormStyles,T as renderField,B as renderForm,I as renderSuccess};
//# sourceMappingURL=index.js.map