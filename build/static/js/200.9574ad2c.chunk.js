(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[200],{2217:function(a,e,t){"use strict";t.r(e);var n=t(13),l=t(14),c=t(16),s=t(15),m=t(0),r=t.n(m),i=t(138),o=t(56),u=t(1016),d=t(1017),h=t(578),E=t(135),p=t(579),b=t(21),f=(t(859),t(82)),v=function(a){Object(c.a)(t,a);var e=Object(s.a)(t);function t(a){var l;return Object(n.a)(this,t),(l=e.call(this,a)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var a=this,e=this.props.match.params.id;f.a.get("/viewonegst/".concat(e),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e.data.data),a.setState({data:e.data.data})})).catch((function(a){console.log(a)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(o.a,{sm:"12"},r.a.createElement("div",null,r.a.createElement(u.a,{listTag:"div"},r.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),r.a.createElement(d.a,{href:"/app/tax/taxList",tag:"a"},"Tax List"),r.a.createElement(d.a,{active:!0},"View Tax"))))),r.a.createElement(h.a,{className:"overflow-hidden app-ecommerce-details"},r.a.createElement(i.a,{className:"m-2"},r.a.createElement(o.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Tax")),r.a.createElement(o.a,null,r.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return b.a.push("/app/tax/taxList")}},"Back"))),r.a.createElement(p.a,{className:"pb-0"},r.a.createElement(i.a,{className:"mb-5 mt-2"},r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"GST Title"),r.a.createElement("h6",{className:""}," ",this.state.data.gst_title)),r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Value"),r.a.createElement("h6",{className:""}," ",this.state.data.value)),r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Description"),r.a.createElement("h6",{className:""}," ",this.state.data.desc)))))))}}]),t}(r.a.Component);e.default=v},859:function(a,e,t){}}]);
//# sourceMappingURL=200.9574ad2c.chunk.js.map