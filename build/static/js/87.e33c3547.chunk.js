(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[87],{1401:function(e,a,t){e.exports=t.p+"static/media/glogo.36f67780.png"},2244:function(e,a,t){"use strict";t.r(a);var n=t(41),s=t(13),o=t(14),l=t(16),r=t(15),c=t(0),i=t.n(c),p=t(876),u=t(990),m=t(991),d=t(992),f=t(993),h=t(825),b=t(820),g=t(818),v=t(798),y=t(178),E=(t(834),t(1401)),j=t.n(E),N=t(36),O=t.n(N),x=t(21),k=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).otpHandler=function(e){e.preventDefault(),console.log(o.state),O.a.post("http://35.154.86.59/api/admin/verifyOtp",{email:o.state.email,otp:o.state.otpnumber}).then((function(e){console.log(e),localStorage.setItem("auth-adtoken",o.state.token||"null"),localStorage.setItem("hasSubscribed",!0),o.props.history.push("/app/myStore/addStorePage")})).catch((function(e){console.log(e.status),console.log(e.response)}))},o.handlechange=function(e){e.preventDefault(),o.setState(Object(n.a)({},e.target.name,e.target.value))},o.changeHandler=function(e){e.preventDefault(),o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),o.setState({otp:!1}),O.a.post("http://35.154.86.59/api/admin/signup",o.state).then((function(e){console.log(e),o.setState({"auth-adtoken":e.data.token})})).catch((function(e){console.log(e.response)})),O.a.post("http://35.154.86.59/api/admin/sendotp",{email:o.state.email}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},o.state={name:"",email:"",mobile:"",password:"",cnfrm_password:"",otp:!0,otpnumber:"",token:""},o}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,this.state.otp?i.a.createElement(u.a,{className:"m-0 justify-content-center"},i.a.createElement(m.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},i.a.createElement(m.a,{lg:"8",md:"12",className:"p-1"},i.a.createElement(d.a,{className:"rounded-0  px-2 pb-3 login-tabs-container"},i.a.createElement(f.a,{className:"pb-1 justify-content-center"},i.a.createElement("img",{src:j.a,class:"img-fluid",alt:"..."}),i.a.createElement("br",null)),i.a.createElement(h.a,{onSubmit:this.submitHandler},i.a.createElement(b.a,null,"Seller Name"),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"text",placeholder:"Seller Name",required:!0,name:"name",value:this.state.name,onChange:this.changeHandler})),i.a.createElement(b.a,null,"Email"),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"email",placeholder:"E-mail",required:!0,name:"email",value:this.state.email,onChange:this.changeHandler})),i.a.createElement(b.a,null,"Mobile No."),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"number",placeholder:"Mobile No.",required:!0,name:"mobile",value:this.state.mobile,onChange:this.changeHandler}),i.a.createElement(b.a,null,"Status")),i.a.createElement(b.a,null,"Password"),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"password",placeholder:"Password",required:!0,name:"password",value:this.state.password,onChange:this.changeHandler})),i.a.createElement(b.a,null,"Confirm Password"),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"password",placeholder:"Confirm Password",required:!0,name:"cnfrm_password",value:this.state.cnfrm_password,onChange:this.changeHandler})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(y.a.Ripple,{color:"primary",outline:!0,onClick:function(){x.a.push("/pages/login")}},"Login"),i.a.createElement(y.a.Ripple,{color:"primary",type:"submit"},"Register"))))))):i.a.createElement(u.a,{className:"m-0 justify-content-center"},i.a.createElement(m.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},i.a.createElement(m.a,{lg:"8",md:"12",className:"p-1"},i.a.createElement(d.a,{className:"rounded-0  px-2 pb-3 login-tabs-container"},i.a.createElement(f.a,{className:"pb-1 justify-content-center"},i.a.createElement("img",{src:j.a,class:"img-fluid",alt:"..."}),i.a.createElement("br",null)),i.a.createElement(h.a,{onSubmit:this.otpHandler},i.a.createElement(b.a,null,"Enter OTP"),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"number",name:"otpnumber",placeholder:"OTP No",value:this.state.otpnumber,onChange:this.handlechange})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(y.a.Ripple,{color:"primary",type:"submit"},"Verify"))))))))}}]),t}(i.a.Component);a.default=k},798:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(11),l=t(12),r=t(0),c=t.n(r),i=t(1),p=t.n(i),u=t(4),m=t.n(u),d=t(3),f={children:p.a.node,type:p.a.string,size:p.a.oneOfType([p.a.number,p.a.string]),bsSize:p.a.string,valid:p.a.bool,invalid:p.a.bool,tag:d.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),plaintext:p.a.bool,addon:p.a.bool,className:p.a.string,cssModule:p.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,l=e.bsSize,r=e.valid,i=e.invalid,p=e.tag,u=e.addon,f=e.plaintext,h=e.innerRef,b=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),y=p||("select"===o||"textarea"===o?o:"input"),E="form-control";f?(E+="-plaintext",y=p||"input"):"file"===o?E+="-file":"range"===o?E+="-range":g&&(E=u?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var j=Object(d.mapToCssModules)(m()(a,i&&"is-invalid",r&&"is-valid",!!l&&"form-control-"+l,E),t);return("input"===y||p&&"function"===typeof p)&&(b.type=o),b.children&&!f&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(d.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(y,Object(n.a)({},b,{ref:h,className:j,"aria-invalid":i}))},a}(c.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},818:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(0),l=t.n(o),r=t(1),c=t.n(r),i=t(4),p=t.n(i),u=t(3),m={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,o=e.row,r=e.disabled,c=e.check,i=e.inline,m=e.tag,d=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.mapToCssModules)(p()(a,!!o&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!r)&&"disabled"),t);return"fieldset"===m&&(d.disabled=r),l.a.createElement(m,Object(n.a)({},d,{className:f}))};d.propTypes=m,d.defaultProps={tag:"div"},a.a=d},820:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(0),l=t.n(o),r=t(1),c=t.n(r),i=t(4),p=t.n(i),u=t(3),m=c.a.oneOfType([c.a.number,c.a.string]),d=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,o=e.hidden,r=e.widths,c=e.tag,i=e.check,m=e.size,d=e.for,f=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];r.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var o,l=!n;if(Object(u.isObject)(s)){var r,c=l?"-":"-"+a+"-";o=b(l,a,s.size),h.push(Object(u.mapToCssModules)(p()(((r={})[o]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r))),t)}else o=b(l,a,s),h.push(o)}}));var g=Object(u.mapToCssModules)(p()(a,!!o&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:d},f,{className:g}))};g.propTypes=f,g.defaultProps=h,a.a=g},825:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(11),l=t(12),r=t(0),c=t.n(r),i=t(1),p=t.n(i),u=t(4),m=t.n(u),d=t(3),f={children:p.a.node,inline:p.a.bool,tag:d.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),className:p.a.string,cssModule:p.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,l=e.tag,r=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),p=Object(d.mapToCssModules)(m()(a,!!o&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:r,className:p}))},a}(r.Component);h.propTypes=f,h.defaultProps={tag:"form"},a.a=h},834:function(e,a,t){"use strict";var n=t(13),s=t(14),o=t(16),l=t(15),r=t(0),c=t.n(r),i=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),t}(c.a.Component);a.a=i},876:function(e,a,t){"use strict";var n=t(5),s=t(7),o=t(0),l=t.n(o),r=t(1),c=t.n(r),i=t(4),p=t.n(i),u=t(3),m={tag:u.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,o=e.fluid,r=e.tag,c=Object(s.a)(e,["className","cssModule","fluid","tag"]),i="container";!0===o?i="container-fluid":o&&(i="container-"+o);var m=Object(u.mapToCssModules)(p()(a,i),t);return l.a.createElement(r,Object(n.a)({},c,{className:m}))};d.propTypes=m,d.defaultProps={tag:"div"},a.a=d}}]);
//# sourceMappingURL=87.e33c3547.chunk.js.map