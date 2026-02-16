"use strict";var E=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var I=(t,e)=>{for(var o in e)E(t,o,{get:e[o],enumerable:!0})},O=(t,e,o,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of U(e))!M.call(t,i)&&i!==o&&E(t,i,{get:()=>e[i],enumerable:!(c=z(e,i))||c.enumerable});return t};var B=t=>O(E({},"__esModule",{value:!0}),t);var J={};I(J,{FormWidget:()=>S,autoInit:()=>T,errorsToRecord:()=>F,generateFormStyles:()=>w,renderField:()=>N,renderForm:()=>v,renderSuccess:()=>k});module.exports=B(J);var R={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function H(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function V(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function q(t){switch(t){case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem";default:return"1rem"}}function W(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function D(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function K(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function j(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function _(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function G(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function w(t=R){let e={...R,...t},o=H(e.borderRadius),c=V(e.buttonRadius),i=q(e.fontSize),u=W(e.placeholderFontSize),m=D(e.fieldSpacing),a=K(e.formPadding),n=j(e.labelSpacing),s=_(e.formWidth),p=e.primaryColor,r=e.buttonColor,l=e.fontFamily||"system-ui, -apple-system, sans-serif",d=G(e.buttonAlign),C={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],L=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:C.px,P=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:C.py,A=e.buttonGradient||(e.buttonStyle==="filled"?p:"transparent");return`
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
  border-radius: ${o};
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
  border-radius: ${o} ${o} 0 0;
  margin-bottom: 1rem;
}

.forms-expert-group {
  margin-bottom: ${m};
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
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":o};
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
  margin-bottom: ${m};
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
  border-radius: ${e.fieldBorderStyle==="bottom"?"0":o};
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
  padding: ${P} ${L};
  font-weight: 500;
  font-size: ${C.fs};
  font-family: inherit;
  border-radius: ${c};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  ${e.buttonStyle==="filled"?`background: ${A}; color: ${r||"white"}; border: none;`:`background: transparent; color: ${p}; border: 2px solid ${p};`}
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
  border-radius: ${c};
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
  min-width: 2.25rem; height: 2.25rem; border-radius: ${o}; cursor: pointer;
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
  border: 2px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"}; border-radius: ${o};
  padding: 0.5rem; cursor: pointer; text-align: center; transition: border-color 0.15s;
}
.forms-expert-image-choice-item.active { border-color: ${e.primaryColor}; }
.forms-expert-image-choice-item img { max-width: 80px; max-height: 80px; object-fit: cover; border-radius: ${o}; }

${e.customCss||""}
`.trim()}function b(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function Y(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function X(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function N(t,e,o,c){let i=document.createElement("div");if(t.type==="heading"){i.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=Y(c?.headingSize),n.textContent=t.label||"",i.appendChild(n),t.content){let s=document.createElement("p");s.className="forms-expert-heading-subtitle",s.textContent=t.content,i.appendChild(s)}return i}if(t.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(t.type==="paragraph"){i.className="forms-expert-group";let n=t.paragraphFontSize?`${t.paragraphFontSize}px`:X(c?.paragraphSize);if(t.label){let s=document.createElement("p");s.className="forms-expert-paragraph-label",s.style.fontSize=n,s.textContent=t.label,i.appendChild(s)}if(t.content){let s=document.createElement("div");s.className="forms-expert-paragraph",s.style.fontSize=n,s.innerHTML=t.content,i.appendChild(s)}return i}if(t.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=t.name,n.value=String(t.defaultValue??e??""),i.appendChild(n),i.style.display="none",i}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){i.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${t.name}`,n.name=t.name,n.className="forms-expert-checkbox",n.checked=!!e,t.required&&(n.required=!0);let s=document.createElement("label");s.htmlFor=n.id;let p=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(s.innerHTML=`${b(p)}${t.required?'<span class="forms-expert-required">*</span>':""}`,i.appendChild(n),i.appendChild(s),t.type==="consent"&&t.consentUrl){let r=document.createElement("a");r.href=t.consentUrl,r.target="_blank",r.rel="noopener noreferrer",r.textContent="View policy",r.className="forms-expert-consent-link",i.appendChild(r)}if(o){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=o,i.appendChild(r)}return i}i.className="forms-expert-group";let u=document.createElement("label");u.className="forms-expert-label",u.htmlFor=`mira-field-${t.name}`,u.innerHTML=`${b(t.label||t.name)}${t.required?'<span class="forms-expert-required">*</span>':""}`,i.appendChild(u);let m=document.createElement("div");m.className="forms-expert-input-wrapper";let a;switch(t.type){case"textarea":case"richText":a=document.createElement("textarea"),a.className="forms-expert-textarea",a.value=String(e||""),t.maxLength&&(a.maxLength=t.maxLength);break;case"select":case"dropdown":{a=document.createElement("select"),a.className="forms-expert-select";let n=document.createElement("option");n.value="",n.textContent=t.placeholder||"Select an option...",a.appendChild(n),(t.options||[]).forEach(p=>{let r=document.createElement("option");r.value=p,r.textContent=p,e===p&&(r.selected=!0),a.appendChild(r)});break}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(t.options||[]).forEach(p=>{let r=document.createElement("label");r.className="forms-expert-radio-item";let l=document.createElement("input");l.type="radio",l.name=t.name,l.value=p,l.checked=e===p,r.appendChild(l),r.appendChild(document.createTextNode(` ${p}`)),n.appendChild(r)}),m.appendChild(n),o){let p=document.createElement("div");p.className="forms-expert-error-message",p.textContent=o,m.appendChild(p)}return i.appendChild(m),i}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let s=e||[];if((t.options||[]).forEach(r=>{let l=document.createElement("label");l.className="forms-expert-checkbox-item";let d=document.createElement("input");d.type="checkbox",d.name=t.name,d.value=r,d.checked=s.includes(r),l.appendChild(d),l.appendChild(document.createTextNode(` ${r}`)),n.appendChild(l)}),m.appendChild(n),o){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=o,m.appendChild(r)}return i.appendChild(m),i}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let s=t.ratingMax||5,p=e||0;for(let r=1;r<=s;r++){let l=document.createElement("button");l.type="button",l.className=`forms-expert-rating-star ${r<=p?"active":""}`,l.textContent="\u2605",l.dataset.value=String(r),n.appendChild(l)}if(m.appendChild(n),o){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=o,m.appendChild(r)}return i.appendChild(m),i}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let s=t.min??(t.type==="opinionScale"?0:1),p=t.max??(t.type==="opinionScale"?10:5),r=e;for(let l=s;l<=p;l++){let d=document.createElement("button");d.type="button",d.className=`forms-expert-scale-btn ${r===l?"active":""}`,d.textContent=String(l),d.dataset.value=String(l),n.appendChild(d)}if(m.appendChild(n),t.lowLabel||t.highLabel){let l=document.createElement("div");l.className="forms-expert-scale-labels",l.innerHTML=`<span>${b(t.lowLabel||"")}</span><span>${b(t.highLabel||"")}</span>`,m.appendChild(l)}if(o){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=o,m.appendChild(l)}return i.appendChild(m),i}case"slider":{a=document.createElement("input"),a.type="range",a.className="forms-expert-slider",a.min=String(t.min??0),a.max=String(t.max??100),a.step=String(t.step??1),a.value=String(e??t.min??0);break}case"file":a=document.createElement("input"),a.type="file",a.className="forms-expert-file",t.allowedMimeTypes?.length&&(a.accept=t.allowedMimeTypes.join(",")),t.multiple&&(a.multiple=!0);break;case"currency":{a=document.createElement("input"),a.type="number",a.className="forms-expert-input",a.value=String(e??""),t.min!==void 0&&(a.min=String(t.min)),t.max!==void 0&&(a.max=String(t.max)),a.step=String(t.step||.01);break}case"phone":a=document.createElement("input"),a.type="tel",a.className="forms-expert-input",a.value=String(e||"");break;case"url":a=document.createElement("input"),a.type="url",a.className="forms-expert-input",a.value=String(e||"");break;case"password":a=document.createElement("input"),a.type="password",a.className="forms-expert-input",a.value=String(e||"");break;case"time":a=document.createElement("input"),a.type="time",a.className="forms-expert-input",a.value=String(e||"");break;case"datetime":a=document.createElement("input"),a.type="datetime-local",a.className="forms-expert-input",a.value=String(e||"");break;case"colorPicker":a=document.createElement("input"),a.type="color",a.className="forms-expert-color",a.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let s=e||{},p=document.createElement("input");p.type="date",p.className="forms-expert-input",p.name=`${t.name}.start`,p.value=s.start||"";let r=document.createElement("input");if(r.type="date",r.className="forms-expert-input",r.name=`${t.name}.end`,r.value=s.end||"",n.appendChild(p),n.appendChild(r),m.appendChild(n),o){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=o,m.appendChild(l)}return i.appendChild(m),i}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let s=t.addressFields||["street","city","state","zip","country"],p=e||{},r={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(s.forEach(l=>{let d=document.createElement("input");d.type="text",d.className="forms-expert-input",d.name=`${t.name}.${l}`,d.placeholder=r[l]||l,d.value=p[l]||"",n.appendChild(d)}),m.appendChild(n),o){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=o,m.appendChild(l)}return i.appendChild(m),i}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let s=t.nameFields||["first","last"],p=e||{},r={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(s.forEach(l=>{let d=document.createElement("input");d.type="text",d.className="forms-expert-input",d.name=`${t.name}.${l}`,d.placeholder=r[l]||l,d.value=p[l]||"",n.appendChild(d)}),m.appendChild(n),o){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=o,m.appendChild(l)}return i.appendChild(m),i}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let s=t.options||[],p=e;if(s.forEach(r=>{let l=document.createElement("button");if(l.type="button",l.className=`forms-expert-image-choice-item ${p===r.value?"active":""}`,l.dataset.value=r.value,r.imageUrl){let f=document.createElement("img");f.src=r.imageUrl,f.alt=r.label,l.appendChild(f)}let d=document.createElement("span");d.textContent=r.label,l.appendChild(d),n.appendChild(l)}),m.appendChild(n),o){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=o,m.appendChild(r)}return i.appendChild(m),i}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let s=t.options||[];if((e||[...s]).forEach((r,l)=>{let d=document.createElement("div");d.className="forms-expert-ranking-item",d.textContent=`${l+1}. ${r}`,d.dataset.value=r,n.appendChild(d)}),m.appendChild(n),o){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=o,m.appendChild(r)}return i.appendChild(m),i}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let s=e||{},p=document.createElement("input");p.type="text",p.className="forms-expert-input",p.name=`${t.name}.address`,p.placeholder="Address",p.value=s.address||"",n.appendChild(p);let r=document.createElement("div");r.className="forms-expert-location-coords";let l=document.createElement("input");l.type="number",l.className="forms-expert-input",l.name=`${t.name}.lat`,l.placeholder="Latitude",l.step="any",l.value=s.lat!==void 0?String(s.lat):"";let d=document.createElement("input");if(d.type="number",d.className="forms-expert-input",d.name=`${t.name}.lng`,d.placeholder="Longitude",d.step="any",d.value=s.lng!==void 0?String(s.lng):"",r.appendChild(l),r.appendChild(d),n.appendChild(r),m.appendChild(n),o){let f=document.createElement("div");f.className="forms-expert-error-message",f.textContent=o,m.appendChild(f)}return i.appendChild(m),i}default:a=document.createElement("input"),a.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",a.className="forms-expert-input",a.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(a.min=String(t.min)),t.max!==void 0&&(a.max=String(t.max)),t.step!==void 0&&(a.step=String(t.step)));break}if(a.id=`mira-field-${t.name}`,a.name=t.name,t.placeholder&&"placeholder"in a&&(a.placeholder=t.placeholder),t.required&&(a.required=!0),o&&a.classList.add("forms-expert-error"),m.appendChild(a),o){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=o,m.appendChild(n)}return i.appendChild(m),i}function v(t,e={},o={},c={}){let i=document.createElement("form");if(i.className="forms-expert",c.hideRequiredAsterisk){let r=document.createElement("style");r.textContent=".forms-expert .forms-expert-required { display: none; }",i.appendChild(r)}if(c.showFormName!==!1&&c.formName){let r=document.createElement("h1");r.className="forms-expert-title",r.textContent=c.formName,r.style.fontSize="1.5rem",r.style.fontWeight="700",r.style.marginBottom="0.5rem",i.appendChild(r)}let u=t.styling;if(t.fields.forEach(r=>{let l=N(r,e[r.name],o[r.name],u);i.appendChild(l)}),c.honeypot){let r=document.createElement("input");r.type="text",r.name="_hp",r.className="forms-expert-honeypot",r.tabIndex=-1,r.autocomplete="off",i.appendChild(r)}let m=document.createElement("input");m.type="hidden",m.name="pageUrl",m.value=typeof window<"u"?window.location.href:"",i.appendChild(m);let a=document.createElement("div");a.className="forms-expert-button-wrapper";let n=document.createElement("button");n.type="submit",n.className="forms-expert-button",n.disabled=c.isLoading||!1,c.isLoading?n.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `:n.textContent=c.submitText||"Submit";let s=c.secondaryButton,p=()=>{if(!s?.enabled)return null;let r=document.createElement("a");r.className="forms-expert-secondary-btn",r.href=s.href||"#",r.textContent=s.text||"Learn More",s.openInNewTab&&(r.target="_blank",r.rel="noopener noreferrer");let l=u?.primaryColor||"#3b82f6",d=s.color||l;return s.style==="filled"?(r.style.background=d,r.style.color=s.textColor||"#ffffff",r.style.border="none"):s.style==="outlined"?(r.style.background="transparent",r.style.color=s.textColor||d,r.style.border=`2px solid ${d}`):s.style==="link"?(r.style.background="transparent",r.style.color=s.textColor||d,r.style.border="none",r.style.textDecoration="underline"):(r.style.background="transparent",r.style.color=s.textColor||d,r.style.border="none"),s.marginTop!=null&&(r.style.marginTop=`${s.marginTop}px`),s.marginBottom!=null&&(r.style.marginBottom=`${s.marginBottom}px`),r};if(s?.enabled&&s.position==="left"){let r=p();r&&a.appendChild(r)}if(a.appendChild(n),s?.enabled&&s.position!=="left"&&s.position!=="below"){let r=p();r&&a.appendChild(r)}if(i.appendChild(a),s?.enabled&&s.position==="below"){let r=document.createElement("div");r.className="forms-expert-secondary-below";let l=s.align||c.buttonAlign||"left";r.style.justifyContent=l==="center"?"center":l==="right"?"flex-end":"flex-start",s.marginTop!=null&&(r.style.marginTop=`${s.marginTop}px`),s.marginBottom!=null&&(r.style.marginBottom=`${s.marginBottom}px`);let d=p();d&&(d.style.marginTop="0",d.style.marginBottom="0",r.appendChild(d)),i.appendChild(r)}if(c.showBranding!==!1){let r=c.brandingText||"Powered by Forms Expert",l=c.brandingUrl||"https://mira.io",d=document.createElement("div");d.className="forms-expert-branding",d.innerHTML=`<a href="${l}" target="_blank" rel="noopener">${r}</a>`,i.appendChild(d)}return i}function k(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${b(t)}</div>
  `,e}function F(t){return t.reduce((e,o)=>({...e,[o.field]:o.message}),{})}var g=class extends Error{constructor(o,c,i,u){super(o);this.code=c;this.statusCode=i;this.retryAfter=u;this.name="FormsError"}},h=class extends Error{constructor(o){super("Validation failed");this.errors=o;this.name="FormValidationError"}};var x=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let o=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${o}token=${encodeURIComponent(this.apiKey)}`}async request(e,o,c){let i=this.buildUrl(o),u=await fetch(i,{method:e,headers:{"Content-Type":"application/json"},body:c?JSON.stringify(c):void 0}),m=await u.json();if(!u.ok)throw new g(m.message||"Request failed",m.code||"UNKNOWN_ERROR",u.status,m.retryAfter);return m}async isActive(e,o){let c=o?`?lang=${encodeURIComponent(o)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${c}`)}async validate(e,o){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:o})}async submit(e,o,c){let i=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(o).some(m=>m instanceof File||m instanceof FileList&&m.length>0)||c?.onProgress?this.submitWithFormData(i,o,c):this.request("POST",`/f/${this.resourceId}/${e}`,{data:o,pageUrl:c?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:c?.captchaToken})}submitWithFormData(e,o,c){return new Promise((i,u)=>{let m=new FormData;for(let[s,p]of Object.entries(o))p instanceof File?m.append(s,p):p instanceof FileList?Array.from(p).forEach(r=>m.append(s,r)):p!=null&&m.append(`data[${s}]`,String(p));let a=c?.pageUrl||(typeof window<"u"?window.location.href:"");a&&m.append("pageUrl",a),c?.captchaToken&&m.append("captchaToken",c.captchaToken);let n=new XMLHttpRequest;c?.onProgress&&n.upload.addEventListener("progress",s=>{s.lengthComputable&&c.onProgress({loaded:s.loaded,total:s.total,percentage:Math.round(s.loaded/s.total*100)})}),n.addEventListener("load",()=>{try{let s=JSON.parse(n.responseText);n.status>=200&&n.status<300?i(s):u(new g(s.message||"Submission failed",s.code||"UNKNOWN_ERROR",n.status,s.retryAfter))}catch{u(new g("Invalid response","PARSE_ERROR",n.status))}}),n.addEventListener("error",()=>{u(new g("Network error","NETWORK_ERROR",0))}),n.addEventListener("abort",()=>{u(new g("Request aborted","ABORTED",0))}),n.open("POST",e),n.send(m)})}async trackView(e){let o=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"}}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var $=class{constructor(e,o,c={}){this.config=null;this.apiClient=e,this.slug=o,this.options=c}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,o){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let i=await this.validate(e);if(!i.valid)throw this.options.onValidationError?.(i.errors),new h(i.errors)}let c=await this.apiClient.submit(this.slug,e,o);return this.options.onSubmitSuccess?.(c),c}catch(c){throw c instanceof g&&this.options.onSubmitError?.(c),c}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},y=class{constructor(e){this.apiClient=new x(e)}async isActive(e,o){return this.apiClient.isActive(e,o)}async validate(e,o){return this.apiClient.validate(e,o)}async submit(e,o,c){return this.apiClient.submit(e,o,c)}form(e,o){return new $(this.apiClient,e,o)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,o,c){let i=c?.maxRetries??3,u=null;for(let m=0;m<i;m++)try{return await this.submit(e,o,c)}catch(a){if(u=a,a instanceof g){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(a.code))throw a;if(a.code.includes("RATE_LIMIT")){let n=a.retryAfter||Math.pow(2,m)*1e3;await new Promise(s=>setTimeout(s,n));continue}}await new Promise(n=>setTimeout(n,Math.pow(2,m)*1e3))}throw u}};var S=class{constructor(e,o){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new y(e),this.options=o;let c=o.target;if(typeof c=="string"){let i=document.querySelector(c);if(!i)throw new Error(`Element not found: ${c}`);this.container=i}else this.container=c}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=w(e),document.head.appendChild(this.styleEl)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let i=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(k(i));return}let e={...this.config.schema.styling,...this.config.styling},o={...this.config.schema,styling:e},c=v(o,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign});c.addEventListener("input",i=>{let u=i.target;u.name&&u.name!=="_hp"&&u.name!=="pageUrl"&&(u.type==="checkbox"?this.values[u.name]=u.checked:u.type==="file"?this.values[u.name]=u.multiple?u.files:u.files?.[0]:this.values[u.name]=u.value,this.errors[u.name]&&(delete this.errors[u.name],this.render()))}),c.addEventListener("submit",i=>{i.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(c)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let o=this.options.redirectUrl||this.config.settings?.redirectUrl;o&&setTimeout(()=>{window.location.href=o},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof h?(this.errors=F(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function T(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let o=e.getAttribute("data-api-key"),c=e.getAttribute("data-resource-id"),i=e.getAttribute("data-forms-expert"),u=e.getAttribute("data-base-url")||void 0;if(!o||!c||!i){console.error("Forms Expert: Missing required attributes",{apiKey:!!o,resourceId:!!c,slug:!!i});return}new S({apiKey:o,resourceId:c,baseUrl:u},{target:e,slug:i,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T());0&&(module.exports={FormWidget,autoInit,errorsToRecord,generateFormStyles,renderField,renderForm,renderSuccess});
//# sourceMappingURL=index.cjs.map