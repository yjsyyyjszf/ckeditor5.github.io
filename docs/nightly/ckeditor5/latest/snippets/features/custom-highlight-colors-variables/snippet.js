/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=394)}({145:function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));const o={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"}},394:function(e,r,t){"use strict";t.r(r);var o=t(145);ClassicEditor.create(document.querySelector("#snippet-highlight-custom-colors-variables"),{cloudServices:o.a,toolbar:{items:["heading","|","bulletedList","numberedList","|","outdent","indent","|","highlight","undo","redo"],viewportTopOffset:window.getViewportTopOffsetConfig()},highlight:{options:[{model:"greenMarker",class:"marker-green",title:"Green marker",color:"var(--ck-highlight-marker-green)",type:"marker"},{model:"yellowMarker",class:"marker-yellow",title:"Yellow marker",color:"var(--ck-highlight-marker-yellow)",type:"marker"},{model:"redPen",class:"pen-red",title:"Red pen",color:"var(--ck-highlight-pen-red)",type:"pen"}]}}).then(e=>{window.editor=e}).catch(e=>{console.error(e.stack)})}});
//# sourceMappingURL=snippet.js.map