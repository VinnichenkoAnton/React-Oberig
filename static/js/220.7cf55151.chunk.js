/*! For license information please see 220.7cf55151.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkoberig=self.webpackChunkoberig||[]).push([[220],{2938:function(t,e,r){r.d(e,{y:function(){return m},Z:function(){return p}});var n=r(885),i=r(2791),a={slider:"Slider_slider__8a0vm","slide-list":"Slider_slide-list__guaqB",slide:"Slider_slide__viowH",slide__wrapper:"Slider_slide__wrapper__5D5yU","slide-image":"Slider_slide-image__43dkl","slide-image_subdivided":"Slider_slide-image_subdivided__+0V5n","slide-text":"Slider_slide-text__-rfZK","slide-title":"Slider_slide-title__WxDM-","slide-description":"Slider_slide-description__rWCni",dots:"Slider_dots__Pbn33",dot:"Slider_dot__ip7Ib",selected:"Slider_selected__x-2jr",arrows:"Slider_arrows__+sH9i",arrow:"Slider_arrow__LaIXZ",arrow_left:"Slider_arrow_left__EukjZ",arrow_right:"Slider_arrow_right__snjLh"},s=r(184);function o(){var t=(0,i.useContext)(m).changeSlide;return(0,s.jsxs)("div",{className:a.arrows,children:[(0,s.jsx)("div",{className:"".concat(a.arrow," ").concat(a.arrow_left),onClick:function(){return t(-1)}}),(0,s.jsx)("div",{className:"".concat(a.arrow," ").concat(a.arrow_right),onClick:function(){return t(1)}})]})}var c=r(9448),l=r.n(c);function u(t){var e=t.number,r=(0,i.useContext)(m),n=r.goToSlide,o=r.slideNumber;return(0,s.jsx)("div",{className:l()(a.dot,o===e?a.selected:""),onClick:function(){return n(e)}})}function d(){var t=(0,i.useContext)(m).slidesCount;return(0,s.jsx)("div",{className:a.dots,children:function(){for(var e=[],r=0;r<t;r++)e.push((0,s.jsx)(u,{number:r},"dot-".concat(r)));return e}()})}function _(t){var e=t.subdivided,r=t.src,n=t.alt;return(0,s.jsx)("img",{src:r,alt:n,className:l()(a["slide-image"],e?a["slide-image_subdivided"]:"")})}function h(t){var e=t.title,r=t.description;return(0,s.jsxs)("div",{className:a["slide-text"],children:[(0,s.jsx)("div",{className:a["slide-title"],children:e}),(0,s.jsx)("div",{className:a["slide-description"],children:r})]})}function f(t){var e=t.subdivided,r=t.data,n=r.img,i=r.alt,o=r.title,c=r.description;return(0,s.jsx)("div",{className:a.slide,children:e?(0,s.jsxs)("div",{className:a.slide__wrapper,children:[(0,s.jsx)(_,{src:n,alt:i,subdivided:e}),(0,s.jsx)(h,{title:o,description:c})]}):(0,s.jsx)(_,{src:n,alt:i})})}function v(t){var e=t.subdivided,r=(0,i.useContext)(m),n=r.slideNumber,o=r.items;return(0,s.jsx)("div",{className:l()(a["slide-list"],e?a["slide-list_subdivided"]:""),style:{transform:"translateX(-".concat(100*n,"%)")},children:o.map((function(t,r){return(0,s.jsx)(f,{subdivided:e,data:t},r)}))})}var m=(0,i.createContext)(),g=function(t){var e=t.width,r=t.height,c=t.autoPlay,l=t.autoPlayTime,u=t.sliderContent,_=t.controls,h=t.subdivided,f=(0,i.useState)([]),g=(0,n.Z)(f,2),p=g[0],x=g[1],j=(0,i.useState)(0),y=(0,n.Z)(j,2),b=y[0],w=y[1],N=(0,i.useState)(null),S=(0,n.Z)(N,2),E=S[0],L=S[1];(0,i.useEffect)((function(){x(u)}),[u]);var I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=0;e=b+t<0?p.length-1:(b+t)%p.length,w(e)};return(0,i.useEffect)((function(){if(c){var t=setInterval((function(){I(1)}),l);return function(){clearInterval(t)}}}),[p.length,b]),(0,s.jsx)("section",{style:{width:e,height:r},className:a.slider,onTouchStart:function(t){var e=t.touches[0].clientX;L(e)},onTouchMove:function(t){if(null!==E){var e=t.touches[0].clientX,r=E-e;r>10&&I(1),r<-10&&I(-1),L(null)}},children:(0,s.jsxs)(m.Provider,{value:{goToSlide:function(t){w(t%p.length)},changeSlide:I,slidesCount:p.length,slideNumber:b,items:p},children:[_&&(0,s.jsx)(o,{}),(0,s.jsx)(v,{subdivided:h}),(0,s.jsx)(d,{})]})})};g.defaultProps={autoPlay:!0,autoPlayTime:4e3,width:"100%",height:"100%",controls:!1,subdivided:!1};var p=g},2520:function(t,e,r){r.d(e,{Z:function(){return y}});var n=r(885),i=r(2791),a=r(808),s=r(1087),o="Tabs_tabs__KDgJF",c="Tabs_tabs__nav__AUgpA",l="Tabs_tabs__contenttab__mEJIo",u="Tabs_tabs__wrapper__Et2wq",d="Tabs_tabs__overlay__tWSwV",_="Tabs_tabs__img__gJl+z",h="Tabs_tabs__title__HVMya",f=r(184),v=function(t){var e=t.title,r=t.img,n=t.Icn,i=t.id;return(0,f.jsxs)(s.OL,{to:"/services/".concat(i),className:u,children:[(0,f.jsx)("img",{className:_,src:r,alt:e}),(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)(n,{}),(0,f.jsx)("h3",{className:h,children:e})]})]})},m=function(t){var e=t.contentList.map((function(t){return(0,f.jsx)(v,{id:t.id,img:t.img,title:t.title,Icn:t.icn},t.id)}));return(0,f.jsx)("ul",{className:l,children:e})},g=r(268),p=function(t){var e=t.id,r=t.title,n=t.activeTab,i=t.setActiveTab,a=function(){i(e)};return(0,f.jsx)("li",{onClick:a,children:(0,f.jsx)(g.Z,{onClick:a,type:"button",buttonActivity:n===e?"":"inactive",children:r})})},x=function(t){var e=t.id,r=t.activeTab,n=t.children;return r===e?(0,f.jsx)(f.Fragment,{children:n}):null},j=r(8444),y=function(){var t=(0,i.useState)("tab1"),e=(0,n.Z)(t,2),r=e[0],s=e[1];return(0,f.jsxs)("section",{className:o,children:[(0,f.jsx)(a.Z,{text:"\u041c\u0438 \u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0454\u043c\u043e"}),(0,f.jsxs)("ul",{className:c,children:[(0,f.jsx)(p,{title:"\u0414\u043b\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u0438\u0445 \u043e\u0441\u0456\u0431",id:"tab1",activeTab:r,setActiveTab:s}),(0,f.jsx)(p,{title:"\u0414\u043b\u044f \u0431\u0456\u0437\u043d\u0435\u0441\u0443",id:"tab2",activeTab:r,setActiveTab:s})]}),(0,f.jsxs)("div",{className:"tabs__outlet",children:[(0,f.jsx)(x,{id:"tab1",activeTab:r,children:(0,f.jsx)(m,{contentList:j.Nx})}),(0,f.jsx)(x,{id:"tab2",activeTab:r,children:(0,f.jsx)(m,{contentList:j.Ui})})]})]})}},2758:function(t,e,r){r.r(e),r.d(e,{default:function(){return G}});var n=r(4270),i=r(5414),a=r(3461),s=r(2938),o=r(7212),c=r(1002);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function o(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{o({},"")}catch(I){o=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),s=new S(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return L()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var o=b(s,r);if(o){if(o===_)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===_)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,s),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=u;var _={};function h(){}function f(){}function v(){}var m={};o(m,i,(function(){return this}));var g=Object.getPrototypeOf,p=g&&g(g(E([])));p&&p!==e&&r.call(p,i)&&(m=p);var x=v.prototype=h.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(e){o(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){function n(i,a,s,o){var l=d(t[i],t,a);if("throw"!==l.type){var u=l.arg,_=u.value;return _&&"object"==(0,c.Z)(_)&&r.call(_,"__await")?e.resolve(_.__await).then((function(t){n("next",t,s,o)}),(function(t){n("throw",t,s,o)})):e.resolve(_).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,o)}))}o(l.arg)}var i;this._invoke=function(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return _;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,_;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,_):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=v,o(x,"constructor",v),o(v,"constructor",f),f.displayName=o(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,o(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(y.prototype),o(y.prototype,a,(function(){return this})),t.AsyncIterator=y,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var s=new y(u(e,r,n,i),a);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},j(x),o(x,s,"Generator"),o(x,i,(function(){return this})),o(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var o=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(o&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,_):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;N(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),_}},t}function u(t,e,r,n,i,a,s){try{var o=t[a](s),c=o.value}catch(l){return void r(l)}o.done?e(c):Promise.resolve(c).then(n,i)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function s(t){u(a,n,i,s,o,"next",t)}function o(t){u(a,n,i,s,o,"throw",t)}s(void 0)}))}}var _=r(885),h=r(2791),f={numericitem__img:"NumericItem_numericitem__img__Wj09+",numericitem__amount:"NumericItem_numericitem__amount__7bm5E",numericitem__title:"NumericItem_numericitem__title__MK7N9"},v=r(184),m=function(t){var e=t.img,r=t.title,n=t.amount,i=(0,h.useState)(0),a=(0,_.Z)(i,2),s=a[0],o=a[1],c=(0,h.useState)(!1),u=(0,_.Z)(c,2),m=u[0],g=u[1],p=(0,h.useCallback)((function(){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;o(0);var e=n,r=Date.now(),i=r+t,a=t/e,s=setInterval((function(){var t=Date.now();if(t<i){var n=Math.floor((t-r)/a);o(n)}else o(e),clearInterval(s)}),a)}()}),[n]);return document.addEventListener("scroll",d(l().mark((function t(){var e,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.getElementById("root"),r=e.getBoundingClientRect().top,window.pageYOffset>r&&g(!0);case 3:case"end":return t.stop()}}),t)})))),(0,h.useEffect)((function(){m&&p()}),[m,p]),(0,v.jsxs)("li",{className:f.numericitem,children:[(0,v.jsx)("div",{className:f.numericitem__img,children:(0,v.jsx)("img",{src:e,alt:r})}),(0,v.jsx)("div",{className:f.numericitem__amount,"data-amount":n,children:s}),(0,v.jsx)("p",{className:f.numericitem__title,children:r})]})},g=r(808),p={numericinfo:"NumericInfo_numericinfo__EJR2l",numericinfo__list:"NumericInfo_numericinfo__list__bBr1x"},x=r(8444),j=function(){var t=x._j.map((function(t){var e=t.id,r=t.img,n=t.title,i=t.amount;return(0,v.jsx)(m,{img:r,title:n,amount:i},e)}));return(0,v.jsx)("section",{className:p.numericinfo,children:(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(g.Z,{className:p.numericinfo__header,text:"\u041f\u0440\u043e \u043d\u0430\u0441 \u0432 \u0447\u0438\u0441\u043b\u0430\u0445"}),(0,v.jsx)("ul",{className:p.numericinfo__list,children:t})]})})},y=r(5008),b=r(2520),w=r(9448),N=r.n(w),S="AdvantagesItem_advitem__lrq9M",E="AdvantagesItem_advitem__wrapper__YPnui",L="AdvantagesItem_advitem__subtitle__RNPpw",I="AdvantagesItem_advitem__icn__OUInb",T="AdvantagesItem_advitem__icn_right__aCO+Y",C="AdvantagesItem_advitem__icn_left__DEcmN",Z="AdvantagesItem_advitem__description__Cg96l",k=function(t){var e=t.subtitle,r=t.description,n=t.Icn,i=t.flexOrderChange;return(0,v.jsxs)("li",{className:S,children:[(0,v.jsxs)("div",{className:E,children:[(0,v.jsx)("h3",{className:L,children:e}),(0,v.jsx)(n,{className:N()(I,i?C:T)})]}),(0,v.jsx)("p",{className:Z,children:r})]})},A={advantages:"Advantages_advantages__57T7A",advantages__img:"Advantages_advantages__img__T6EBU",advantages__title:"Advantages_advantages__title__rGuHE",advantages__wrapper:"Advantages_advantages__wrapper__+BFg8"},O=r.p+"static/media/advantages.df0dcc7024df2102d647.png",P=function(){var t=x.vi.slice(0,3).map((function(t){return(0,v.jsx)(k,{subtitle:t.subtitle,description:t.description,Icn:t.icn,flexOrderChange:!1},t.id)})),e=x.vi.slice(3).map((function(t){return(0,v.jsx)(k,{subtitle:t.subtitle,description:t.description,Icn:t.icn,flexOrderChange:!0},t.id)}));return(0,v.jsxs)("section",{className:A.advantages,children:[(0,v.jsx)("div",{className:A.advantages__img,children:(0,v.jsx)("img",{src:O,alt:"\u041e\u0445\u043e\u0440\u043e\u043d\u0435\u0446\u044c"})}),(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(g.Z,{text:"\u041d\u0430\u0448\u0456 \u043f\u0435\u0440\u0435\u0432\u0430\u0433\u0438"}),(0,v.jsxs)("div",{className:A.advantages__wrapper,children:[(0,v.jsx)("ul",{className:N()(A.advantages__side,A.advantages__side_left),children:t}),(0,v.jsx)("ul",{className:N()(A.advantages__side,A.advantages__side_right),children:e})]})]})]})},F=r(4072),G=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(n.q,{children:[(0,v.jsx)("meta",{name:"description",content:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0441\u0430\u0439\u0442\u0443 \u041e\u0431\u0435\u0440\u0456\u0433. \u041e\u0431\u0435\u0440\u0456\u0433 - \u043e\u0445\u043e\u0440\u043e\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u044f \u0434\u043b\u044f \u0444\u0456\u0437\u0438\u0447\u043d\u0438\u0445 \u043e\u0441\u0456\u0431 \u0442\u0430 \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u0439 \u0432 \u0441.\u0413\u0430\u0442\u043d\u0435"}),(0,v.jsx)("title",{children:"\u041e\u0431\u0435\u0440\u0456\u0433"})]}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(y.Z,{}),portalId:"userform"}),(0,v.jsx)(a.Z,{}),(0,v.jsx)(s.Z,{controls:!0,sliderContent:x.Sn}),(0,v.jsx)(j,{}),(0,v.jsx)(b.Z,{}),(0,v.jsx)(P,{}),(0,v.jsx)(F.Z,{})]})}}}]);
//# sourceMappingURL=220.7cf55151.chunk.js.map