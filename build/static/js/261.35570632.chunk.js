(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[261],{2218:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var l=t(37),n=t(13),c=t(14),r=t(16),s=t(15),m=t(0),u=t.n(m),i=t(137),d=t(56),o=t(992),h=t(993),p=t(578),E=t(135),g=t(579),b=t(580),v=t(73),f=t(86),x=t(82),y=t(21),N=t(187),H=t.n(N),S=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),x.a.post("/addgst",c.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),H()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/tax/taxList")})).catch((function(e){console.log(e)}))},c.state={gst_title:"",value:"",desc:""},c}return Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(d.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(o.a,{listTag:"div"},u.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(h.a,{href:"/app/tax/taxList",tag:"a"},"Tax List"),u.a.createElement(h.a,{active:!0},"Add Tax"))))),u.a.createElement(p.a,null,u.a.createElement(i.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Tax")),u.a.createElement(d.a,null,u.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/tax/taxList")}},"Back"))),u.a.createElement(g.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(i.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"GST Title"),u.a.createElement(f.a,{required:!0,type:"text",name:"gst_title",placeholder:"",value:this.state.gst_title,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Value"),u.a.createElement(f.a,{required:!0,type:"number",name:"value",placeholder:"",value:this.state.value,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Descripition"),u.a.createElement(f.a,{required:!0,type:"textarea",name:"desc",placeholder:"",value:this.state.desc,onChange:this.changeHandler}))),u.a.createElement(i.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=261.35570632.chunk.js.map