(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[198],{2224:function(e,a,t){"use strict";t.r(a);var n=t(13),c=t(14),l=t(16),s=t(15),r=t(0),m=t.n(r),i=t(137),o=t(56),u=t(992),d=t(993),h=t(578),E=t(135),p=t(579),f=t(21),b=(t(883),t(82)),v=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).state={data:{}},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;b.a.get("/viewonesize/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(o.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(u.a,{listTag:"div"},m.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(d.a,{href:"/app/size/sizeList",tag:"a"},"Size List"),m.a.createElement(d.a,{active:!0},"View Size"))))),m.a.createElement(h.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(i.a,{className:"m-2"},m.a.createElement(o.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Size")),m.a.createElement(o.a,null,m.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return f.a.push("/app/size/sizeList")}},"Back"))),m.a.createElement(p.a,{className:"pb-0"},m.a.createElement(i.a,{className:"mb-5 mt-2"},m.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Size"),m.a.createElement("h6",{className:""}," ",this.state.data.sizeName)))))))}}]),t}(m.a.Component);a.default=v},883:function(e,a,t){}}]);
//# sourceMappingURL=198.89cc1f7b.chunk.js.map