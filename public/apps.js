!function(e){function t(t){for(var i,o,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={2:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([92,0]),n()}({16:function(e,t,n){"use strict";var i=n(4),r=n.n(i),a=n(13),o=n.n(a),s=n(5),c=n.n(s),l=n(6),u=n.n(l),p=n(2),d=n.n(p),f=n(11),m=n.n(f),b=n(12),h=n.n(b),g=n(3),y=n.n(g),x=n(1),v=n.n(x),w=n(0),O=n.n(w),j=n(23),k=n(32),E=n(36),M=n(35),P=n(38),S=n(8);n(25);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=y()(e);if(t){var r=y()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return h()(this,n)}}var I=function(e){m()(a,e);var t,n,i=R(a);function a(e){var t;return c()(this,a),t=i.call(this,e),v()(d()(t),"linkWrapperRef",void 0),v()(d()(t),"isDestroyed$",new j.a(1)),v()(d()(t),"onRender$",new k.a),v()(d()(t),"mobileService",S.a.getInstance()),v()(d()(t),"handleNavigation",(function(){t.setState(N(N({},t.state),{},{currentPath:window.location.pathname,isMobileMenuExpanded:!1}))})),v()(d()(t),"isCondensed",(function(){return[/^\/apps\/.+/i].some((function(e){return e.test(t.state.currentPath)}))})),v()(d()(t),"isActive",(function(e){return e.test(t.state.currentPath)})),t.state={isMobile:!1,currentPath:null,isMobileMenuExpanded:!1},t.linkWrapperRef=O.a.createRef(),t}return u()(a,[{key:"contactItems",value:function(){return O.a.createElement("div",{className:"contact"},O.a.createElement("a",{href:"https://www.linkedin.com/in/steve-zelek-022903107/",className:"icon linkedin"},O.a.createElement("img",{src:"./assets/icons/linkedin.svg",alt:"Visit Steve Zelek on LinkedIn."})),O.a.createElement("a",{href:"https://gitlab.com/smzelek/",className:"icon gitlab"},O.a.createElement("img",{src:"./assets/icons/gitlab.svg",alt:"Visit Steve Zelek on GitLab."})))}},{key:"componentDidMount",value:function(){var e=this;this.mobileService.isMobile().pipe(Object(E.a)(this.isDestroyed$),Object(M.a)()).subscribe((function(t){e.setState(N(N({},e.state),{},{isMobile:t,isMobileMenuExpanded:!1}))})),window.addEventListener("popstate",this.handleNavigation),this.handleNavigation()}},{key:"componentWillUnmount",value:function(){this.isDestroyed$.next(),this.isDestroyed$.complete(),window.removeEventListener("popstate",this.handleNavigation)}},{key:"handleMenuItemKeydown",value:function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),e.target.click())}},{key:"toggleMobileMenu",value:function(){this.setState(N(N({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}))}},{key:"handleMenuToggleKeydown",value:(n=o()(r.a.mark((function e(t){var n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.setState(N(N({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}),o()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.isMobileMenuExpanded){e.next=5;break}return e.next=3,n.waitForNextRender();case 3:n.linkWrapperRef.current.querySelectorAll("a")[0].focus();case 5:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"waitForNextRender",value:(t=o()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.onRender$.pipe(Object(P.a)(1)).toPromise());case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"navigationItems",value:function(){var e=this;return O.a.createElement("ul",{className:"navigation"},O.a.createElement("li",null,O.a.createElement("a",{href:"/",className:"".concat(this.isActive(/^\/$/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"bio")),O.a.createElement("li",null,O.a.createElement("a",{href:"/apps",className:"".concat(this.isActive(/^\/apps.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"apps")),O.a.createElement("li",null,O.a.createElement("a",{href:"/blog",className:"".concat(this.isActive(/^\/blog.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"blog")))}},{key:"render",value:function(){var e=this;return setTimeout((function(){e.onRender$.next()}),0),O.a.createElement("div",{className:"sidebar ".concat(this.state.isMobile?"mobile":""," ").concat(this.isCondensed()?"condensed":"")},O.a.createElement("div",{className:"identifiers"},O.a.createElement("picture",null,O.a.createElement("source",{srcSet:"\r ./assets/me/me-3x.webp 3x,\r ./assets/me/me-2x.webp 2x,\r ./assets/me/me-1x.webp 1x,\r ",type:"image/webp"}),O.a.createElement("source",{srcSet:"\r ./assets/me/me-3x.jpg 3x,\r ./assets/me/me-2x.jpg 2x,\r ./assets/me/me-1x.jpg 1x,\r ",type:"image/jpeg"}),O.a.createElement("img",{src:"./assets/me/me-1x.jpg",type:"image/jpeg",alt:"A headshot of Steve Zelek."})),O.a.createElement("h1",{className:"name"},"Steve Zelek"),O.a.createElement("p",{className:"title"},"software maker")),O.a.createElement("div",{className:"navigation-wrapper",ref:this.linkWrapperRef},(!this.state.isMobile||this.state.isMobileMenuExpanded)&&this.navigationItems(),O.a.createElement("button",{className:"menu-toggle",type:"button","aria-label":"Show Navigation Menu",onClick:function(){return e.toggleMobileMenu()},onKeyDown:function(t){return e.handleMenuToggleKeydown(t)}},O.a.createElement("img",{src:"./assets/icons/bars.svg",alt:""}))),O.a.createElement("div",{className:"spacer"}),!this.state.isMobile&&this.contactItems())}}]),a}(w.Component);t.a=I},20:function(e,t,n){var i=n(27);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(i,r);i.locals&&(e.exports=i.locals)},25:function(e,t,n){var i=n(26);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(i,r);i.locals&&(e.exports=i.locals)},26:function(e,t,n){(t=n(9)(!1)).push([e.i,".sidebar{z-index:1;width:250px;background:white;flex-shrink:0;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}.sidebar .contact{margin-bottom:20px;display:flex;justify-content:center}.sidebar .navigation{list-style-type:none;margin:0;padding:0}.sidebar .navigation a{height:50px;display:flex;justify-content:center;align-items:center;text-decoration:none;font-size:20px;color:black}.sidebar .navigation a.active{background:#eaf3ff}.sidebar .navigation a:hover,.sidebar .navigation a:focus{outline:none;background:#ecf1f8}.sidebar .navigation a:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.sidebar .spacer{flex-grow:1}.sidebar a.icon{display:inline-block;border-radius:5px;width:40px;height:40px;margin:0 10px}.sidebar a.icon img{display:block;width:100%;height:100%;margin:0 auto;padding:5px 0;box-sizing:border-box}.sidebar a.icon.linkedin{background-color:#007bb6}.sidebar a.icon.linkedin:hover,.sidebar a.icon.linkedin:focus{outline:none;background:#006a9d}.sidebar a.icon:focus{box-shadow:0 0 0px 3px #a2c0e6}.sidebar a.icon.gitlab{background-color:#ff4500}.sidebar a.icon.gitlab:hover,.sidebar a.icon.gitlab:focus{outline:none;background-color:#e63e00}.sidebar .identifiers{text-align:center;margin-top:20px;margin-bottom:15px;display:flex;flex-direction:column;align-items:center}.sidebar .identifiers picture{width:150px;height:150px}.sidebar .identifiers img{height:100%;border-radius:50%}.sidebar .identifiers .name{margin-top:5px;color:#465061;font-size:32px;line-height:32px;white-space:nowrap}.sidebar:not(.mobile){height:100%}.sidebar:not(.mobile) .menu-toggle{display:none}.mobile.condensed.sidebar .spacer,.mobile.condensed.sidebar .identifiers,.mobile.condensed.sidebar .contact{display:none}.condensed.sidebar:not(.mobile){width:70px}.condensed.sidebar:not(.mobile) .identifiers{display:flex;justify-content:center;margin:10px 0}.condensed.sidebar:not(.mobile) .identifiers picture{width:50px;height:50px}.condensed.sidebar:not(.mobile) .identifiers .name,.condensed.sidebar:not(.mobile) .identifiers .title{display:none}.condensed.sidebar:not(.mobile) .navigation a{font-size:16px}.condensed.sidebar:not(.mobile) .contact{flex-direction:column;align-items:center;margin-bottom:10px}.condensed.sidebar:not(.mobile) .contact a{margin:5px 0}.mobile.sidebar{flex-direction:row;justify-content:center;max-width:100%;flex-wrap:wrap;width:100%}.mobile.sidebar .contact{flex-direction:column;justify-content:center;align-items:center;margin:0}.mobile.sidebar .navigation-wrapper{width:100%;display:flex;flex-direction:column}.mobile.sidebar .identifiers{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10px 0px}.mobile.sidebar .identifiers .title{display:none}.mobile.sidebar .identifiers .name{text-transform:lowercase}.mobile.sidebar .icon{margin:10px;padding:10px;margin-right:0}.mobile.sidebar .icon img{padding:0}.mobile.sidebar .menu-toggle{width:100%;border:none;background:none;border-top:2px solid #d6d6d6;height:70px}.mobile.sidebar .menu-toggle:hover,.mobile.sidebar .menu-toggle:focus{background:#ecf1f8;outline:none}.mobile.sidebar .menu-toggle:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.mobile.sidebar .menu-toggle img{width:35px;height:35px}.mobile.sidebar .spacer{display:none}\n",""]),e.exports=t},27:function(e,t,n){(t=n(9)(!1)).push([e.i,'#root{height:100vh}.layout{height:100%;background:#e8e6e5;display:flex}@media only screen and (max-width: 800px){.layout{flex-direction:column;overflow-y:auto}}body{margin:0px;padding:0px;font-family:"Cairo", sans-serif}h1,h2,h3,h4,h5{margin:0;font-weight:normal}h3{font-family:"Cairo", sans-serif;font-size:30px;line-height:40px}p{margin:0}.basic-code{color:#b71900;background:#f3f3f3;border:1px solid gray;padding:1px;border-radius:3px;font-size:14px;margin:0 3px}\n',""]),e.exports=t},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(5),r=n.n(i),a=n(6),o=n.n(a),s=n(1),c=n.n(s),l=n(23),u=n(24);function p(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var f,m=function(){function e(){var t=this;r()(this,e),c()(this,"isMobileView$",new l.a(1)),new u.a((function(e){var n,i=p(e);try{for(i.s();!(n=i.n()).done;){var r=n.value.contentRect.width;t.isMobileView$.next(r<=799)}}catch(e){i.e(e)}finally{i.f()}})).observe(document.body)}return o()(e,[{key:"isMobile",value:function(){return this.isMobileView$.asObservable()}}]),e}(),b={getInstance:function(){return f||(f=new m),f}}},83:function(e,t,n){var i=n(84);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(i,r);i.locals&&(e.exports=i.locals)},84:function(e,t,n){(t=n(9)(!1)).push([e.i,".app-card{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box;padding:30px;background:white;text-align:center;text-decoration:none}.app-card h3,.app-card p{color:#465061}.app-card p{margin-top:10px;font-size:18px;line-height:33px}.app-card .img-wrapper{height:100%;width:100%;min-height:1px;min-width:1px;display:flex;justify-content:center;max-height:100px;max-width:100px}.app-card:focus-within{box-shadow:0 0 0px 3px #a2c0e6 inset}.app-card:focus,.app-card:hover,.app-card:focus-within{background:#ecf1f8;outline:none}.app-card:focus h3,.app-card:hover h3,.app-card:focus-within h3{text-decoration:underline}\n",""]),e.exports=t},85:function(e,t,n){var i=n(86);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(i,r);i.locals&&(e.exports=i.locals)},86:function(e,t,n){(t=n(9)(!1)).push([e.i,".apps-gallery{display:flex;flex-direction:column;width:100%;min-width:1px}.apps-gallery header{min-height:80px;max-height:80px;display:flex;align-items:center;background-color:#7897BF}.apps-gallery header .title{font-size:48px;line-height:48px;margin:0;padding-left:32px;font-family:Cairo, sans-serif;color:#fff}.apps-gallery main{display:flex;flex-wrap:wrap;padding:30px}.apps-gallery .app-card{max-height:300px;max-width:300px;margin:30px}.apps-gallery:not(.mobile) main{overflow-y:auto}.mobile.apps-gallery header{justify-content:center}.mobile.apps-gallery header .title{padding:0}.mobile.apps-gallery main{justify-content:center}\n",""]),e.exports=t},92:function(e,t,n){"use strict";n.r(t);var i=n(5),r=n.n(i),a=n(6),o=n.n(a),s=n(2),c=n.n(s),l=n(11),u=n.n(l),p=n(12),d=n.n(p),f=n(3),m=n.n(f),b=n(1),h=n.n(b),g=n(0),y=n.n(g),x=n(21),v=n(23),w=n(36),O=n(35),j=n(8),k=n(16);n(83);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d()(this,n)}}var S=function(e){u()(n,e);var t=P(n);function n(e){var i;return r()(this,n),i=t.call(this,e),h()(c()(i),"isDestroyed$",new v.a(1)),h()(c()(i),"mobileService",j.a.getInstance()),h()(c()(i),"isDestroyed$",new v.a(1)),h()(c()(i),"mobileService",j.a.getInstance()),i.state={isMobile:!1},i}return o()(n,[{key:"componentDidMount",value:function(){var e=this;this.mobileService.isMobile().pipe(Object(w.a)(this.isDestroyed$)).subscribe((function(t){e.setState(M(M({},e.state),{},{isMobile:t}))}))}},{key:"componentWillUnmount",value:function(){this.isDestroyed$.next(),this.isDestroyed$.complete()}},{key:"render",value:function(){return y.a.createElement("a",{className:"app-card ".concat(this.state.isMobile?"mobile":""),href:this.props.url},y.a.createElement("div",{className:"img-wrapper"},y.a.createElement("img",{src:this.props.imgPath,alt:this.props.imgAltText})),y.a.createElement("h3",null,this.props.header),this.props.paragraphs.map((function(e,t){return y.a.createElement("p",{key:t},e)})))}}]),n}(g.Component);n(20),n(85);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d()(this,n)}}var I=function(e){u()(n,e);var t=R(n);function n(e){var i;return r()(this,n),i=t.call(this,e),h()(c()(i),"isDestroyed$",new v.a(1)),h()(c()(i),"mobileService",j.a.getInstance()),i.state={isMobile:!1},i}return o()(n,[{key:"componentDidMount",value:function(){var e=this;this.mobileService.isMobile().pipe(Object(w.a)(this.isDestroyed$),Object(O.a)()).subscribe((function(t){e.setState(N(N({},e.state),{},{isMobile:t}))}))}},{key:"componentWillUnmount",value:function(){this.isDestroyed$.next(),this.isDestroyed$.complete()}},{key:"render",value:function(){return y.a.createElement("div",{className:"layout ".concat(this.state.isMobile?"mobile":"")},y.a.createElement(k.a,null),y.a.createElement("div",{className:"apps-gallery ".concat(this.state.isMobile?"mobile":"")},y.a.createElement("header",null,y.a.createElement("h2",{className:"title"},"apps")),y.a.createElement("main",null,y.a.createElement(S,{header:"tic-metac-toe",paragraphs:["A meta variant of tic-tac-toe featuring 9 boards and special rules."],imgPath:"./assets/icons/times.svg",url:"/apps/tic-metac-toe",imgAltText:"An X used in the game of tic-tac-toe."}))))}}]),n}(g.Component);Object(x.render)(y.a.createElement(y.a.StrictMode,null,y.a.createElement(I,null)),document.getElementById("root"))}});