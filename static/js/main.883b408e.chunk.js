(this.webpackJsonpvivek=this.webpackJsonpvivek||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(5),s=a.n(r),l=(a(10),a(2)),o=(a(11),a(0));var i=a(4),d=a.n(i);function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.Mode," bg-").concat(e.Mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.Mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.Mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"myBox",value:n,style:{backgroundColor:"dark"===e.Mode?"grey":"white",color:"dark"===e.Mode?"white":"#042743"},onChange:function(e){r(e.target.value)},rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("converted to uppercase !","success")},children:"Convert to uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("converted to lowercase !","success")},children:"Convert to lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r("   "),e.showAlert("text cleared !","success")},children:"clear text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("text copied !","success")},children:"copy text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);r(t.join(" ")),e.showAlert("extra spaces are removed !","success")},children:"Remove extra spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.Mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," character"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length,"minutes to read"]}),Object(o.jsx)("h2",{children:"preview"}),Object(o.jsx)("p",{children:n.length>0?n:"enter your text first"})]})]})}b.prototype={title:d.a.string,aboutText:d.a.string};var j=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),i=s[0],d=s[1],u=function(e,t){d({msg:e,type:t}),setTimeout((function(){d(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"Cyphon-Tech",aboutText:"About",Mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",u("dark mode is enabled","success"),document.title="cyphon-tech-dark"):(n("light"),document.body.style.backgroundColor="white",u("light mode is enabled","success"),document.title="cyphon-tech-light")}}),Object(o.jsx)(j,{alert:i}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(h,{showAlert:u,heading:"enter text",Mode:a})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.883b408e.chunk.js.map