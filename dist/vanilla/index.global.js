"use strict";var FormsExpert=(()=>{var w=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var I=(t,e)=>{for(var s in e)w(t,s,{get:e[s],enumerable:!0})},O=(t,e,s,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of U(e))!M.call(t,i)&&i!==s&&w(t,i,{get:()=>e[i],enumerable:!(m=A(e,i))||m.enumerable});return t};var B=t=>O(w({},"__esModule",{value:!0}),t);var J={};I(J,{FormWidget:()=>y,autoInit:()=>N,errorsToRecord:()=>F,generateFormStyles:()=>E,renderField:()=>L,renderForm:()=>v,renderSuccess:()=>k});var R={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function H(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function V(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function q(t){switch(t){case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem";default:return"1rem"}}function W(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function D(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function K(t){switch(t){case"none":return"0";case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function j(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function _(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function G(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function E(t=R){let e={...R,...t},s=H(e.borderRadius),m=V(e.buttonRadius),i=q(e.fontSize),c=W(e.placeholderFontSize),o=D(e.fieldSpacing),n=K(e.formPadding),d=j(e.labelSpacing),a=_(e.formWidth),l=e.primaryColor,r=e.buttonColor,p=e.fontFamily||"system-ui, -apple-system, sans-serif",u=G(e.buttonAlign),S={small:{px:"0.75rem",py:"0.375rem",fs:"0.875rem"},medium:{px:"1.25rem",py:"0.625rem",fs:"1rem"},large:{px:"1.75rem",py:"0.875rem",fs:"1.125rem"}}[e.buttonSize||"medium"],C=e.buttonPaddingX!=null?`${e.buttonPaddingX}px`:S.px,z=e.buttonPaddingY!=null?`${e.buttonPaddingY}px`:S.py,T=e.buttonFontSize!=null?`${e.buttonFontSize}px`:S.fs,P=e.buttonGradient||(e.buttonStyle==="filled"?l:"transparent");return`
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
  font-size: ${i};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${n};
  border-radius: ${s};
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
  font-size: ${i};
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
  justify-content: ${u};
  margin-top: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.forms-expert-button {
  ${e.buttonFullWidth?"width: 100%;":e.buttonAlign?"":"width: 100%;"}
  padding: ${z} ${C};
  font-weight: 500;
  font-size: ${T};
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
  ${e.buttonStyle==="filled"?`background: ${P}; color: ${r||"white"}; border: none;`:`background: transparent; color: ${l}; border: 2px solid ${l};`}
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
  font-size: ${i};
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
    padding-left: max(0.5rem, min(${C}, 3vw));
    padding-right: max(0.5rem, min(${C}, 3vw));
    font-size: max(0.75rem, min(${T}, 3.5vw));
  }
}

${e.customCss||""}
`.trim()}function h(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function Y(t){switch(t){case"small":return"18px";case"large":return"30px";case"extra-large":return"36px";default:return"24px"}}function X(t){switch(t){case"small":return"14px";case"large":return"18px";default:return"16px"}}function L(t,e,s,m){let i=document.createElement("div");if(t.type==="heading"){i.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.style.fontSize=Y(m?.headingSize),n.textContent=t.label||"",i.appendChild(n),t.content){let d=document.createElement("p");d.className="forms-expert-heading-subtitle",d.textContent=t.content,i.appendChild(d)}return i}if(t.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(t.type==="paragraph"){i.className="forms-expert-group";let n=t.paragraphFontSize?`${t.paragraphFontSize}px`:X(m?.paragraphSize);if(t.label){let d=document.createElement("p");d.className="forms-expert-paragraph-label",d.style.fontSize=n,d.textContent=t.label,i.appendChild(d)}if(t.content){let d=document.createElement("div");d.className="forms-expert-paragraph",d.style.fontSize=n,d.innerHTML=t.content,i.appendChild(d)}return i}if(t.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=t.name,n.value=String(t.defaultValue??e??""),i.appendChild(n),i.style.display="none",i}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){i.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${t.name}`,n.name=t.name,n.className="forms-expert-checkbox",n.checked=!!e,t.required&&(n.required=!0);let d=document.createElement("label");d.htmlFor=n.id;let a=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(d.innerHTML=`${h(a)}${t.required?'<span class="forms-expert-required">*</span>':""}`,i.appendChild(n),i.appendChild(d),t.type==="consent"&&t.consentUrl){let l=document.createElement("a");l.href=t.consentUrl,l.target="_blank",l.rel="noopener noreferrer",l.textContent="View policy",l.className="forms-expert-consent-link",i.appendChild(l)}if(s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,i.appendChild(l)}return i}if(i.className="forms-expert-group",t.label){let n=document.createElement("label");n.className="forms-expert-label",n.htmlFor=`mira-field-${t.name}`,n.innerHTML=`${h(t.label)}${t.required?'<span class="forms-expert-required">*</span>':""}`,i.appendChild(n)}let c=document.createElement("div");c.className="forms-expert-input-wrapper";let o;switch(t.type){case"textarea":case"richText":o=document.createElement("textarea"),o.className="forms-expert-textarea",o.value=String(e||""),t.maxLength&&(o.maxLength=t.maxLength);break;case"select":case"dropdown":{o=document.createElement("select"),o.className="forms-expert-select";let n=document.createElement("option");n.value="",n.textContent=t.placeholder||"Select an option...",o.appendChild(n),(t.options||[]).forEach(a=>{let l=document.createElement("option");l.value=a,l.textContent=a,e===a&&(l.selected=!0),o.appendChild(l)});break}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(t.options||[]).forEach(a=>{let l=document.createElement("label");l.className="forms-expert-radio-item";let r=document.createElement("input");r.type="radio",r.name=t.name,r.value=a,r.checked=e===a,l.appendChild(r),l.appendChild(document.createTextNode(` ${a}`)),n.appendChild(l)}),c.appendChild(n),s){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=s,c.appendChild(a)}return i.appendChild(c),i}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let d=e||[];if((t.options||[]).forEach(l=>{let r=document.createElement("label");r.className="forms-expert-checkbox-item";let p=document.createElement("input");p.type="checkbox",p.name=t.name,p.value=l,p.checked=d.includes(l),r.appendChild(p),r.appendChild(document.createTextNode(` ${l}`)),n.appendChild(r)}),c.appendChild(n),s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,c.appendChild(l)}return i.appendChild(c),i}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let d=t.ratingMax||5,a=e||0;for(let l=1;l<=d;l++){let r=document.createElement("button");r.type="button",r.className=`forms-expert-rating-star ${l<=a?"active":""}`,r.textContent="\u2605",r.dataset.value=String(l),n.appendChild(r)}if(c.appendChild(n),s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,c.appendChild(l)}return i.appendChild(c),i}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let d=t.min??(t.type==="opinionScale"?0:1),a=t.max??(t.type==="opinionScale"?10:5),l=e;for(let r=d;r<=a;r++){let p=document.createElement("button");p.type="button",p.className=`forms-expert-scale-btn ${l===r?"active":""}`,p.textContent=String(r),p.dataset.value=String(r),n.appendChild(p)}if(c.appendChild(n),t.lowLabel||t.highLabel){let r=document.createElement("div");r.className="forms-expert-scale-labels",r.innerHTML=`<span>${h(t.lowLabel||"")}</span><span>${h(t.highLabel||"")}</span>`,c.appendChild(r)}if(s){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=s,c.appendChild(r)}return i.appendChild(c),i}case"slider":{o=document.createElement("input"),o.type="range",o.className="forms-expert-slider",o.min=String(t.min??0),o.max=String(t.max??100),o.step=String(t.step??1),o.value=String(e??t.min??0);break}case"file":o=document.createElement("input"),o.type="file",o.className="forms-expert-file",t.allowedMimeTypes?.length&&(o.accept=t.allowedMimeTypes.join(",")),t.multiple&&(o.multiple=!0);break;case"currency":{o=document.createElement("input"),o.type="number",o.className="forms-expert-input",o.value=String(e??""),t.min!==void 0&&(o.min=String(t.min)),t.max!==void 0&&(o.max=String(t.max)),o.step=String(t.step||.01);break}case"phone":o=document.createElement("input"),o.type="tel",o.className="forms-expert-input",o.value=String(e||"");break;case"url":o=document.createElement("input"),o.type="url",o.className="forms-expert-input",o.value=String(e||"");break;case"password":o=document.createElement("input"),o.type="password",o.className="forms-expert-input",o.value=String(e||"");break;case"time":o=document.createElement("input"),o.type="time",o.className="forms-expert-input",o.value=String(e||"");break;case"datetime":o=document.createElement("input"),o.type="datetime-local",o.className="forms-expert-input",o.value=String(e||"");break;case"colorPicker":o=document.createElement("input"),o.type="color",o.className="forms-expert-color",o.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let d=e||{},a=document.createElement("input");a.type="date",a.className="forms-expert-input",a.name=`${t.name}.start`,a.value=d.start||"";let l=document.createElement("input");if(l.type="date",l.className="forms-expert-input",l.name=`${t.name}.end`,l.value=d.end||"",n.appendChild(a),n.appendChild(l),c.appendChild(n),s){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=s,c.appendChild(r)}return i.appendChild(c),i}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let d=t.addressFields||["street","city","state","zip","country"],a=e||{},l={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(d.forEach(r=>{let p=document.createElement("input");p.type="text",p.className="forms-expert-input",p.name=`${t.name}.${r}`,p.placeholder=l[r]||r,p.value=a[r]||"",n.appendChild(p)}),c.appendChild(n),s){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=s,c.appendChild(r)}return i.appendChild(c),i}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let d=t.nameFields||["first","last"],a=e||{},l={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(d.forEach(r=>{let p=document.createElement("input");p.type="text",p.className="forms-expert-input",p.name=`${t.name}.${r}`,p.placeholder=l[r]||r,p.value=a[r]||"",n.appendChild(p)}),c.appendChild(n),s){let r=document.createElement("div");r.className="forms-expert-error-message",r.textContent=s,c.appendChild(r)}return i.appendChild(c),i}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let d=t.options||[],a=e;if(d.forEach(l=>{let r=document.createElement("button");if(r.type="button",r.className=`forms-expert-image-choice-item ${a===l.value?"active":""}`,r.dataset.value=l.value,l.imageUrl){let u=document.createElement("img");u.src=l.imageUrl,u.alt=l.label,r.appendChild(u)}let p=document.createElement("span");p.textContent=l.label,r.appendChild(p),n.appendChild(r)}),c.appendChild(n),s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,c.appendChild(l)}return i.appendChild(c),i}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let d=t.options||[];if((e||[...d]).forEach((l,r)=>{let p=document.createElement("div");p.className="forms-expert-ranking-item",p.textContent=`${r+1}. ${l}`,p.dataset.value=l,n.appendChild(p)}),c.appendChild(n),s){let l=document.createElement("div");l.className="forms-expert-error-message",l.textContent=s,c.appendChild(l)}return i.appendChild(c),i}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let d=e||{},a=document.createElement("input");a.type="text",a.className="forms-expert-input",a.name=`${t.name}.address`,a.placeholder="Address",a.value=d.address||"",n.appendChild(a);let l=document.createElement("div");l.className="forms-expert-location-coords";let r=document.createElement("input");r.type="number",r.className="forms-expert-input",r.name=`${t.name}.lat`,r.placeholder="Latitude",r.step="any",r.value=d.lat!==void 0?String(d.lat):"";let p=document.createElement("input");if(p.type="number",p.className="forms-expert-input",p.name=`${t.name}.lng`,p.placeholder="Longitude",p.step="any",p.value=d.lng!==void 0?String(d.lng):"",l.appendChild(r),l.appendChild(p),n.appendChild(l),c.appendChild(n),s){let u=document.createElement("div");u.className="forms-expert-error-message",u.textContent=s,c.appendChild(u)}return i.appendChild(c),i}default:o=document.createElement("input"),o.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",o.className="forms-expert-input",o.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(o.min=String(t.min)),t.max!==void 0&&(o.max=String(t.max)),t.step!==void 0&&(o.step=String(t.step)));break}if(o.id=`mira-field-${t.name}`,o.name=t.name,t.placeholder&&"placeholder"in o&&(o.placeholder=t.placeholder),t.required&&(o.required=!0),s&&o.classList.add("forms-expert-error"),c.appendChild(o),s){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=s,c.appendChild(n)}return i.appendChild(c),i}function v(t,e={},s={},m={}){let i=document.createElement("form");if(i.className="forms-expert",m.hideRequiredAsterisk){let r=document.createElement("style");r.textContent=".forms-expert .forms-expert-required { display: none; }",i.appendChild(r)}if(m.showFormName!==!1&&m.formName){let r=document.createElement("h1");r.className="forms-expert-title",r.textContent=m.formName,r.style.fontSize=m.formNameFontSize!=null?`${m.formNameFontSize}px`:"1.5rem";let p={normal:"400",medium:"500",semibold:"600",bold:"700"};r.style.fontWeight=p[m.formNameFontWeight||"bold"]||"700",r.style.marginBottom="0.5rem",i.appendChild(r)}let c=t.styling;if(t.fields.forEach(r=>{let p=L(r,e[r.name],s[r.name],c);i.appendChild(p)}),m.honeypot){let r=document.createElement("input");r.type="text",r.name="_hp",r.className="forms-expert-honeypot",r.tabIndex=-1,r.autocomplete="off",i.appendChild(r)}let o=document.createElement("input");o.type="hidden",o.name="pageUrl",o.value=typeof window<"u"?window.location.href:"",i.appendChild(o);let n=document.createElement("div");n.className="forms-expert-button-wrapper";let d=document.createElement("button");d.type="submit",d.className="forms-expert-button",d.disabled=m.isLoading||!1,m.isLoading?d.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `:d.textContent=m.submitText||"Submit";let a=m.secondaryButton,l=()=>{if(!a?.enabled)return null;let r=document.createElement("a");r.className="forms-expert-secondary-btn",r.href=a.href||"#",r.textContent=a.text||"Learn More",a.openInNewTab&&(r.target="_blank",r.rel="noopener noreferrer");let p=c?.primaryColor||"#3b82f6",u=a.color||p;return a.style==="filled"?(r.style.background=u,r.style.color=a.textColor||"#ffffff",r.style.border="none"):a.style==="outlined"?(r.style.background="transparent",r.style.color=a.textColor||u,r.style.border=`2px solid ${u}`):a.style==="link"?(r.style.background="transparent",r.style.color=a.textColor||u,r.style.border="none",r.style.textDecoration="underline"):(r.style.background="transparent",r.style.color=a.textColor||u,r.style.border="none"),a.marginTop!=null&&(r.style.marginTop=`${a.marginTop}px`),a.marginBottom!=null&&(r.style.marginBottom=`${a.marginBottom}px`),a.fontSize!=null&&(r.style.fontSize=`${a.fontSize}px`),r};if(a?.enabled&&a.position==="left"){let r=l();r&&n.appendChild(r)}if(n.appendChild(d),a?.enabled&&a.position!=="left"&&a.position!=="below"){let r=l();r&&(r.style.marginLeft="auto",n.appendChild(r))}if(i.appendChild(n),a?.enabled&&a.position==="below"){let r=document.createElement("div");r.className="forms-expert-secondary-below";let p=a.align||m.buttonAlign||"left";r.style.justifyContent=p==="center"?"center":p==="right"?"flex-end":"flex-start",a.marginTop!=null&&(r.style.marginTop=`${a.marginTop}px`),a.marginBottom!=null&&(r.style.marginBottom=`${a.marginBottom}px`);let u=l();u&&(u.style.marginTop="0",u.style.marginBottom="0",r.appendChild(u)),i.appendChild(r)}if(m.showBranding!==!1){let r=m.brandingText||"Powered by Forms Expert",p=m.brandingUrl||"https://mira.io",u=document.createElement("div");u.className="forms-expert-branding",u.innerHTML=`<a href="${p}" target="_blank" rel="noopener">${r}</a>`,i.appendChild(u)}return i}function k(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${h(t)}</div>
  `,e}function F(t){return t.reduce((e,s)=>({...e,[s.field]:s.message}),{})}var g=class extends Error{constructor(s,m,i,c){super(s);this.code=m;this.statusCode=i;this.retryAfter=c;this.name="FormsError"}},f=class extends Error{constructor(s){super("Validation failed");this.errors=s;this.name="FormValidationError"}};var b=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let s=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${s}token=${encodeURIComponent(this.apiKey)}`}async request(e,s,m){let i=this.buildUrl(s),c=await fetch(i,{method:e,headers:{"Content-Type":"application/json"},body:m?JSON.stringify(m):void 0}),o=await c.json();if(!c.ok)throw new g(o.message||"Request failed",o.code||"UNKNOWN_ERROR",c.status,o.retryAfter);return o}async isActive(e,s){let m=s?`?lang=${encodeURIComponent(s)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${m}`)}async validate(e,s){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:s})}async submit(e,s,m){let i=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(s).some(o=>o instanceof File||o instanceof FileList&&o.length>0)||m?.onProgress?this.submitWithFormData(i,s,m):this.request("POST",`/f/${this.resourceId}/${e}`,{data:s,pageUrl:m?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:m?.captchaToken})}submitWithFormData(e,s,m){return new Promise((i,c)=>{let o=new FormData;for(let[a,l]of Object.entries(s))l instanceof File?o.append(a,l):l instanceof FileList?Array.from(l).forEach(r=>o.append(a,r)):l!=null&&o.append(`data[${a}]`,String(l));let n=m?.pageUrl||(typeof window<"u"?window.location.href:"");n&&o.append("pageUrl",n),m?.captchaToken&&o.append("captchaToken",m.captchaToken);let d=new XMLHttpRequest;m?.onProgress&&d.upload.addEventListener("progress",a=>{a.lengthComputable&&m.onProgress({loaded:a.loaded,total:a.total,percentage:Math.round(a.loaded/a.total*100)})}),d.addEventListener("load",()=>{try{let a=JSON.parse(d.responseText);d.status>=200&&d.status<300?i(a):c(new g(a.message||"Submission failed",a.code||"UNKNOWN_ERROR",d.status,a.retryAfter))}catch{c(new g("Invalid response","PARSE_ERROR",d.status))}}),d.addEventListener("error",()=>{c(new g("Network error","NETWORK_ERROR",0))}),d.addEventListener("abort",()=>{c(new g("Request aborted","ABORTED",0))}),d.open("POST",e),d.send(o)})}async trackView(e){let s=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"}}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var $=class{constructor(e,s,m={}){this.config=null;this.apiClient=e,this.slug=s,this.options=m}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,s){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let i=await this.validate(e);if(!i.valid)throw this.options.onValidationError?.(i.errors),new f(i.errors)}let m=await this.apiClient.submit(this.slug,e,s);return this.options.onSubmitSuccess?.(m),m}catch(m){throw m instanceof g&&this.options.onSubmitError?.(m),m}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},x=class{constructor(e){this.apiClient=new b(e)}async isActive(e,s){return this.apiClient.isActive(e,s)}async validate(e,s){return this.apiClient.validate(e,s)}async submit(e,s,m){return this.apiClient.submit(e,s,m)}form(e,s){return new $(this.apiClient,e,s)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,s,m){let i=m?.maxRetries??3,c=null;for(let o=0;o<i;o++)try{return await this.submit(e,s,m)}catch(n){if(c=n,n instanceof g){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(n.code))throw n;if(n.code.includes("RATE_LIMIT")){let d=n.retryAfter||Math.pow(2,o)*1e3;await new Promise(a=>setTimeout(a,d));continue}}await new Promise(d=>setTimeout(d,Math.pow(2,o)*1e3))}throw c}};var y=class{constructor(e,s){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new x(e),this.options=s;let m=s.target;if(typeof m=="string"){let i=document.querySelector(m);if(!i)throw new Error(`Element not found: ${m}`);this.container=i}else this.container=m}async init(){try{if(this.renderLoading(),this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){if(this.styleEl)return;this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`;let e={...this.config?.schema?.styling,...this.config?.styling};this.styleEl.textContent=E(e),document.head.appendChild(this.styleEl)}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let i=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(k(i));return}let e={...this.config.schema.styling,...this.config.styling},s={...this.config.schema,styling:e},m=v(s,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:e.buttonText||this.options.submitText,isLoading:this.isLoading,hideRequiredAsterisk:e.hideRequiredAsterisk,formName:this.config.hostedConfig?.pageTitle||this.config.name,showFormName:this.config.settings?.showFormName,secondaryButton:e.secondaryButton,buttonAlign:e.buttonAlign,formNameFontSize:e.formNameFontSize,formNameFontWeight:e.formNameFontWeight});m.addEventListener("input",i=>{let c=i.target;c.name&&c.name!=="_hp"&&c.name!=="pageUrl"&&(c.type==="checkbox"?this.values[c.name]=c.checked:c.type==="file"?this.values[c.name]=c.multiple?c.files:c.files?.[0]:this.values[c.name]=c.value,this.errors[c.name]&&(delete this.errors[c.name],this.render()))}),m.addEventListener("submit",i=>{i.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(m)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let s=this.options.redirectUrl||this.config.settings?.redirectUrl;s&&setTimeout(()=>{window.location.href=s},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof f?(this.errors=F(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderLoading(){this.container.innerHTML=`
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
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function N(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let s=e.getAttribute("data-api-key"),m=e.getAttribute("data-resource-id"),i=e.getAttribute("data-forms-expert"),c=e.getAttribute("data-base-url")||void 0;if(!s||!m||!i){console.error("Forms Expert: Missing required attributes",{apiKey:!!s,resourceId:!!m,slug:!!i});return}new y({apiKey:s,resourceId:m,baseUrl:c},{target:e,slug:i,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N());return B(J);})();
//# sourceMappingURL=index.global.js.map