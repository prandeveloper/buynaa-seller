(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[168],{2234:function(a,e,t){"use strict";t.r(e);var n=t(13),l=t(14),c=t(16),r=t(15),o=t(0),s=t.n(o),m=t(137),u=t(56),i=t(992),d=t(993),h=t(578),E=t(135),p=t(579),f=t(21),b=(t(883),t(82)),v=function(a){Object(c.a)(t,a);var e=Object(r.a)(t);function t(a){var l;return Object(n.a)(this,t),(l=e.call(this,a)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var a=this,e=this.props.match.params.id;b.a.get("/viewonecolor/".concat(e),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e.data.data),a.setState({data:e.data.data})})).catch((function(a){console.log(a)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(m.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement("div",null,s.a.createElement(i.a,{listTag:"div"},s.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),s.a.createElement(d.a,{href:"/app/colour/colourList",tag:"a"},"Colour List"),s.a.createElement(d.a,{active:!0},"View Colour"))))),s.a.createElement(h.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(m.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Colour")),s.a.createElement(u.a,null,s.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return f.a.push("/app/colour/colourList")}},"Back"))),s.a.createElement(p.a,{className:"pb-0"},s.a.createElement(m.a,{className:"mb-5 mt-2"},s.a.createElement(u.a,{md:"6",sm:"12",className:"mb-4"},s.a.createElement("h4",null,"Colour"),s.a.createElement("h6",{className:""}," ",this.state.data.colorName)))))))}}]),t}(s.a.Component);e.default=v},883:function(a,e,t){}}]);
//# sourceMappingURL=168.305fb5f0.chunk.js.map