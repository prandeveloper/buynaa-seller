(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[228],{2141:function(e,a,t){"use strict";t.r(a),t.d(a,"AddSubCategory",(function(){return k}));var n=t(53),r=t.n(n),l=t(83),c=t(37),s=t(13),o=t(14),m=t(16),u=t(15),d=t(0),i=t.n(d),p=t(578),g=t(138),h=t(56),y=t(135),E=t(579),b=t(580),f=t(74),v=t(577),C=t(86),N=t(21),S=t(82),k=(t(841),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0]}),n.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},n.changeHandler1=function(e){n.setState({status:e.target.value})},n.changeHandler=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",n.state.name),a.append("desc",n.state.desc),a.append("productcategory",n.state.productcategory),a.append("sortorder",n.state.sortorder),a.append("status",n.state.status),null!==n.state.selectedFile&&a.append("product_img",n.state.selectedFile,n.state.selectedName),S.a.post("/addproductsubcategory",a,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),n.props.history.push("/app/category/subCategory")})).catch((function(e){console.log(e)}))},n.state={name:"",sortorder:"",desc:"",productcategory:"",product_img:"",status:"",selectedFile:null,selectedName:""},n.state={productC:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.get("/allcatByseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),a.setState({productC:e.data.data})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(p.a,null,i.a.createElement(g.a,{className:"m-2"},i.a.createElement(h.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Sub-Category")),i.a.createElement(h.a,null,i.a.createElement(y.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/category/subCategory")}},"Back"))),i.a.createElement(E.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(g.a,{className:"mb-2"},i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(f.a,null," Main Category"),i.a.createElement(v.a,{required:!0,type:"select",name:"productcategory",value:this.state.productcategory,onChange:this.changeHandler},i.a.createElement("option",null,"Select Sub-Category...."),this.state.productC.map((function(e){return i.a.createElement("option",{key:e._id,value:e._id},e.name)})))),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(f.a,null,"Category Name"),i.a.createElement(C.a,{required:!0,type:"text",placeholder:"Enter Category",name:"name",value:this.state.name,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(f.a,null,"Description"),i.a.createElement(C.a,{required:!0,type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(f.a,null,"Sort Order"),i.a.createElement(C.a,{required:!0,type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(f.a,null,"Image"),i.a.createElement(v.a,{required:!0,type:"file",onChange:this.onChangeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(f.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),i.a.createElement(g.a,null,i.a.createElement(y.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Sub-Category"))))))}}]),t}(d.Component));a.default=k}}]);
//# sourceMappingURL=228.1cc1cf8c.chunk.js.map