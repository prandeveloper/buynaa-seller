(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[244],{2170:function(e,a,t){"use strict";t.r(a),t.d(a,"AddCoupons",(function(){return H}));var n=t(53),l=t.n(n),r=t(83),c=t(37),o=t(13),s=t(14),u=t(16),m=t(15),i=t(0),d=t.n(i),p=t(578),h=t(137),g=t(56),E=t(135),f=t(579),b=t(580),v=t(73),y=t(86),C=t(577),N=t(21),x=t(82),S=t(187),k=t.n(S),H=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).changeHandler1=function(e){n.setState({status:e.target.value})},n.changeHandler=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),x.a.post("/addcoupon",n.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),k()("Success!","Submitted SuccessFull!","success"),n.props.history.push("/app/offerAndCoupon/coupons/couponsList")})).catch((function(e){console.log(e.response)}))},n.state={coupon_title:"",offer_code:"",product:"",description:"",startDate:"",expireOn:"",amount:"",status:""},n.state={productS:[]},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(r.a)(l.a.mark((function e(){var a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.a.get("/productbysellerbytoken",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),a.setState({productS:e.data.data})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(p.a,null,d.a.createElement(h.a,{className:"m-2"},d.a.createElement(g.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Coupons")),d.a.createElement(g.a,null,d.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/offerAndCoupon/coupons/couponsList")}},"Back"))),d.a.createElement(f.a,null,d.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(h.a,{className:"mb-2"},d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Coupon Title "),d.a.createElement(y.a,{required:!0,type:"text",name:"coupon_title",value:this.state.coupon_title,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Offer Code "),d.a.createElement(y.a,{required:!0,type:"text",name:"offer_code",placeholder:"Offer Code",value:this.state.offer_code,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Product "),d.a.createElement(C.a,{required:!0,type:"select",name:"product",value:this.state.product,onChange:this.changeHandler},d.a.createElement("option",null,"Select Product"),this.state.productS.map((function(e){return d.a.createElement("option",{key:e._id,value:e._id},e.product_name)})))),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Description "),d.a.createElement(y.a,{required:!0,type:"text",name:"description",value:this.state.description,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null," Coupon Start Date"),d.a.createElement(y.a,{required:!0,type:"date",name:"startDate",value:this.state.startDate,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-2"},d.a.createElement(v.a,null,"Coupon Expire date "),d.a.createElement(y.a,{required:!0,type:"date",name:"expireOn",value:this.state.expireOn,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",className:"mb-1"},d.a.createElement(v.a,null,"Amount "),d.a.createElement(y.a,{required:!0,type:"text",name:"amount",value:this.state.amount,onChange:this.changeHandler})),d.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2 "},d.a.createElement(v.a,{className:"mb-1"},"Status"),d.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),d.a.createElement("span",{className:"font-weight-bolder",style:{marginRight:"20px"}},"Active"),d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),d.a.createElement("span",{className:"font-weight-bolder",style:{marginRight:"3px"}},"Inactive")))),d.a.createElement(h.a,null,d.a.createElement(E.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add Coupon"))))))}}]),t}(i.Component);a.default=H}}]);
//# sourceMappingURL=244.dcc8070e.chunk.js.map