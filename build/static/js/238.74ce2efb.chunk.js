(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[238],{2145:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var l=t(37),n=t(13),r=t(14),c=t(16),m=t(15),s=t(0),i=t.n(s),u=t(138),o=t(56),d=t(1016),h=t(1017),p=t(578),E=t(135),b=t(579),f=t(580),g=t(74),v=t(86),y=t(82),N=t(21),k=t(187),S=t.n(k),j=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),y.a.post("/addmaterial",r.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),S()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/material/materialList")})).catch((function(e){console.log(e)}))},r.state={materialname:""},r}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(h.a,{href:"/app/material/materialList",tag:"a"},"Material List"),i.a.createElement(h.a,{active:!0},"Add Material"))))),i.a.createElement(p.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Material")),i.a.createElement(o.a,null,i.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/material/materialList")}},"Back"))),i.a.createElement(b.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Material Name"),i.a.createElement(v.a,{required:!0,type:"text",name:"materialname",placeholder:"",value:this.state.materialname,onChange:this.changeHandler}))),i.a.createElement(u.a,null,i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=238.74ce2efb.chunk.js.map