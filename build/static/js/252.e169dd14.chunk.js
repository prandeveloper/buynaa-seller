(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[252],{2207:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(41),r=t(13),s=t(14),c=t(16),l=t(15),m=t(0),i=t.n(m),u=t(990),o=t(991),p=t(988),f=t(989),d=t(992),h=t(178),E=t(995),y=t(825),b=t(820),g=t(798),v=t(797),T=t(21),N=t(913),S=t.n(N),k=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=s.props.match.params.id;v.a.post("/editsize/".concat(a),s.state).then((function(e){console.log(e),S()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/transferType/transferTypeList")})).catch((function(e){console.log(e)}))},s.state={transfer_type:"",status:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/viewonesize/".concat(a)).then((function(a){console.log(a),e.setState({transferType:a.data.data.transferType,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(p.a,{listTag:"div"},i.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(f.a,{href:"/app/transferType/transferTypeList",tag:"a"},"Transfer Type List"),i.a.createElement(f.a,{active:!0},"Edit Transfer Type"))))),i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Transfer Type")),i.a.createElement(o.a,null,i.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return T.a.push("/app/transferType/transferTypeList")}},"Back"))),i.a.createElement(E.a,null,i.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Transfer Type"),i.a.createElement(g.a,{type:"text",name:"transfer_type",value:this.state.transfer_type,onChange:this.changeHandler}))),i.a.createElement(u.a,null,i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component)},797:function(e,a,t){"use strict";var n=t(36),r=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=r}}]);
//# sourceMappingURL=252.e169dd14.chunk.js.map