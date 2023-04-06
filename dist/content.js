(()=>{"use strict";var e={144:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(124)),l=o(r(207)),i=new n.default,a=new l.default,s=()=>{a.loadFromLocalStorage().then((e=>{i.loadPersonalData(e)}),(e=>console.log(e)))};chrome.storage.local.onChanged.addListener(s),s()},124:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(331));t.default=class{constructor(){this.valueSetService=new n.default;const e=document.querySelectorAll(".signer-separator").item(1);this.creatorAddressElement=e.querySelectorAll("input").item(4),this.creatorNameElement=e.querySelectorAll("input").item(2);const t=document.querySelectorAll(".signer-separator").item(2);this.signerNameElement=t.querySelector("input");const r=document.querySelectorAll(".signer-separator").item(5);this.mobileSignatureChoiceElement=r.querySelectorAll("input").item(1),this.phoneNumberElement=r.querySelectorAll("input").item(2),this.personalCodeElement=r.querySelectorAll("input").item(3)}loadPersonalData(e){this.valueSetService.setStringValue(this.creatorNameElement,e.name),this.valueSetService.setStringValue(this.creatorAddressElement,e.address),this.valueSetService.setStringValue(this.signerNameElement,e.name),this.valueSetService.setRadioChecked(this.mobileSignatureChoiceElement),setTimeout((()=>{this.valueSetService.setStringValue(this.phoneNumberElement,e.phoneNumber),this.valueSetService.setStringValue(this.personalCodeElement,e.personalCode)}),500)}}},207:function(e,t){var r=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,l){function i(e){try{s(o.next(e))}catch(e){l(e)}}function a(e){try{s(o.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.key="personalDataDto"}storeToLocalStorage(e){chrome.storage.local.set({[this.key]:e}).catch((e=>console.log("Failed to store.",e)))}loadFromLocalStorage(){return r(this,void 0,void 0,(function*(){return chrome.storage.local.get(this.key).then((e=>e[this.key]))}))}}},331:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{setStringValue(e,t){e.focus(),e.value=t}setRadioChecked(e){e.checked=!0,e.click()}}}},t={};!function r(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,r),l.exports}(144)})();