/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=396)}({396:function(e,t){ClassicEditor.create(document.querySelector("#demo-editor"),{toolbar:{items:["heading","|","bold","italic","bulletedList","numberedList","|","outdent","indent","|","blockQuote","link","|","mediaEmbed","insertTable","|","undo","redo"],viewportTopOffset:window.getViewportTopOffsetConfig()},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]}}).then(e=>{window.editor=e,document.getElementById("demo-word-count").appendChild(e.plugins.get("WordCount").wordCountContainer)}).catch(e=>{console.error(e.stack)})}});
//# sourceMappingURL=snippet.js.map