(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[250],{2197:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(41),l=t(13),c=t(14),s=t(16),r=t(15),m=t(0),u=t.n(m),i=t(990),o=t(991),d=t(988),h=t(989),g=t(992),p=t(178),E=t(995),v=t(825),b=t(820),f=t(798),x=t(797),y=t(21),k=t(913),S=t.n(k),N=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var a=c.props.match.params.id;x.a.post("/editgst/".concat(a),c.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),S()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/tax/taxList")})).catch((function(e){console.log(e)}))},c.state={gst_title:"",value:"",desc:""},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;x.a.get("/viewonegst/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({gst_title:a.data.data.gst_title,value:a.data.data.value,desc:a.data.data.desc})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(o.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(d.a,{listTag:"div"},u.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(h.a,{href:"/app/tax/taxList",tag:"a"},"Tax List"),u.a.createElement(h.a,{active:!0},"Edit Tax"))))),u.a.createElement(g.a,null,u.a.createElement(i.a,{className:"m-2"},u.a.createElement(o.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Tax")),u.a.createElement(o.a,null,u.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/tax/taxList")}},"Back"))),u.a.createElement(E.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(i.a,null,u.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a,null,"GST Title"),u.a.createElement(f.a,{type:"text",name:"gst_title",value:this.state.gst_title,onChange:this.changeHandler})),u.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a,null,"Value"),u.a.createElement(f.a,{type:"number",name:"value",value:this.state.value,onChange:this.changeHandler})),u.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a,null,"Description"),u.a.createElement(f.a,{type:"text",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),u.a.createElement(i.a,null,u.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component)},797:function(e,a,t){"use strict";var n=t(36),l=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=l}}]);
//# sourceMappingURL=250.bbe5b182.chunk.js.map