!function(e){function t(t){for(var i,a,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={5:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([87,0]),n()}({16:function(e,t,n){"use strict";var i=n(4),r=n.n(i),o=n(13),a=n.n(o),s=n(5),c=n.n(s),l=n(6),u=n.n(l),d=n(2),f=n.n(d),p=n(11),b=n.n(p),m=n(12),h=n.n(m),g=n(3),y=n.n(g),v=n(1),x=n.n(v),w=n(0),k=n.n(w),O=n(23),j=n(32),M=n(36),E=n(35),S=n(38),P=n(8);n(25);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=y()(e);if(t){var r=y()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return h()(this,n)}}var I=function(e){b()(o,e);var t,n,i=R(o);function o(e){var t;return c()(this,o),t=i.call(this,e),x()(f()(t),"linkWrapperRef",void 0),x()(f()(t),"isDestroyed$",new O.a(1)),x()(f()(t),"onRender$",new j.a),x()(f()(t),"mobileService",P.a.getInstance()),x()(f()(t),"handleNavigation",(function(){t.setState(N(N({},t.state),{},{currentPath:window.location.pathname,isMobileMenuExpanded:!1}))})),x()(f()(t),"isCondensed",(function(){return[/^\/apps\/.+/i].some((function(e){return e.test(t.state.currentPath)}))})),x()(f()(t),"isActive",(function(e){return e.test(t.state.currentPath)})),t.state={isMobile:!1,currentPath:null,isMobileMenuExpanded:!1},t.linkWrapperRef=k.a.createRef(),t}return u()(o,[{key:"contactItems",value:function(){return k.a.createElement("div",{className:"contact"},k.a.createElement("a",{href:"https://www.linkedin.com/in/steve-zelek-022903107/",className:"icon linkedin"},k.a.createElement("img",{src:"./assets/icons/linkedin.svg",alt:"Visit Steve Zelek on LinkedIn."})),k.a.createElement("a",{href:"https://gitlab.com/smzelek/",className:"icon gitlab"},k.a.createElement("img",{src:"./assets/icons/gitlab.svg",alt:"Visit Steve Zelek on GitLab."})))}},{key:"componentDidMount",value:function(){var e=this;this.mobileService.isMobile().pipe(Object(M.a)(this.isDestroyed$),Object(E.a)()).subscribe((function(t){e.setState(N(N({},e.state),{},{isMobile:t,isMobileMenuExpanded:!1}))})),window.addEventListener("popstate",this.handleNavigation),this.handleNavigation()}},{key:"componentWillUnmount",value:function(){this.isDestroyed$.next(),this.isDestroyed$.complete(),window.removeEventListener("popstate",this.handleNavigation)}},{key:"handleMenuItemKeydown",value:function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),e.target.click())}},{key:"toggleMobileMenu",value:function(){this.setState(N(N({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}))}},{key:"handleMenuToggleKeydown",value:(n=a()(r.a.mark((function e(t){var n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.setState(N(N({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}),a()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.isMobileMenuExpanded){e.next=5;break}return e.next=3,n.waitForNextRender();case 3:n.linkWrapperRef.current.querySelectorAll("a")[0].focus();case 5:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"waitForNextRender",value:(t=a()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.onRender$.pipe(Object(S.a)(1)).toPromise());case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"navigationItems",value:function(){var e=this;return k.a.createElement("ul",{className:"navigation"},k.a.createElement("li",null,k.a.createElement("a",{href:"/",className:"".concat(this.isActive(/^\/$/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"bio")),k.a.createElement("li",null,k.a.createElement("a",{href:"/apps",className:"".concat(this.isActive(/^\/apps.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"apps")),k.a.createElement("li",null,k.a.createElement("a",{href:"/blog",className:"".concat(this.isActive(/^\/blog.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"blog")))}},{key:"render",value:function(){var e=this;return setTimeout((function(){e.onRender$.next()}),0),k.a.createElement("div",{className:"sidebar ".concat(this.state.isMobile?"mobile":""," ").concat(this.isCondensed()?"condensed":"")},k.a.createElement("div",{className:"identifiers"},k.a.createElement("picture",null,k.a.createElement("source",{srcSet:"\r ./assets/me/me-3x.webp 3x,\r ./assets/me/me-2x.webp 2x,\r ./assets/me/me-1x.webp 1x,\r ",type:"image/webp"}),k.a.createElement("source",{srcSet:"\r ./assets/me/me-3x.jpg 3x,\r ./assets/me/me-2x.jpg 2x,\r ./assets/me/me-1x.jpg 1x,\r ",type:"image/jpeg"}),k.a.createElement("img",{src:"./assets/me/me-1x.jpg",type:"image/jpeg",alt:"A headshot of Steve Zelek."})),k.a.createElement("h1",{className:"name"},"Steve Zelek"),k.a.createElement("p",{className:"title"},"software maker")),k.a.createElement("div",{className:"navigation-wrapper",ref:this.linkWrapperRef},(!this.state.isMobile||this.state.isMobileMenuExpanded)&&this.navigationItems(),k.a.createElement("button",{className:"menu-toggle",type:"button","aria-label":"Show Navigation Menu",onClick:function(){return e.toggleMobileMenu()},onKeyDown:function(t){return e.handleMenuToggleKeydown(t)}},k.a.createElement("img",{src:"./assets/icons/bars.svg",alt:""}))),k.a.createElement("div",{className:"spacer"}),!this.state.isMobile&&this.contactItems())}}]),o}(w.Component);t.a=I},20:function(e,t,n){var i=n(27);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(i,r);i.locals&&(e.exports=i.locals)},25:function(e,t,n){var i=n(26);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(i,r);i.locals&&(e.exports=i.locals)},26:function(e,t,n){(t=n(9)(!1)).push([e.i,".sidebar{z-index:1;width:250px;background:white;flex-shrink:0;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}.sidebar .contact{margin-bottom:20px;display:flex;justify-content:center}.sidebar .navigation{list-style-type:none;margin:0;padding:0}.sidebar .navigation a{height:50px;display:flex;justify-content:center;align-items:center;text-decoration:none;font-size:20px;color:black}.sidebar .navigation a.active{background:#eaf3ff}.sidebar .navigation a:hover,.sidebar .navigation a:focus{outline:none;background:#ecf1f8}.sidebar .navigation a:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.sidebar .spacer{flex-grow:1}.sidebar a.icon{display:inline-block;border-radius:5px;width:40px;height:40px;margin:0 10px}.sidebar a.icon img{display:block;width:100%;height:100%;margin:0 auto;padding:5px 0;box-sizing:border-box}.sidebar a.icon.linkedin{background-color:#007bb6}.sidebar a.icon.linkedin:hover,.sidebar a.icon.linkedin:focus{outline:none;background:#006a9d}.sidebar a.icon:focus{box-shadow:0 0 0px 3px #a2c0e6}.sidebar a.icon.gitlab{background-color:#ff4500}.sidebar a.icon.gitlab:hover,.sidebar a.icon.gitlab:focus{outline:none;background-color:#e63e00}.sidebar .identifiers{text-align:center;margin-top:20px;margin-bottom:15px;display:flex;flex-direction:column;align-items:center}.sidebar .identifiers picture{width:150px;height:150px}.sidebar .identifiers img{height:100%;border-radius:50%}.sidebar .identifiers .name{margin-top:5px;color:#465061;font-size:32px;line-height:32px;white-space:nowrap}.sidebar:not(.mobile){height:100%}.sidebar:not(.mobile) .menu-toggle{display:none}.mobile.condensed.sidebar .spacer,.mobile.condensed.sidebar .identifiers,.mobile.condensed.sidebar .contact{display:none}.condensed.sidebar:not(.mobile){width:70px}.condensed.sidebar:not(.mobile) .identifiers{display:flex;justify-content:center;margin:10px 0}.condensed.sidebar:not(.mobile) .identifiers picture{width:50px;height:50px}.condensed.sidebar:not(.mobile) .identifiers .name,.condensed.sidebar:not(.mobile) .identifiers .title{display:none}.condensed.sidebar:not(.mobile) .navigation a{font-size:16px}.condensed.sidebar:not(.mobile) .contact{flex-direction:column;align-items:center;margin-bottom:10px}.condensed.sidebar:not(.mobile) .contact a{margin:5px 0}.mobile.sidebar{flex-direction:row;justify-content:center;max-width:100%;flex-wrap:wrap;width:100%}.mobile.sidebar .contact{flex-direction:column;justify-content:center;align-items:center;margin:0}.mobile.sidebar .navigation-wrapper{width:100%;display:flex;flex-direction:column}.mobile.sidebar .identifiers{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10px 0px}.mobile.sidebar .identifiers .title{display:none}.mobile.sidebar .identifiers .name{text-transform:lowercase}.mobile.sidebar .icon{margin:10px;padding:10px;margin-right:0}.mobile.sidebar .icon img{padding:0}.mobile.sidebar .menu-toggle{width:100%;border:none;background:none;border-top:2px solid #d6d6d6;height:70px}.mobile.sidebar .menu-toggle:hover,.mobile.sidebar .menu-toggle:focus{background:#ecf1f8;outline:none}.mobile.sidebar .menu-toggle:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.mobile.sidebar .menu-toggle img{width:35px;height:35px}.mobile.sidebar .spacer{display:none}\n",""]),e.exports=t},27:function(e,t,n){(t=n(9)(!1)).push([e.i,'#root{height:100vh}.layout{height:100%;background:#e8e6e5;display:flex}@media only screen and (max-width: 800px){.layout{flex-direction:column;overflow-y:auto}}body{margin:0px;padding:0px;font-family:"Cairo", sans-serif}h1,h2,h3,h4,h5{margin:0;font-weight:normal}h3{font-family:"Cairo", sans-serif;font-size:30px;line-height:40px}p{margin:0}.basic-code{color:#b71900;background:#f3f3f3;border:1px solid gray;padding:1px;border-radius:3px;font-size:14px;margin:0 3px}\n',""]),e.exports=t},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(5),r=n.n(i),o=n(6),a=n.n(o),s=n(1),c=n.n(s),l=n(23),u=n(24);function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var p,b=function(){function e(){var t=this;r()(this,e),c()(this,"isMobileView$",new l.a(1)),new u.a((function(e){var n,i=d(e);try{for(i.s();!(n=i.n()).done;){var r=n.value.contentRect.width;t.isMobileView$.next(r<=799)}}catch(e){i.e(e)}finally{i.f()}})).observe(document.body)}return a()(e,[{key:"isMobile",value:function(){return this.isMobileView$.asObservable()}}]),e}(),m={getInstance:function(){return p||(p=new b),p}}},87:function(e,t,n){"use strict";n.r(t);var i=n(5),r=n.n(i),o=n(6),a=n.n(o),s=n(2),c=n.n(s),l=n(11),u=n.n(l),d=n(12),f=n.n(d),p=n(3),b=n.n(p),m=n(1),h=n.n(m),g=n(0),y=n.n(g),v=n(21),x=n(23),w=n(36),k=n(35),O=n(8),j=n(16);n(20),n(88);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=b()(e);if(t){var r=b()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return f()(this,n)}}var P=function(e){u()(n,e);var t=S(n);function n(e){var i;return r()(this,n),i=t.call(this,e),h()(c()(i),"isDestroyed$",new x.a(1)),h()(c()(i),"mobileService",O.a.getInstance()),i.state={isMobile:!1},i}return a()(n,[{key:"componentDidMount",value:function(){var e=this;this.mobileService.isMobile().pipe(Object(w.a)(this.isDestroyed$),Object(k.a)()).subscribe((function(t){e.setState(E(E({},e.state),{},{isMobile:t}))}))}},{key:"componentWillUnmount",value:function(){this.isDestroyed$.next(),this.isDestroyed$.complete()}},{key:"render",value:function(){return y.a.createElement("div",{className:"layout ".concat(this.state.isMobile?"mobile":"")},y.a.createElement(j.a,null),y.a.createElement("div",{className:"tic-tac-toe"},y.a.createElement("iframe",{src:"https://tic-metac-toe.stevezelek.com"})))}}]),n}(g.Component);Object(v.render)(y.a.createElement(y.a.StrictMode,null,y.a.createElement(P,null)),document.getElementById("root"))},88:function(e,t,n){var i=n(89);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(i,r);i.locals&&(e.exports=i.locals)},89:function(e,t,n){(t=n(9)(!1)).push([e.i,".tic-tac-toe{display:flex;width:100%;height:100%}.tic-tac-toe iframe{border:none;flex-grow:1;height:100%}\n",""]),e.exports=t}});