(this["webpackJsonpdocker-react-app"]=this["webpackJsonpdocker-react-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(9),n(10),n(11),n(1)),l=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(1),u=Object(i.a)(l,2),s=u[0],m=u[1];return Object(a.useEffect)((function(){fetch("http://java_service:8081/api/persons/").then((function(e){return e.json()})).then((function(e){return function(e){r(e)}(e)}))}),[s]),o.a.createElement("div",null,o.a.createElement("h4",null," From My Component ",c.map((function(e){return e.firstName}))," "),o.a.createElement("button",{onClick:function(){m(s+1)}},"Reload"))};var u=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null," Hello World..."),o.a.createElement(l,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.74c01180.chunk.js.map