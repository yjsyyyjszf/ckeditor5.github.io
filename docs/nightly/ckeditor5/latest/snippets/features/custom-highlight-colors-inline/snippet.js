/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=395)}({145:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const o={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"}},395:function(e,t,r){"use strict";r.r(t);var o=r(145);ClassicEditor.create(document.querySelector("#snippet-highlight-custom-colors-inline"),{cloudServices:o.a,toolbar:{items:["heading","|","bulletedList","numberedList","|","outdent","indent","|","highlight","undo","redo"],viewportTopOffset:window.getViewportTopOffsetConfig()},highlight:{options:[{model:"greenMarker",class:"marker-green",title:"Green marker",color:"rgb(25, 156, 25)",type:"marker"},{model:"yellowMarker",class:"marker-yellow",title:"Yellow marker",color:"#cac407",type:"marker"},{model:"redPen",class:"pen-red",title:"Red pen",color:"hsl(343, 82%, 58%)",type:"pen"}]}}).then(e=>{window.editor=e}).catch(e=>{console.error(e.stack)})}});
//# sourceMappingURL=snippet.js.map