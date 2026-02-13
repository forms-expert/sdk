"use strict";var FormsExpert=(()=>{var C=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var L=Object.prototype.hasOwnProperty;var U=(t,e)=>{for(var o in e)C(t,o,{get:e[o],enumerable:!0})},P=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of N(e))!L.call(t,p)&&p!==o&&C(t,p,{get:()=>e[p],enumerable:!(r=T(e,p))||r.enumerable});return t};var A=t=>P(C({},"__esModule",{value:!0}),t);var W={};U(W,{FormWidget:()=>y,autoInit:()=>F,errorsToRecord:()=>w,generateFormStyles:()=>E,renderField:()=>R,renderForm:()=>S,renderSuccess:()=>v});var $={theme:"light",primaryColor:"#3b82f6",backgroundColor:"#ffffff",textColor:"#1f2937",borderRadius:"md",fontSize:"md",buttonStyle:"filled",labelPosition:"top"};function I(t){switch(t){case"none":return"0";case"sm":return"0.125rem";case"md":return"0.375rem";case"lg":return"0.5rem";default:return"0.375rem"}}function O(t){switch(t){case"none":return"0";case"small":return"4px";case"medium":return"8px";case"large":return"12px";case"full":return"9999px";default:return"8px"}}function M(t){switch(t){case"sm":return"0.875rem";case"md":return"1rem";case"lg":return"1.125rem";default:return"1rem"}}function z(t){switch(t){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}function V(t){switch(t){case"compact":return"0.5rem";case"relaxed":return"1.5rem";case"spacious":return"2rem";default:return"1rem"}}function H(t){switch(t){case"compact":return"1rem";case"relaxed":return"2.5rem";case"spacious":return"3.5rem";default:return"1.5rem"}}function q(t){switch(t){case"compact":return"0.125rem";case"relaxed":return"0.75rem";default:return"0.25rem"}}function K(t){switch(t){case"narrow":return"28rem";case"wide":return"48rem";case"full":return"100%";default:return"36rem"}}function D(t){switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}function E(t=$){let e={...$,...t},o=I(e.borderRadius),r=O(e.buttonRadius),p=M(e.fontSize),l=z(e.placeholderFontSize),s=V(e.fieldSpacing),n=H(e.formPadding),m=q(e.labelSpacing),c=K(e.formWidth),i=e.buttonColor||e.primaryColor,a=e.fontFamily||"system-ui, -apple-system, sans-serif",d=D(e.buttonAlign);return`
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
  font-size: ${p};
  color: ${e.textColor};
  background-color: ${e.transparentBackground?"transparent":e.backgroundColor};
  padding: ${n};
  border-radius: ${o};
  box-sizing: border-box;
  max-width: ${c};
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
  margin-bottom: ${s};
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"display: flex; align-items: flex-start; gap: 1rem;":""}
}

.forms-expert-label {
  display: block;
  font-weight: 500;
  color: ${e.textColor};
  ${e.labelPosition==="left"||e.fieldLayout==="inline"?"width: 33%; flex-shrink: 0; padding-top: 0.5rem; margin-bottom: 0;":`margin-bottom: ${m};`}
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
  border: 1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"};
  border-radius: ${o};
  font-size: ${p};
  font-family: inherit;
  background-color: ${e.theme==="dark"?"#374151":"#ffffff"};
  color: ${e.textColor};
  transition: border-color 0.15s, box-shadow 0.15s;
}

.forms-expert-input::placeholder,
.forms-expert-textarea::placeholder {
  font-size: ${l};
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
  margin-bottom: ${s};
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
  border: 1px solid ${e.theme==="dark"?"#4b5563":"#d1d5db"};
  border-radius: ${o};
  font-size: ${p};
  background-color: ${e.theme==="dark"?"#374151":"#ffffff"};
  cursor: pointer;
}

.forms-expert-error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.forms-expert-button-wrapper {
  display: flex;
  justify-content: ${d};
  margin-top: 1rem;
}

.forms-expert-button {
  ${e.buttonAlign?"":"width: 100%;"}
  padding: 0.625rem 1.25rem;
  font-weight: 500;
  font-size: ${p};
  font-family: inherit;
  border-radius: ${r};
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  ${e.buttonStyle==="filled"?`background-color: ${i}; color: white; border: none;`:`background-color: transparent; color: ${i}; border: 2px solid ${i};`}
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
  color: #22c55e;
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
`.trim()}function h(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}function R(t,e,o){let r=document.createElement("div");if(t.type==="heading"){r.className="forms-expert-group";let n=document.createElement("h3");if(n.className="forms-expert-heading",n.textContent=t.label||"",r.appendChild(n),t.content){let m=document.createElement("p");m.className="forms-expert-heading-subtitle",m.textContent=t.content,r.appendChild(m)}return r}if(t.type==="divider"){let n=document.createElement("hr");return n.className="forms-expert-divider",n}if(t.type==="paragraph"){if(r.className="forms-expert-group",t.label){let n=document.createElement("p");n.className="forms-expert-paragraph-label",n.textContent=t.label,r.appendChild(n)}if(t.content){let n=document.createElement("p");n.className="forms-expert-paragraph",n.textContent=t.content,t.paragraphFontSize&&(n.style.fontSize=`${t.paragraphFontSize}px`),r.appendChild(n)}return r}if(t.type==="hidden"){let n=document.createElement("input");return n.type="hidden",n.name=t.name,n.value=String(t.defaultValue??e??""),r.appendChild(n),r.style.display="none",r}if(t.type==="checkbox"||t.type==="toggle"||t.type==="consent"){r.className="forms-expert-checkbox-group";let n=document.createElement("input");n.type="checkbox",n.id=`mira-field-${t.name}`,n.name=t.name,n.className="forms-expert-checkbox",n.checked=!!e,t.required&&(n.required=!0);let m=document.createElement("label");m.htmlFor=n.id;let c=t.type==="consent"?t.consentText||t.label||t.name:t.label||t.name;if(m.innerHTML=`${h(c)}${t.required?'<span class="forms-expert-required">*</span>':""}`,r.appendChild(n),r.appendChild(m),t.type==="consent"&&t.consentUrl){let i=document.createElement("a");i.href=t.consentUrl,i.target="_blank",i.rel="noopener noreferrer",i.textContent="View policy",i.className="forms-expert-consent-link",r.appendChild(i)}if(o){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=o,r.appendChild(i)}return r}r.className="forms-expert-group";let p=document.createElement("label");p.className="forms-expert-label",p.htmlFor=`mira-field-${t.name}`,p.innerHTML=`${h(t.label||t.name)}${t.required?'<span class="forms-expert-required">*</span>':""}`,r.appendChild(p);let l=document.createElement("div");l.className="forms-expert-input-wrapper";let s;switch(t.type){case"textarea":case"richText":s=document.createElement("textarea"),s.className="forms-expert-textarea",s.value=String(e||""),t.maxLength&&(s.maxLength=t.maxLength);break;case"select":case"dropdown":{s=document.createElement("select"),s.className="forms-expert-select";let n=document.createElement("option");n.value="",n.textContent=t.placeholder||"Select an option...",s.appendChild(n),(t.options||[]).forEach(c=>{let i=document.createElement("option");i.value=c,i.textContent=c,e===c&&(i.selected=!0),s.appendChild(i)});break}case"radio":{let n=document.createElement("div");if(n.className="forms-expert-radio-group",(t.options||[]).forEach(c=>{let i=document.createElement("label");i.className="forms-expert-radio-item";let a=document.createElement("input");a.type="radio",a.name=t.name,a.value=c,a.checked=e===c,i.appendChild(a),i.appendChild(document.createTextNode(` ${c}`)),n.appendChild(i)}),l.appendChild(n),o){let c=document.createElement("div");c.className="forms-expert-error-message",c.textContent=o,l.appendChild(c)}return r.appendChild(l),r}case"multiselect":{let n=document.createElement("div");n.className="forms-expert-multiselect-group";let m=e||[];if((t.options||[]).forEach(i=>{let a=document.createElement("label");a.className="forms-expert-checkbox-item";let d=document.createElement("input");d.type="checkbox",d.name=t.name,d.value=i,d.checked=m.includes(i),a.appendChild(d),a.appendChild(document.createTextNode(` ${i}`)),n.appendChild(a)}),l.appendChild(n),o){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=o,l.appendChild(i)}return r.appendChild(l),r}case"rating":{let n=document.createElement("div");n.className="forms-expert-rating";let m=t.ratingMax||5,c=e||0;for(let i=1;i<=m;i++){let a=document.createElement("button");a.type="button",a.className=`forms-expert-rating-star ${i<=c?"active":""}`,a.textContent="\u2605",a.dataset.value=String(i),n.appendChild(a)}if(l.appendChild(n),o){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=o,l.appendChild(i)}return r.appendChild(l),r}case"scale":case"opinionScale":{let n=document.createElement("div");n.className="forms-expert-scale";let m=t.min??(t.type==="opinionScale"?0:1),c=t.max??(t.type==="opinionScale"?10:5),i=e;for(let a=m;a<=c;a++){let d=document.createElement("button");d.type="button",d.className=`forms-expert-scale-btn ${i===a?"active":""}`,d.textContent=String(a),d.dataset.value=String(a),n.appendChild(d)}if(l.appendChild(n),t.lowLabel||t.highLabel){let a=document.createElement("div");a.className="forms-expert-scale-labels",a.innerHTML=`<span>${h(t.lowLabel||"")}</span><span>${h(t.highLabel||"")}</span>`,l.appendChild(a)}if(o){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=o,l.appendChild(a)}return r.appendChild(l),r}case"slider":{s=document.createElement("input"),s.type="range",s.className="forms-expert-slider",s.min=String(t.min??0),s.max=String(t.max??100),s.step=String(t.step??1),s.value=String(e??t.min??0);break}case"file":s=document.createElement("input"),s.type="file",s.className="forms-expert-file",t.allowedMimeTypes?.length&&(s.accept=t.allowedMimeTypes.join(",")),t.multiple&&(s.multiple=!0);break;case"currency":{s=document.createElement("input"),s.type="number",s.className="forms-expert-input",s.value=String(e??""),t.min!==void 0&&(s.min=String(t.min)),t.max!==void 0&&(s.max=String(t.max)),s.step=String(t.step||.01);break}case"phone":s=document.createElement("input"),s.type="tel",s.className="forms-expert-input",s.value=String(e||"");break;case"url":s=document.createElement("input"),s.type="url",s.className="forms-expert-input",s.value=String(e||"");break;case"password":s=document.createElement("input"),s.type="password",s.className="forms-expert-input",s.value=String(e||"");break;case"time":s=document.createElement("input"),s.type="time",s.className="forms-expert-input",s.value=String(e||"");break;case"datetime":s=document.createElement("input"),s.type="datetime-local",s.className="forms-expert-input",s.value=String(e||"");break;case"colorPicker":s=document.createElement("input"),s.type="color",s.className="forms-expert-color",s.value=String(e||"#000000");break;case"dateRange":{let n=document.createElement("div");n.className="forms-expert-date-range";let m=e||{},c=document.createElement("input");c.type="date",c.className="forms-expert-input",c.name=`${t.name}.start`,c.value=m.start||"";let i=document.createElement("input");if(i.type="date",i.className="forms-expert-input",i.name=`${t.name}.end`,i.value=m.end||"",n.appendChild(c),n.appendChild(i),l.appendChild(n),o){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=o,l.appendChild(a)}return r.appendChild(l),r}case"address":{let n=document.createElement("div");n.className="forms-expert-address";let m=t.addressFields||["street","city","state","zip","country"],c=e||{},i={street:"Street",street2:"Street Line 2",city:"City",state:"State",zip:"ZIP",country:"Country"};if(m.forEach(a=>{let d=document.createElement("input");d.type="text",d.className="forms-expert-input",d.name=`${t.name}.${a}`,d.placeholder=i[a]||a,d.value=c[a]||"",n.appendChild(d)}),l.appendChild(n),o){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=o,l.appendChild(a)}return r.appendChild(l),r}case"name":{let n=document.createElement("div");n.className="forms-expert-name";let m=t.nameFields||["first","last"],c=e||{},i={prefix:"Prefix",first:"First Name",middle:"Middle",last:"Last Name",suffix:"Suffix"};if(m.forEach(a=>{let d=document.createElement("input");d.type="text",d.className="forms-expert-input",d.name=`${t.name}.${a}`,d.placeholder=i[a]||a,d.value=c[a]||"",n.appendChild(d)}),l.appendChild(n),o){let a=document.createElement("div");a.className="forms-expert-error-message",a.textContent=o,l.appendChild(a)}return r.appendChild(l),r}case"imageChoice":{let n=document.createElement("div");n.className="forms-expert-image-choice";let m=t.options||[],c=e;if(m.forEach(i=>{let a=document.createElement("button");if(a.type="button",a.className=`forms-expert-image-choice-item ${c===i.value?"active":""}`,a.dataset.value=i.value,i.imageUrl){let g=document.createElement("img");g.src=i.imageUrl,g.alt=i.label,a.appendChild(g)}let d=document.createElement("span");d.textContent=i.label,a.appendChild(d),n.appendChild(a)}),l.appendChild(n),o){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=o,l.appendChild(i)}return r.appendChild(l),r}case"ranking":{let n=document.createElement("div");n.className="forms-expert-ranking";let m=t.options||[];if((e||[...m]).forEach((i,a)=>{let d=document.createElement("div");d.className="forms-expert-ranking-item",d.textContent=`${a+1}. ${i}`,d.dataset.value=i,n.appendChild(d)}),l.appendChild(n),o){let i=document.createElement("div");i.className="forms-expert-error-message",i.textContent=o,l.appendChild(i)}return r.appendChild(l),r}case"location":{let n=document.createElement("div");n.className="forms-expert-location";let m=e||{},c=document.createElement("input");c.type="text",c.className="forms-expert-input",c.name=`${t.name}.address`,c.placeholder="Address",c.value=m.address||"",n.appendChild(c);let i=document.createElement("div");i.className="forms-expert-location-coords";let a=document.createElement("input");a.type="number",a.className="forms-expert-input",a.name=`${t.name}.lat`,a.placeholder="Latitude",a.step="any",a.value=m.lat!==void 0?String(m.lat):"";let d=document.createElement("input");if(d.type="number",d.className="forms-expert-input",d.name=`${t.name}.lng`,d.placeholder="Longitude",d.step="any",d.value=m.lng!==void 0?String(m.lng):"",i.appendChild(a),i.appendChild(d),n.appendChild(i),l.appendChild(n),o){let g=document.createElement("div");g.className="forms-expert-error-message",g.textContent=o,l.appendChild(g)}return r.appendChild(l),r}default:s=document.createElement("input"),s.type=t.type==="email"?"email":t.type==="number"?"number":t.type==="date"?"date":"text",s.className="forms-expert-input",s.value=String(e||""),t.type==="number"&&(t.min!==void 0&&(s.min=String(t.min)),t.max!==void 0&&(s.max=String(t.max)),t.step!==void 0&&(s.step=String(t.step)));break}if(s.id=`mira-field-${t.name}`,s.name=t.name,t.placeholder&&"placeholder"in s&&(s.placeholder=t.placeholder),t.required&&(s.required=!0),o&&s.classList.add("forms-expert-error"),l.appendChild(s),o){let n=document.createElement("div");n.className="forms-expert-error-message",n.textContent=o,l.appendChild(n)}return r.appendChild(l),r}function S(t,e={},o={},r={}){let p=document.createElement("form");if(p.className="forms-expert",r.hideRequiredAsterisk){let n=document.createElement("style");n.textContent=".forms-expert .forms-expert-required { display: none; }",p.appendChild(n)}if(t.fields.forEach(n=>{let m=R(n,e[n.name],o[n.name]);p.appendChild(m)}),r.honeypot){let n=document.createElement("input");n.type="text",n.name="_hp",n.className="forms-expert-honeypot",n.tabIndex=-1,n.autocomplete="off",p.appendChild(n)}let l=document.createElement("input");l.type="hidden",l.name="pageUrl",l.value=typeof window<"u"?window.location.href:"",p.appendChild(l);let s=document.createElement("button");if(s.type="submit",s.className="forms-expert-button",s.disabled=r.isLoading||!1,r.isLoading?s.innerHTML=`
      <span class="forms-expert-button-loading">
        <span class="forms-expert-spinner"></span>
        Submitting...
      </span>
    `:s.textContent=r.submitText||"Submit",p.appendChild(s),r.showBranding!==!1){let n=r.brandingText||"Powered by Forms Expert",m=r.brandingUrl||"https://mira.io",c=document.createElement("div");c.className="forms-expert-branding",c.innerHTML=`<a href="${m}" target="_blank" rel="noopener">${n}</a>`,p.appendChild(c)}return p}function v(t){let e=document.createElement("div");return e.className="forms-expert-success",e.innerHTML=`
    <svg class="forms-expert-success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div class="forms-expert-success-message">${h(t)}</div>
  `,e}function w(t){return t.reduce((e,o)=>({...e,[o.field]:o.message}),{})}var u=class extends Error{constructor(o,r,p,l){super(o);this.code=r;this.statusCode=p;this.retryAfter=l;this.name="FormsError"}},f=class extends Error{constructor(o){super("Validation failed");this.errors=o;this.name="FormValidationError"}};var x=class{constructor(e){this.apiKey=e.apiKey,this.resourceId=e.resourceId,this.baseUrl=(e.baseUrl||"https://api.forms.expert/api/v1").replace(/\/$/,"")}buildUrl(e){let o=e.includes("?")?"&":"?";return`${this.baseUrl}${e}${o}token=${encodeURIComponent(this.apiKey)}`}async request(e,o,r){let p=this.buildUrl(o),l=await fetch(p,{method:e,headers:{"Content-Type":"application/json"},body:r?JSON.stringify(r):void 0}),s=await l.json();if(!l.ok)throw new u(s.message||"Request failed",s.code||"UNKNOWN_ERROR",l.status,s.retryAfter);return s}async isActive(e,o){let r=o?`?lang=${encodeURIComponent(o)}`:"";return this.request("GET",`/f/${this.resourceId}/${e}/is-active${r}`)}async validate(e,o){return this.request("POST",`/f/${this.resourceId}/${e}/validate`,{data:o})}async submit(e,o,r){let p=this.buildUrl(`/f/${this.resourceId}/${e}`);return Object.values(o).some(s=>s instanceof File||s instanceof FileList&&s.length>0)||r?.onProgress?this.submitWithFormData(p,o,r):this.request("POST",`/f/${this.resourceId}/${e}`,{data:o,pageUrl:r?.pageUrl||(typeof window<"u"?window.location.href:void 0),captchaToken:r?.captchaToken})}submitWithFormData(e,o,r){return new Promise((p,l)=>{let s=new FormData;for(let[c,i]of Object.entries(o))i instanceof File?s.append(c,i):i instanceof FileList?Array.from(i).forEach(a=>s.append(c,a)):i!=null&&s.append(`data[${c}]`,String(i));let n=r?.pageUrl||(typeof window<"u"?window.location.href:"");n&&s.append("pageUrl",n),r?.captchaToken&&s.append("captchaToken",r.captchaToken);let m=new XMLHttpRequest;r?.onProgress&&m.upload.addEventListener("progress",c=>{c.lengthComputable&&r.onProgress({loaded:c.loaded,total:c.total,percentage:Math.round(c.loaded/c.total*100)})}),m.addEventListener("load",()=>{try{let c=JSON.parse(m.responseText);m.status>=200&&m.status<300?p(c):l(new u(c.message||"Submission failed",c.code||"UNKNOWN_ERROR",m.status,c.retryAfter))}catch{l(new u("Invalid response","PARSE_ERROR",m.status))}}),m.addEventListener("error",()=>{l(new u("Network error","NETWORK_ERROR",0))}),m.addEventListener("abort",()=>{l(new u("Request aborted","ABORTED",0))}),m.open("POST",e),m.send(s)})}async trackView(e){let o=this.buildUrl(`/f/${this.resourceId}/${e}/view`);await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"}}).catch(()=>{})}getResourceId(){return this.resourceId}getBaseUrl(){return this.baseUrl}};var k=class{constructor(e,o,r={}){this.config=null;this.apiClient=e,this.slug=o,this.options=r}async initialize(e){return this.config=await this.apiClient.isActive(this.slug,e),this.options.trackViews&&this.apiClient.trackView(this.slug),this.config}getConfig(){return this.config}isActive(){return this.config?.active??!1}requiresCaptcha(){return this.config?.settings?.captcha?.enabled??!1}getCaptchaProvider(){return this.config?.settings?.captcha?.provider}getSchema(){return this.config?.schema}async validate(e){return this.apiClient.validate(this.slug,e)}async submit(e,o){this.options.onSubmitStart?.();try{if(this.config?.mode==="schema"){let p=await this.validate(e);if(!p.valid)throw this.options.onValidationError?.(p.errors),new f(p.errors)}let r=await this.apiClient.submit(this.slug,e,o);return this.options.onSubmitSuccess?.(r),r}catch(r){throw r instanceof u&&this.options.onSubmitError?.(r),r}}getSuccessMessage(){return this.config?.settings?.successMessage||"Form submitted successfully!"}getRedirectUrl(){return this.config?.settings?.redirectUrl}},b=class{constructor(e){this.apiClient=new x(e)}async isActive(e,o){return this.apiClient.isActive(e,o)}async validate(e,o){return this.apiClient.validate(e,o)}async submit(e,o,r){return this.apiClient.submit(e,o,r)}form(e,o){return new k(this.apiClient,e,o)}async trackView(e){return this.apiClient.trackView(e)}async submitWithRetry(e,o,r){let p=r?.maxRetries??3,l=null;for(let s=0;s<p;s++)try{return await this.submit(e,o,r)}catch(n){if(l=n,n instanceof u){if(["VALIDATION_ERROR","CAPTCHA_REQUIRED","ORIGIN_NOT_ALLOWED"].includes(n.code))throw n;if(n.code.includes("RATE_LIMIT")){let m=n.retryAfter||Math.pow(2,s)*1e3;await new Promise(c=>setTimeout(c,m));continue}}await new Promise(m=>setTimeout(m,Math.pow(2,s)*1e3))}throw l}};var y=class{constructor(e,o){this.config=null;this.values={};this.errors={};this.isLoading=!1;this.isSubmitted=!1;this.styleEl=null;this.sdk=new b(e),this.options=o;let r=o.target;if(typeof r=="string"){let p=document.querySelector(r);if(!p)throw new Error(`Element not found: ${r}`);this.container=p}else this.container=r}async init(){try{if(this.config=await this.sdk.isActive(this.options.slug,this.options.lang),!this.config.active){this.renderError("This form is not available");return}this.options.trackViews&&this.sdk.trackView(this.options.slug),this.injectStyles(),this.render()}catch(e){this.renderError("Failed to load form"),this.options.onError?.(e)}}injectStyles(){this.styleEl||(this.styleEl=document.createElement("style"),this.styleEl.id=`forms-expert-styles-${this.options.slug}`,this.styleEl.textContent=E(this.config?.schema?.styling),document.head.appendChild(this.styleEl))}render(){if(!this.config?.schema)return;if(this.isSubmitted){this.container.innerHTML="";let o=this.config.settings?.successMessage||"Form submitted successfully!";this.container.appendChild(v(o));return}let e=S(this.config.schema,this.values,this.errors,{honeypot:this.config.settings?.honeypot,showBranding:this.config.branding?.enabled!==!1,brandingText:this.config.branding?.text,brandingUrl:this.config.branding?.url,submitText:this.options.submitText,isLoading:this.isLoading});e.addEventListener("input",o=>{let r=o.target;r.name&&r.name!=="_hp"&&r.name!=="pageUrl"&&(r.type==="checkbox"?this.values[r.name]=r.checked:r.type==="file"?this.values[r.name]=r.multiple?r.files:r.files?.[0]:this.values[r.name]=r.value,this.errors[r.name]&&(delete this.errors[r.name],this.render()))}),e.addEventListener("submit",o=>{o.preventDefault(),this.handleSubmit()}),this.container.innerHTML="",this.container.appendChild(e)}async handleSubmit(){if(!(this.isLoading||!this.config)){this.isLoading=!0,this.errors={},this.render();try{let e=await this.sdk.submit(this.options.slug,this.values);this.isLoading=!1,this.isSubmitted=!0,this.render(),this.options.onSuccess?.(e);let o=this.options.redirectUrl||this.config.settings?.redirectUrl;o&&setTimeout(()=>{window.location.href=o},1500),this.options.resetOnSuccess&&setTimeout(()=>{this.reset()},3e3)}catch(e){this.isLoading=!1,e instanceof f?(this.errors=w(e.errors),this.options.onValidationError?.(e.errors)):this.options.onError?.(e),this.render()}}}reset(){this.values={},this.errors={},this.isLoading=!1,this.isSubmitted=!1,this.render()}renderError(e){this.container.innerHTML=`
      <div class="forms-expert" style="text-align: center; padding: 2rem; color: #ef4444;">
        <p>${e}</p>
      </div>
    `}destroy(){this.container.innerHTML="",this.styleEl?.remove(),this.styleEl=null}};function F(){document.querySelectorAll("[data-forms-expert]").forEach(e=>{let o=e.getAttribute("data-api-key"),r=e.getAttribute("data-resource-id"),p=e.getAttribute("data-forms-expert"),l=e.getAttribute("data-base-url")||void 0;if(!o||!r||!p){console.error("Forms Expert: Missing required attributes",{apiKey:!!o,resourceId:!!r,slug:!!p});return}new y({apiKey:o,resourceId:r,baseUrl:l},{target:e,slug:p,trackViews:e.getAttribute("data-track-views")==="true",submitText:e.getAttribute("data-submit-text")||void 0,resetOnSuccess:e.getAttribute("data-reset")==="true",lang:e.getAttribute("data-lang")||void 0}).init()})}typeof window<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",F):F());return A(W);})();
//# sourceMappingURL=index.global.js.map