(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[204],{2194:function(e,a,t){"use strict";t.r(a);var s=t(13),l=t(14),n=t(16),m=t(15),c=t(0),r=t.n(c),h=t(138),o=t(56),d=t(1016),i=t(1017),u=t(578),E=t(135),N=t(579),b=t(21),p=(t(859),t(82)),f=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;p.a.get("/getonewarehouse/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(o.a,{sm:"12"},r.a.createElement("div",null,r.a.createElement(d.a,{listTag:"div"},r.a.createElement(i.a,{href:"/analyticsDashboard",tag:"a"},"Home"),r.a.createElement(i.a,{href:"/app/warehouse/warehouseList",tag:"a"},"Warehouse List"),r.a.createElement(i.a,{active:!0},"View Warehouse"))))),r.a.createElement(u.a,{className:"overflow-hidden app-ecommerce-details"},r.a.createElement(h.a,{className:"m-2"},r.a.createElement(o.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Warehouse")),r.a.createElement(o.a,null,r.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return b.a.push("/app/warehouse/warehouseList")}},"Back"))),r.a.createElement(N.a,{className:"pb-0"},r.a.createElement(h.a,{className:"mb-5 mt-2"},r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Warehouse Name"),r.a.createElement("h6",{className:""}," ",this.state.data.warehousename)),r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Email"),r.a.createElement("h6",{className:""}," ",this.state.data.email)),r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Phone No."),r.a.createElement("h6",{className:""}," ",this.state.data.phone_no)),r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Address 1"),r.a.createElement("h6",{className:""}," ",this.state.data.address1)),r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Address 2"),r.a.createElement("h6",{className:""}," ",this.state.data.address2)),r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"City"),r.a.createElement("h6",{className:""}," ",this.state.data.city)),r.a.createElement(o.a,{md:"6",sm:"12",className:"mb-4"},r.a.createElement("h4",null,"Pin Code"),r.a.createElement("h6",{className:""}," ",this.state.data.pin)))))))}}]),t}(r.a.Component);a.default=f},859:function(e,a,t){}}]);
//# sourceMappingURL=204.fc8f82fb.chunk.js.map