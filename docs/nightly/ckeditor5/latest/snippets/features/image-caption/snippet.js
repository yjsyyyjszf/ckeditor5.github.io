(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(1);Object(d.a)().then((a)=>{ClassicEditor.create(document.querySelector('#snippet-image-caption'),{removePlugins:['ImageStyle'],image:{toolbar:['imageTextAlternative']},toolbar:{viewportTopOffset:60},cloudServices:{token:a}}).then((a)=>{window.editorCaption=a})}).catch((a)=>{console.error(a)})},function(a,b,c){'use strict';b.a=function(){return new Promise((a,b)=>{const c=new XMLHttpRequest,f=Object(d.a)();c.open('GET',`${e}?user.id=${f}`),c.onload=()=>{if(200<=c.status&&300>c.status){const b=JSON.parse(c.responseText);a(b.token)}else b(new Error(`XHR status: ${c.status}`))},c.onerror=(a)=>{b(a)},c.send(null)})};var d=c(2);const e='https://j2sns7jmy0.execute-api.eu-central-1.amazonaws.com/prod/token'},function(a,b){'use strict';b.a=function(){let a='e';for(let b=0;8>b;b++)a+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return a}}]);
//# sourceMappingURL=snippet.js.map