(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(){ClassicEditor.create(document.querySelector('#snippet-custom-heading-levels'),{heading:{options:[{modelElement:'paragraph',title:'Paragraph',class:'ck-heading_paragraph'},{modelElement:'heading1',viewElement:'h1',title:'Heading 1',class:'ck-heading_heading1'},{modelElement:'heading2',viewElement:'h2',title:'Heading 2',class:'ck-heading_heading2'}]},toolbar:{viewportTopOffset:60}}).then((a)=>{window.editor=a}).catch((a)=>{console.error(a.stack)})}]);
//# sourceMappingURL=snippet.js.map