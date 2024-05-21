(()=>{"use strict";var t={16:(t,e,n)=>{n.d(e,{A:()=>c});var o=n(601),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([t.id,"body {\n    margin: 0px;\n    padding: 0px;\n}\n\n/* SIDE BAR */\n#sidebar {\n    float: left;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 20%;\n    margin: 0px;\n    height: 100vh;\n    box-shadow: 0px 0px 15px 0px rgb(220, 220, 220);\n    background-color: rgb(255, 248, 248);\n}\n\n#sidebar #addTaskBtn {\n    margin-top: 50px;\n}\n\n#sidebar button {\n    width: 90%;\n    padding: 10px 0px 10px 0px;\n    background-color: rgb(255, 248, 248);\n    border: 2px solid rgb(255, 248, 248);\n    cursor: pointer;\n    transition-duration: 0.4s;\n    border-radius: 10px;\n    text-decoration: underline;\n}\n\n#sidebar button:hover {\n    background-color: rgb(226, 226, 226);\n}\n\n/* TO DO CONTAIER */\n#toDoListContainer {\n    float: right;\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    margin: 0px;\n    padding: 40px 0px 0px 0px;\n    align-items: center;\n}\n\n#toDoList, #toDoProject {\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    padding-top: 50px;\n}\n\ntd {\n    text-align: left;\n    border-bottom: 1px solid black;\n    padding: 5px 0px 5px 0px;\n    margin: 0px;\n}\n\n#tdCheckbox {\n    margin-right: -12px;\n}\n\n#tdDelete {\n    text-align: center;\n    width: 80px;\n}\n#tdEdit {\n    text-align: center;\n    width: 80px;\n}\n\n#tdDate {\n    text-align: center;\n    width: 100px;\n}\n\n#toDoProject div table{\n    width: 100%;\n}\n\n#toDoProject div{\n    /* background-color: red; */\n    padding-top: 30px;\n}\n\n/* MODAL */\n#createTask {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n",""]);const c=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var d=t[c],s=o.base?d[0]+o.base:d[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var p=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var b=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:b,references:1})}a.push(l)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var d=o(t,r),s=0;s<i.length;s++){var u=n(i[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=d}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),o=n(825),r=n.n(o),i=n(659),a=n.n(i),c=n(56),d=n.n(c),s=n(540),u=n.n(s),l=n(113),p=n.n(l),m=n(16),b={};b.styleTagTransform=p(),b.setAttributes=d(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=u(),e()(m.A,b),m.A&&m.A.locals&&m.A.locals;const f=[{title:"Bench Press",description:"Do 10 bench press with 40lbs dumbells",dueDate:"12-31-2024",completed:!1},{title:"Sweep floor",description:"",dueDate:"07-14-2024",completed:!1}],x=[{name:"The Odin Project",projectDescription:"Finish Programming Course",toDos:[{title:"Lesson 1",description:"What is HTML?",dueDate:"06-01-2024",completed:!1},{title:"Lesson 2",description:"What is CSS?",dueDate:"07-01-2024",completed:!1},{title:"Lesson 3",description:"What is Javascript?",dueDate:"08-01-2024",completed:!1}]},{name:"5 Day Dumbell Program",projectDescription:"Exercise Program",toDos:[{title:"Day 1",description:"Upper Body Exercise",dueDate:"06-01-2024",completed:!1},{title:"Day 2",description:"Lower Exercise",dueDate:"07-01-2024",completed:!1}]}];function h(t){g(t,document.querySelector("#toDoTable"))}function g(t,e){const n=document.createElement("tr"),o=document.createElement("td"),r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("id","tdCheckbox");const i=document.createElement("td"),a=document.createElement("td");a.setAttribute("id","tdDate");const c=document.createElement("td");c.setAttribute("id","tdEdit");const d=document.createElement("td");d.setAttribute("id","tdDelete"),e.appendChild(n).className="table-row",n.appendChild(o),o.appendChild(r),n.appendChild(i).textContent=`${t.title}`,n.appendChild(a).textContent=`${t.dueDate}`,n.appendChild(c).textContent="Edit",n.appendChild(d).textContent="Delete"}function v(t,e){const n=document.querySelector("#toDoProject"),o=document.createElement("div"),r=document.createElement("table");r.setAttribute("id","table-"+e),o.textContent=`${t.name}`,n.appendChild(o),o.appendChild(r);for(const n of t.toDos)y(n,e)}function y(t,e){g(t,document.querySelector("#table-"+e))}!function(){const t=document.querySelector("body"),e=function(){const t=document.createElement("div"),e=document.createElement("button"),n=document.createElement("button"),o=document.createElement("button"),r=document.createElement("button"),i=document.createElement("button"),a=document.createElement("button");return t.setAttribute("id","sidebar"),e.setAttribute("id","addTaskBtn"),n.setAttribute("id","addProjectBtn"),o.setAttribute("id","showAllBtn"),r.setAttribute("id","showTodayBtn"),i.setAttribute("id","showUpcomingBtn"),a.setAttribute("id","showCategoryBtn"),e.textContent="+Add  Task",n.textContent="+Add  Project",o.textContent="Show All",r.textContent="Today",i.textContent="Upcoming",a.textContent="Category",t.append(e,n,o,r,i,a),t}(),n=function(){const t=document.createElement("div"),e=document.createElement("form"),n=document.createElement("input"),o=document.createElement("input"),r=document.createElement("button"),i=document.createElement("button");return t.setAttribute("id","createTask"),e.setAttribute("id","taskForm"),n.setAttribute("id","taskNameInput"),n.setAttribute("type","text"),n.setAttribute("placeholder","Task Name"),o.setAttribute("id","taskDescriptionInput"),o.setAttribute("type","text"),o.setAttribute("placeholder","Description"),r.setAttribute("id","taskSubmit"),r.setAttribute("type","submit"),i.setAttribute("id","cancelToDo"),i.setAttribute("type","button"),r.textContent="Submit",i.textContent="Cancel",t.append(e,n,o,r,i),t}(),o=function(){const t=document.createElement("div"),e=document.createElement("div"),n=document.createElement("table"),o=document.createElement("div");return t.setAttribute("id","toDoListContainer"),e.setAttribute("id","toDoList"),n.setAttribute("id","toDoTable"),o.setAttribute("id","toDoProject"),e.textContent="TO DOs",o.textContent="PROJECTS",t.append(e,o),e.append(n),t}();t.append(e,n,o)}(),function(){const t=document.getElementById("addTaskBtn"),e=document.getElementById("createTask");t.onclick=function(){e.style.display="flex",document.getElementById("cancelToDo").onclick=function(){e.style.display="none"};const t=document.getElementById("taskSubmit"),n=document.getElementById("taskDescriptionInput"),o=document.getElementById("taskNameInput");t.onclick=function(){""===o.value?alert("input task name"):(n.value,o.value)}}}(),function(){for(const t of f)h(t)}(),function(){let t=1;for(const e of x)v(e,t),t++}(),console.log(f),console.log(x)})()})();