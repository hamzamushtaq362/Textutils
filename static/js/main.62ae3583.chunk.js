(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(13),a(1));a(15);function s(e){return e.alert&&l.a.createElement("div",{class:"alert alert-".concat(e.alert.type),role:"alert"},l.a.createElement("strong",null,e.alert.type," ")," : ",e.alert.msg)}function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/About"},e.about))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toogleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark mode")),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input mx-1",onClick:e.toogleGreenMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Green mode")))))}function i(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:c,style:{backgroundColor:"light"===e.mode?"white":"#121a3c"},onChange:function(e){console.log("on change"),r(e.target.value)},id:"mybox",rows:"8"}),l.a.createElement("button",{className:"btn btn-primary my-3 mx-1",onClick:function(){var t=c.toUpperCase();r(t),e.showalert("converted to upperCase","success")}},"Click to upper"),l.a.createElement("button",{className:"btn btn-primary my-3 mx-1",onClick:function(){var t=c.toLowerCase();r(t),e.showalert("converted to LowerCase","success")}},"Click to lower"),l.a.createElement("button",{className:"btn btn-primary my-3\r mx-1",onClick:function(){r(" "),e.showalert("Screen Claered","success")}},"Click Clear"),l.a.createElement("button",{className:"btn btn-primary my-3 mx-1",onClick:function(){var t=c.split("").reverse().join("");r(t),e.showalert("converted to Inverse","success")}},"Click inversse"))),l.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h1",null,"Your Text"),l.a.createElement("p",null,"Total Words ",c.split(" ").length," Characters ",c.length),l.a.createElement("p",null,.008*c.split(" ").length," Time "),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,c.length>0?c:"Enter Text to continue")))}m.defaultProps={title:"Deafault Navbar"};var u=function(){var e=function(e,t){h({msg:e,type:t}),setTimeout(function(){h(null)},1e3)},t=Object(n.useState)("light"),a=Object(o.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(null),d=Object(o.a)(u,2),b=d[0],h=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"Navbar",about:"About US",mode:c,toogleMode:function(){"light"===c?(r("dark"),document.body.style.backgroundColor="#121a3c",e("Dark Mode Enabbled","success")):(r("light"),document.body.style.backgroundColor="white",e("Light Mode Enabbled","success"))},toogleGreenMode:function(){"light"===c?(r("dark"),document.body.style.backgroundColor="#236c23",e("Dark Mode Enabbled","success")):(r("light"),document.body.style.backgroundColor="white",e("Light Mode Enabbled","success"))}}),l.a.createElement(s,{alert:b}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{showalert:e,heading:"Please type here",mode:c})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.62ae3583.chunk.js.map