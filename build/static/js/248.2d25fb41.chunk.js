(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[248],{2132:function(e,a,t){"use strict";t.r(a),t.d(a,"AddUnit",(function(){return N}));var n=t(37),l=t(13),r=t(14),c=t(16),s=t(15),u=t(0),i=t.n(u),m=t(578),o=t(138),d=t(56),h=t(135),p=t(579),g=t(580),E=t(73),v=t(74),b=t(86),f=t(21),y=t(82),N=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log(r.state),y.a.post("/addunits",r.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),r.props.history.push("/app/products/unit/unitList")})).catch((function(e){console.log(e)}))},r.state={units_title:"",value:"",sortorder:"",desc:"",status:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(o.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Unit")),i.a.createElement(d.a,null,i.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return f.a.push("/app/products/unit/unitList")}},"Back"))),i.a.createElement(p.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(o.a,{className:"mb-2"},i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(E.a,null,i.a.createElement(v.a,null,"Unit Title"),i.a.createElement(b.a,{required:!0,type:"text",placeholder:"Enter Unit Title",name:"units_title",value:this.state.units_title,onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(E.a,null,i.a.createElement(v.a,null,"Value"),i.a.createElement(b.a,{required:!0,type:"number",placeholder:"Value",name:"value",value:this.state.value,onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(E.a,null,i.a.createElement(v.a,null,"Sort Order"),i.a.createElement(b.a,{required:!0,type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6"},i.a.createElement(E.a,null,i.a.createElement(v.a,null,"Description"),i.a.createElement(b.a,{required:!0,type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(E.a,null,i.a.createElement(v.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),i.a.createElement(o.a,null,i.a.createElement(h.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add Unit"))))))}}]),t}(u.Component);a.default=N}}]);
//# sourceMappingURL=248.2d25fb41.chunk.js.map