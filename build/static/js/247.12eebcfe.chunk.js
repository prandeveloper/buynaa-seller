(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[247],{2135:function(e,t,a){"use strict";a.r(t),a.d(t,"AddCoupon",(function(){return y}));var l=a(137),n=a(37),c=a(13),r=a(14),s=a(16),m=a(15),o=a(0),u=a.n(o),i=a(578),d=a(138),p=a(56),h=a(135),g=a(579),E=a(580),b=a(74),f=a(86),v=a(21),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("product_title",r.state.product_title),null!==r.state.selectedFile&&t.append("product_img",r.state.selectedFile,r.state.selectedName);var a,n=Object(l.a)(t.values());try{for(n.s();!(a=n.n()).done;){var c=a.value;console.log(c)}}catch(u){n.e(u)}finally{n.f()}var s,m=Object(l.a)(t.keys());try{for(m.s();!(s=m.n()).done;){var o=s.value;console.log(o)}}catch(u){m.e(u)}finally{m.f()}},r.state={product_title:"",product_img:"",selectedFile:null,selectedName:""},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(i.a,null,u.a.createElement(d.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Coupon")),u.a.createElement(p.a,null,u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/admin/products/coupon/coupon")}},"Back"))),u.a.createElement(g.a,null,u.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(d.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(b.a,null,"Coupon Code "),u.a.createElement(f.a,{type:"text",name:"product_title",value:this.state.product_title,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(b.a,null,"Discount Type "),u.a.createElement(f.a,{type:"text",name:"product_title",value:this.state.product_title,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(b.a,null,"Amount"),u.a.createElement(f.a,{type:"text",name:"product_title",value:this.state.product_title,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(b.a,null,"Expiry Date"),u.a.createElement(f.a,{type:"date",name:"product_title",value:this.state.product_title,onChange:this.changeHandler}))),u.a.createElement(d.a,null,u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Coupon"))))))}}]),a}(o.Component);t.default=y}}]);
//# sourceMappingURL=247.12eebcfe.chunk.js.map