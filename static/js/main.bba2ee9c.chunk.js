(this["webpackJsonppwa-cra"]=this["webpackJsonppwa-cra"]||[]).push([[0],{11:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),r=t(5),a=t.n(r),s=(t(11),t(4)),i=t.n(s),l=t(2),u=t(6),d=(t(13),t(0)),f=new BroadcastChannel("channel-123"),p=function(){var e=Object(o.useState)(""),n=Object(l.a)(e,2),t=n[0],c=n[1];return f.onmessage=function(e){c(e.data.msg),console.log(e.data.msg)},Object(d.jsx)("p",{style:{color:"red",fontSize:"14px"},children:t})},h=new BroadcastChannel("channel-123"),j=function(e){var n=e.sampleApi,t=Object(o.useRef)(null);function c(e){console.log(e),h.postMessage({type:"MSG_ID",msg:e})}return Object(d.jsxs)("form",{ref:t,onSubmit:function(e){e.preventDefault(),console.log("form image: ",t.current.avatar.value);var o=new XMLHttpRequest;o.addEventListener("progress",(function(e){if(e.lengthComputable){var n=e.loaded/e.total*100;c("upload progress: ".concat(n,"%"))}else console.log("not able to show progress")})),o.addEventListener("load",(function(e){c("The transfer is complete."),console.log("response: ",o.response)})),o.addEventListener("error",(function(e){c("connection error. transfer will continue after connectivity is restored.")})),o.addEventListener("abort",(function(e){c("The transfer has been canceled by the user.")})),o.open("POST",n,!0),o.onreadystatechange=function(e){4===o.readyState&&(201===o.status?c("connection ok"):c("connection error"))},o.send(t.current)},children:[Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Upload image "}),Object(d.jsx)("input",{type:"file",name:"avatar"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"First Name "}),Object(d.jsx)("input",{type:"text",name:"first_name"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Last Name "}),Object(d.jsx)("input",{type:"text",name:"last_name"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Email "}),Object(d.jsx)("input",{type:"email",name:"email"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit",value:"Submit"}),Object(d.jsx)(p,{})]})},b=function(){var e=Object(o.useState)(""),n=Object(l.a)(e,2),t=n[0],c=n[1];function r(){var e=new XMLHttpRequest;e.open("GET","https://weatherapi-com.p.rapidapi.com/forecast.json?q=tehran&days=3"),e.onreadystatechange=function(n){4===e.readyState&&c(0===e.status?"You're offline":"You're online")},e.send()}return Object(o.useEffect)((function(){r()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:r,children:"check connection"}),Object(d.jsx)("p",{style:{color:"red",fontSize:"14px"},children:t})]})},g="https://reqres.in/api/users";function v(){return(v=Object(u.a)(i.a.mark((function e(n){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.caches.open("response-cache");case 2:return t=e.sent,e.next=5,t.addAll(n);case 5:console.log("added cache",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e){e.broadcast;var n=Object(o.useState)([]),t=Object(l.a)(n,2),c=t[0],r=t[1];return Object(o.useEffect)((function(){fetch(g).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)(b,{}),Object(d.jsx)("p",{children:c&&JSON.stringify(c)}),Object(d.jsx)("button",{onClick:function(){return function(e){return v.apply(this,arguments)}([g])},children:"Register Router"}),Object(d.jsx)(j,{sampleApi:g})]})})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),o(e),c(e),r(e),a(e)}))},y=new BroadcastChannel("channel-123");a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{broadcast:y})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(n,e)}))}}({onSuccess:function(e){console.log("success",e)}}),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.bba2ee9c.chunk.js.map