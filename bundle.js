(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"body {\n    height: 100vh;\n    background-color: wheat;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.text {\n    width: 500px;\n    height: 500px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container"),e.appendChild(t);const n=document.createElement("h1");n.textContent="WELCOME TO HWARO",t.appendChild(n)}var t=n(379),o=n.n(t),r=n(795),a=n.n(r),c=n(569),i=n.n(c),s=n(565),d=n.n(s),l=n(216),u=n.n(l),p=n(589),f=n.n(p),m=n(426),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),o()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,function t(){const n=document.querySelector("#content"),o=document.createElement("div");o.classList.add("header"),n.appendChild(o);const r=document.createElement("button");r.classList.add("btnHome"),r.textContent="Home",o.appendChild(r);const a=document.createElement("button");a.classList.add("btnMenu"),a.textContent="Menu",o.appendChild(a);const c=document.createElement("button");c.classList.add("btnContact"),c.textContent="Contact",o.appendChild(c),r.addEventListener("click",(()=>{n.innerHTML="",t(),e()})),a.addEventListener("click",(()=>{n.innerHTML="",t(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container"),e.appendChild(t);let n=document.createElement("h1");n.textContent="KOREAN BBQ & MEAL",t.appendChild(n),n=document.createElement("h1"),n.textContent="ALL YOU CAN EAT",t.appendChild(n),n=document.createElement("h1"),n.textContent="DRINK",t.appendChild(n)}()})),c.addEventListener("click",(()=>{n.innerHTML="",t(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container"),e.appendChild(t);const n=document.createElement("h1");n.textContent="ABOUT US",t.appendChild(n);const o=document.createElement("h3");o.textContent="Hwaro",t.appendChild(o);const r=document.createElement("div");r.classList.add("text"),r.textContent="We recreated Korean traditional cuisine to blend into the heart of variety Chosunhwaro, the leading company in the creation of themed dining and cultural contents, pursues to globally deliver excellence of taste and sophistication. To keep our promises to serve sincerely prepared food to our precious customers, we continuously strive for excellency in service through education of our staff, exceptional distribution channels, and a meticulously formulated management system. Our sincere love and care for Korean cuisine will continue and we will strive to widely promote the Korean tradition, the food, and sophistication, all over the globe. We assure you that you will be able to watch us proudly as we take a leap towards leading the future of the global industry.",t.appendChild(r)}()}))}(),e()})()})();