!function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(p&&p(t);m.length;)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={4:0,6:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;r.push([94,0,1]),n()}({10:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(5),o=n.n(a),r=n(6),i=n.n(r),s=n(1),l=n.n(s),c=n(26),p=n(27);function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw r}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u,h=function(){function e(){var t=this;o()(this,e),l()(this,"isMobileView$",new c.a(1)),new p.a((function(e){var n,a=d(e);try{for(a.s();!(n=a.n()).done;){var o=n.value.contentRect.width;t.isMobileView$.next(o<800)}}catch(e){a.e(e)}finally{a.f()}})).observe(document.body)}return i()(e,[{key:"isMobile",value:function(){return this.isMobileView$.asObservable()}}]),e}(),f={getInstance:function(){return u||(u=new h),u}}},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a);n(20);function r(){return o.a.createElement("a",{href:"https://twitter.com/smzelek/",className:"icon twitter"},o.a.createElement("img",{src:"./assets/icons/twitter.svg",alt:"Visit Steve Zelek on Twitter."}))}},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a);n(20);function r(){return o.a.createElement("a",{href:"https://www.linkedin.com/in/steve-zelek-022903107/",className:"icon linkedin"},o.a.createElement("img",{src:"./assets/icons/linkedin.svg",alt:"Visit Steve Zelek on LinkedIn."}))}},18:function(e,t,n){"use strict";var a=n(4),o=n.n(a),r=n(13),i=n.n(r),s=n(5),l=n.n(s),c=n(6),p=n.n(c),d=n(2),m=n.n(d),u=n(11),h=n.n(u),f=n(12),g=n.n(f),b=n(3),w=n.n(b),y=n(1),x=n.n(y),v=n(0),k=n.n(v),E=n(26),j=n(36),M=n(40),N=n(39),I=n(42),S=n(10),A=(n(28),n(14)),C=n(15);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=w()(e);if(t){var o=w()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return g()(this,n)}}var T=function(e){h()(r,e);var t,n,a=z(r);function r(e){var t;return l()(this,r),t=a.call(this,e),x()(m()(t),"linkWrapperRef",void 0),x()(m()(t),"isDestroyed$",new E.a(1)),x()(m()(t),"onRender$",new j.a),x()(m()(t),"mobileService",S.a.getInstance()),x()(m()(t),"handleNavigation",(function(){t.setState(W(W({},t.state),{},{currentPath:window.location.pathname,isMobileMenuExpanded:!1}))})),x()(m()(t),"isCondensed",(function(){return[/^\/apps\/.+/i].some((function(e){return e.test(t.state.currentPath)}))})),x()(m()(t),"isActive",(function(e){return e.test(t.state.currentPath)})),t.state={isMobile:!1,currentPath:null,isMobileMenuExpanded:!1},t.linkWrapperRef=k.a.createRef(),t}return p()(r,[{key:"componentDidMount",value:function(){var e=this;this.mobileService.isMobile().pipe(Object(M.a)(this.isDestroyed$),Object(N.a)()).subscribe((function(t){e.setState(W(W({},e.state),{},{isMobile:t,isMobileMenuExpanded:!1}))})),window.addEventListener("popstate",this.handleNavigation),this.handleNavigation()}},{key:"componentWillUnmount",value:function(){this.isDestroyed$.next(),this.isDestroyed$.complete(),window.removeEventListener("popstate",this.handleNavigation)}},{key:"handleMenuItemKeydown",value:function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),e.target.click())}},{key:"toggleMobileMenu",value:function(){this.setState(W(W({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}))}},{key:"handleMenuToggleKeydown",value:(n=i()(o.a.mark((function e(t){var n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.setState(W(W({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}),i()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.isMobileMenuExpanded){e.next=5;break}return e.next=3,n.waitForNextRender();case 3:n.linkWrapperRef.current.querySelectorAll("a")[0].focus();case 5:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"waitForNextRender",value:(t=i()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.onRender$.pipe(Object(I.a)(1)).toPromise());case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"navigationItems",value:function(){var e=this;return k.a.createElement("ul",{className:"navigation"},k.a.createElement("li",null,k.a.createElement("a",{href:"/",className:"".concat(this.isActive(/^\/$/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"bio")),k.a.createElement("li",null,k.a.createElement("a",{href:"/apps",className:"".concat(this.isActive(/^\/apps.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"apps")),k.a.createElement("li",null,k.a.createElement("a",{href:"/blog",className:"".concat(this.isActive(/^\/blog.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"blog")))}},{key:"render",value:function(){var e=this;return setTimeout((function(){e.onRender$.next()}),0),k.a.createElement("div",{className:"sidebar ".concat(this.state.isMobile?"mobile":""," ").concat(this.isCondensed()?"condensed":"")},k.a.createElement("div",{className:"identifiers"},k.a.createElement("picture",null,k.a.createElement("source",{srcSet:"\r ./assets/me/me-3x.webp 3x,\r ./assets/me/me-2x.webp 2x,\r ./assets/me/me-1x.webp 1x,\r ",type:"image/webp"}),k.a.createElement("source",{srcSet:"\r ./assets/me/me-3x.jpg 3x,\r ./assets/me/me-2x.jpg 2x,\r ./assets/me/me-1x.jpg 1x,\r ",type:"image/jpeg"}),k.a.createElement("img",{src:"./assets/me/me-1x.jpg",type:"image/jpeg",alt:"A headshot of Steve Zelek."})),k.a.createElement("h1",{className:"name"},"Steve Zelek"),k.a.createElement("p",{className:"title"},"software maker")),k.a.createElement("div",{className:"navigation-wrapper",ref:this.linkWrapperRef},(!this.state.isMobile||this.state.isMobileMenuExpanded)&&this.navigationItems(),k.a.createElement("button",{className:"menu-toggle",type:"button","aria-label":"Show Navigation Menu",onClick:function(){return e.toggleMobileMenu()},onKeyDown:function(t){return e.handleMenuToggleKeydown(t)}},k.a.createElement("img",{src:"./assets/icons/bars.svg",alt:""}))),k.a.createElement("div",{className:"spacer"}),!this.state.isMobile&&k.a.createElement("div",{className:"contact"},k.a.createElement(C.a,null),k.a.createElement(A.a,null)))}}]),r}(v.Component);t.a=T},20:function(e,t,n){var a=n(30);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,o);a.locals&&(e.exports=a.locals)},23:function(e,t,n){var a=n(31);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,o);a.locals&&(e.exports=a.locals)},28:function(e,t,n){var a=n(29);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,o);a.locals&&(e.exports=a.locals)},29:function(e,t,n){(t=n(8)(!1)).push([e.i,".sidebar{z-index:1;width:250px;background:white;flex-shrink:0;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}.sidebar .contact{margin-bottom:20px;display:flex;justify-content:center}.sidebar .navigation{list-style-type:none;margin:0;padding:0}.sidebar .navigation a{height:50px;display:flex;justify-content:center;align-items:center;text-decoration:none;font-size:20px;color:black}.sidebar .navigation a.active{background:#eaf3ff}.sidebar .navigation a:hover,.sidebar .navigation a:focus{outline:none;background:#ecf1f8}.sidebar .navigation a:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.sidebar .spacer{flex-grow:1}.sidebar .identifiers{text-align:center;margin-top:20px;margin-bottom:15px;display:flex;flex-direction:column;align-items:center}.sidebar .identifiers picture{width:150px;height:150px}.sidebar .identifiers img{height:100%;border-radius:50%}.sidebar .identifiers .name{margin-top:5px;color:#465061;font-size:32px;line-height:32px;white-space:nowrap}.sidebar .contact .icon{margin:0 5px}.sidebar:not(.mobile){height:100%}.sidebar:not(.mobile) .menu-toggle{display:none}.mobile.condensed.sidebar .spacer,.mobile.condensed.sidebar .identifiers,.mobile.condensed.sidebar .contact{display:none}.condensed.sidebar:not(.mobile){width:70px}.condensed.sidebar:not(.mobile) .identifiers{display:flex;justify-content:center;margin:10px 0}.condensed.sidebar:not(.mobile) .identifiers picture{width:50px;height:50px}.condensed.sidebar:not(.mobile) .identifiers .name,.condensed.sidebar:not(.mobile) .identifiers .title{display:none}.condensed.sidebar:not(.mobile) .navigation a{font-size:16px}.condensed.sidebar:not(.mobile) .contact{flex-direction:column;align-items:center;margin-bottom:10px}.condensed.sidebar:not(.mobile) .contact .icon{margin:5px 0}.mobile.sidebar{flex-direction:row;justify-content:center;max-width:100%;flex-wrap:wrap;width:100%}.mobile.sidebar .contact{flex-direction:column;justify-content:center;align-items:center;margin:0}.mobile.sidebar .navigation-wrapper{width:100%;display:flex;flex-direction:column}.mobile.sidebar .identifiers{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10px 0px}.mobile.sidebar .identifiers .title{display:none}.mobile.sidebar .identifiers .name{text-transform:lowercase}.mobile.sidebar .menu-toggle{width:100%;border:none;background:none;border-top:2px solid #d6d6d6;height:70px}.mobile.sidebar .menu-toggle:hover,.mobile.sidebar .menu-toggle:focus{background:#ecf1f8;outline:none}.mobile.sidebar .menu-toggle:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.mobile.sidebar .menu-toggle img{width:35px;height:35px}.mobile.sidebar .spacer{display:none}\n",""]),e.exports=t},30:function(e,t,n){(t=n(8)(!1)).push([e.i,"a.icon{display:inline-block;border-radius:5px;width:40px;height:40px}a.icon img{display:block;width:100%;height:100%;margin:0 auto;padding:5px 0;box-sizing:border-box}a.icon.linkedin{background-color:#007bb6}a.icon.linkedin:hover,a.icon.linkedin:focus{outline:none;background:#006a9d}a.icon:focus{box-shadow:0 0 0px 3px #a2c0e6}a.icon.twitter{background-color:#1da1f2}a.icon.twitter:hover,a.icon.twitter:focus{outline:none;background-color:#1a91da}\n",""]),e.exports=t},31:function(e,t,n){(t=n(8)(!1)).push([e.i,'#root{height:100vh}.layout{height:100%;background:#e8e6e5;display:flex}@media only screen and (max-width: 799px){.layout{flex-direction:column;overflow-y:auto}}body{margin:0px;padding:0px;font-family:"Cairo", sans-serif}h1,h2,h3,h4,h5{margin:0;font-weight:normal}h3{font-family:"Cairo", sans-serif;font-size:30px;line-height:40px}p{margin:0}.basic-code{color:#b71900;background:#f3f3f3;border:1px solid gray;padding:1px;border-radius:3px;font-size:14px;margin:0 3px}\n',""]),e.exports=t},34:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=(n(49),{teamwork:{background:"#2b833f",color:"#ffffff"},devops:{background:"#532c91",color:"#ffffff"},frontend:{background:"#007bb6",color:"#ffffff"},design:{background:"#b23675",color:"#ffffff"},backend:{background:"#c94321",color:"#ffffff"}});t.a=function(e){return o.a.createElement("li",{className:"my-tag",style:r[e.name]},e.name)}},43:function(e,t,n){"use strict";n.r(t),n.d(t,"WHY_OUR_COMPANY_META",(function(){return u}));var a=n(0),o=n.n(a),r=n(24),i=n(18),s=n(34),l=(n(23),n(51),n(14)),c=n(15);var p=function(e){return o.a.createElement("div",{className:"layout"},o.a.createElement(i.a,null),o.a.createElement("div",{className:"blog-post-wrapper"},o.a.createElement("div",{className:"blog-post"},o.a.createElement("header",null,o.a.createElement("div",{className:"img-wrapper"},o.a.createElement("img",{src:e.meta.img})),o.a.createElement("div",{className:"text-wrapper"},o.a.createElement("h3",{className:"title"},e.meta.title),o.a.createElement("p",{className:"meta"},e.meta.date," · ",e.meta.length),o.a.createElement("ul",{className:"tags"},e.meta.tags.map((function(e){return o.a.createElement(s.a,{key:e,name:e})}))))),o.a.createElement("main",null,e.children),o.a.createElement("footer",null,o.a.createElement("div",{className:"simple-sign-off"},o.a.createElement("h4",null,"- steve zelek")),o.a.createElement("div",{className:"detailed-sign-off"},o.a.createElement("picture",null,o.a.createElement("source",{srcSet:"\r ./assets/me/me-3x.webp 3x,\r ./assets/me/me-2x.webp 2x,\r ./assets/me/me-1x.webp 1x,\r ",type:"image/webp"}),o.a.createElement("source",{srcSet:"\r ./assets/me/me-3x.jpg 3x,\r ./assets/me/me-2x.jpg 2x,\r ./assets/me/me-1x.jpg 1x,\r ",type:"image/jpeg"}),o.a.createElement("img",{src:"./assets/me/me-1x.jpg",type:"image/jpeg",alt:"A headshot of Steve Zelek."})),o.a.createElement("h4",null,"steve zelek"),o.a.createElement("h5",null,"software maker"),o.a.createElement("div",{className:"contact"},o.a.createElement(c.a,null),o.a.createElement(l.a,null)))))))},d=(n(53),n(48)),m=n.n(d),u=(n(57),n(58),n(59),n(60),n(61),n(62),n(63),n(64),n(65),{title:"Why our company needed web components – and yours might too",img:"assets/web-components-logo.png",imgAltText:"A logo for Web Components technology.",date:"Jul 8th, 2020",length:"10 min read",tags:["frontend","devops"],description:"\n        Is it possible to create a shared component library that supports every framework our teams choose,\n        without ever needing to update legacy apps? That's the riddle that a large company like ours faces.\n    ",url:"/blog/why-our-company-needed-web-components"});function h(){return setTimeout((function(){m.a.highlightAll()}),0),o.a.createElement(p,{meta:u},o.a.createElement("h4",null,"A little bit of background"),o.a.createElement("p",null,"Hi! I'm Steve. I'm a full stack developer at Chatham Financial, where I've worked on webapps for the past 3 years. Chatham Financial is a global financial advisory and tech firm that specializes in debt and derivatives. We're not a hedge fund; we don't invest. We provide tools and expertise to help our clients manage their businesses' risk. A lot of those clients are big international firms you have definitely heard of. A lot of them are regional banks that you definitely haven't heard of. Overall, our 700 person company handles $500 billion in transaction volume."),o.a.createElement("p",null,"On the tech side, we have over 150 employees all across the globe – Pennsylvania, Colorado, and even Poland. We primarily work on Chatham's SaaS product: ChathamDirect. It's a platform comprised of dozens of web apps that each fulfill a different niche of our complex financial space. Together, they form ",o.a.createElement("a",{href:"https://resources.chathamfinancial.com/chathamdirect/financial-risk-management-platform"}," ChathamDirect "),"."),o.a.createElement("p",null,'Okay, that\'s enough background. We\'ll leave the marketing pitch behind and put on our tech hats now. When I say "dozens of apps", you say "maintenance!"'),o.a.createElement("h4",null,"Maintaining dozens of apps is hard"),o.a.createElement("p",null,"If your tech shop is anything like ours, you quickly got on board the framework train for building web apps. What's not to love? Reliable updates, solid feature sets, clear patterns, and strong communities. Create React App and the Angular CLI are both powerful tools for building web apps, offering out-of-the-box best practices and the freedom to tinker and optimize to your hearts content. And if you only ever wrote one web app, finished it, and never came back to it – well, that would be the happy ending to the story I'm telling."),o.a.createElement("p",null,"But what if you're like us? With dozens of apps, we'd like to share some code. We have a thorough component design library at Chatham, and it would be nice if we could turn those into reusable HTML components. Then our dozens of apps would have consistent look-and-feel, and ChathamDirect would seem like a single application."),o.a.createElement("p",null,"There's just two problems."),o.a.createElement("h4",null,"Problem 1: Frameworks"),o.a.createElement("p",null,"I mentioned earlier that React and Angular are both wonderful frameworks for web app development. Well, that's great ... and not so great. How do you pick between them? I won't deliberate over their individual merits here. That's a thankless task consigned to the legions of tech bloggers. Here, I only dip my toe into the debate, in order to proclaim that all should be free to choose their favorite framework. At Chatham, we've mostly chosen Angular. But we impose few restrictions on technical decisions, and so there are several apps written using React, and Vue, as well."),o.a.createElement("p",null,"How can we create a component library that supports each framework? Most framework apps are compiled in some way, or require shipping with a compiler or interpreter. Suffice to say, frameworks don't play nicely together."),o.a.createElement("p",null,"And what if we bet on the wrong horse with Angular? The elephant graveyard of past web technologies regards us balefully on all sides as we peruse the internet over a morning coffee."),o.a.createElement("p",null,"But that's not all…"),o.a.createElement("h4",null,"Problem 2: Versioning"),o.a.createElement("p",null,"If incompatibility between frameworks were not a large enough thorn in our side, we are confronted with another issue. Breaking changes between major versions are common knowledge. If you started writing Angular code in 2015, you may have been dismayed by the 2016 release of Angular 2, which had an unapologetic policy of no backward compatibility. Even in less extreme circumstances, anyone who has been responsible for upgrading an app from Angular 5 to 6 will remember the woes brought on by their RxJS major version bump."),o.a.createElement("p",null,"For any sufficiently large web app, a major version increase is bittersweet news."),o.a.createElement("p",null,"Google, for their part, is not shy about their intention to forge bravely onwards into the web development frontier; whether you come with them or not. The ",o.a.createElement("a",{href:"https://angular.io/guide/releases#support-policy-and-schedule"}," official Angular support policy")," lists long term support as a mere 18 months per major version. React has no official policy, but the co-author of Create React App has said that there is (almost) ",o.a.createElement("a",{href:"https://github.com/reactjs/reactjs.org/issues/1745"}," no long term support ")," for any former major versions."),o.a.createElement("h4",null,"The solution that wouldn't work"),o.a.createElement("p",null,"So with that knowledge in hand, let's consider the situation at our company again. Dozens of web apps, and new major versions popping up about once a year. As we develop new apps, we inevitably leave some behind on old versions of our chosen frameworks. Is the solution so draconian as to mandate that we must keep every web app on the latest version of Angular and never deviate? If you think so, try running your proposal by a project manager and check their pulse."),o.a.createElement("p",null,"If we standardized and updated every app, it would require rewriting legacy code that hasn't seen the light of a text editor in years. Besides being a terrible cost-benefit proposition, it's not future-proof. I make no promises, but it's a safe bet that by the time we all go into retirement, Angular will hobble along with us as we discuss the fancy new tools the kids are using. If you don't believe me, check out ",o.a.createElement("a",{href:"https://2019.stateofjs.com/front-end-frameworks/"},"this trendline")," for developer interest in Angular."),o.a.createElement("p",null,"At Chatham, we believe in giving our teams the freedom to make their own technical decisions."),o.a.createElement("p",null,"So, is it possible for us to create a shared component library that supports every framework our teams choose, without ever needing to update legacy apps? It almost sounds too good to be true. That's the riddle that a large company like ours faces."),o.a.createElement("p",null,"Luckily, this riddle has an answer!"),o.a.createElement("h4",null,"The answer we've been waiting for"),o.a.createElement("p",null,"In a sense, HTML is already a shared component library used by every web developer. When you write the tag ",o.a.createElement("code",{className:"basic-code"},"<input/>")," on the page, you know what to expect (with minor style differences). A major benefit of component-based frameworks like Angular and React is that you can write and reuse custom elements like ",o.a.createElement("code",{className:"basic-code"},"<special-fancy-input/>"),". The catch is that those custom elements only work within the framework's compiler, or when you ship the framework alongside them."),o.a.createElement("p",null,"But what if browsers provided their own API for defining custom elements, without needing Angular and React?"),o.a.createElement("p",null,"In 2011, Alex Russell presented a proposal for such a technology: ",o.a.createElement("a",{href:"https://www.webcomponents.org/introduction"},"Web Components"),". It has been a long journey since then. Browsers were slow to add support for this new standard. At long last, in January of 2020, Microsoft released version 79 of Edge, bringing native support for Web Components to every mainstream evergreen browser."),o.a.createElement("p",null,"This means that if you write a library using Web Components, you get elements that feel like native HTML and work in ",o.a.createElement("a",{href:"https://caniuse.com/#feat=custom-elementsv1"},"every browser")," and ",o.a.createElement("a",{href:"https://custom-elements-everywhere.com/"},"every framework"),". Since Web Components don't rely on a framework, we no longer need to worry about framework and version compatibility. Talk about two birds with one stone! Often, in web development, it can feel like browsers are our enemies in a battle for consistent layouts. But,  refreshingly, browsers have cut this Gordian knot for us. Web Component technology paves our path to simple shared components."),o.a.createElement("p",null,"The best part? Clever developers have already created tools to generate standards-based Web Components for us. If you've ever used a modern framework, you can write a Web Component too."),o.a.createElement("h4",null,"An example you can try"),o.a.createElement("p",null,"One great option for building hassle-free Web Components is by using a compiler called ",o.a.createElement("a",{href:"https://stenciljs.com/docs/introduction"},"StencilJS"),". StencilJS uses familiar JSX syntax that looks and feels like writing code in React. Here's an example."),o.a.createElement("div",{className:"code-block"},o.a.createElement("pre",{className:"line-numbers"},o.a.createElement("code",{className:"language-tsx"},"import { Component, h } from '@stencil/core';\n\n@Component({\n    tag: 'my-component',\n    styleUrl: 'my-component.css',\n    shadow: true\n})\nexport class MyComponent {\n    render() {\n        return (\n            <button>\n                Wonderful Web Component\n            </button>\n        );\n    }\n}")),o.a.createElement("p",{className:"caption"},"Check out ",o.a.createElement("a",{href:"https://gitlab.com/smzelek/example-web-component"},"the full code")," for this example component.")),o.a.createElement("p",null,"Once you've built your Stencil components, you can distribute them as NPM packages or using ",o.a.createElement("code",{className:"basic-code"},"<script>")," tags. At Chatham, we're distributing our Stencil component library using script tags. The huge benefit of this approach is that we can add a versioning scheme to the script tags. Whenever we make minor and patch versions changes to the component library, every single web app immediately gets the latest changes."),o.a.createElement("p",null,"Forget the days of updating, rebuilding, and redeploying every app. Now all it takes is a browser refresh!"),o.a.createElement("p",null,"You can try using my example Web Component in any app via the script tag method. Below is the only code you need to add to your app."),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-html"},'<head>\n    ...\n    <script type="module" src="https://smzelek.gitlab.io/example-web-component/example-web-component/example-web-component.esm.js">\n    <\/script>\n    ...\n</head>\n\n<my-component></my-component>')),o.a.createElement("p",null,"If everything went well, you should see a shiny blue button added to your application."),o.a.createElement("iframe",{scrolling:"no",title:"MWKVxwj",src:"https://codepen.io/Kelez/embed/MWKVxwj?height=341&theme-id=dark&default-tab=result",frameBorder:"no",allowtransparency:"true",allowFullScreen:!0},"See the Pen ",o.a.createElement("a",{href:"https://codepen.io/Kelez/pen/MWKVxwj"},"MWKVxwj")," by Steve Zelek (",o.a.createElement("a",{href:"https://codepen.io/Kelez"},"@Kelez"),") on ",o.a.createElement("a",{href:"https://codepen.io"},"CodePen"),"."),o.a.createElement("p",null,"Web Components! They're just that simple."),o.a.createElement("h4",null,"Conclusion"),o.a.createElement("p",null,"Let's revisit the problems we talked about earlier."),o.a.createElement("p",null,"Chatham has dozens of apps that make up our ChathamDirect platform. We wanted to create a shared component library that could be used by every app. If that worked, then we could finally have a consistent UI across Chatham."),o.a.createElement("p",null,"The biggest problem standing in our way was that our apps run on different frameworks, and many different versions of those frameworks. In the worst-case scenario, we would've needed to keep every app on one framework, and one version. The maintenance and refactoring required would have made that impossible. Plus, we like having the freedom to use different frameworks for different use cases."),o.a.createElement("p",null,"Instead of requiring every app to be in sync, we decided to make our library compatible with any app."),o.a.createElement("p",null,"By using the new technology of Web Components, we let browsers do the hard work for us. We used StencilJS, which made it simple and familiar to write the components. The Web Components we created are compatible with every framework, regardless of their version."),o.a.createElement("p",null,"Chatham finally has a shared component library that supports every framework our teams choose, without ever needing to update legacy apps."),o.a.createElement("p",null,"If your company is anything like ours, consider giving Web Components a try. It could be the best tech decision you make all year."))}Object(r.render)(o.a.createElement(a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root"))},49:function(e,t,n){var a=n(50);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,o);a.locals&&(e.exports=a.locals)},50:function(e,t,n){(t=n(8)(!1)).push([e.i,".my-tag{background:black;color:white;border-radius:5px;padding:0 7px;margin:0;margin-right:10px}\n",""]),e.exports=t},51:function(e,t,n){var a=n(52);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,o);a.locals&&(e.exports=a.locals)},52:function(e,t,n){(t=n(8)(!1)).push([e.i,".blog-post-wrapper{width:100%;box-sizing:border-box}.blog-post-wrapper .blog-post{margin:0 auto;max-width:1200px;background:white}.blog-post-wrapper header{display:flex;flex-direction:column}.blog-post-wrapper .img-wrapper{display:flex;justify-content:center;background:#2f2f47}.blog-post-wrapper img{height:225px}.blog-post-wrapper .text-wrapper{padding:0 30px}.blog-post-wrapper .title{font-size:40px;line-height:40px;margin-top:30px}.blog-post-wrapper .meta{margin-top:10px}.blog-post-wrapper .tags{margin:0;list-style-type:none;padding:0;display:flex;margin-top:10px}.blog-post-wrapper .tags .my-tag{margin-right:10px}.blog-post-wrapper h4{margin-top:25px;font-size:30px;line-height:30px}.blog-post-wrapper p{max-width:900px;font-size:18px;margin-top:20px}.blog-post-wrapper h4+p{margin-top:10px}.blog-post-wrapper main{padding:0 30px}.blog-post-wrapper main a{background-color:#eaf3ff;border-bottom:1px solid #a9afb7;color:#1a1a1a;text-decoration:none;line-height:25px;display:inline-block}.blog-post-wrapper main a:hover{background-color:#ecf1f8;border-bottom-color:#1a1a1a}.blog-post-wrapper footer{padding:0 30px;padding-bottom:50px}.blog-post-wrapper footer .detailed-sign-off{display:flex;flex-direction:column;align-items:center;margin-top:20px}.blog-post-wrapper footer .detailed-sign-off picture{height:100px}.blog-post-wrapper footer .detailed-sign-off img{height:100%;border-radius:50%}.blog-post-wrapper footer .detailed-sign-off h4{margin-top:0}.blog-post-wrapper footer .detailed-sign-off h5{font-size:16px}.blog-post-wrapper footer .detailed-sign-off .contact{margin-top:10px}.blog-post-wrapper footer .detailed-sign-off .contact .icon{margin:0 5px}@media only screen and (min-width: 800px){.blog-post-wrapper footer .detailed-sign-off{display:none}}@media only screen and (max-width: 799px){.blog-post-wrapper footer .simple-sign-off{display:none}}@media only screen and (min-width: 800px){.blog-post-wrapper{padding:20px;overflow-y:auto}.blog-post-wrapper img{height:350px}}@media only screen and (min-width: 1280px){.blog-post-wrapper{padding:60px}}\n",""]),e.exports=t},53:function(e,t,n){var a=n(54);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,o);a.locals&&(e.exports=a.locals)},54:function(e,t,n){(t=n(8)(!1)).push([e.i,".code-block{margin-top:20px;display:inline-flex;flex-direction:column;justify-content:center}.code-block pre{max-width:100%;box-sizing:border-box;display:inline-block;font-size:13px !important;margin:0 !important;white-space:pre-wrap !important;border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}.code-block .caption{background:#f6f6f6;border:1px solid #a8a8a8;padding:5px;margin:0;font-size:13px;text-align:center;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-top:0}iframe{width:100%;max-width:340px;height:340px;margin-top:20px;margin-bottom:-10px}\n",""]),e.exports=t},80:function(e,t,n){var a=n(81);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,o);a.locals&&(e.exports=a.locals)},81:function(e,t,n){(t=n(8)(!1)).push([e.i,".blog-card-wrapper{width:100%;display:flex;justify-content:center}.blog-card{text-decoration:none;display:inline-flex;flex-direction:column;max-width:650px;background:white}.blog-card h3{font-weight:bold;text-align:left;margin-bottom:10px}.blog-card h3,.blog-card p{color:#465061}.blog-card p.description{font-size:18px;line-height:28px}.blog-card p.meta{font-size:16px;line-height:16px;margin-top:10px;margin-bottom:15px}.blog-card .text-wrapper{padding:20px}.blog-card .img-wrapper{background:#27263f;display:flex;justify-content:center}.blog-card .img-wrapper img{height:175px;width:auto}.blog-card:focus-within{box-shadow:0 0 0px 3px #a2c0e6}.blog-card:focus,.blog-card:hover,.blog-card:focus-within{background:#ecf1f8;outline:none}.blog-card:focus h3,.blog-card:hover h3,.blog-card:focus-within h3{text-decoration:underline}.blog-card .tags{list-style-type:none;margin:0;padding:0;display:flex;width:100%;justify-content:flex-start}.blog-card .tags .my-tag{margin-right:10px}@media only screen and (max-width: 1279px){.blog-card-wrapper{padding:30px;padding-bottom:0px}.blog-card-wrapper:last-of-type{padding-bottom:30px}.blog-card-wrapper .blog-card .img-wrapper img{height:250px}}@media only screen and (max-width: 799px){.blog-card-wrapper .blog-card .img-wrapper img{height:175px}.description{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media only screen and (max-width: 499px){.blog-card-wrapper .description{display:none}.blog-card-wrapper h3{text-align:center}.blog-card-wrapper .meta{text-align:center}.blog-card-wrapper .tags{justify-content:center}}@media only screen and (min-width: 1280px){.blog-card-wrapper{display:flex;width:calc(100% / 3);padding:15px;box-sizing:border-box}.blog-card-wrapper:first-of-type{width:100%}.blog-card-wrapper:first-of-type img{height:250px}.description{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media only screen and (min-width: 1920px){.description{-webkit-line-clamp:initial;-webkit-box-orient:initial;display:initial;overflow:initial}}\n",""]),e.exports=t},84:function(e,t,n){var a=n(85);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(a,o);a.locals&&(e.exports=a.locals)},85:function(e,t,n){(t=n(8)(!1)).push([e.i,".blog{display:flex;flex-direction:column;width:100%;min-width:1px}.blog header{min-height:80px;max-height:80px;display:flex;align-items:center;background-color:#7897BF}.blog header .title{font-size:48px;line-height:48px;margin:0;padding-left:32px;font-family:Cairo, sans-serif;color:#fff}.blog main{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}@media only screen and (max-width: 799px){.blog header{justify-content:center}.blog header .title{padding:0}.blog main{justify-content:center}}@media only screen and (min-width: 800px){.blog main{overflow-y:auto}}@media only screen and (min-width: 1280px){.blog main{padding:15px;justify-content:unset}}\n",""]),e.exports=t},94:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),i=n(18),s=(n(80),n(34));var l=function(e){return o.a.createElement("div",{className:"blog-card-wrapper"},o.a.createElement("a",{className:"blog-card",href:e.meta.url},o.a.createElement("div",{className:"img-wrapper"},o.a.createElement("img",{src:e.meta.img,alt:e.meta.imgAltText})),o.a.createElement("div",{className:"text-wrapper"},o.a.createElement("h3",null,e.meta.title),o.a.createElement("p",{className:"description"},e.meta.description),o.a.createElement("p",{className:"meta"},"".concat(e.meta.date," · ").concat(e.meta.length)),o.a.createElement("ul",{className:"tags"},e.meta.tags.map((function(e){return o.a.createElement(s.a,{key:e,name:e})}))))))},c=n(43),p=(n(23),n(84),[c.WHY_OUR_COMPANY_META]);function d(){return o.a.createElement("div",{className:"layout"},o.a.createElement(i.a,null),o.a.createElement("div",{className:"blog"},o.a.createElement("header",null,o.a.createElement("h2",{className:"title"},"blog")),o.a.createElement("main",null,p.map((function(e,t){return o.a.createElement(l,{key:t,meta:e})})))))}Object(r.render)(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root"))}});