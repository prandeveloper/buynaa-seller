(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[72],{1761:function(e,t,a){"use strict";var n=a(53),o=a(1762),c=a(1763),r=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(o,c){function r(e){try{i(n.next(e))}catch(t){c(t)}}function s(e){try{i(n.throw(e))}catch(t){c(t)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,s)}i((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});var s=a(0),i=function(){function e(t){o(this,e),this.options=t,this.rzrpayInstannce=new window.Razorpay(this.options)}return c(e,[{key:"on",value:function(e,t){this.rzrpayInstannce.on(e,t)}},{key:"open",value:function(){this.rzrpayInstannce.open()}}]),e}();t.default=function(){var e=(0,s.useCallback)((function(){return"Razorpay"in window}),[]),t=(0,s.useCallback)((function(e){return new Promise((function(t,a){var n=document.createElement("script");n.src=e,n.onload=function(e){return t(e)},n.onerror=function(e){return a(e)},document.body.appendChild(n)}))}),[]);return(0,s.useEffect)((function(){e()||r(void 0,void 0,void 0,n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("https://checkout.razorpay.com/v1/checkout.js");case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))}),[]),i}},1762:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},1763:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},1764:function(e,t,a){e.exports=a.p+"static/media/users.f9da09a3.png"},2157:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(53),o=a.n(n),c=a(83),r=a(57),s=a(33),i=a.n(s),l=a(0),u=a.n(l),d=a(1761),p=a.n(d),f=a(875),m=a(138),h=a(56),b=a(577),g=a(578),v=a(1016),y=a(1017),w=a(938),N=a(934),j=a(933),O=a(1764),E=a.n(O);function k(){var e=Object(l.useState)("rzp_live_dX052iXb0Is1yu"),t=Object(r.a)(e,2),a=t[0],n=(t[1],Object(l.useState)("")),s=Object(r.a)(n,2),d=s[0],O=s[1],k=Object(l.useState)(""),P=Object(r.a)(k,2),x=P[0],M=P[1],T=Object(l.useState)(""),S=Object(r.a)(T,2),C=S[0],I=S[1],_=p()();Object(l.useEffect)((function(){console.log("useEffect"),i.a.get("http://35.154.86.59/api/admin/getoneseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e.data),I(e.data.data)})).catch((function(e){console.log(e.response)})),i.a.get("http://35.154.86.59/api/admin/rapay/2").then((function(e){var t,a;console.log(e.data),O(null===(t=e.data)||void 0===t?void 0:t.order.id),M(null===(a=e.data)||void 0===a?void 0:a.order.amount)})).catch((function(e){console.log(e.response)}))}),[]);var R=Object(l.useCallback)(function(){var e=Object(c.a)(o.a.mark((function e(t,n,c,r,s,l){var u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(x),(u=new _({key:a,amount:s,currency:"INR",order_id:d,name:"SUBSCRIPTION PLAN",description:t,handler:function(e){var a={duration:l,sub_plan:s,amount:s,description:t,razorpay_payment_id:e.razorpay_payment_id,name:n,email:c,contact:r};console.log(e),i.a.post("http://35.154.86.59/api/admin/addSubscription",a,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),localStorage.setItem("hasSubscribed",!0),history.push("/analyticsDashboard")})).catch((function(e){console.log(e.response)}))},prefill:{name:n,email:c,contact:r},notes:{address:"BuyNaa Corporate Office"},theme:{color:"#0000FF"}})).on("payment.failure",(function(e){alert("Remains on same page")})),u.on("payment.success",(function(e){console.log(e)})),u.open();case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,o,c,r){return e.apply(this,arguments)}}(),[_]);return u.a.createElement(f.a,{className:"d-flex justify-content-center align-items-center"},u.a.createElement(m.a,null,u.a.createElement(h.a,null,u.a.createElement(b.a,{className:" ",style:{"--color-1":"deepskyblue","--color-2":"navy",background:"\n      linear-gradient(\n        170deg,\n        var(--color-1),\n        var(--color-2) 80%\n      )\n    ",color:"white",textAlign:"center",padding:30,borderRadius:12}},u.a.createElement(g.a,null,u.a.createElement(v.a,null,u.a.createElement(y.a,null,u.a.createElement("img",{src:E.a,style:{width:50,height:50}})),u.a.createElement(y.a,{tag:"h2",className:" text-white font-weight-bold p-2"},"SUBSCRIPTION PLAN")),u.a.createElement("div",{className:"m-3"},u.a.createElement(y.a,{className:" text-white font-weight-bold"},"Plan Price"),u.a.createElement(w.a,{className:"text-white font-weight-bold"},"\u20b9699 Only/")),u.a.createElement("div",{className:"m-3"},u.a.createElement(y.a,{className:"text-white font-weight-bold"},"Plan Active Period"),u.a.createElement(w.a,{className:"text-white  font-weight-bold"},"365 Days")),u.a.createElement(N.a,null,u.a.createElement(j.a,{className:"text-white font-weight-bolder ",onClick:function(){return R("Plan Active Period : 365 days",C.name,C.email,C.mobile,"200",!0,"365days")}},"Subscribe Now")))))))}},875:function(e,t,a){"use strict";var n=a(5),o=a(6),c=a(0),r=a.n(c),s=a(1),i=a.n(s),l=a(4),u=a.n(l),d=a(3),p={tag:d.tagPropType,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.fluid,s=e.tag,i=Object(o.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===c?l="container-fluid":c&&(l="container-"+c);var p=Object(d.mapToCssModules)(u()(t,l),a);return r.a.createElement(s,Object(n.a)({},i,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},933:function(e,t,a){"use strict";var n=a(5),o=a(6),c=a(0),r=a.n(c),s=a(1),i=a.n(s),l=a(4),u=a.n(l),d=a(3),p={tag:d.tagPropType,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=e.innerRef,i=Object(o.a)(e,["className","cssModule","tag","innerRef"]),l=Object(d.mapToCssModules)(u()(t,"card-link"),a);return r.a.createElement(c,Object(n.a)({},i,{ref:s,className:l}))};f.propTypes=p,f.defaultProps={tag:"a"},t.a=f},934:function(e,t,a){"use strict";var n=a(5),o=a(6),c=a(0),r=a.n(c),s=a(1),i=a.n(s),l=a(4),u=a.n(l),d=a(3),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-footer"),a);return r.a.createElement(c,Object(n.a)({},s,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},938:function(e,t,a){"use strict";var n=a(5),o=a(6),c=a(0),r=a.n(c),s=a(1),i=a.n(s),l=a(4),u=a.n(l),d=a(3),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-subtitle"),a);return r.a.createElement(c,Object(n.a)({},s,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f}}]);
//# sourceMappingURL=72.9bde4214.chunk.js.map