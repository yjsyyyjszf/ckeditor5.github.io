/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=458)}({146:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"}},458:function(e,t,n){"use strict";n.r(t);var o=n(146);let r=500,a=!1;function i(e){const t=document.querySelector("#snippet-manualsave-container");a?t.classList.add("active"):t.classList.remove("active"),e.plugins.get("PendingActions").hasAny?t.classList.add("saving"):t.classList.remove("saving")}document.querySelector("#snippet-manualsave-lag").addEventListener("change",e=>{r=e.target.value}),ClassicEditor.create(document.querySelector("#snippet-manualsave"),{cloudServices:o.a,toolbar:{viewportTopOffset:window.getViewportTopOffsetConfig()}}).then(e=>{window.editor=e,function(e){e.plugins.get("PendingActions").on("change:hasAny",()=>i(e)),e.model.document.on("change:data",()=>{a=!0,i(e)})}(e),function(e){const t=document.querySelector("#snippet-manualsave-save"),n=e.plugins.get("PendingActions");t.addEventListener("click",t=>{const o=e.getData(),c=n.add("Saving in progress.");t.preventDefault(),setTimeout(()=>{!function(e){const t=document.querySelector("#snippet-manualsave-console");s++,t.classList.add("updated"),t.textContent=e,setTimeout(()=>{0==--s&&t.classList.remove("updated")},500)}(o),n.remove(c),o==e.getData()&&(a=!1),i(e)},r)})}(e),function(e){window.addEventListener("beforeunload",t=>{e.plugins.get("PendingActions").hasAny&&t.preventDefault()})}(e)}).catch(e=>{console.error(e.stack)});let s=0}});
//# sourceMappingURL=snippet.js.map