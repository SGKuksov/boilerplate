!function(){var e={615:function(e){self,e.exports=function(){var e={577:function(e){var t;t=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){return Array.isArray(e)?e:[e]},o=function(e){return e instanceof Node},l=function(e,t){if(e&&t){e=function(e){return e instanceof NodeList}(e)?e:[e];for(var n=0;n<e.length&&!0!==t(e[n],n,e.length);n++);}},i=function(e){return console.error("[scroll-lock] ".concat(e))},a=function(e){if(Array.isArray(e))return e.join(", ")},c=function(e){var t=[];return l(e,(function(e){return t.push(e)})),t},u=function(e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if((!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&-1!==c(n.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===c(n.querySelectorAll(t)).indexOf(e););return e},d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;return-1!==c(n.querySelectorAll(t)).indexOf(e)},s=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},f=function(e){if(e)return!!s(e)||e.scrollTop<=0},p=function(e){if(e){if(s(e))return!0;var t=e.scrollTop,n=e.scrollHeight;return t+e.offsetHeight>=n}},v=function(e){if(e)return!!s(e)||e.scrollLeft<=0},m=function(e){if(e){if(s(e))return!0;var t=e.scrollLeft,n=e.scrollWidth;return t+e.offsetWidth>=n}},g=function(e){return d(e,'textarea, [contenteditable="true"]')},b=function(e){return d(e,'input[type="range"]')};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"disablePageScroll",(function(){return w})),n.d(t,"enablePageScroll",(function(){return k})),n.d(t,"getScrollState",(function(){return T})),n.d(t,"clearQueueScrollLocks",(function(){return L})),n.d(t,"getTargetScrollBarWidth",(function(){return E})),n.d(t,"getCurrentTargetScrollBarWidth",(function(){return x})),n.d(t,"getPageScrollBarWidth",(function(){return A})),n.d(t,"getCurrentPageScrollBarWidth",(function(){return P})),n.d(t,"addScrollableTarget",(function(){return O})),n.d(t,"removeScrollableTarget",(function(){return F})),n.d(t,"addScrollableSelector",(function(){return _})),n.d(t,"removeScrollableSelector",(function(){return M})),n.d(t,"addLockableTarget",(function(){return G})),n.d(t,"addLockableSelector",(function(){return W})),n.d(t,"setFillGapMethod",(function(){return j})),n.d(t,"addFillGapTarget",(function(){return q})),n.d(t,"removeFillGapTarget",(function(){return Y})),n.d(t,"addFillGapSelector",(function(){return C})),n.d(t,"removeFillGapSelector",(function(){return B})),n.d(t,"refillGaps",(function(){return N}));var y=["padding","margin","width","max-width","none"],S={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:y[0],startTouchY:0,startTouchX:0},w=function(e){S.queue<=0&&(S.scroll=!1,D(),X()),O(e),S.queue++},k=function(e){S.queue>0&&S.queue--,S.queue<=0&&(S.scroll=!0,R(),I()),F(e)},T=function(){return S.scroll},L=function(){S.queue=0},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var n=e.style.overflowY;t?T()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var r=x(e);return e.style.overflowY=n,r}return 0},x=function(e){if(o(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var n=e.style.borderLeftWidth,r=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var l=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=n,e.style.borderRightWidth=r,l}return 0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return E(document.body,e)},P=function(){return x(document.body)},O=function(e){e&&r(e).map((function(e){l(e,(function(e){o(e)?e.setAttribute("data-scroll-lock-scrollable",""):i('"'.concat(e,'" is not a Element.'))}))}))},F=function(e){e&&r(e).map((function(e){l(e,(function(e){o(e)?e.removeAttribute("data-scroll-lock-scrollable"):i('"'.concat(e,'" is not a Element.'))}))}))},_=function(e){e&&r(e).map((function(e){S.scrollableSelectors.push(e)}))},M=function(e){e&&r(e).map((function(e){S.scrollableSelectors=S.scrollableSelectors.filter((function(t){return t!==e}))}))},G=function(e){e&&(r(e).map((function(e){l(e,(function(e){o(e)?e.setAttribute("data-scroll-lock-lockable",""):i('"'.concat(e,'" is not a Element.'))}))})),T()||D())},W=function(e){e&&(r(e).map((function(e){S.lockableSelectors.push(e)})),T()||D(),C(e))},j=function(e){if(e)if(-1!==y.indexOf(e))S.fillGapMethod=e,N();else{var t=y.join(", ");i('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},q=function(e){e&&r(e).map((function(e){l(e,(function(e){o(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),S.scroll||$(e)):i('"'.concat(e,'" is not a Element.'))}))}))},Y=function(e){e&&r(e).map((function(e){l(e,(function(e){o(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),S.scroll||V(e)):i('"'.concat(e,'" is not a Element.'))}))}))},C=function(e){e&&r(e).map((function(e){-1===S.fillGapSelectors.indexOf(e)&&(S.fillGapSelectors.push(e),S.scroll||z(e))}))},B=function(e){e&&r(e).map((function(e){S.fillGapSelectors=S.fillGapSelectors.filter((function(t){return t!==e})),S.scroll||J(e)}))},N=function(){S.scroll||X()},D=function(){var e=a(S.lockableSelectors);K(e)},R=function(){var e=a(S.lockableSelectors);U(e)},K=function(e){var t=document.querySelectorAll(e);l(t,(function(e){H(e)}))},U=function(e){var t=document.querySelectorAll(e);l(t,(function(e){Q(e)}))},H=function(e){if(o(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},Q=function(e){o(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},X=function(){S.fillGapSelectors.map((function(e){z(e)}))},I=function(){S.fillGapSelectors.map((function(e){J(e)}))},z=function(e){var t=document.querySelectorAll(e),n=-1!==S.lockableSelectors.indexOf(e);l(t,(function(e){$(e,n)}))},$=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var n;if(""===e.getAttribute("data-scroll-lock-lockable")||t)n=E(e,!0);else{var r=u(e,a(S.lockableSelectors));n=E(r,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&V(e);var l=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",S.fillGapMethod),"margin"===S.fillGapMethod){var i=parseFloat(l.marginRight);e.style.marginRight="".concat(i+n,"px")}else if("width"===S.fillGapMethod)e.style.width="calc(100% - ".concat(n,"px)");else if("max-width"===S.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(n,"px)");else if("padding"===S.fillGapMethod){var c=parseFloat(l.paddingRight);e.style.paddingRight="".concat(c+n,"px")}}},J=function(e){var t=document.querySelectorAll(e);l(t,(function(e){V(e)}))},V=function(e){if(o(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",(function(e){N()})),"undefined"!=typeof document&&(document.addEventListener("touchstart",(function(e){S.scroll||(S.startTouchY=e.touches[0].clientY,S.startTouchX=e.touches[0].clientX)})),document.addEventListener("touchmove",(function(e){if(!S.scroll){var t=S.startTouchY,n=S.startTouchX,r=e.touches[0].clientY,o=e.touches[0].clientX;if(e.touches.length<2){var l=a(S.scrollableSelectors),i={up:t<r,down:t>r,left:n<o,right:n>o},c={up:t+3<r,down:t-3>r,left:n+3<o,right:n-3>o};!function t(n){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n){var o=u(n,l,!1);if(b(n))return!1;if(r||g(n)&&u(n,l)||d(n,l)){var a=!1;v(n)&&m(n)?(i.up&&f(n)||i.down&&p(n))&&(a=!0):f(n)&&p(n)?(i.left&&v(n)||i.right&&m(n))&&(a=!0):(c.up&&f(n)||c.down&&p(n)||c.left&&v(n)||c.right&&m(n))&&(a=!0),a&&(o?t(o,!0):e.cancelable&&e.preventDefault())}else t(o)}else e.cancelable&&e.preventDefault()}(e.target)}}}),{passive:!1}),document.addEventListener("touchend",(function(e){S.scroll||(S.startTouchY=0,S.startTouchX=0)})));var Z={hide:function(e){i('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),w(e)},show:function(e){i('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),k(e)},toggle:function(e){i('"toggle" is deprecated! Do not use it.'),T()?w():k(e)},getState:function(){return i('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),T()},getWidth:function(){return i('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),A()},getCurrentWidth:function(){return i('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),P()},setScrollableTargets:function(e){i('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),O(e)},setFillGapSelectors:function(e){i('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),C(e)},setFillGapTargets:function(e){i('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),q(e)},clearQueue:function(){i('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),L()}},ee=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({disablePageScroll:w,enablePageScroll:k,getScrollState:T,clearQueueScrollLocks:L,getTargetScrollBarWidth:E,getCurrentTargetScrollBarWidth:x,getPageScrollBarWidth:A,getCurrentPageScrollBarWidth:P,addScrollableSelector:_,removeScrollableSelector:M,addScrollableTarget:O,removeScrollableTarget:F,addLockableSelector:W,addLockableTarget:G,addFillGapSelector:C,removeFillGapSelector:B,addFillGapTarget:q,removeFillGapTarget:Y,setFillGapMethod:j,refillGaps:N,_state:S},Z);t.default=ee}]).default},e.exports=t()},507:function(e,t,n){"use strict";n.d(t,{Modal:function(){return l}});var r=n(577);function o(e,t){const n=document.createElement("div");n.classList.add("modal"),n.dataset.modal=t,n.innerHTML=`\n      <div class="modal__content" data-modal-content>\n          <div class="modal__close" data-modal-close>\n            <svg viewBox="0 0 20 20" id="burger-close-desktop" xmlns="http://www.w3.org/2000/svg">\n              <path d="M15.378 16.957L3 4.32 4.293 3l12.379 12.637z"></path>\n              <path d="M3 15.637L15.378 3l1.293 1.32L4.293 16.958z"></path>\n            </svg>\n          </div>\n  \n          <div class="modal__content-header"></div>\n  \n          <div class="modal__content-body" data-modal-content>\n              ${e}\n          </div>\n      </div>\n    `,document.body.append(n)}const l=(e="default")=>{const t=e;let n=null,l=null,i=!1;const a=document.querySelector("[data-modal-overlay]");function c(e){"default"===t&&function(e){e.classList.add("modal-overlay_open"),setTimeout((()=>{e.classList.add("modal-overlay_visible")}),300)}(l),n=function(e){const t=`[data-modal="${e}"]`,n=document.querySelector(t);if(n)return n.classList.add("modal_open"),setTimeout((()=>{n.classList.add("modal_visible")}),300),n}(e),i=!0}function u(e){var n;(n=e).classList.remove("modal_visible"),setTimeout((()=>{n.classList.remove("modal_open")}),200),setTimeout((()=>{"default"===t&&function(e){e.classList.remove("modal-overlay_visible"),setTimeout((()=>{e.classList.remove("modal-overlay_open")}),500)}(l),i=!1}),200)}function d(){Array.from(document.querySelectorAll("[data-modal]")).forEach((e=>{u(e),(0,r.enablePageScroll)(e)})),(0,r.clearQueueScrollLocks)()}function s(e){const t=e.target;if(i){const e=t.closest("[data-modal-content]"),n=t.closest("[data-modal-close]");e&&!n||(d(),i=!1),(0,r.clearQueueScrollLocks)(),(0,r.enablePageScroll)(e)}else{const e=t.closest("[data-modal-open]");if(!e)return;const n=e.dataset.modalOpen;n&&(c(n),(0,r.disablePageScroll)(),i=!0)}}function f(e){"Escape"===e.key&&(d(),i=!1)}return l=a||function(){const e=document.createElement("div");return e.classList.add("modal-overlay"),document.body.append(e),e}(),{open:c,close:u,init:function(){console.log("Init!!!!"),document.addEventListener("click",s),document.addEventListener("keyup",f)},destroy:function(){document.removeEventListener("click",s),document.removeEventListener("keyup",f)},createModal:o,modal:n,isOpen:i}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";n.r(r),n.d(r,{Modal:function(){return e.Modal}});var e=n(507)}(),r}()},961:function(e,t,n){"use strict";n.r(t),n.d(t,{getCLS:function(){return y},getFCP:function(){return g},getFID:function(){return x},getLCP:function(){return P},getTTFB:function(){return O}});var r,o,l,i,a=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},d=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},s=function(e,t,n){var r;return function(o){t.value>=0&&(o||n)&&(t.delta=t.value-(r||0),(t.delta||void 0===r)&&(r=t.value,e(t)))}},f=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){u((function(e){var t=e.timeStamp;f=t}),!0)},m=function(){return f<0&&(f=p(),v(),d((function(){setTimeout((function(){f=p(),v()}),0)}))),{get firstHiddenTime(){return f}}},g=function(e,t){var n,r=m(),o=a("FCP"),l=function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<r.firstHiddenTime&&(o.value=e.startTime,o.entries.push(e),n(!0)))},i=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],u=i?null:c("paint",l);(i||u)&&(n=s(e,o,t),i&&l(i),d((function(r){o=a("FCP"),n=s(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-r.timeStamp,n(!0)}))}))})))},b=!1,h=-1,y=function(e,t){b||(g((function(e){h=e.value})),b=!0);var n,r=function(t){h>-1&&e(t)},o=a("CLS",0),l=0,i=[],f=function(e){if(!e.hadRecentInput){var t=i[0],r=i[i.length-1];l&&e.startTime-r.startTime<1e3&&e.startTime-t.startTime<5e3?(l+=e.value,i.push(e)):(l=e.value,i=[e]),l>o.value&&(o.value=l,o.entries=i,n())}},p=c("layout-shift",f);p&&(n=s(r,o,t),u((function(){p.takeRecords().map(f),n(!0)})),d((function(){l=0,h=-1,o=a("CLS",0),n=s(r,o,t)})))},S={passive:!0,capture:!0},w=new Date,k=function(e,t){r||(r=t,o=e,l=new Date,E(removeEventListener),T())},T=function(){if(o>=0&&o<l-w){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+o};i.forEach((function(t){t(e)})),i=[]}},L=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){k(e,t),o()},r=function(){o()},o=function(){removeEventListener("pointerup",n,S),removeEventListener("pointercancel",r,S)};addEventListener("pointerup",n,S),addEventListener("pointercancel",r,S)}(t,e):k(t,e)}},E=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,L,S)}))},x=function(e,t){var n,l=m(),f=a("FID"),p=function(e){e.startTime<l.firstHiddenTime&&(f.value=e.processingStart-e.startTime,f.entries.push(e),n(!0))},v=c("first-input",p);n=s(e,f,t),v&&u((function(){v.takeRecords().map(p),v.disconnect()}),!0),v&&d((function(){var l;f=a("FID"),n=s(e,f,t),i=[],o=-1,r=null,E(addEventListener),l=p,i.push(l),T()}))},A={},P=function(e,t){var n,r=m(),o=a("LCP"),l=function(e){var t=e.startTime;t<r.firstHiddenTime&&(o.value=t,o.entries.push(e)),n()},i=c("largest-contentful-paint",l);if(i){n=s(e,o,t);var f=function(){A[o.id]||(i.takeRecords().map(l),i.disconnect(),A[o.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,f,{once:!0,capture:!0})})),u(f,!0),d((function(r){o=a("LCP"),n=s(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-r.timeStamp,A[o.id]=!0,n(!0)}))}))}))}},O=function(e){var t,n=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(0,n(615).Modal)().init(),t.default=()=>{}},401:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(961);const o=r(n(299)),l=n(392);document.addEventListener("DOMContentLoaded",(()=>{(0,o.default)(),console.log(l.breakpoints)}))},392:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.breakpoints=void 0,t.breakpoints={mobile:"(min-width: 0)",tablet:"(min-width: 768px)","tablet-landscape":"(min-width: 1024px)",desktop:"(min-width: 1280px)","desktop-wide":"(min-width: 1440px)",fullhd:"(min-width: 1920px)",ultra:"(min-width: 2560px)"}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,n),l.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(401)}();