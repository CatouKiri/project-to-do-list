(()=>{"use strict";var t,e,n,r,o,a,i,c,s,u,d,p,l,f,m={16:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"body {\n    margin: 0px;\n    padding: 0px;\n}\n\n/* SIDE BAR STYLE START */\n\n#sidebar {\n    float: left;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 20%;\n    margin: 0px;\n    padding: 50px 0px 0px 0px;\n    height: 100vh;\n    box-shadow: 0px 0px 15px 0px rgb(220, 220, 220);\n}\n\n#sidebar button {\n    width: 90%;\n    padding: 10px 0px 10px 0px;\n    background-color: white;\n    border: 2px solid white;\n    cursor: pointer;\n    transition-duration: 0.4s;\n    border-radius: 10px;\n}\n\n#sidebar button:hover {\n    background-color: rgb(226, 226, 226);\n}\n\n/* SIDE BAR STYLE END */",""]);const c=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,p="".concat(u," ").concat(d);a[u]=d+1;var l=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},v={};function h(t){var e=v[t];if(void 0!==e)return e.exports;var n=v[t]={id:t,exports:{}};return m[t](n,n.exports,h),n.exports}h.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return h.d(e,{a:e}),e},h.d=(t,e)=>{for(var n in e)h.o(e,n)&&!h.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},h.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),h.nc=void 0,t=h(72),e=h.n(t),n=h(825),r=h.n(n),o=h(659),a=h.n(o),i=h(56),c=h.n(i),s=h(540),u=h.n(s),d=h(113),p=h.n(d),l=h(16),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),e()(l.A,f),l.A&&l.A.locals&&l.A.locals,function(){const t=document.querySelector("body"),e=function(){const t=document.createElement("div"),e=document.createElement("button"),n=document.createElement("button"),r=document.createElement("button"),o=document.createElement("button"),a=document.createElement("button"),i=document.createElement("button");return t.setAttribute("id","sidebar"),e.setAttribute("id","addTaskBtn"),n.setAttribute("id","addProjectBtn"),r.setAttribute("id","showAllBtn"),o.setAttribute("id","showTodayBtn"),a.setAttribute("id","showUpcomingBtn"),i.setAttribute("id","showCategoryBtn"),e.textContent="+Add  Task",n.textContent="+Add  Project",r.textContent="Show All",o.textContent="Today",a.textContent="Upcoming",i.textContent="Category",t.append(e,n,r,o,a,i),t}();t.appendChild(e)}()})();