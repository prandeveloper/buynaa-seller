(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[245],{2171:function(e,t,a){"use strict";a.r(t),a.d(t,"EditCoupon",(function(){return O}));var n=a(53),c=a.n(n),o=a(83),l=a(37),r=a(13),s=a(14),u=a(16),m=a(15),i=a(0),d=a.n(i),p=a(578),h=a(137),g=a(56),f=a(135),E=a(579),b=a(580),v=a(73),y=a(86),C=a(577),N=a(21),x=a(82),S=a(187),k=a.n(S),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).changeHandler1=function(e){n.setState({status:e.target.value})},n.changeHandler=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var t=n.props.match.params.id;x.a.post("/editcoupon/".concat(t),n.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),k()("Success!","Submitted SuccessFull!","success"),n.props.history.push("/app/offerAndCoupon/coupons/couponsList")})).catch((function(e){console.log(e)}))},n.state={coupon_title:"",offer_code:"",product:"",description:"",startDate:"",expireOn:"",amount:"",status:""},n.state={productS:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params.id,x.a.get("/getonecoupon/".concat(t),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),a.setState({coupon_title:e.data.data.coupon_title,offer_code:e.data.data.offer_code,product:e.data.data.product,description:e.data.data.description,startDate:e.data.data.startDate,expireOn:e.data.data.expireOn,amount:e.data.data.amount,status:e.data.data.status})})).catch((function(e){console.log(e)})),x.a.get("/productbysellerbytoken",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),a.setState({productS:e.data.data})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(p.a,null,d.a.createElement(h.a,{className:"m-2"},d.a.createElement(g.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Coupons")),d.a.createElement(g.a,null,d.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/offerAndCoupon/coupons/couponsList")}},"Back"))),d.a.createElement(E.a,null,d.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(h.a,{className:"mb-2"},d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Coupon Title "),d.a.createElement(y.a,{type:"text",name:"coupon_title",value:this.state.coupon_title,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Offer Code "),d.a.createElement(y.a,{type:"text",name:"offer_code",placeholder:"Offer Code",value:this.state.offer_code,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Product "),d.a.createElement(C.a,{type:"select",name:"product",value:this.state.product,onChange:this.changeHandler},d.a.createElement("option",null,"Select Product"),this.state.productS.map((function(e){return d.a.createElement("option",{key:e._id,value:e._id},e.product_name)})))),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Description "),d.a.createElement(y.a,{type:"text",name:"description",value:this.state.description,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null," Coupon Start Date"),d.a.createElement(y.a,{type:"date",name:"startDate",value:this.state.startDate,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Coupon Expire date "),d.a.createElement(y.a,{type:"date",name:"expireOn",value:this.state.expireOn,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(v.a,null,"Amount "),d.a.createElement(y.a,{type:"text",name:"amount",value:this.state.amount,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2 "},d.a.createElement(v.a,{className:"mb-1"},"Status"),d.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),d.a.createElement("span",{className:"font-weight-bolder",style:{marginRight:"20px"}},"Active"),d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),d.a.createElement("span",{className:"font-weight-bolder",style:{marginRight:"3px"}},"Inactive")))),d.a.createElement(h.a,null,d.a.createElement(f.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Update Coupon"))))))}}]),a}(i.Component);t.default=O}}]);
//# sourceMappingURL=245.b44ee6cc.chunk.js.map