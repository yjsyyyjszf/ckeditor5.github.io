/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(e){var l={};function r(o){if(l[o])return l[o].exports;var t=l[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=l,r.d=function(e,l,o){r.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,l){if(1&l&&(e=r(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var t in e)r.d(o,t,function(l){return e[l]}.bind(null,t));return o},r.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(l,"a",l),l},r.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},r.p="",r(r.s=434)}({434:function(e,l){const r=[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 100%, 89%)",label:"Pink"},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(27, 100%, 85%)",label:"Light Orange"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(120, 100%, 25%)",label:"Dark green"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(180, 52%, 58%)",label:"Light Aqua"},{color:"hsl(180, 97%, 31%)",label:"Aqua"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}];ClassicEditor.create(document.querySelector("#snippet-table-styling"),{extraPlugins:[CKEditorPlugins.TableProperties,CKEditorPlugins.TableCellProperties],table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"],tableProperties:{borderColors:r,backgroundColors:r},tableCellProperties:{borderColors:r,backgroundColors:r}}}).then(e=>{window.editorStyling=e}).catch(e=>{console.error(e.stack)})}});
//# sourceMappingURL=snippet.js.map