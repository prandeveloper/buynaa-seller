(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[199],{2202:function(e,a,t){"use strict";t.r(a);var n=t(13),c=t(14),l=t(16),s=t(15),r=t(0),i=t.n(r),m=t(990),o=t(991),u=t(988),d=t(989),h=t(992),p=t(178),E=t(995),f=t(21),b=(t(893),t(797)),v=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).state={data:{}},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;b.a.get("/viewonesize/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(d.a,{href:"/app/size/sizeList",tag:"a"},"Size List"),i.a.createElement(d.a,{active:!0},"View Size"))))),i.a.createElement(h.a,{className:"overflow-hidden app-ecommerce-details"},i.a.createElement(m.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Size")),i.a.createElement(o.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return f.a.push("/app/size/sizeList")}},"Back"))),i.a.createElement(E.a,{className:"pb-0"},i.a.createElement(m.a,{className:"mb-5 mt-2"},i.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},i.a.createElement("h4",null,"Size"),i.a.createElement("h6",{className:""}," ",this.state.data.sizeName)))))))}}]),t}(i.a.Component);a.default=v},797:function(e,a,t){"use strict";var n=t(36),c=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=c},893:function(e,a,t){}}]);
//# sourceMappingURL=199.fcd4d3f6.chunk.js.map