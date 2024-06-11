(()=>{"use strict";var t={16:(t,e,n)=>{n.d(e,{A:()=>d});var o=n(601),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([t.id,"body {\n    margin: 0px;\n    padding: 0px;\n}\n\n/* SIDE BAR */\n#sidebar {\n    float: left;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 20%;\n    margin: 0px;\n    height: 100vh;\n    box-shadow: 0px 0px 15px 0px rgb(220, 220, 220);\n    background-color: rgb(255, 248, 248);\n}\n\n#sidebar #addTaskBtn {\n    margin-top: 50px;\n}\n\n#sidebar button {\n    width: 90%;\n    padding: 10px 0px 10px 0px;\n    background-color: rgb(255, 248, 248);\n    border: 2px solid rgb(255, 248, 248);\n    cursor: pointer;\n    transition-duration: 0.4s;\n    border-radius: 10px;\n    text-decoration: underline;\n}\n\n#sidebar button:hover {\n    background-color: rgb(226, 226, 226);\n}\n\n/* TO DO CONTAIER */\n#toDoListContainer {\n    float: right;\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    margin: 0px;\n    padding: 40px 0px 0px 0px;\n    align-items: center;\n}\n\n#toDoList, #toDoProject {\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    padding-top: 50px;\n}\n\nh2 {\n    margin: 0px;\n    margin-left: -20px;\n    font-size:larger;\n}\n\n#toDoTable {\n    padding-top: 10px;\n}\n\ntd {\n    text-align: left;\n    border-bottom: 1px solid black;\n    padding: 5px 0px 5px 0px;\n    margin: 0px;\n    cursor: pointer;\n}\n\n#tdCheckbox {\n    width: 35px;\n}\n\n#tdCheckbox input {\n    width: 70%;\n}\n\n#tdDelete {\n    text-align: center;\n    width: 80px;\n    cursor: pointer;\n    background-image: linear-gradient(to bottom, rgba(255, 158, 158,.2), rgba(255, 158, 158,1));\n}\n\n#tdEdit {\n    text-align: center;\n    width: 80px;\n    cursor: pointer;\n    background-image: linear-gradient(to bottom, rgba(188, 255, 188, 0.2), rgba(188, 255, 188,1));\n}\n\n#tdDate {\n    text-align: center;\n    width: 100px;\n}\n\n.divProjectContainer table{\n    width: 100%;\n}\n\n.divProjectContainer{\n    padding-top: 30px;\n}\n\n#divDescription {\n    margin: 0px;\n    padding-top: 5px;\n}\n\n#addIndividualToDoToProject {\n    margin-left: 10px;\n}\n\n/* MODAL */\n#createModal {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n#createModal > div {\n    background-color: rgb(255, 255, 255);\n    box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.2);\n    border-radius: 3%;\n    width: 20%;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\ninput {\n    box-sizing: border-box;\n    width: 100%;\n    height: 30px;\n    border-radius: 6px;\n}\n\nh3 {\n    margin: 0px;\n    margin-bottom: 15px;\n}\n\ninput {\n    margin-bottom: 5px;\n}\n\n#createModal button {\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 5px;\n    text-align: center;\n    box-sizing: border-box;\n    width: 100%;\n    height: 40px;\n    border-radius: 6px;\n}\n\n#taskSubmit {\n    margin-top: 10px;\n    background-color: rgb(158, 255, 158);\n}\n\n#cancelToDo {\n    background-color: rgb(255, 158, 158);\n}\n\n",""]);const d=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],d=0;d<t.length;d++){var c=t[d],s=o.base?c[0]+o.base:c[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var p=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var b=r(m,o);o.byIndex=d,e.splice(d,0,{identifier:l,updater:b,references:1})}a.push(l)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var d=n(i[a]);e[d].references--}for(var c=o(t,r),s=0;s<i.length;s++){var u=n(i[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=c}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),o=n(825),r=n.n(o),i=n(659),a=n.n(i),d=n(56),c=n.n(d),s=n(540),u=n.n(s),l=n(113),p=n.n(l),m=n(16),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=u(),e()(m.A,b),m.A&&m.A.locals&&m.A.locals;const f=[{id:"1",title:"Bench Press",description:"Do 10 bench press with 40lbs dumbells",dueDate:"12-31-2024",completed:!1},{id:"2",title:"Sweep floor",description:"",dueDate:"07-14-2024",completed:!1}],x=[{id:"8",name:"The Odin Project",projectDescription:"Finish Programming Course",toDos:[{id:"3",title:"Lesson 1",description:"What is HTML?",dueDate:"06-01-2024",completed:!1},{id:"4",title:"Lesson 2",description:"What is CSS?",dueDate:"07-01-2024",completed:!1},{id:"5",title:"Lesson 3",description:"What is Javascript?",dueDate:"08-01-2024",completed:!1}]},{id:"9",name:"5 Day Dumbell Program",projectDescription:"Exercise Program",toDos:[{id:"6",title:"Day 1",description:"Upper Body Exercise",dueDate:"06-01-2024",completed:!1},{id:"7",title:"Day 2",description:"Lower Exercise",dueDate:"07-01-2024",completed:!1}]}];function g(t,e,n,o){this.id=t,this.title=e,this.description=n,this.dueDate=o}let h=8;function v(t){y(t,document.querySelector("#toDoTable"))}function y(t,e){const n=document.createElement("tr");n.setAttribute("id",`${t.id}`);const o=document.createElement("td");o.setAttribute("id","tdCheckbox");const r=document.createElement("input");r.setAttribute("type","checkbox");const i=document.createElement("td"),a=document.createElement("div");a.setAttribute("id","divDescription");const d=document.createElement("td");d.setAttribute("id","tdDate");const c=document.createElement("td");c.setAttribute("id","tdEdit");const s=document.createElement("td");s.setAttribute("id","tdDelete"),s.onclick=function(t){!function(t){let e=t.target.parentNode.getAttribute("id"),{parentObject:n,targetObject:o}=function(t){for(const e of f)if(e.id==t)return{parentObject:f,targetObject:e};for(const e of x){if(e.id==t)return{parentObject:x,targetObject:e};for(const n of e.toDos)if(n.id==t)return{parentObject:e.toDos,targetObject:n}}}(e);n.splice(n.indexOf(o),1),console.log(f),t.target.parentNode.remove()}(t)},e.appendChild(n).className="table-row",n.appendChild(o),o.appendChild(r),n.appendChild(i).textContent=`${t.title}`,i.appendChild(a).textContent=`${t.description}`,n.appendChild(d).textContent=`${t.dueDate}`,n.appendChild(c).textContent="Edit",n.appendChild(s).textContent="Delete",function(){let t=document.getElementById("taskNameInput"),e=document.getElementById("taskDescriptionInput"),n=document.getElementById("taskDueDateInput");t.value="",e.value="",n.value=""}()}function D(t,e){const n=document.querySelector("#toDoProject"),o=document.createElement("div");o.setAttribute("class","divProjectContainer"),o.setAttribute("id",e);const r=document.createElement("button");r.setAttribute("id","addIndividualToDoToProject"),r.textContent="+",r.onclick=function(t){!function(t){console.log("add todo inside the project"+t.target.getAttribute("id"))}(t)};const i=document.createElement("table");o.textContent=`${t.name}`,n.appendChild(o),o.appendChild(r),o.appendChild(i);for(const n of t.toDos)A(n,e)}function A(t,e){y(t,document.getElementById(e).lastElementChild)}function E(){const t=document.getElementById("taskSubmit");t.removeAttribute("disabled"),""!==taskNameInput.value.trim()?t.removeAttribute("disabled"):t.setAttribute("disabled","")}!function(){const t=document.querySelector("body"),e=function(){const t=document.createElement("div");t.setAttribute("id","sidebar");const e=document.createElement("button");e.setAttribute("id","addTaskBtn"),e.textContent="+Add  Task";const n=document.createElement("button");return n.setAttribute("id","addProjectBtn"),n.textContent="+Add  Project",t.append(e,n),t}(),n=function(){const t=document.createElement("div");t.setAttribute("id","createModal");const e=document.createElement("div"),n=document.createElement("form");n.setAttribute("id","taskForm");const o=document.createElement("h3");o.textContent="Add To Do";const r=document.createElement("input");r.setAttribute("id","taskNameInput"),r.setAttribute("type","text"),r.setAttribute("placeholder","Task Name"),r.setAttribute("onkeyup","enableSubmitButton()");const i=document.createElement("input");i.setAttribute("id","taskDescriptionInput"),i.setAttribute("type","text"),i.setAttribute("placeholder","Description");const a=document.createElement("input");a.setAttribute("id","taskDueDateInput"),a.setAttribute("type","text"),a.setAttribute("placeholder","Due Date");const d=document.createElement("button");d.setAttribute("id","taskSubmit"),d.setAttribute("type","submit"),d.setAttribute("disabled","");const c=document.createElement("button");return c.setAttribute("id","cancelToDo"),c.setAttribute("type","button"),d.textContent="Submit",c.textContent="Cancel",t.append(e),e.append(n,o,r,i,a,d,c),r.addEventListener("keyup",E),t}(),o=function(){const t=document.createElement("div");t.setAttribute("id","toDoListContainer");const e=document.createElement("div");e.setAttribute("id","toDoList");const n=document.createElement("table");n.setAttribute("id","toDoTable");const o=document.createElement("div");o.setAttribute("id","toDoProject");const r=document.createElement("h2");r.textContent="TO DOs";const i=document.createElement("h2");return i.textContent="PROJECTS",t.append(e,o),e.append(r),o.append(i),e.append(n),t}();t.append(e,n,o)}(),function(){const t=document.getElementById("addTaskBtn"),e=document.getElementById("createModal");t.onclick=function(){e.style.display="flex",document.getElementById("cancelToDo").onclick=function(){e.style.display="none"},document.getElementById("taskSubmit").onclick=function(){let t=document.querySelector("#taskNameInput").value,n=document.querySelector("#taskDescriptionInput").value,o=document.querySelector("#taskDueDateInput").value,r=new g(h,t,n,o);h++,f.push(r),e.style.display="none",v(r)}}}(),function(){for(const t of f)v(t)}(),function(){for(const t of x)D(t,h),h++}()})()})();