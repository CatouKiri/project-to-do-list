(()=>{"use strict";var t={16:(t,e,n)=>{n.d(e,{A:()=>c});var o=n(601),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([t.id,"body {\n    margin: 0px;\n    padding: 0px;\n}\n\n/* SIDE BAR */\n#sidebar {\n    float: left;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 20%;\n    margin: 0px;\n    height: 100%;\n    overflow: auto;\n    position: fixed;\n    box-shadow: 0px 0px 15px 0px rgb(220, 220, 220);\n    background-color: rgb(255, 248, 248);\n}\n\n#sidebar #addTaskBtn {\n    margin-top: 50px;\n}\n\n#sidebar button {\n    width: 90%;\n    padding: 10px 0px 10px 0px;\n    background-color: rgb(255, 248, 248);\n    border: 2px solid rgb(255, 248, 248);\n    cursor: pointer;\n    transition-duration: 0.4s;\n    border-radius: 10px;\n    text-decoration: underline;\n}\n\n#sidebar button:hover {\n    background-color: rgb(226, 226, 226);\n}\n\n/* TO DO CONTAIER */\n#toDoListContainer {\n    float: right;\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    margin: 0px;\n    padding: 40px 0px 0px 0px;\n    align-items: center;\n}\n\n#toDoList, #toDoProject {\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n}\n\n#toDoProject{\n    padding-bottom: 100px;\n}\n\n\n#toDoList{\n    padding-bottom: 50px;\n    padding-top: 50px;\n}\n\nh2 {\n    margin: 0px;\n    margin-left: -20px;\n    font-size:larger;\n}\n\n#toDoTable {\n    padding-top: 10px;\n}\n\ntd {\n    text-align: left;\n    border-bottom: 1px solid black;\n    padding: 5px 0px 5px 0px;\n    margin: 0px;\n    cursor: pointer;\n}\n\n#tdCheckbox {\n    width: 35px;\n}\n\n#tdCheckbox input {\n    width: 70%;\n}\n\n#tdDelete {\n    text-align: center;\n    width: 80px;\n    cursor: pointer;\n    background-image: linear-gradient(to bottom, rgba(255, 158, 158,.2), rgba(255, 158, 158,1));\n}\n\n#tdEdit {\n    text-align: center;\n    width: 80px;\n    cursor: pointer;\n    background-image: linear-gradient(to bottom, rgba(188, 255, 188, 0.2), rgba(188, 255, 188,1));\n}\n\n#tdDate {\n    text-align: center;\n    width: 100px;\n}\n\n.divProjectContainer table{\n    width: 100%;\n}\n\n.divProjectContainer{\n    padding-top: 30px;\n}\n\n.divProjectContainer div {\n    padding-top: 3px;\n}\n\n#divDescription {\n    margin: 0px;\n    padding-top: 5px;\n}\n\n#addIndividualToDoToProject, #deleteToDoToProject, #editToDoToProject {\n    margin-left: 10px;\n}\n\nimg {\n    pointer-events: none;\n}\n\n/* MODAL */\n#createModal {\n    display: none;\n    flex-direction: column;\n    position: fixed;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n#createModal > div {\n    background-color: rgb(255, 255, 255);\n    box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.2);\n    border-radius: 3%;\n    width: 20%;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\ninput {\n    box-sizing: border-box;\n    width: 100%;\n    height: 30px;\n    border-radius: 6px;\n}\n\nh3 {\n    margin: 0px;\n    margin-bottom: 15px;\n}\n\ninput {\n    margin-bottom: 5px;\n}\n\n#createModal button {\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 5px;\n    text-align: center;\n    box-sizing: border-box;\n    width: 100%;\n    height: 40px;\n    border-radius: 6px;\n}\n\n#taskSubmit {\n    margin-top: 10px;\n    background-color: rgb(158, 255, 158);\n}\n\n#cancelToDo {\n    background-color: rgb(255, 158, 158);\n}\n\n",""]);const c=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var d=0;d<t.length;d++){var s=[].concat(t[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],d=o.base?u[0]+o.base:u[0],s=a[d]||0,l="".concat(d," ").concat(s);a[d]=s+1;var m=n(l),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var u=o(t,r),d=0;d<a.length;d++){var s=n(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=u}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),o=n(825),r=n.n(o),a=n(659),i=n.n(a),c=n(56),u=n.n(c),d=n(540),s=n.n(d),l=n(113),m=n.n(l),p=n(16),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),e()(p.A,h),p.A&&p.A.locals&&p.A.locals;let f=JSON.parse(localStorage.getItem("toDoList"))||[];localStorage.getItem("toDoList")||(f=[{id:"1",title:"Bench Press",description:"Do 10 bench press with 40lbs dumbells",dueDate:"2024-07-14",completed:!1},{id:"2",title:"Sweep floor",description:"",dueDate:"2024-12-06",completed:!1}]);let g=JSON.parse(localStorage.getItem("projectToDoList"))||[];function b(t,e,n,o,r=!1){this.id=t,this.title=e,this.description=n,this.dueDate=o,this.completed=r}function y(t,e,n,o=[]){this.id=t,this.name=e,this.projectDescription=n,this.toDos=o}function w(t){for(const e of f)if(e.id==t)return{parentObject:f,targetObject:e};for(const e of g){if(e.id==t)return{parentObject:g,targetObject:e};for(const n of e.toDos)if(n.id==t)return{parentObject:e.toDos,targetObject:n}}}localStorage.getItem("projectToDoList")||(g=[{id:"8",name:"The Odin Project",projectDescription:"Finish Programming Course",toDos:[{id:"3",title:"Lesson 1",description:"What is HTML?",dueDate:"2024-06-01",completed:!1},{id:"4",title:"Lesson 2",description:"What is CSS?",dueDate:"2024-07-01",completed:!1},{id:"5",title:"Lesson 3",description:"What is Javascript?",dueDate:"2024-08-01",completed:!1}]},{id:"9",name:"5 Day Dumbell Program",projectDescription:"Exercise Program",toDos:[{id:"6",title:"Day 1",description:"Upper Body Exercise",dueDate:"2024-06-01",completed:!1},{id:"7",title:"Day 2",description:"Lower Exercise",dueDate:"2024-07-01",completed:!1}]}]);const v=n.p+"c4f0af28c10a19fbeee1.png",x=n.p+"11564642d19d1c52cd77.png",D={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function k(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const S={date:k({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:k({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:k({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},E={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(t){return(e,n)=>{let o;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;o=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;o=t.values[r]||t.values[e]}return o[t.argumentCallback?t.argumentCallback(e):e]}}const I={ordinalNumber:(t,e)=>{const n=Number(t),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function C(t){return(e,n={})=>{const o=n.width,r=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],a=e.match(r);if(!a)return null;const i=a[0],c=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(c)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let d;return d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:e.slice(i.length)}}}const P={ordinalNumber:(T={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(T.matchPattern);if(!n)return null;const o=n[0],r=t.match(T.parsePattern);if(!r)return null;let a=T.valueCallback?T.valueCallback(r[0]):r[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(o.length)}}),era:C({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:C({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:C({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:C({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var T;const j={code:"en-US",formatDistance:(t,e,n)=>{let o;const r=D[t];return o="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o},formatLong:S,formatRelative:(t,e,n,o)=>E[t],localize:I,match:P,options:{weekStartsOn:0,firstWeekContainsDate:1}};let A={};function B(){return A}Math.pow(10,8);const N=6048e5,O=864e5;function W(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function q(t){const e=W(t);return e.setHours(0,0,0,0),e}function L(t){const e=W(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function F(t){const e=W(t);return function(t,e){const n=q(t),o=q(e),r=+n-L(n),a=+o-L(o);return Math.round((r-a)/O)}(e,function(t){const e=W(t),n=Y(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function H(t,e){const n=B(),o=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=W(t),a=r.getDay(),i=(a<o?7:0)+a-o;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function $(t){return H(t,{weekStartsOn:1})}function z(t){const e=W(t),n=e.getFullYear(),o=Y(t,0);o.setFullYear(n+1,0,4),o.setHours(0,0,0,0);const r=$(o),a=Y(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=$(a);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function J(t){const e=W(t),n=+$(e)-+function(t){const e=z(t),n=Y(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),$(n)}(e);return Math.round(n/N)+1}function Q(t,e){const n=W(t),o=n.getFullYear(),r=B(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=Y(t,0);i.setFullYear(o+1,0,a),i.setHours(0,0,0,0);const c=H(i,e),u=Y(t,0);u.setFullYear(o,0,a),u.setHours(0,0,0,0);const d=H(u,e);return n.getTime()>=c.getTime()?o+1:n.getTime()>=d.getTime()?o:o-1}function G(t,e){const n=W(t),o=+H(n,e)-+function(t,e){const n=B(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=Q(t,e),a=Y(t,0);return a.setFullYear(r,0,o),a.setHours(0,0,0,0),H(a,e)}(n,e);return Math.round(o/N)+1}function X(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const R={y(t,e){const n=t.getFullYear(),o=n>0?n:1-n;return X("yy"===e?o%100:o,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):X(n+1,2)},d:(t,e)=>X(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>X(t.getHours()%12||12,e.length),H:(t,e)=>X(t.getHours(),e.length),m:(t,e)=>X(t.getMinutes(),e.length),s:(t,e)=>X(t.getSeconds(),e.length),S(t,e){const n=e.length,o=t.getMilliseconds();return X(Math.trunc(o*Math.pow(10,n-3)),e.length)}},U={G:function(t,e,n){const o=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(o,{width:"abbreviated"});case"GGGGG":return n.era(o,{width:"narrow"});default:return n.era(o,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),o=e>0?e:1-e;return n.ordinalNumber(o,{unit:"year"})}return R.y(t,e)},Y:function(t,e,n,o){const r=Q(t,o),a=r>0?r:1-r;return"YY"===e?X(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):X(a,e.length)},R:function(t,e){return X(z(t),e.length)},u:function(t,e){return X(t.getFullYear(),e.length)},Q:function(t,e,n){const o=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(o);case"QQ":return X(o,2);case"Qo":return n.ordinalNumber(o,{unit:"quarter"});case"QQQ":return n.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(o,{width:"narrow",context:"formatting"});default:return n.quarter(o,{width:"wide",context:"formatting"})}},q:function(t,e,n){const o=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(o);case"qq":return X(o,2);case"qo":return n.ordinalNumber(o,{unit:"quarter"});case"qqq":return n.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(o,{width:"narrow",context:"standalone"});default:return n.quarter(o,{width:"wide",context:"standalone"})}},M:function(t,e,n){const o=t.getMonth();switch(e){case"M":case"MM":return R.M(t,e);case"Mo":return n.ordinalNumber(o+1,{unit:"month"});case"MMM":return n.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(o,{width:"narrow",context:"formatting"});default:return n.month(o,{width:"wide",context:"formatting"})}},L:function(t,e,n){const o=t.getMonth();switch(e){case"L":return String(o+1);case"LL":return X(o+1,2);case"Lo":return n.ordinalNumber(o+1,{unit:"month"});case"LLL":return n.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(o,{width:"narrow",context:"standalone"});default:return n.month(o,{width:"wide",context:"standalone"})}},w:function(t,e,n,o){const r=G(t,o);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):X(r,e.length)},I:function(t,e,n){const o=J(t);return"Io"===e?n.ordinalNumber(o,{unit:"week"}):X(o,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):R.d(t,e)},D:function(t,e,n){const o=F(t);return"Do"===e?n.ordinalNumber(o,{unit:"dayOfYear"}):X(o,e.length)},E:function(t,e,n){const o=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},e:function(t,e,n,o){const r=t.getDay(),a=(r-o.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return X(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,o){const r=t.getDay(),a=(r-o.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return X(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const o=t.getDay(),r=0===o?7:o;switch(e){case"i":return String(r);case"ii":return X(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},a:function(t,e,n){const o=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,n){const o=t.getHours();let r;switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const o=t.getHours();let r;switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return R.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):R.H(t,e)},K:function(t,e,n){const o=t.getHours()%12;return"Ko"===e?n.ordinalNumber(o,{unit:"hour"}):X(o,e.length)},k:function(t,e,n){let o=t.getHours();return 0===o&&(o=24),"ko"===e?n.ordinalNumber(o,{unit:"hour"}):X(o,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):R.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):R.s(t,e)},S:function(t,e){return R.S(t,e)},X:function(t,e,n){const o=t.getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return K(o);case"XXXX":case"XX":return Z(o);default:return Z(o,":")}},x:function(t,e,n){const o=t.getTimezoneOffset();switch(e){case"x":return K(o);case"xxxx":case"xx":return Z(o);default:return Z(o,":")}},O:function(t,e,n){const o=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+V(o,":");default:return"GMT"+Z(o,":")}},z:function(t,e,n){const o=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+V(o,":");default:return"GMT"+Z(o,":")}},t:function(t,e,n){return X(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return X(t.getTime(),e.length)}};function V(t,e=""){const n=t>0?"-":"+",o=Math.abs(t),r=Math.trunc(o/60),a=o%60;return 0===a?n+String(r):n+String(r)+e+X(a,2)}function K(t,e){return t%60==0?(t>0?"-":"+")+X(Math.abs(t)/60,2):Z(t,e)}function Z(t,e=""){const n=t>0?"-":"+",o=Math.abs(t);return n+X(Math.trunc(o/60),2)+e+X(o%60,2)}const _=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},tt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},et={p:tt,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],o=n[1],r=n[2];if(!r)return _(t,e);let a;switch(o){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",_(o,e)).replace("{{time}}",tt(r,e))}},nt=/^D+$/,ot=/^Y+$/,rt=["D","DD","YY","YYYY"];function at(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=W(t);return!isNaN(Number(n))}const it=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ct=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ut=/^'([^]*?)'?$/,dt=/''/g,st=/[a-zA-Z]/;function lt(t){const e=t.match(ut);return e?e[1].replace(dt,"'"):t}let mt=localStorage.getItem("a")||"";function pt(t){ht(t,document.querySelector("#toDoTable"))}function ht(t,e){const n=document.createElement("tr");n.setAttribute("id",`${t.id}`);const o=document.createElement("td");o.setAttribute("id","tdCheckbox");const r=document.createElement("input");r.setAttribute("type","checkbox");const a=document.createElement("td");a.setAttribute("id","tdNameAndDescription");const i=document.createElement("div");i.setAttribute("id","divTitle");const c=document.createElement("div");c.setAttribute("id","divDescription");const u=document.createElement("td");u.setAttribute("id","tdDate");const d=document.createElement("td");d.setAttribute("id","tdEdit"),d.onclick=function(t){!function(t){let e=t.target.parentNode.getAttribute("id"),{parentObject:n,targetObject:o}=w(e);document.getElementById("taskNameInput").value=`${o.title}`,document.getElementById("taskDescriptionInput").value=`${o.description}`,document.getElementById("taskDueDateInput").value=`${o.dueDate}`,Mt(document.getElementById("createModal")),document.getElementById("cancelToDo").onclick=wt,document.getElementById("taskSubmit").onclick=function(){!function(t){const e=document.querySelector("#taskNameInput").value,n=document.querySelector("#taskDescriptionInput").value,o=document.querySelector("#taskDueDateInput").value;t.title=e,t.description=n,t.dueDate=o;Ct(document.getElementById("createModal")),Et(),function(t,e,n,o){const r=document.getElementById(t);r.querySelector("#divTitle").textContent=`${e}`;r.querySelector("#divDescription").textContent=`${n}`;r.querySelector("#tdDate").textContent=o?`${kt(o)}`:"No Due Date";let{parentObject:a,targetObject:i}=w(t);a==f?localStorage.setItem("toDoList",JSON.stringify(f)):localStorage.setItem("projectToDoList",JSON.stringify(g))}(t.id,e,n,o)}(o)}}(t)};const s=document.createElement("td");s.setAttribute("id","tdDelete"),s.onclick=function(t){yt(t.target)},e.appendChild(n).className="table-row",n.appendChild(o),o.appendChild(r),n.appendChild(a),a.appendChild(i).textContent=`${t.title}`,a.appendChild(c).textContent=`${t.description}`,t.dueDate?n.appendChild(u).textContent=`${kt(t.dueDate)}`:n.appendChild(u).textContent="No Due Date",n.appendChild(d).textContent="Edit",n.appendChild(s).textContent="Delete",Et()}function ft(t,e){const n=document.querySelector("#toDoProject"),o=document.createElement("div");o.setAttribute("class","divProjectContainer"),o.setAttribute("id",e);const r=document.createElement("div");r.setAttribute("id","divProjectName"),r.textContent=`${t.name}`;const a=document.createElement("div");a.setAttribute("id","divProjectDescription"),a.textContent=`${t.projectDescription}`;let{toDoProjectButton:i,deleteProjectButton:c,editProjectButton:u,deleteI:d,editI:s}=gt();const l=document.createElement("table");n.appendChild(o),o.appendChild(r),r.appendChild(i),r.appendChild(c),r.appendChild(u),o.appendChild(a),o.appendChild(l);for(const n of t.toDos)bt(n,e)}function gt(){const t=new Image;t.src=v,t.setAttribute("width","10px");const e=new Image;e.src=x,e.setAttribute("width","10px");const n=document.createElement("button");n.setAttribute("id","addIndividualToDoToProject"),n.textContent="+",n.onclick=function(t){!function(t){const e=t.parentNode.getAttribute("id");t.onclick=function(){!function(t){const e=document.getElementById("createModal");vt(),Mt(e),document.getElementById("cancelToDo").onclick=wt,document.getElementById("taskSubmit").onclick=function(){!function(t){let e=document.querySelector("#taskNameInput").value,n=document.querySelector("#taskDescriptionInput").value,o=document.querySelector("#taskDueDateInput").value,r=new b(mt,e,n,o);mt++,localStorage.setItem("a",mt);g.find((e=>e.id==t)).toDos.push(r),localStorage.setItem("projectToDoList",JSON.stringify(g));Ct(document.getElementById("createModal")),Et(),bt(r,t)}(t)}}(e)}}(t.target.parentNode)};const o=document.createElement("button");o.setAttribute("id","deleteToDoToProject"),o.onclick=function(t){yt(t.target.parentNode)};const r=document.createElement("button");return r.setAttribute("id","editToDoToProject"),r.onclick=function(t){!function(t){let e=t.target.parentNode.parentNode.getAttribute("id"),{parentObject:n,targetObject:o}=w(e);document.getElementById("taskNameInput").value=`${o.name}`,document.getElementById("taskDescriptionInput").value=`${o.projectDescription}`,It(document.getElementById("createModal")),document.getElementById("cancelToDo").onclick=wt,document.getElementById("taskSubmit").onclick=function(){!function(t){const e=document.querySelector("#taskNameInput").value,n=document.querySelector("#taskDescriptionInput").value;t.name=e,t.projectDescription=n;Ct(document.getElementById("createModal")),Et(),function(t,e,n){const o=document.getElementById(t),r=o.querySelector("#divProjectName");r.textContent=`${e}`;o.querySelector("#divProjectDescription").textContent=`${n}`;let{toDoProjectButton:a,deleteProjectButton:i,editProjectButton:c}=gt();r.appendChild(a),r.appendChild(i),r.appendChild(c),localStorage.setItem("projectToDoList",JSON.stringify(g))}(t.id,e,n)}(o)}}(t)},o.appendChild(t),r.appendChild(e),{toDoProjectButton:n,deleteProjectButton:o,editProjectButton:r}}function bt(t,e){ht(t,document.getElementById(e).lastElementChild)}function yt(t){let e=t.parentNode.getAttribute("id"),{parentObject:n,targetObject:o}=w(e);n.splice(n.indexOf(o),1),n==f?localStorage.setItem("toDoList",JSON.stringify(f)):localStorage.setItem("projectToDoList",JSON.stringify(g)),t.parentNode.remove()}function wt(){const t=document.getElementById("createModal");Et(),Ct(t)}function vt(){document.getElementById("taskSubmit").setAttribute("disabled","")}function xt(){const t=document.getElementById("taskSubmit");t.removeAttribute("disabled"),""!==taskNameInput.value.trim()?t.removeAttribute("disabled"):t.setAttribute("disabled","")}function Dt(){const t=document.querySelector("#taskNameInput").value,e=document.querySelector("#taskDescriptionInput").value,n=document.querySelector("#taskDueDateInput").value,o=new b(mt,t,e,n);mt++,localStorage.setItem("a",mt),f.push(o);const r=document.getElementById("createModal");localStorage.setItem("toDoList",JSON.stringify(f)),Ct(r),Et(),pt(o)}function kt(t){const e=t.split("-");return function(t,e,n){const o=B(),r=n?.locale??o.locale??j,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,c=W(t);if(!at(c))throw new RangeError("Invalid time value");let u=e.match(ct).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,et[e])(t,r.formatLong):t})).join("").match(it).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:lt(t)};if(U[e])return{isToken:!0,value:t};if(e.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));r.localize.preprocessor&&(u=r.localize.preprocessor(c,u));const d={firstWeekContainsDate:a,weekStartsOn:i,locale:r};return u.map((o=>{if(!o.isToken)return o.value;const a=o.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return ot.test(t)}(a)||!n?.useAdditionalDayOfYearTokens&&function(t){return nt.test(t)}(a))&&function(t,e,n){const o=function(t,e,n){const o="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(o),rt.includes(t))throw new RangeError(o)}(a,e,String(t)),(0,U[a[0]])(c,a,r.localize,d)})).join("")}(new Date(e[0],""+(e[1]-1),e[2]),"MMM. dd, yyyy")}function St(){let t=document.querySelector("#taskNameInput").value,e=document.querySelector("#taskDescriptionInput").value,n=new y(mt,t,e);mt++,localStorage.setItem("a",mt),g.push(n),localStorage.setItem("projectToDoList",JSON.stringify(g)),Ct(document.getElementById("createModal")),Et(),ft(n,n.id)}function Et(){let t=document.getElementById("taskNameInput"),e=document.getElementById("taskDescriptionInput"),n=document.getElementById("taskDueDateInput");t.value="",e.value="",n.value=""}function Mt(t){document.getElementById("taskDueDateInput").style.display="inline-block",t.style.display="flex"}function It(t){document.getElementById("taskDueDateInput").style.display="none",t.style.display="flex"}function Ct(t){t.style.display="none",document.getElementById("taskSubmit").removeAttribute("disabled")}localStorage.getItem("a")||(mt=10,localStorage.setItem("a",mt)),function(){const t=document.querySelector("body"),e=function(){const t=document.createElement("div");t.setAttribute("id","sidebar");const e=document.createElement("button");e.setAttribute("id","addTaskBtn"),e.textContent="+Add  Task";const n=document.createElement("button");return n.setAttribute("id","addProjectBtn"),n.textContent="+Add  Project",t.append(e,n),t}(),n=function(){const t=document.createElement("div");t.setAttribute("id","createModal");const e=document.createElement("div"),n=document.createElement("form");n.setAttribute("id","taskForm");const o=document.createElement("h3");o.textContent="Add To Do";const r=document.createElement("input");r.setAttribute("id","taskNameInput"),r.setAttribute("type","text"),r.setAttribute("placeholder","Task Name"),r.setAttribute("onkeyup","enableSubmitButton()");const a=document.createElement("input");a.setAttribute("id","taskDescriptionInput"),a.setAttribute("type","text"),a.setAttribute("placeholder","Description");const i=document.createElement("input");i.setAttribute("id","taskDueDateInput"),i.setAttribute("type","date");const c=document.createElement("button");c.setAttribute("id","taskSubmit"),c.setAttribute("type","submit");const u=document.createElement("button");return u.setAttribute("id","cancelToDo"),u.setAttribute("type","button"),c.textContent="Submit",u.textContent="Cancel",t.append(e),e.append(n,o,r,a,i,c,u),r.addEventListener("keyup",xt),t}(),o=function(){const t=document.createElement("div");t.setAttribute("id","toDoListContainer");const e=document.createElement("div");e.setAttribute("id","toDoList");const n=document.createElement("table");n.setAttribute("id","toDoTable");const o=document.createElement("div");o.setAttribute("id","toDoProject");const r=document.createElement("h2");r.textContent="TO DOs";const a=document.createElement("h2");return a.textContent="PROJECTS",t.append(e,o),e.append(r),o.append(a),e.append(n),t}();t.append(e,n,o)}(),document.getElementById("addTaskBtn").onclick=function(){const t=document.getElementById("createModal");vt(),Mt(t),document.getElementById("cancelToDo").onclick=wt,document.getElementById("taskSubmit").onclick=Dt},document.getElementById("addProjectBtn").onclick=function(){const t=document.getElementById("createModal");vt(),It(t),document.getElementById("cancelToDo").onclick=wt,document.getElementById("taskSubmit").onclick=St},function(){for(const t of f)pt(t)}(),function(){for(const t of g)ft(t,t.id)}()})()})();