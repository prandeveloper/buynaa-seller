(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[121],{1395:function(e,t,a){e.exports=a.p+"static/media/glogo.36f67780.png"},2191:function(e,t,a){"use strict";a.r(t);var n=a(37),c=a(13),s=a(14),l=a(16),o=a(15),r=a(0),i=a.n(r),p=a(885),m=a(139),u=a(56),d=a(577),h=a(1022),b=a(579),f=a(74),g=a(73),E=a(85),v=a(136),y=(a(835),a(1395)),N=a.n(y),j=a(31),x=a.n(j),k=a(19),O=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).otpHandler=function(e){e.preventDefault(),console.log(s.state),x.a.post("http://35.154.86.59/api/admin/verifyOtp",{mobile:s.state.mobile,otp:s.state.otpnumber}).then((function(e){console.log(e),s.props.history.push("/app/myStore/addStorePage")})).catch((function(e){console.log(e.status),console.log(e.response)}))},s.handlechange=function(e){e.preventDefault(),s.setState(Object(n.a)({},e.target.name,e.target.value))},s.changeHandler=function(e){e.preventDefault(),s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),s.setState({otp:!1}),x.a.post("http://35.154.86.59/api/admin/sendotp",{email:s.state.email}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},s.state={mobile:"",otp:!0,otpnumber:"",token:""},s}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,this.state.otp?i.a.createElement(m.a,{className:"m-0 justify-content-center"},i.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},i.a.createElement(u.a,{lg:"8",md:"12",className:"p-1"},i.a.createElement(d.a,{className:"rounded-0  px-2 pb-3 login-tabs-container"},i.a.createElement(h.a,{className:"pb-1 justify-content-center"},i.a.createElement("img",{src:N.a,class:"img-fluid",alt:"..."}),i.a.createElement("br",null)),i.a.createElement(b.a,{onSubmit:this.submitHandler},i.a.createElement(f.a,null,"Mobile No."),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(E.a,{type:"number",placeholder:"Mobile No.",required:!0,name:"mobile",value:this.state.mobile,onChange:this.changeHandler})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(v.a.Ripple,{color:"primary",outline:!0,onClick:function(){k.a.push("/pages/login")}},"Login"),i.a.createElement(v.a.Ripple,{color:"primary",type:"submit"},"Submit"))))))):i.a.createElement(m.a,{className:"m-0 justify-content-center"},i.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},i.a.createElement(u.a,{lg:"8",md:"12",className:"p-1"},i.a.createElement(d.a,{className:"rounded-0  px-2 pb-3 login-tabs-container"},i.a.createElement(h.a,{className:"pb-1 justify-content-center"},i.a.createElement("img",{src:N.a,class:"img-fluid",alt:"..."}),i.a.createElement("br",null)),i.a.createElement(b.a,{onSubmit:this.otpHandler},i.a.createElement(f.a,null,"Enter OTP"),i.a.createElement(g.a,{className:"form-label-group"},i.a.createElement(E.a,{type:"number",name:"otpnumber",placeholder:"OTP No",value:this.state.otpnumber,onChange:this.handlechange})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(v.a.Ripple,{color:"primary",type:"submit"},"Verify"))))))))}}]),a}(i.a.Component);t.default=O},835:function(e,t,a){"use strict";var n=a(13),c=a(14),s=a(16),l=a(15),o=a(0),r=a.n(o),i=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},r.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),r.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},r.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),r.a.createElement("span",null,this.props.label))}}]),a}(r.a.Component);t.a=i},885:function(e,t,a){"use strict";var n=a(5),c=a(6),s=a(0),l=a.n(s),o=a(1),r=a.n(o),i=a(4),p=a.n(i),m=a(3),u={tag:m.tagPropType,fluid:r.a.oneOfType([r.a.bool,r.a.string]),className:r.a.string,cssModule:r.a.object},d=function(e){var t=e.className,a=e.cssModule,s=e.fluid,o=e.tag,r=Object(c.a)(e,["className","cssModule","fluid","tag"]),i="container";!0===s?i="container-fluid":s&&(i="container-"+s);var u=Object(m.mapToCssModules)(p()(t,i),a);return l.a.createElement(o,Object(n.a)({},r,{className:u}))};d.propTypes=u,d.defaultProps={tag:"div"},t.a=d}}]);
//# sourceMappingURL=121.05c09d33.chunk.js.map