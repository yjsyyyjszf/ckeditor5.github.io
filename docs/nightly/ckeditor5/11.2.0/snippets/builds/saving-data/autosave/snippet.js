/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"};let r=500;document.querySelector("#snippet-autosave-lag").addEventListener("change",e=>{r=e.target.value}),ClassicEditor.create(document.querySelector("#snippet-autosave"),{cloudServices:n,toolbar:{viewportTopOffset:window.getViewportTopOffsetConfig()},autosave:{save:e=>(function(e){return new Promise(t=>{setTimeout(()=>{!function(e){const t=document.querySelector("#snippet-autosave-console");u++,t.classList.add("updated"),t.textContent=e,setTimeout(()=>{0==--u&&t.classList.remove("updated")},500)}(e),t()},r)})})(e.getData())}}).then(e=>{window.editor=e,function(e){const t=e.plugins.get("PendingActions"),o=document.querySelector("#snippet-autosave-status");t.on("change:hasAny",(e,t,n)=>{n?o.classList.add("busy"):o.classList.remove("busy")})}(e)}).catch(e=>{console.error(e.stack)});let u=0}]);
//# sourceMappingURL=snippet.js.map