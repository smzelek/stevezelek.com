!function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(p&&p(t);u.length;)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={4:0,6:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;i.push([79,0,1]),n()}([,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0);n(11);function a(){return Object(o.c)("a",{href:"https://twitter.com/smzelek/",className:"icon twitter"},Object(o.c)("img",{src:"./assets/icons/twitter.svg",alt:"Steve Zelek's' Twitter"}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0);n(11);function a(){return Object(o.c)("a",{href:"https://www.linkedin.com/in/steve-zelek-022903107/",className:"icon linkedin"},Object(o.c)("img",{src:"./assets/icons/linkedin.svg",alt:"Steve Zelek's LinkedIn"}))}},,function(e,t,n){"use strict";var o=n(2),a=n.n(o),i=n(6),r=n.n(i),s=n(14),c=n.n(s),l=n(15),p=n.n(l),d=n(5),u=n.n(d),h=n(16),m=n.n(h),b=n(17),f=n.n(b),g=n(9),w=n.n(g),y=n(1),x=n.n(y),v=n(0),j=n(31),O=n(32),k=(n(20),n(7)),N=n(8);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){x()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=w()(e);if(t){var a=w()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return f()(this,n)}}var I=function(e){m()(i,e);var t,n,o=M(i);function i(e){var t;return c()(this,i),t=o.call(this,e),x()(u()(t),"linkWrapperRef",void 0),x()(u()(t),"onRender$",new j.a),x()(u()(t),"handleNavigation",(function(){t.setState(A(A({},t.state),{},{currentPath:window.location.pathname,isMobileMenuExpanded:!1}))})),x()(u()(t),"isCondensed",(function(){return[/^\/apps\/.+/i].some((function(e){return e.test(t.state.currentPath)}))})),x()(u()(t),"isActive",(function(e){return e.test(t.state.currentPath)})),t.state={currentPath:null,isMobileMenuExpanded:!1},t.linkWrapperRef=Object(v.b)(),t}return p()(i,[{key:"componentDidMount",value:function(){window.addEventListener("popstate",this.handleNavigation),this.handleNavigation()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("popstate",this.handleNavigation)}},{key:"handleMenuItemKeydown",value:function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),e.target.click())}},{key:"toggleMobileMenu",value:function(){this.setState(A(A({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}))}},{key:"handleMenuToggleKeydown",value:(n=r()(a.a.mark((function e(t){var n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.setState(A(A({},this.state),{},{isMobileMenuExpanded:!this.state.isMobileMenuExpanded}),r()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.isMobileMenuExpanded){e.next=5;break}return e.next=3,n.waitForNextRender();case 3:n.linkWrapperRef.current.querySelectorAll("a")[0].focus();case 5:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"waitForNextRender",value:(t=r()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.onRender$.pipe(Object(O.a)(1)).toPromise());case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this;return setTimeout((function(){e.onRender$.next()}),0),Object(v.c)("div",{className:"sidebar ".concat(this.isCondensed()?"condensed":"")},Object(v.c)("div",{className:"identifiers"},Object(v.c)("picture",null,Object(v.c)("source",{srcSet:" ./assets/me/me-3x.jpg 3x, ./assets/me/me-2x.jpg 2x, ./assets/me/me-1x.jpg 1x, ",type:"image/jpeg"}),Object(v.c)("img",{src:"./assets/me/me-1x.jpg",type:"image/jpeg",alt:"A headshot of Steve Zelek."})),Object(v.c)("h1",{className:"name"},"Steve Zelek"),Object(v.c)("p",{className:"title"},"software maker")),Object(v.c)("div",{className:"navigation-wrapper",ref:this.linkWrapperRef},Object(v.c)("ul",{className:"navigation ".concat(this.state.isMobileMenuExpanded?"mobile-expanded":"")},Object(v.c)("li",null,Object(v.c)("a",{href:"/",className:"".concat(this.isActive(/^\/$/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"bio")),Object(v.c)("li",null,Object(v.c)("a",{href:"/apps",className:"".concat(this.isActive(/^\/apps.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"apps")),Object(v.c)("li",null,Object(v.c)("a",{href:"/blog",className:"".concat(this.isActive(/^\/blog.*/i)?"active":""),onKeyDown:function(t){return e.handleMenuItemKeydown(t)}},"blog"))),Object(v.c)("button",{className:"menu-toggle",type:"button","aria-label":"Show Navigation Menu",onClick:function(){return e.toggleMobileMenu()},onKeyDown:function(t){return e.handleMenuToggleKeydown(t)}},Object(v.c)("img",{src:"./assets/icons/bars.svg",alt:""}))),Object(v.c)("div",{className:"spacer"}),Object(v.c)("div",{className:"contact"},Object(v.c)(N.a,null),Object(v.c)(k.a,null)))}}]),i}(v.a);t.a=I},function(e,t,n){var o=n(22);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,a);o.locals&&(e.exports=o.locals)},,function(e,t,n){var o=n(23);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,a);o.locals&&(e.exports=o.locals)},,,,,,,function(e,t,n){var o=n(21);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,a);o.locals&&(e.exports=o.locals)},function(e,t,n){(t=n(3)(!1)).push([e.i,".sidebar{z-index:1;width:250px;background:#fff;flex-shrink:0;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.sidebar .contact{margin-bottom:20px;display:flex;justify-content:center}.sidebar .navigation{list-style-type:none;margin:0;padding:0}.sidebar .navigation a{height:50px;display:flex;justify-content:center;align-items:center;text-decoration:none;font-size:20px;color:#000}.sidebar .navigation a.active{background:#eaf3ff}.sidebar .navigation a:hover,.sidebar .navigation a:focus{outline:none;background:#ecf1f8}.sidebar .navigation a:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.sidebar .spacer{flex-grow:1}.sidebar .identifiers{text-align:center;margin-top:20px;margin-bottom:15px;display:flex;flex-direction:column;align-items:center}.sidebar .identifiers picture{width:150px;height:150px}.sidebar .identifiers img{height:100%;border-radius:50%}.sidebar .identifiers .name{margin-top:5px;color:#465061;font-size:32px;line-height:32px;white-space:nowrap}.sidebar .contact .icon{margin:0 5px}@media only screen and (min-width: 800px){.sidebar{height:100%}.sidebar .identifiers{flex-shrink:1;min-height:30px}.sidebar picture{flex-shrink:1;min-height:0px}.sidebar .menu-toggle{display:none}}@media only screen and (max-width: 799px){.condensed.sidebar .spacer,.condensed.sidebar .identifiers{display:none}}@media only screen and (min-width: 800px){.condensed.sidebar{width:70px}.condensed.sidebar .identifiers{display:flex;justify-content:center;margin:10px 0}.condensed.sidebar .identifiers picture{width:50px;height:50px}.condensed.sidebar .identifiers .name,.condensed.sidebar .identifiers .title{display:none}.condensed.sidebar .navigation a{font-size:16px}.condensed.sidebar .contact{flex-direction:column;align-items:center;margin-bottom:10px}.condensed.sidebar .contact .icon{margin:5px 0}}@media only screen and (max-width: 799px){.sidebar{flex-direction:row;justify-content:center;max-width:100%;flex-wrap:wrap;width:100%}.sidebar .contact{display:none}.sidebar .navigation-wrapper{width:100%;display:flex;flex-direction:column}.sidebar .navigation{display:none}.sidebar .mobile-expanded{display:block}.sidebar .identifiers{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10px 0px}.sidebar .identifiers .title{display:none}.sidebar .identifiers .name{text-transform:lowercase}.sidebar .menu-toggle{width:100%;border:none;background:none;border-top:2px solid #d6d6d6;height:70px}.sidebar .menu-toggle:hover,.sidebar .menu-toggle:focus{background:#ecf1f8;outline:none}.sidebar .menu-toggle:focus{box-shadow:0 0 0px 3px #a2c0e6 inset}.sidebar .menu-toggle img{width:35px;height:35px}.sidebar .spacer{display:none}}",""]),e.exports=t},function(e,t,n){(t=n(3)(!1)).push([e.i,"a.icon{display:inline-block;border-radius:5px;width:40px;height:40px}a.icon img{display:block;width:100%;height:100%;margin:0 auto;padding:5px 0;box-sizing:border-box}a.icon.linkedin{background-color:#007bb6}a.icon.linkedin:hover,a.icon.linkedin:focus{outline:none;background:#006a9d}a.icon:focus{box-shadow:0 0 0px 3px #a2c0e6}a.icon.twitter{background-color:#1da1f2}a.icon.twitter:hover,a.icon.twitter:focus{outline:none;background-color:#1a91da}",""]),e.exports=t},function(e,t,n){(t=n(3)(!1)).push([e.i,'.layout{background:#e8e6e5;display:flex}@media only screen and (max-width: 799px){.layout{flex-direction:column;overflow-y:auto}}@media only screen and (min-width: 800px){.layout{height:100%}}body{margin:0px;padding:0px;font-family:"Cairo",sans-serif;height:100vh}h1,h2,h3,h4,h5{margin:0;font-weight:normal}h3{font-family:"Cairo",sans-serif;font-size:30px;line-height:40px}p{margin:0}.basic-code{color:#b71900;background:#f3f3f3;border:1px solid gray;padding:1px;border-radius:3px;font-size:14px;margin:0 3px}',""]),e.exports=t},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),a=(n(37),{teamwork:{background:"#2b833f",color:"#ffffff"},devops:{background:"#532c91",color:"#ffffff"},frontend:{background:"#007bb6",color:"#ffffff"},design:{background:"#b23675",color:"#ffffff"},backend:{background:"#c94321",color:"#ffffff"}});function i(e){return Object(o.c)("li",{className:"my-tag",style:a[e.name]},e.name)}},,,,,,,,,,function(e,t,n){"use strict";n.r(t),n.d(t,"WHY_OUR_COMPANY_META",(function(){return u}));var o=n(0),a=n(10),i=n(25),r=n(7),s=n(8);n(13),n(39);var c=function(e){return Object(o.c)("div",{className:"layout"},Object(o.c)(a.a,null),Object(o.c)("div",{className:"blog-post-wrapper"},Object(o.c)("div",{className:"blog-post"},Object(o.c)("header",null,Object(o.c)("div",{className:"img-wrapper"},Object(o.c)("img",{src:e.meta.img,alt:e.meta.imgAltText})),Object(o.c)("div",{className:"text-wrapper"},Object(o.c)("h2",{className:"title"},e.meta.title),Object(o.c)("p",{className:"meta"},e.meta.date," · ",e.meta.length),Object(o.c)("ul",{className:"tags"},e.meta.tags.map((function(e){return Object(o.c)(i.a,{key:e,name:e})}))))),Object(o.c)("main",null,e.children),Object(o.c)("footer",null,Object(o.c)("div",{className:"simple-sign-off"},Object(o.c)("h3",null,"- steve zelek")),Object(o.c)("div",{className:"detailed-sign-off"},Object(o.c)("picture",null,Object(o.c)("source",{srcSet:" ./assets/me/me-3x.webp 3x, ./assets/me/me-2x.webp 2x, ./assets/me/me-1x.webp 1x, ",type:"image/webp"}),Object(o.c)("source",{srcSet:" ./assets/me/me-3x.jpg 3x, ./assets/me/me-2x.jpg 2x, ./assets/me/me-1x.jpg 1x, ",type:"image/jpeg"}),Object(o.c)("img",{src:"./assets/me/me-1x.jpg",type:"image/jpeg",alt:"A headshot of Steve Zelek."})),Object(o.c)("h3",null,"steve zelek"),Object(o.c)("h4",null,"software maker"),Object(o.c)("div",{className:"contact"},Object(o.c)(s.a,null),Object(o.c)(r.a,null)))))))},l=(n(41),n(36)),p=n.n(l);n(45),n(46),n(47),n(48),n(49),n(50),n(51),n(52),n(53),n(43);function d(e){return Object(o.c)("blockquote",{class:"emphatic-point"},Object(o.c)("p",{class:"title"},Object(o.c)("span",{class:"icon"},e.icon),e.title),Object(o.c)("p",{class:"content"},e.content))}var u={title:"Why our company needed web components – and yours might too",img:"assets/web-components-logo.png",imgAltText:"A logo for Web Components technology.",date:"Jul 10th, 2020",length:"10 min read",tags:["frontend","devops"],description:"\n        Is it possible to create a shared component library that supports every framework our teams choose,\n        without ever needing to update legacy apps? That's the riddle that a large company like ours faces.\n    ",url:"/blog/why-our-company-needed-web-components"};Object(o.d)(Object(o.c)((function(){return setTimeout((function(){p.a.highlightAll()}),0),Object(o.c)(c,{meta:u},Object(o.c)("h3",null,"A little bit of background"),Object(o.c)("p",null,"Hi! I'm Steve. I'm a full stack developer at Chatham Financial, where I've worked on web apps for the past 3 years. Chatham is a global financial advisory and tech firm that specializes in debt and derivatives. We're not a hedge fund; we don't invest. We provide tools and expertise to help our clients manage their businesses' risk. A lot of those clients are big international firms you have definitely heard of. A lot of them are regional banks that you definitely haven't heard of. Overall, our 700 person company handles $500 billion in transaction volume."),Object(o.c)("p",null,"On the tech side, we have over 150 employees all across the globe – Pennsylvania, Colorado, and even Poland. We primarily work on Chatham's SaaS product: ChathamDirect. It's a platform comprised of dozens of web apps that each fulfill a different niche of our complex financial space. Together, they form ",Object(o.c)("a",{href:"https://resources.chathamfinancial.com/chathamdirect/financial-risk-management-platform"}," ChathamDirect "),"."),Object(o.c)("p",null,'Okay, that\'s enough background. We\'ll leave the marketing pitch behind and put on our tech hats now. When I say "dozens of apps", you say "maintenance!"'),Object(o.c)("h3",null,"Maintaining dozens of apps is hard"),Object(o.c)("p",null,"If your tech shop is anything like ours, you quickly got on board the framework train for building web apps. What's not to love? Reliable updates, solid feature sets, clear patterns, and strong communities. Create React App and the Angular CLI are both powerful tools for building web apps, offering out-of-the-box best practices and the freedom to tinker and optimize to your heart's content. And if you only ever wrote one web app, finished it, and never came back to it – well, that would be the happy ending to the story I'm telling."),Object(o.c)("p",null,"But what if you're like us? With dozens of apps, we'd like to share some code. We have a thorough component design library at Chatham, and it would be nice if we could turn those into reusable HTML components. Then our dozens of apps would have consistent look-and-feel, and ChathamDirect would seem like a single application."),Object(o.c)("div",{class:"emphatic-point-wrapper"},Object(o.c)(d,{icon:"🏆",title:" Mission:",content:"Create a shared component library we can use across all of Chatham."})),Object(o.c)("p",null,"There's just two problems..."),Object(o.c)("h3",null,"Problem 1: Frameworks"),Object(o.c)("p",null,"I mentioned earlier that React and Angular are both wonderful frameworks for web app development. Well, that's great ... and not so great. How do you pick between them? I won't deliberate over their individual merits here. That's a thankless task consigned to the legions of tech bloggers. Here, I only dip my toe into the debate, in order to proclaim that all should be free to choose their favorite framework. At Chatham, we've mostly chosen Angular. But we impose few restrictions on technical decisions, and so there are several apps written using React, and Vue, as well."),Object(o.c)("div",{class:"emphatic-point-wrapper"},Object(o.c)(d,{content:" At Chatham, we believe in giving our teams the freedom to make their own technical decisions. "})),Object(o.c)("p",null,"How can we create a component library that supports all frameworks? Most framework apps are compiled in some way, or require shipping with a compiler or interpreter. Suffice to say, frameworks don't play nicely together."),Object(o.c)("p",null,"Sure, we could just write our component library in Angular, since it's the most common framework at Chatham. But what if we stop using Angular someday? The elephant graveyard of past web technologies regards us balefully on all sides as we peruse the internet over a morning coffee. I make no promises, but it's a safe bet that by the time we all go into retirement, Angular will hobble along with us as we discuss the fancy new tools the kids are using. If you don't believe me, check out ",Object(o.c)("a",{href:"https://2019.stateofjs.com/front-end-frameworks/"},"this trendline")," for developer interest in Angular."),Object(o.c)("p",null,"But that's not all…"),Object(o.c)("h3",null,"Problem 2: Versioning"),Object(o.c)("p",null,"If incompatibility between frameworks were not a large enough thorn in our side, we are confronted with another issue. Breaking changes between major versions are common knowledge. If you started writing Angular code in 2015, you may have been dismayed by the 2016 release of Angular 2, which had an unapologetic policy of no backward compatibility. Even in less extreme circumstances, anyone who has been responsible for upgrading an app from Angular 5 to 6 will remember the woes brought on by their RxJS major version bump."),Object(o.c)("div",{class:"emphatic-point-wrapper"},Object(o.c)(d,{content:" For any sufficiently large web app, a major version increase is bittersweet news. "})),Object(o.c)("p",null,"Google, for their part, is not shy about their intention to forge bravely onwards into the web development frontier; whether you come with them or not. The ",Object(o.c)("a",{href:"https://angular.io/guide/releases#support-policy-and-schedule"}," official Angular support policy")," lists long term support as a mere 18 months per major version. React has no official policy, but the co-author of Create React App has said that there is (almost) ",Object(o.c)("a",{href:"https://github.com/reactjs/reactjs.org/issues/1745"}," no long term support ")," for any former major versions."),Object(o.c)("p",null,"Technology changes every day. We need to plan for that..."),Object(o.c)("h3",null,"The solution that wouldn't work"),Object(o.c)("p",null,"So with that knowledge in hand, let's consider the situation at our company again. Dozens of web apps, and new major versions popping up about once a year. As we develop new apps, we inevitably leave some behind on old versions of our chosen frameworks. Is the solution so draconian as to mandate that we must keep every web app on the latest version of Angular and never deviate? If you think so, try running your proposal by a project manager and check their pulse."),Object(o.c)("p",null,"If we standardized and updated every app, it would require rewriting legacy code that hasn't seen the light of a text editor in years. Besides being a terrible cost-benefit proposition, we've already seen that it's not future-proof. A new major version of Angular would come out in another 18 months and prompt another company-wide rewrite (if we had even finished the previous rewrite!). Plus, we might not want to use Angular forever. One shudders to think what that migration would look like."),Object(o.c)("div",{class:"emphatic-point-wrapper"},Object(o.c)(d,{content:" Picking a single framework and version doesn't solve compatibility, it just guarantees technical debt. "})),Object(o.c)("p",null,"So, is it possible for us to create a shared component library that supports every framework our teams choose, without ever needing to update legacy apps? At this point, it almost sounds too good to be true. That's the kind of riddle that a large company like Chatham faces."),Object(o.c)("p",null,"Luckily, we solved this riddle!"),Object(o.c)("h3",null,"The answer we've been waiting for"),Object(o.c)("p",null,"In a sense, HTML is already a shared component library used by every web developer. When you write the tag ",Object(o.c)("code",{className:"basic-code"},"<input/>")," on the page, you know what to expect (with minor style differences). A major benefit of component-based frameworks like Angular and React is that you can write and reuse custom elements like ",Object(o.c)("code",{className:"basic-code"},"<special-fancy-input/>"),". The catch is that those custom elements only work within the framework's compiler, or when you ship the framework alongside them."),Object(o.c)("p",null,"But what if browsers provided their own API for defining custom elements, without needing Angular and React?"),Object(o.c)("p",null,"In 2011, Alex Russell presented a proposal for such a technology: ",Object(o.c)("a",{href:"https://www.webcomponents.org/introduction"},"Web Components"),". It has been a long journey since then. Browsers were slow to add support for this new standard. At long last, in January of 2020, Microsoft released version 79 of Edge, bringing native support for Web Components to every mainstream evergreen browser."),Object(o.c)("p",null,"This means that if you write a library using Web Components, you get elements that feel like native HTML and work in ",Object(o.c)("a",{href:"https://caniuse.com/#feat=custom-elementsv1"},"every browser")," and ",Object(o.c)("a",{href:"https://custom-elements-everywhere.com/"},"every framework"),". Since Web Components don't rely on a framework, we no longer need to worry about framework and version compatibility. Talk about two birds with one stone! Often, in web development, it can feel like browsers are our enemies in a battle for consistent layouts. But, refreshingly, browsers have cut this ",Object(o.c)("a",{href:"https://www.history.com/news/what-was-the-gordian-knot"},"Gordian knot")," for us."),Object(o.c)("div",{class:"emphatic-point-wrapper"},Object(o.c)(d,{content:" Web Components pave the way to simple shared components. "})),Object(o.c)("p",null,"The best part? Clever developers have already created tools to generate standards-based Web Components for us. If you've ever used a modern framework, you can write a Web Component too."),Object(o.c)("h3",null,"An example you can try"),Object(o.c)("p",null,"One great option for building hassle-free Web Components is by using a compiler called ",Object(o.c)("a",{href:"https://stenciljs.com/docs/introduction"},"StencilJS"),". StencilJS uses familiar JSX syntax that looks and feels like writing code in React. Here's an example."),Object(o.c)("div",{className:"code-block"},Object(o.c)("pre",{className:"line-numbers"},Object(o.c)("code",{className:"language-tsx"},"import { Component, h } from '@stencil/core';\n\n@Component({\n    tag: 'my-component',\n    styleUrl: 'my-component.css',\n    shadow: true\n})\nexport class MyComponent {\n    render() {\n        return (\n            <button>\n                Wonderful Web Component\n            </button>\n        );\n    }\n}")),Object(o.c)("p",{className:"caption"},"Check out ",Object(o.c)("a",{href:"https://gitlab.com/smzelek/example-web-component"},"the full code")," for this example component.")),Object(o.c)("p",null,"Once you've built your Stencil components, you can distribute them as NPM packages or using ",Object(o.c)("code",{className:"basic-code"},"<script>")," tags. At Chatham, we're distributing our Stencil component library using script tags. The huge benefit of this approach is that we can add a ",Object(o.c)("a",{href:"https://semver.org/"},"versioning scheme")," to the script tags. Whenever we make minor and patch versions changes to the component library, every single web app immediately gets the latest changes."),Object(o.c)("p",null,"Forget the days of updating, rebuilding, and redeploying every app. Now all it takes is a browser refresh!"),Object(o.c)("p",null,"You can try using my example Web Component in any app via the script tag method. Below is the only code you need to add to your app."),Object(o.c)("pre",null,Object(o.c)("code",{className:"language-html"},'<head>\n    ...\n    <script type="module" src="https://smzelek.gitlab.io/example-web-component/example-web-component/example-web-component.esm.js">\n    <\/script>\n    ...\n</head>\n\n<my-component></my-component>')),Object(o.c)("p",null,"If everything went well, you should see a shiny blue button added to your application."),Object(o.c)("iframe",{scrolling:"no",title:"MWKVxwj",src:"https://codepen.io/Kelez/embed/MWKVxwj?height=341&theme-id=dark&default-tab=result",frameBorder:"no",allowtransparency:"true",allowFullScreen:!0},"See the Pen ",Object(o.c)("a",{href:"https://codepen.io/Kelez/pen/MWKVxwj"},"MWKVxwj")," by Steve Zelek (",Object(o.c)("a",{href:"https://codepen.io/Kelez"},"@Kelez"),") on ",Object(o.c)("a",{href:"https://codepen.io"},"CodePen"),"."),Object(o.c)("p",null,"Web Components! They're just that simple."),Object(o.c)("h3",null,"Conclusion"),Object(o.c)("p",null,"Let's revisit the mission we set out to accomplish."),Object(o.c)("p",null,"Chatham has dozens of apps that make up our ChathamDirect platform. We wanted to create a shared component library that could be used by every app. If that worked, then we could finally have a consistent UI across Chatham."),Object(o.c)("p",null,"The biggest problems standing in our way were that 1) our apps run on different frameworks, and 2) there are many versions of those frameworks. In the worst-case scenario, we would've needed to keep every app on one framework, and one version. The maintenance and refactoring required would've made that impossible. Plus, it's not wise to rely on a single framework forever."),Object(o.c)("div",{class:"emphatic-point-wrapper"},Object(o.c)(d,{content:" Instead of synchronizing every app, we made our library universally compatible. "})),Object(o.c)("p",null,"By using the new technology of Web Components, we let browsers do the hard work for us. We used StencilJS, which made it simple and familiar to write our Web Components. The shared component library we created is compatible with every app, regardless of framework and version."),Object(o.c)("p",null,"Chatham finally has a shared component library that supports every framework our teams choose, without ever needing to update legacy apps."),Object(o.c)("p",null,"If your company is anything like ours, consider giving Web Components a try. It could be the best tech decision you make all year."))}),null),document.body)},,function(e,t,n){var o=n(38);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,a);o.locals&&(e.exports=o.locals)},function(e,t,n){(t=n(3)(!1)).push([e.i,".my-tag{background:#000;color:#fff;border-radius:5px;padding:0 7px;margin:0;margin-right:10px}",""]),e.exports=t},function(e,t,n){var o=n(40);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,a);o.locals&&(e.exports=o.locals)},function(e,t,n){(t=n(3)(!1)).push([e.i,".blog-post-wrapper{width:100%;box-sizing:border-box}.blog-post-wrapper .blog-post{margin:0 auto;max-width:1200px;background:#fff}.blog-post-wrapper header{display:flex;flex-direction:column}.blog-post-wrapper .img-wrapper{display:flex;justify-content:center;background:#2f2f47}.blog-post-wrapper img{height:225px}.blog-post-wrapper .text-wrapper{padding:0 30px}.blog-post-wrapper .title{font-size:40px;line-height:40px;margin-top:30px}.blog-post-wrapper .meta{margin-top:10px}.blog-post-wrapper .tags{margin:0;list-style-type:none;padding:0;display:flex;margin-top:10px}.blog-post-wrapper .tags .my-tag{margin-right:10px}.blog-post-wrapper h3{margin-top:25px;font-size:30px;line-height:30px}.blog-post-wrapper p{max-width:900px;font-size:18px;margin-top:20px}.blog-post-wrapper h3+p{margin-top:10px}.blog-post-wrapper main{padding:0 30px}.blog-post-wrapper main a{background-color:#eaf3ff;border-bottom:1px solid #a9afb7;color:#1a1a1a;text-decoration:none;line-height:25px;display:inline-block}.blog-post-wrapper main a:hover{background-color:#ecf1f8;border-bottom-color:#1a1a1a}.blog-post-wrapper footer{padding:0 30px;padding-bottom:50px}.blog-post-wrapper footer .detailed-sign-off{display:flex;flex-direction:column;align-items:center;margin-top:20px}.blog-post-wrapper footer .detailed-sign-off picture{height:100px}.blog-post-wrapper footer .detailed-sign-off img{height:100%;border-radius:50%}.blog-post-wrapper footer .detailed-sign-off h3{margin-top:0}.blog-post-wrapper footer .detailed-sign-off h4{font-size:16px}.blog-post-wrapper footer .detailed-sign-off .contact{margin-top:10px}.blog-post-wrapper footer .detailed-sign-off .contact .icon{margin:0 5px}@media only screen and (min-width: 800px){.blog-post-wrapper footer .detailed-sign-off{display:none}}@media only screen and (max-width: 799px){.blog-post-wrapper footer .simple-sign-off{display:none}}@media only screen and (min-width: 800px){.blog-post-wrapper{padding:20px;overflow-y:auto}.blog-post-wrapper img{height:350px}}@media only screen and (min-width: 1280px){.blog-post-wrapper{padding:60px}}",""]),e.exports=t},function(e,t,n){var o=n(42);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,a);o.locals&&(e.exports=o.locals)},function(e,t,n){(t=n(3)(!1)).push([e.i,".code-block{margin-top:20px;display:inline-flex;flex-direction:column;justify-content:center}.code-block pre{max-width:100%;box-sizing:border-box;display:inline-block;font-size:13px !important;margin:0 !important;white-space:pre-wrap !important;border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}.code-block .caption{background:#f6f6f6;border:1px solid #a8a8a8;padding:5px;margin:0;font-size:13px;text-align:center;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-top:0}iframe{width:100%;max-width:340px;height:340px;margin-top:20px;margin-bottom:-10px}.emphatic-point-wrapper{width:100%;max-width:900px}.emphatic-point-wrapper .emphatic-point{max-width:600px;margin:0 auto;margin-top:20px}",""]),e.exports=t},function(e,t,n){var o=n(44);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,a);o.locals&&(e.exports=o.locals)},function(e,t,n){(t=n(3)(!1)).push([e.i,".emphatic-point{background:#f9f3ec;box-shadow:4px 4px #a39e96;margin:0;padding:20px}.emphatic-point .title{margin:0;text-align:left;font-size:26px;line-height:26px}.emphatic-point .icon{font-size:20px;vertical-align:bottom}.emphatic-point .content{margin:0;text-align:left;font-style:italic;line-height:26px}",""]),e.exports=t},,,,,,,,,,,,,,,,,,,,function(e,t,n){var o=n(65);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,a);o.locals&&(e.exports=o.locals)},function(e,t,n){(t=n(3)(!1)).push([e.i,".blog-card-wrapper{width:100%;display:flex;justify-content:center}.blog-card{text-decoration:none;display:inline-flex;flex-direction:column;max-width:650px;background:#fff}.blog-card h3{font-weight:bold;text-align:left;margin-bottom:10px}.blog-card h3,.blog-card p{color:#465061}.blog-card p.description{font-size:18px;line-height:28px}.blog-card p.meta{font-size:16px;line-height:16px;margin-top:10px;margin-bottom:15px}.blog-card .text-wrapper{padding:20px}.blog-card .img-wrapper{background:#27263f;display:flex;justify-content:center}.blog-card .img-wrapper img{height:175px;width:auto}.blog-card:focus-within{box-shadow:0 0 0px 3px #a2c0e6}.blog-card:focus,.blog-card:hover,.blog-card:focus-within{background:#ecf1f8;outline:none}.blog-card:focus h3,.blog-card:hover h3,.blog-card:focus-within h3{text-decoration:underline}.blog-card .tags{list-style-type:none;margin:0;padding:0;display:flex;width:100%;justify-content:flex-start}.blog-card .tags .my-tag{margin-right:10px}@media only screen and (max-width: 1279px){.blog-card-wrapper{padding:30px;padding-bottom:0px}.blog-card-wrapper:last-of-type{padding-bottom:30px}.blog-card-wrapper .blog-card .img-wrapper img{height:250px}}@media only screen and (max-width: 799px){.blog-card-wrapper .blog-card .img-wrapper img{height:175px}.description{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media only screen and (max-width: 499px){.blog-card-wrapper .description{display:none}.blog-card-wrapper h3{text-align:center}.blog-card-wrapper .meta{text-align:center}.blog-card-wrapper .tags{justify-content:center}}@media only screen and (min-width: 1280px){.blog-card-wrapper{display:flex;width:33.3333333333%;padding:15px;box-sizing:border-box}.blog-card-wrapper:first-of-type{width:100%}.blog-card-wrapper:first-of-type img{height:250px}.description{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@media only screen and (min-width: 1920px){.description{-webkit-line-clamp:initial;-webkit-box-orient:initial;display:initial;overflow:initial}}",""]),e.exports=t},,,,function(e,t,n){var o=n(70);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,a);o.locals&&(e.exports=o.locals)},function(e,t,n){(t=n(3)(!1)).push([e.i,".blog{display:flex;flex-direction:column;width:100%;min-width:1px}.blog header{min-height:80px;max-height:80px;display:flex;align-items:center;background-color:#7897bf}.blog header .title{font-size:48px;line-height:48px;margin:0;padding-left:32px;font-family:Cairo,sans-serif;color:#fff}.blog main{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}@media only screen and (max-width: 799px){.blog header{justify-content:center}.blog header .title{padding:0}.blog main{justify-content:center}}@media only screen and (min-width: 800px){.blog main{overflow-y:auto}}@media only screen and (min-width: 1280px){.blog main{padding:15px;justify-content:unset}}",""]),e.exports=t},,,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(10),i=n(25);n(64);var r=function(e){return Object(o.c)("div",{className:"blog-card-wrapper"},Object(o.c)("a",{className:"blog-card",href:e.meta.url},Object(o.c)("div",{className:"img-wrapper"},Object(o.c)("img",{src:e.meta.img,alt:e.meta.imgAltText})),Object(o.c)("div",{className:"text-wrapper"},Object(o.c)("h3",null,e.meta.title),Object(o.c)("p",{className:"description"},e.meta.description),Object(o.c)("p",{className:"meta"},"".concat(e.meta.date," · ").concat(e.meta.length)),Object(o.c)("ul",{className:"tags"},e.meta.tags.map((function(e){return Object(o.c)(i.a,{key:e,name:e})}))))))},s=n(35),c=(n(13),n(69),[s.WHY_OUR_COMPANY_META]);Object(o.d)(Object(o.c)((function(){return Object(o.c)("div",{className:"layout"},Object(o.c)(a.a,null),Object(o.c)("div",{className:"blog"},Object(o.c)("header",null,Object(o.c)("h2",{className:"title"},"blog")),Object(o.c)("main",null,c.map((function(e,t){return Object(o.c)(r,{key:t,meta:e})})))))}),null),document.body)}]);