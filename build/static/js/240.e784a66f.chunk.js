(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[240],{2207:function(e,a,t){"use strict";t.r(a),t.d(a,"EditSupplier",(function(){return S}));var n=t(37),l=t(13),r=t(14),s=t(16),c=t(15),m=t(0),o=t.n(m),d=t(578),u=t(137),i=t(56),h=t(135),p=t(579),E=t(580),g=t(72),y=t(73),_=t(86),b=t(21),f=t(82),v=t(187),C=t.n(v),S=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;f.a.post("/edit_supplier/".concat(a),r.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),C()("Success!","Updated SuccessFull!","success"),r.props.history.push("/app/contactUs/supplier/supplierList")})).catch((function(e){console.log(e)}))},r.state={first_name:"",last_name:"",email:"",phone_no:"",company:"",address_one:"",address_two:"",state:"",city:"",postcode:"",gst_no:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;f.a.get("/getonesupplier/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({first_name:a.data.data.first_name,last_name:a.data.data.last_name,email:a.data.data.email,phone_no:a.data.data.phone_no,company:a.data.data.company,address_one:a.data.data.address_one,address_two:a.data.data.address_two,state:a.data.data.state,city:a.data.data.city,gst_no:a.data.data.gst_no,postcode:a.data.data.postcode})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(i.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Supplier")),o.a.createElement(i.a,null,o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return b.a.push("/app/contactUs/supplier/supplierList")}},"Back"))),o.a.createElement(p.a,null,o.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"FirstName"),o.a.createElement(_.a,{type:"text",placeholder:"First Name",name:"first_name",value:this.state.first_name,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"LastName"),o.a.createElement(_.a,{type:"text",placeholder:"Last Name",name:"last_name",value:this.state.last_name,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"Supplier Email"),o.a.createElement(_.a,{type:"email",placeholder:"Supplier Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"Phone Number"),o.a.createElement(_.a,{type:"number",placeholder:"Phone Number",name:"phone_no",value:this.state.phone_no,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"Company"),o.a.createElement(_.a,{type:"text",placeholder:"Company",name:"company",value:this.state.company,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"Address 1"),o.a.createElement(_.a,{type:"text",placeholder:"Address 1",name:"address_one",value:this.state.address_one,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"Address 2"),o.a.createElement(_.a,{type:"text",placeholder:"Address 2",name:"address_two",value:this.state.address_two,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"State"),o.a.createElement(_.a,{type:"text",placeholder:"State",name:"state",value:this.state.state,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"City"),o.a.createElement(_.a,{type:"text",placeholder:"City",name:"city",value:this.state.city,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"Post Code"),o.a.createElement(_.a,{type:"number",placeholder:"Post Code",name:"postcode",value:this.state.postcode,onChange:this.changeHandler}))),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(y.a,null,"GST Number"),o.a.createElement(_.a,{type:"text",placeholder:"Gst Number",name:"gst_no",value:this.state.gst_no,onChange:this.changeHandler})))),o.a.createElement(u.a,null,o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Supplier"))))))}}]),t}(m.Component);a.default=S}}]);
//# sourceMappingURL=240.e784a66f.chunk.js.map