(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[255],{2220:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var n=t(37),s=t(13),l=t(14),c=t(16),r=t(15),i=t(0),m=t.n(i),o=t(138),u=t(56),d=t(1016),h=t(1017),p=t(578),E=t(135),g=t(579),f=t(580),b=t(74),v=t(86),z=t(82),S=t(21),N=t(187),k=t.n(N),y=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=l.props.match.params.id;z.a.post("/editsize/".concat(a),l.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),k()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/size/sizeList")})).catch((function(e){console.log(e)}))},l.state={sizeName:"",status:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;z.a.get("/viewonesize/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({sizeName:a.data.data.sizeName,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(o.a,null,m.a.createElement(u.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(d.a,{listTag:"div"},m.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(h.a,{href:"/app/size/sizeList",tag:"a"},"Size List"),m.a.createElement(h.a,{active:!0},"Edit Size"))))),m.a.createElement(p.a,null,m.a.createElement(o.a,{className:"m-2"},m.a.createElement(u.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Size")),m.a.createElement(u.a,null,m.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return S.a.push("/app/size/sizeList")}},"Back"))),m.a.createElement(g.a,null,m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(o.a,null,m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Size"),m.a.createElement(v.a,{type:"text",name:"sizeName",value:this.state.sizeName,onChange:this.changeHandler}))),m.a.createElement(o.a,null,m.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(i.Component)}}]);
//# sourceMappingURL=255.2d606ae3.chunk.js.map