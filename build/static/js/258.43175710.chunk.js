(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[258],{2209:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var n=t(37),r=t(13),l=t(14),s=t(16),c=t(15),m=t(0),u=t.n(m),i=t(138),p=t(81),o=t(1020),d=t(1021),f=t(575),h=t(136),E=t(576),y=t(577),b=t(103),g=t(104),T=t(132),v=t(19),N=t(186),H=t.n(N),S=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),T.a.post("/addTransfer_type",l.state).then((function(e){console.log(e),H()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/transferType/transferTypeList")})).catch((function(e){console.log(e)}))},l.state={transfer_type:"",status:""},l}return Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(p.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(o.a,{listTag:"div"},u.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(d.a,{href:"/app/transferType/transferTypeList",tag:"a"},"Transfer Type List"),u.a.createElement(d.a,{active:!0},"Add Transfer Type"))))),u.a.createElement(f.a,null,u.a.createElement(i.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Transfer Type")),u.a.createElement(p.a,null,u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/transferType/transferTypeList")}},"Back"))),u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(i.a,null,u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a,null,"Transfer Type"),u.a.createElement(g.a,{required:!0,type:"text",name:"transfer_type",placeholder:"",value:this.state.transfer_type,onChange:this.changeHandler}))),u.a.createElement(i.a,null,u.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=258.43175710.chunk.js.map