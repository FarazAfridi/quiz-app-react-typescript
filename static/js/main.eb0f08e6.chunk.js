(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(15),n(2)),s=n(3),l=n.n(s),u=n(6),p=n(1),m=(n(17),n(9)),f=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://opentdb.com/api.php/?amount=".concat(t,"&difficulty=").concat(n,"&type=multiple"),e.next=3,fetch(a);case 3:return e.next=5,e.sent.json();case 5:return r=e.sent,e.abrupt("return",r.results.map((function(e){return Object(m.a)({},e,{answers:(t=[].concat(Object(i.a)(e.incorrect_answers),[e.correct_answer]),Object(i.a)(t).sort((function(){return Math.random()-.5})))});var t})));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=(n(18),function(e){var t=e.question,n=e.answers,r=e.callback,o=e.UserAnswer,c=e.questionNr,i=e.totalQuestions,s=e.score;return a.createElement("div",{className:"container"},a.createElement("p",{className:"score"},"Score: ",s),a.createElement("p",{className:"number"},"Question: ",c," / ",i),a.createElement("p",{className:"question"},t),a.createElement("div",{className:"quiz_answer"},n.map((function(e){return a.createElement("div",{key:e},a.createElement("button",{className:"answer",disabled:!!o,value:e,onClick:r},a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))}))))}),v=function(){var e="easy",t=Object(a.useState)(!1),n=Object(p.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)([]),m=Object(p.a)(s,2),v=m[0],b=m[1],h=Object(a.useState)(0),w=Object(p.a)(h,2),g=w[0],E=w[1],j=Object(a.useState)([]),y=Object(p.a)(j,2),O=y[0],k=y[1],S=Object(a.useState)(0),N=Object(p.a)(S,2),x=N[0],q=N[1],A=Object(a.useState)(!0),z=Object(p.a)(A,2),C=z[0],W=z[1],_=Object(a.useState)(5),T=Object(p.a)(_,2),Q=T[0],U=T[1];console.log(v);var L=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),W(!1),t.next=4,f(Q,e);case 4:n=t.sent,b(n),q(0),k([]),E(0),c(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"".concat(C?"main_container":null)},r.a.createElement("h1",null,"React Quiz"),C||O.length===Q?r.a.createElement("div",null,r.a.createElement("select",{style:{width:"50%",marginTop:"30px",fontSize:"20px"},onChange:function(t){return e=t.currentTarget.value,void W(!0)}},r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard")),r.a.createElement("br",null),r.a.createElement("select",{style:{width:"50%",margin:"20px 0",fontSize:"20px"},onChange:function(e){return U(Number(e.currentTarget.value)),W(!0),void console.log(Q)}},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"20"},"20")),r.a.createElement("br",null),r.a.createElement("button",{className:"btn",onClick:L},"Start")):null,o?r.a.createElement("p",null,"Loading Questions..."):null,!o&&!C&&r.a.createElement(d,{questionNr:g+1,totalQuestions:Q,question:v[g].question,answers:v[g].answers,UserAnswer:O?O[g]:void 0,callback:function(e){if(!C){var t=e.currentTarget.value,n=v[g].correct_answer===t;n&&q((function(e){return e+1}));var a={question:v[g].question,answer:t,correct:n,correctAnswer:v[g].correct_answer};k((function(e){return[].concat(Object(i.a)(e),[a])}))}},score:x}),C||o||O.length!==g+1?null:r.a.createElement("button",{className:"btn",onClick:function(){var e=g+1;e===Q?W(!0):E(e)}},"Next Question"))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/FarazAfridi/quiz-app-react-typescript",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/FarazAfridi/quiz-app-react-typescript","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.eb0f08e6.chunk.js.map