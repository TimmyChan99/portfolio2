(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],Array(24).concat([function(e,t,a){e.exports=a.p+"static/media/resume.456f830f.pdf"},function(e,t,a){e.exports=a(57)},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/cyw-demo.9b375ad4.gif"},function(e,t,a){e.exports=a.p+"static/media/rentar.6edd923d.gif"},function(e,t,a){e.exports=a.p+"static/media/insights.b7db9697.gif"},function(e,t,a){e.exports=a.p+"static/media/budgetDemo2.f8a3b9f2.gif"},function(e,t,a){e.exports=a.p+"static/media/covid19-2.e33ece5a.png"},function(e,t,a){e.exports=a.p+"static/media/space.83708966.gif"},function(e,t,a){e.exports=a.p+"static/media/js.f4a6d54d.svg"},function(e,t,a){e.exports=a.p+"static/media/ruby.c500ee21.svg"},function(e,t,a){e.exports=a.p+"static/media/html.ec97eac0.svg"},function(e,t,a){e.exports=a.p+"static/media/css.9b83a38d.svg"},function(e,t,a){e.exports=a.p+"static/media/sql.45ea7b7e.svg"},function(e,t,a){e.exports=a.p+"static/media/react.7fa4b1f4.svg"},function(e,t,a){e.exports=a.p+"static/media/rails.666a2584.svg"},function(e,t,a){e.exports=a.p+"static/media/redux.b5d84fde.svg"},function(e,t,a){e.exports=a.p+"static/media/jest.6ff75b2e.svg"},function(e,t,a){e.exports=a.p+"static/media/swagger.d6b102ad.svg"},function(e,t,a){e.exports=a.p+"static/media/capybara.803238c0.svg"},function(e,t,a){e.exports=a.p+"static/media/github.6394e623.svg"},function(e,t,a){e.exports=a.p+"static/media/git.5a42d3af.svg"},function(e,t,a){e.exports=a.p+"static/media/postgresql.7f91c2dc.svg"},function(e,t,a){e.exports=a.p+"static/media/sass.b24b0d62.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),i=a(21),n=a.n(i),c=a(9),o=a(5),s=a(3),m=function(e){var t=e.component,a=e.layout,r=Object(s.a)(e,["component","layout"]);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(c.a,Object.assign({},r,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},d=a(10),u=a(2),v=a.n(u),p=a(17),h=l.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),i=Object(d.a)(a,2),n=i[0],c=i[1],o=Object(r.useState)([]),s=Object(d.a)(o,2),m=s[0],u=s[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",g),window.addEventListener("resize",f)),h())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",g),window.removeEventListener("resize",f))},g=Object(p.throttle)((function(){b(),h()}),30),f=Object(p.throttle)((function(){c(window.innerHeight)}),30);return Object(r.useEffect)((function(){b(),h()}),[n]),l.a.createElement(l.a.Fragment,null,e.children())}));h.propTypes={children:v.a.func.isRequired};var b=h,g=a(13),f=a(1),E=a.n(f),N=a(12),w=function(e){var t=e.className,a=Object(s.a)(e,["className"]),r=E()("brand",t);return l.a.createElement("div",Object.assign({},a,{className:r}),l.a.createElement("h3",{className:"m-0"},l.a.createElement(N.a,{to:"/"},"Fatima",l.a.createElement("span",{className:"text-color-primary"},"ZZ"),".")))},C=function(e){var t=e.className,a=e.navPosition,i=e.hideNav,n=e.hideSignin,c=e.bottomOuterDivider,o=e.bottomDivider,m=Object(s.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(r.useState)(!1),v=Object(d.a)(u,2),p=v[0],h=v[1],b=Object(r.useRef)(null),g=Object(r.useRef)(null);Object(r.useEffect)((function(){return p&&f(),document.addEventListener("keydown",C),document.addEventListener("click",y),function(){document.removeEventListener("keydown",C),document.removeEventListener("click",y),N()}}));var f=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",h(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),h(!1)},C=function(e){p&&27===e.keyCode&&N()},y=function(e){b.current&&p&&!b.current.contains(e.target)&&e.target!==g.current&&N()},k=E()("site-header",c&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},m,{className:k}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:E()("site-header-inner",o&&"has-bottom-divider")},l.a.createElement(w,null),!i&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:g,className:"header-nav-toggle",onClick:p?N:f},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:b,className:E()("header-nav",p&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement("a",{href:"#works",onClick:N},"My works")),l.a.createElement("li",null,l.a.createElement("a",{href:"#aboutme",onClick:N},"About me"))),!n&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement("a",{href:"#contact",className:"button button-primary button-wide-mobile button-sm",onClick:N},"Contact")))))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var y=C,k=function(e){var t=e.className,a=Object(s.a)(e,["className"]),r=E()("footer-social",t);return l.a.createElement("div",Object.assign({},a,{className:r}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/fatima-ezzahra-elemenoun/"},l.a.createElement("svg",{width:"40",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"LinkedIn"),l.a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/TimmyChan99"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Github"),l.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://angel.co/u/fatima-ezzahra-elmenoun"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"AngelList"),l.a.createElement("path",{d:"M 18.609375 3.960938 C 17.683594 3.933594 17.035156 4.4375 16.359375 5.859375 C 15.96875 6.816406 15.875 7.867188 15.875 9.015625 C 16.164063 10.257813 16.453125 11.5 16.839844 12.742188 C 17.402344 14.460938 18.625 18.03125 19.558594 20.769531 C 19.609375 20.792969 19.660156 20.8125 19.738281 20.847656 C 20.109375 21.078125 20.257813 21.203125 20.421875 21.347656 C 20.613281 21.515625 20.828125 21.734375 21.046875 21.972656 C 21.242188 21.539063 21.539063 21.128906 21.964844 20.769531 C 23.121094 20.003906 24.476563 20.484375 25.734375 20.484375 C 25.734375 20.484375 26.339844 20.542969 27.085938 20.613281 C 26.019531 17.378906 24.117188 11.394531 22.890625 8.96875 C 22.214844 7.628906 21.539063 6.386719 20.671875 5.242188 C 20.285156 4.667969 19.800781 4.191406 19.027344 4 C 18.882813 3.976563 18.742188 3.960938 18.609375 3.960938 Z M 36.730469 5.09375 C 36.132813 5.144531 35.476563 5.496094 34.800781 6.117188 C 34.609375 6.308594 34.316406 6.5 34.21875 6.785156 C 33.15625 8.027344 32.382813 9.558594 31.707031 10.992188 C 30.546875 13.191406 28.855469 17.945313 28.082031 20.335938 C 28.046875 20.464844 27.996094 20.578125 27.953125 20.703125 C 28.601563 20.765625 29.246094 20.832031 29.597656 20.867188 C 30.675781 20.984375 33.417969 21.332031 35.316406 21.605469 C 36.097656 19.375 37.394531 15.710938 38.011719 13.890625 C 38.492188 12.265625 38.976563 10.640625 39.171875 9.015625 C 39.265625 7.867188 39.070313 6.816406 38.296875 5.859375 C 37.863281 5.289063 37.328125 5.042969 36.730469 5.09375 Z M 17.628906 21.753906 C 17.523438 21.75 17.414063 21.757813 17.296875 21.78125 C 16.269531 21.972656 15.402344 22.585938 14.714844 23.351563 C 14.667969 23.402344 14.632813 23.457031 14.589844 23.507813 C 14.34375 23.902344 14.199219 24.308594 14.222656 24.667969 L 14.222656 24.761719 C 14.222656 25.5 14.515625 25.8125 14.707031 26.292969 C 15.382813 27.625 16.738281 29.347656 18.21875 30.980469 C 18.289063 31.054688 18.359375 31.128906 18.425781 31.203125 C 18.835938 31.648438 19.253906 32.09375 19.667969 32.53125 C 20.375 33.226563 21.183594 34.382813 22.324219 33.886719 C 23.039063 33.570313 23.746094 32.769531 24 32.03125 C 24.054688 31.886719 24.082031 31.742188 24.082031 31.597656 C 24.082031 30 20.609375 24.5625 19.351563 22.9375 C 18.898438 22.351563 18.375 21.773438 17.628906 21.753906 Z M 25.636719 22.015625 C 24.960938 22.015625 24.378906 22.015625 23.703125 22.203125 C 23.21875 22.394531 22.832031 22.683594 22.832031 23.253906 C 22.792969 23.726563 22.859375 24.15625 22.988281 24.558594 C 23.183594 24.875 23.375 25.210938 23.5625 25.558594 C 23.71875 25.722656 23.882813 25.886719 24.089844 26.03125 C 24.765625 26.507813 25.636719 26.792969 26.503906 26.984375 C 28.441406 27.367188 30.46875 27.367188 32.5 27.367188 C 32.980469 27.367188 33.371094 27.367188 33.855469 27.464844 C 34.335938 27.558594 34.433594 27.941406 34.53125 28.417969 C 34.625 28.800781 34.335938 28.992188 34.046875 29.089844 C 33.46875 29.375 32.980469 29.566406 32.402344 29.753906 C 30.082031 30.617188 28.34375 32.144531 27.085938 34.25 C 26.214844 35.777344 25.925781 37.402344 26.605469 39.125 C 26.796875 39.503906 26.894531 39.886719 26.988281 40.363281 C 27.085938 40.75 27.183594 41.226563 27.085938 41.703125 C 26.121094 41.511719 25.539063 41.035156 25.058594 40.269531 C 24.671875 39.503906 24.476563 38.644531 24.378906 37.785156 C 24.285156 37.308594 24.28125 36.828125 24.28125 36.351563 C 24.347656 35.757813 24.4375 35.269531 24.546875 34.847656 C 24.269531 35.136719 23.953125 35.414063 23.558594 35.644531 C 23.066406 35.96875 22.324219 36.003906 21.695313 35.949219 C 21.746094 36.058594 21.796875 36.167969 21.839844 36.273438 C 21.839844 36.464844 21.9375 36.558594 21.9375 36.65625 C 22.226563 37.804688 21.742188 38.855469 20.777344 39.523438 C 20.003906 40.097656 19.039063 40.09375 18.167969 39.90625 C 16.621094 39.523438 15.210938 38.496094 14.246094 37.253906 C 13.761719 36.585938 13.277344 35.820313 13.183594 35.058594 C 12.890625 34.292969 12.890625 33.910156 13.375 33.433594 C 13.46875 33.621094 13.664063 33.71875 13.761719 33.90625 C 14.242188 34.480469 14.628906 35.058594 15.113281 35.628906 C 15.691406 36.300781 16.523438 37.039063 17.296875 37.324219 C 17.972656 37.609375 18.554688 37.609375 19.230469 37.324219 C 19.808594 37.039063 19.90625 36.65625 19.8125 36.082031 C 19.714844 35.890625 19.617188 35.699219 19.519531 35.511719 C 18.84375 34.171875 17.972656 32.929688 16.910156 31.875 C 16.332031 31.304688 13.75 28.375 12.136719 29.15625 C 11.015625 29.871094 10.285156 30.972656 10.074219 32.433594 C 9.882813 34.058594 10.074219 35.492188 10.558594 37.019531 C 11.527344 40.078125 14.8125 43.421875 18.097656 44.761719 C 20.609375 45.8125 23.222656 46.195313 25.925781 45.90625 C 27.863281 45.8125 29.792969 45.242188 31.53125 44.378906 C 35.011719 42.660156 37.332031 39.886719 38.78125 36.351563 C 39.460938 34.632813 39.847656 32.71875 39.941406 30.808594 C 39.957031 30.59375 39.964844 30.378906 39.972656 30.167969 C 39.972656 29.5625 39.972656 28.527344 39.917969 27.59375 C 39.878906 27.234375 39.820313 26.867188 39.75 26.503906 C 39.679688 26.199219 39.59375 25.894531 39.496094 25.59375 C 39.199219 25.015625 38.769531 24.519531 38.148438 24.214844 C 37.664063 24.023438 37.28125 23.832031 36.796875 23.640625 C 33.800781 22.585938 28.730469 22.300781 25.636719 22.015625 Z M 25.078125 28.609375 C 25.445313 29.191406 25.816406 29.78125 25.929688 30.570313 C 25.988281 30.972656 25.992188 31.660156 25.824219 32.425781 C 25.917969 32.304688 26.015625 32.179688 26.121094 32.046875 C 26.890625 30.902344 27.957031 30.136719 29.113281 29.277344 C 27.6875 29.1875 26.34375 29.007813 25.078125 28.609375 Z"})))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/elemenoun"},l.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Twitter"),l.a.createElement("g",null,l.a.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})))))))},O=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,i=Object(s.a)(e,["className","topOuterDivider","topDivider"]),n=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},i,{className:n}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:E()("site-footer-inner",r&&"has-top-divider")},l.a.createElement("h3",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Get in touch!"),l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement("h6",null,l.a.createElement("a",{href:"mailto: felemenoun@gmail.com"},l.a.createElement("span",{className:"at-symbole text-color-primary"},"@")," felemenoun@gmail.com")),l.a.createElement(k,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"}))))};O.defaultProps={topOuterDivider:!1,topDivider:!1};var x=O,j=function(){return l.a.createElement("div",{className:"top-btn"},l.a.createElement("a",{href:"#home"},"\u2191"))},D=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(x,{id:"contact"}),l.a.createElement(j,null))},S=a(6),_={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},M={types:Object(S.a)({},_.types),defaults:Object(S.a)({},_.defaults)},T={types:Object(S.a)({},_.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(S.a)({},_.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},L={types:Object(S.a)({},_.types,{pushLeft:v.a.bool}),defaults:Object(S.a)({},_.defaults,{pushLeft:!1})},R=function(e){var t=e.className,a=Object(s.a)(e,["className"]),r=E()("button-group",t);return l.a.createElement("div",Object.assign({},a,{className:r}))},F=function(e){var t=e.className,a=e.tag,r=e.color,i=e.size,n=e.loading,c=e.wide,o=e.wideMobile,m=e.disabled,d=Object(s.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",r&&"button-".concat(r),i&&"button-".concat(i),n&&"is-loading",c&&"button-block",o&&"button-wide-mobile",t),v=a;return l.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};F.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var P=F,A=a(24),z=a.n(A),I=Object(S.a)({},M.defaults),B=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,i=e.topDivider,n=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,m=Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),d=E()("hero section center-content",a&&"has-top-divider",r&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),u=E()("hero-inner section-inner",i&&"has-top-divider",n&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},m,{className:d}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:u},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Hey there. I'm ",l.a.createElement("span",{className:"text-color-primary"},"Fatima Ezzahra")),l.a.createElement("h2",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"I am ",l.a.createElement("span",{className:"text-color-primary"},"full-stack developer")),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don\u2018t hestiate to contact me."),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(R,null,l.a.createElement(P,{tag:"a",color:"primary",wideMobile:!0,href:"#contact"},"Contact Me"),l.a.createElement(P,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/cruip/open-react-template/"},l.a.createElement("a",{href:z.a,download:!0},"My Resume"))),l.a.createElement("br",null),l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto: felemenoun@gmail.com"},l.a.createElement("span",{className:"at-symbole text-color-primary"},"@")," felemenoun@gmail.com")))))))};B.defaultProps=I;var H=B,J=function(e){var t=e.className,a=e.data,r=e.children,i=e.tag,n=Object(s.a)(e,["className","data","children","tag"]),c=E()("section-header",t),o=i;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},n,{className:c}),l.a.createElement("div",{className:"container-xs"},r,a.title&&l.a.createElement(o,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};J.defaultProps={children:null,tag:"h2"};var G=J,q=function(e){var t=e.className,a=e.src,i=e.width,n=e.height,c=e.alt,o=Object(s.a)(e,["className","src","width","height","alt"]),m=Object(r.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],h=Object(r.useRef)(null);Object(r.useEffect)((function(){b(h.current)}),[]);var b=function(e){var t,a,r=document.createElement("img");v||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},o,{ref:h,className:t,src:a,width:i,height:n,alt:c,onLoad:function(){p(!0)}}))};q.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var Z=q,W=Object(S.a)({},T.defaults),U=function(e){var t=e.className,r=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,c=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,h=Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=E()("features-split section",r&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),g=E()("features-split-inner section-inner",n&&"has-top-divider",c&&"has-bottom-divider"),f=E()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return l.a.createElement("section",Object.assign({},h,{className:b}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g},l.a.createElement(G,{data:{title:"My works",paragraph:"_____________________"},className:"center-content"}),l.a.createElement("div",{className:f},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"React \u2022 Redux \u2022 JavaScript \u2022 Cypress \u2022 Tailwind CSS"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Change Your World"),l.a.createElement("p",{className:"m-0"},"This webapp  a web application for a non-profit organization This project consist of multiple pages some of them require to sign up or sign in or you need to be authorized to access some content. Implement style using Tailwind CSS and styled-components and the site is responsive for mobile, laptop, and desktop versions. I worked in this with RESTful API coming from a Ruby on Rails backend separated project and Used Cypress to write 2e2 tests."),l.a.createElement("br",null),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(R,null,l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"primary",wideMobile:!0,href:"https://cyw-corporate-frontend-bbpe-p20fflamb-team-01-frontend.vercel.app/"},"Live version")))),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(Z,{src:a(35),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Ruby on Rails \u2022 React \u2022 Redux \u2022 JavaScript \u2022 Ruby"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Car rental app"),l.a.createElement("p",{className:"m-0"},"This webapp is allows users to get list of cars, cars details, reserve a car and check their reservations list. If the user is the admin that give them the authorization to delete from or add a new car to the list of car. Users need to sign up or sign in to access the API endponits. They can sign up or sign in using the API endpoints."),l.a.createElement("br",null),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(R,null,l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"primary",wideMobile:!0,href:"https://car-renta.herokuapp.com/"},"Live version"),l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"dark",wideMobile:!0,href:"https://github.com/TimmyChan99/Car-rental-app-back-end"},"Source Github")))),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(Z,{src:a(36),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"React \u2022 JavaScript \u2022 Firebase \u2022 Tailwind CSS \u2022 React-Spring"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Insight"),l.a.createElement("p",{className:"m-0"},"This is a blog app where users can read articles and posts of others. If you want to post or write an article you need to register or sign up."),l.a.createElement("br",null),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(R,null,l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"primary",wideMobile:!0,href:"https://timmychan99.github.io/insights/"},"Live version"),l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"dark",wideMobile:!0,href:"https://github.com/TimmyChan99/insights"},"Source Github")))),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(Z,{src:a(37),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Ruby on Rails \u2022 Ruby \u2022 Sass \u2022 HTML \u2022 RSpec"),l.a.createElement("h3",{className:"mt-0 mb-12"},"myBudget"),l.a.createElement("p",{className:"m-0"},"myBudget is a mobile web application where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you spent and on what."),l.a.createElement("br",null),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(R,null,l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"primary",wideMobile:!0,href:"https://mybudget-railsapp.herokuapp.com/"},"Live version"),l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"dark",wideMobile:!0,href:"https://github.com/TimmyChan99/Budget-app/"},"Source Github")))),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(Z,{src:a(38),alt:"Features split 03",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"React \u2022 Redux \u2022 JavaScript \u2022 CSS \u2022 Jest"),l.a.createElement("h3",{className:"mt-0 mb-12"},"COVID-19 Tracker"),l.a.createElement("p",{className:"m-0"},"Covid-19 Tracker is a mobile web application that provides the user the new cases of Covid-19 for each country and also the regions within the country by getting all the data and the statistics from Narrativa."),l.a.createElement("br",null),l.a.createElement("p",{className:"notice text-color-primary"},"Notice: Narrativa\u2019s COVID-19 tracking project is no longer providing the API data"),l.a.createElement("br",null),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(R,null,l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"primary",wideMobile:!0,href:"https://timmychan99.github.io/covid19-tracker/"},"Live version"),l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"dark",wideMobile:!0,href:"https://github.com/TimmyChan99/covid19-tracker"},"Source Github")))),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(Z,{src:a(39),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"React \u2022 Redux \u2022 JavaScript \u2022 CSS \u2022 Jest"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Space Travlers"),l.a.createElement("p",{className:"m-0"},"The application will allow users to book rockets and join selected space missions. Using data from the SpaceX API. The Space Travelers' Hub consists of Rockets, Missions, and the My Profile section. The My Profile section displays all reserved rockets and space missions."),l.a.createElement("br",null),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(R,null,l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"primary",wideMobile:!0,href:"https://timmychan99.github.io/space-travelers/"},"Live version"),l.a.createElement(P,{tag:"a",target:"_blank",rel:"noopener noreferrer",color:"dark",wideMobile:!0,href:"https://github.com/TimmyChan99/space-travelers"},"Source Github")))),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(Z,{src:a(40),alt:"Features split 01",width:528,height:396})))))))};U.defaultProps=W;var K=U,V=Object(S.a)({},L.defaults),Q=function(e){var t=e.className,r=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,c=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(s.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("testimonial section",r&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=E()("testimonial-inner section-inner",n&&"has-top-divider",c&&"has-bottom-divider"),h=E()("tiles-wrap",d&&"push-left");return l.a.createElement("section",Object.assign({},u,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:p},l.a.createElement(G,{data:{title:"About Me",paragraph:"I'm a full-stack web developer and React and Rails enthusiast with a love for clean code and accessible design. Pair-programming and remote work aficionado. Fluent in multiple languages, frameworks, and technologies, and capable of ramping up quickly and efficiently."},className:"center-content"}),l.a.createElement("div",{className:h},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"card-container"},l.a.createElement("h4",null," ","< Languages /> "),l.a.createElement("ul",{className:"skils-list"},l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(41),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"JavaScript")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(42),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"Ruby")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(43),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"HTML")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(44),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"CSS")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(45),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"SQL")))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"card-container"},l.a.createElement("h4",null,"< Frameworks & Libraries />"),l.a.createElement("ul",{className:"skils-list"},l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(46),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"React")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(47),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"Rails")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(48),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"Redux")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(49),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"Jest")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(50),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"Swagger")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(51),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"Capybara")))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"card-container"},l.a.createElement("h4",null,"< Tools & Skills />"),l.a.createElement("ul",{className:"skils-list"},l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(52),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"GitHub")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(53),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"Git")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(54),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"PostgreSQL")),l.a.createElement("li",{className:"skill-container"},l.a.createElement(Z,{src:a(55),alt:"Features tile icon 01",width:64,height:64}),l.a.createElement("small",null,"Sass"))))))))))};Q.defaultProps=V;var X=Q,Y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,{className:"illustration-section-01",id:"home"}),l.a.createElement(K,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02",id:"works"}),l.a.createElement(X,{topDivider:!0,id:"aboutme"}))};g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var $=function(){var e=Object(r.useRef)(),t=Object(c.f)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),l.a.createElement(b,{ref:e,children:function(){return l.a.createElement(c.c,null,l.a.createElement(m,{exact:!0,path:"/portfolio2/",component:Y,layout:D}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56);var ee=Object(o.a)();n.a.render(l.a.createElement(c.b,{history:ee},l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[25,1,2]]]);
//# sourceMappingURL=main.00888d1c.chunk.js.map