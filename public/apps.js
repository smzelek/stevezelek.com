!function(e){function t(t){for(var i,o,s=t[0],c=t[1],p=t[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(l&&l(t);u.length;)u.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={2:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var l=c;r.push([78,0]),n()}({10:function(e,t,n){"use strict";var i=n(2),a=n.n(i),r=n(6),o=n.n(r),s=n(14),c=n.n(s),p=n(15),l=n.n(p),d=n(5),u=n.n(d),f=n(16),h=n.n(f),b=n(17),g=n.n(b),m=n(9),x=n.n(m),y=n(1),v=n.n(y),w=n(0),j=n(31),O=n(32),k=(n(20),n(7)),M=n(8);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=x()(e);if(t){var a=x()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return g()(this,n)}}var E=function(e){h()(r,e);var t,n,i=S(r);function r(e){var t;return c()(this,r),t=i.call(this,e),v()(u()(t),"linkWrapperRef",void 0),v()(u()(t),"onRender$",new j.a),v()(u()(t),"handleNavigation",(function(){t.setState(P(P({},t.state),{},{currentPath:window.location.pathname,isMobileMenuExpanded:!1}))})),v()(u()(t),"isCondensed",(function(){return[/^\/apps\/.+/i].some((function(e){return e.test(t.state.currentPath)}))})),v()(u()(t),"isActive",(function(e){return e.test(t.state.currentPath)})),t.state={currentPath:null,isMobileMenuExpanded:!1},t.linkWrapperRef=Object(w.b)(),t}return l()(r,[{key:"componentDidMount",value:function(){window.addEventListener("popstate",this.handleNavigation),this.handleNavigation()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("popstate",this.handleNavigation)}},{key:"handleMenuItemKeydown",value:function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),e.target.click())}},{key:"toggleMobileMenu",value:function(){this.setState(P(P({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}))}},{key:"handleMenuToggleKeydown",value:(n=o()(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.setState(P(P({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}),o()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.isMobileMenuExpanded){e.next=5;break}return e.next=3,n.waitForNextRender();case 3:n.linkWrapperRef.current.querySelectorAll("a")[0].focus();case 5:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"waitForNextRender",value:(t=o()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.onRender$.pipe(Object(O.a)(1)).toPromise());case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this;return setTimeout((function(){e.onRender$.next()}),0),Object(w.c)("div",{className:"sidebar ".concat(this.isCondensed()?"condensed":"")},Object(w.c)("div",{className:"identifiers"},Object(w.c)("picture",null,Object(w.c)("source",{srcSet:"\r ./assets/me/me-3x.webp 3x,\r ./assets/me/me-2x.webp 2x,\r ./assets/me/me-1x.webp 1x,\r ",type:"image/webp"}),Object(w.c)("source",{srcSet:"\r ./assets/me/me-3x.jpg 3x,\r ./assets/me/me-2x.jpg 2x,\r ./assets/me/me-1x.jpg 1x,\r ",type:"image/jpeg"}),Object(w.c)("img",{src:"./assets/me/me-1x.jpg",type:"image/jpeg",alt:"A headshot of Steve Zelek."})),Object(w.c)("h1",{className:"name"},"Steve Zelek"),Object(w.c)("p",{className:"title"},"software maker")),Object(w.c)("div",{className:"navigation-wrapper",ref:this.linkWrapperRef},Object(w.c)("ul",{className:"navigation ".concat(this.state.isMobileMenuExpanded?"mobile-expanded":"")},Object(w.c)("li",null,Object(w.c)("a",{href:"/",className:"".concat(this.isActive(/^\/$/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"bio")),Object(w.c)("li",null,Object(w.c)("a",{href:"/apps",className:"".concat(this.isActive(/^\/apps.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"apps")),Object(w.c)("li",null,Object(w.c)("a",{href:"/blog",className:"".concat(this.isActive(/^\/blog.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"blog"))),Object(w.c)("button",{className:"menu-toggle",type:"button","aria-label":"Show Navigation Menu",onClick:function(){return e.toggleMobileMenu()},onKeyDown:function(t){return e.handleMenuToggleKeydown(t)}},Object(w.c)("img",{src:"./assets/icons/bars.svg",alt:""}))),Object(w.c)("div",{className:"spacer"}),Object(w.c)("div",{className:"contact"},Object(w.c)(M.a,null),Object(w.c)(k.a,null)))}}]),r}(w.a);t.a=E},11:function(e,t,n){var i=n(22);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,a);i.locals&&(e.exports=i.locals)},13:function(e,t,n){var i=n(23);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,a);i.locals&&(e.exports=i.locals)},20:function(e,t,n){var i=n(21);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,a);i.locals&&(e.exports=i.locals)},21:function(e,t,n){(t=n(3)(!1)).push([e.i,".sidebar{z-index:1;width:250px;background:white;flex-shrink:0;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}.sidebar .contact{margin-bottom:20px;display:flex;justify-content:center}.sidebar .navigation{list-style-type:none;margin:0;padding:0}.sidebar .navigation a{height:50px;display:flex;justify-content:center;align-items:center;text-decoration:none;font-size:20px;color:black}.sidebar .navigation a.active{background:#eaf3ff}.sidebar .navigation a:hover,.sidebar .navigation a:focus{outline:none;background:#ecf1f8}.sidebar .navigation a:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.sidebar .spacer{flex-grow:1}.sidebar .identifiers{text-align:center;margin-top:20px;margin-bottom:15px;display:flex;flex-direction:column;align-items:center}.sidebar .identifiers picture{width:150px;height:150px}.sidebar .identifiers img{height:100%;border-radius:50%}.sidebar .identifiers .name{margin-top:5px;color:#465061;font-size:32px;line-height:32px;white-space:nowrap}.sidebar .contact .icon{margin:0 5px}@media only screen and (min-width: 800px){.sidebar{height:100%}.sidebar .menu-toggle{display:none}}@media only screen and (max-width: 799px){.condensed.sidebar .spacer,.condensed.sidebar .identifiers{display:none}}@media only screen and (min-width: 800px){.condensed.sidebar{width:70px}.condensed.sidebar .identifiers{display:flex;justify-content:center;margin:10px 0}.condensed.sidebar .identifiers picture{width:50px;height:50px}.condensed.sidebar .identifiers .name,.condensed.sidebar .identifiers .title{display:none}.condensed.sidebar .navigation a{font-size:16px}.condensed.sidebar .contact{flex-direction:column;align-items:center;margin-bottom:10px}.condensed.sidebar .contact .icon{margin:5px 0}}@media only screen and (max-width: 799px){.sidebar{flex-direction:row;justify-content:center;max-width:100%;flex-wrap:wrap;width:100%}.sidebar .contact{display:none}.sidebar .navigation-wrapper{width:100%;display:flex;flex-direction:column}.sidebar .navigation{display:none}.sidebar .mobile-expanded{display:block}.sidebar .identifiers{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10px 0px}.sidebar .identifiers .title{display:none}.sidebar .identifiers .name{text-transform:lowercase}.sidebar .menu-toggle{width:100%;border:none;background:none;border-top:2px solid #d6d6d6;height:70px}.sidebar .menu-toggle:hover,.sidebar .menu-toggle:focus{background:#ecf1f8;outline:none}.sidebar .menu-toggle:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.sidebar .menu-toggle img{width:35px;height:35px}.sidebar .spacer{display:none}}\n",""]),e.exports=t},22:function(e,t,n){(t=n(3)(!1)).push([e.i,"a.icon{display:inline-block;border-radius:5px;width:40px;height:40px}a.icon img{display:block;width:100%;height:100%;margin:0 auto;padding:5px 0;box-sizing:border-box}a.icon.linkedin{background-color:#007bb6}a.icon.linkedin:hover,a.icon.linkedin:focus{outline:none;background:#006a9d}a.icon:focus{box-shadow:0 0 0px 3px #a2c0e6}a.icon.twitter{background-color:#1da1f2}a.icon.twitter:hover,a.icon.twitter:focus{outline:none;background-color:#1a91da}\n",""]),e.exports=t},23:function(e,t,n){(t=n(3)(!1)).push([e.i,'.layout{background:#e8e6e5;display:flex}@media only screen and (max-width: 799px){.layout{flex-direction:column;overflow-y:auto}}@media only screen and (min-width: 800px){.layout{height:100%}}body{margin:0px;padding:0px;font-family:"Cairo", sans-serif;height:100vh}h1,h2,h3,h4,h5{margin:0;font-weight:normal}h3{font-family:"Cairo", sans-serif;font-size:30px;line-height:40px}p{margin:0}.basic-code{color:#b71900;background:#f3f3f3;border:1px solid gray;padding:1px;border-radius:3px;font-size:14px;margin:0 3px}\n',""]),e.exports=t},69:function(e,t,n){var i=n(70);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,a);i.locals&&(e.exports=i.locals)},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0);n(11);function a(){return Object(i.c)("a",{href:"https://twitter.com/smzelek/",className:"icon twitter"},Object(i.c)("img",{src:"./assets/icons/twitter.svg",alt:"Visit Steve Zelek on Twitter."}))}},70:function(e,t,n){(t=n(3)(!1)).push([e.i,".app-card{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box;padding:30px;background:white;text-align:center;text-decoration:none}.app-card h3,.app-card p{color:#465061}.app-card p{margin-top:10px;font-size:18px;line-height:33px}.app-card .img-wrapper{height:100%;width:100%;min-height:1px;min-width:1px;display:flex;justify-content:center;max-height:100px;max-width:100px}.app-card:focus-within{box-shadow:0 0 0px 3px #a2c0e6 inset}.app-card:focus,.app-card:hover,.app-card:focus-within{background:#ecf1f8;outline:none}.app-card:focus h3,.app-card:hover h3,.app-card:focus-within h3{text-decoration:underline}\n",""]),e.exports=t},71:function(e,t,n){var i=n(72);"string"==typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,a);i.locals&&(e.exports=i.locals)},72:function(e,t,n){(t=n(3)(!1)).push([e.i,".apps-gallery{display:flex;flex-direction:column;width:100%;min-width:1px}.apps-gallery header{min-height:80px;max-height:80px;display:flex;align-items:center;background-color:#7897BF}.apps-gallery header .title{font-size:48px;line-height:48px;margin:0;padding-left:32px;font-family:Cairo, sans-serif;color:#fff}.apps-gallery main{display:flex;flex-wrap:wrap;padding:30px}.apps-gallery .app-card{max-height:300px;max-width:300px;margin:30px}@media only screen and (min-width: 800px){.apps-gallery main{overflow-y:auto}}@media only screen and (max-width: 799px){.apps-gallery header{justify-content:center}.apps-gallery header .title{padding:0}.apps-gallery main{justify-content:center}}\n",""]),e.exports=t},78:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(10);n(69);function r(){return Object(i.c)("a",{className:"app-card",href:this.props.url},Object(i.c)("div",{className:"img-wrapper"},Object(i.c)("img",{src:this.props.imgPath,alt:this.props.imgAltText})),Object(i.c)("h3",null,this.props.header),this.props.paragraphs.map((function(e,t){return Object(i.c)("p",{key:t},e)})))}n(13),n(71);Object(i.d)(Object(i.c)((function(){return Object(i.c)("div",{className:"layout"},Object(i.c)(a.a,null),Object(i.c)("div",{className:"apps-gallery"},Object(i.c)("header",null,Object(i.c)("h2",{className:"title"},"apps")),Object(i.c)("main",null,Object(i.c)(r,{header:"tic-metac-toe",paragraphs:["A meta variant of tic-tac-toe featuring 9 boards and special rules."],imgPath:"./assets/icons/times.svg",url:"/apps/tic-metac-toe",imgAltText:"An X used in the game of tic-tac-toe."}))))}),null),document.body)},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0);n(11);function a(){return Object(i.c)("a",{href:"https://www.linkedin.com/in/steve-zelek-022903107/",className:"icon linkedin"},Object(i.c)("img",{src:"./assets/icons/linkedin.svg",alt:"Visit Steve Zelek on LinkedIn."}))}}});