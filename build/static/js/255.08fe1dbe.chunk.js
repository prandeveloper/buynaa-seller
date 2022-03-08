(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[255],{2164:function(e,t,a){"use strict";a.r(t),a.d(t,"AddStockTransfer",(function(){return w}));var n=a(54),l=a.n(n),r=a(78),c=a(28),o=a(37),s=a(13),u=a(14),m=a(16),d=a(15),i=a(0),h=a.n(i),p=a(575),g=a(138),E=a(81),f=a(136),v=a(576),G=a(577),y=a(103),b=a(104),k=a(796),C=a(102),_=a(19),S=a(132),w=(a(186),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeHandlerG=function(e,t){var a=n.state[e.target.name];console.log(a),a[t]=e.target.value,n.setState(Object(o.a)({},e.target.name,a))},n.submitHandler=function(e){e.preventDefault();for(var t=[],a=0;a<n.state.productG.length;a++)t.push({productname:n.state.productG[a],sku:n.state.skuG[a],hsn:n.state.hsmG[a],qty:n.state.qtyG[a],gst:n.state.gstG[a],amount:n.state.amountG[a]});var l=n.state;l.product=t,console.log("Option",l),S.a.post("/addstocktransfer",l,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),n.props.history.push("/app/stockControl/stockTransferRequest")})).catch((function(e){console.log(e.response)}))},n.changeHandler=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.state={addTextbox:[{}],reference_no:"",from_warehouse:"",to_warehouse:"",transfer_date:"",delivery_duedate:"",transfer_type:"",reason:"",grandTotal:"",productC:[],productG:[""],skuG:[""],hsmG:[""],amountG:[""],qtyG:[""],gstG:[""]},n}return Object(u.a)(a,[{key:"addControls",value:function(){this.setState({productG:[].concat(Object(c.a)(this.state.productG),[""]),skuG:[].concat(Object(c.a)(this.state.skuG),[""]),hsmG:[].concat(Object(c.a)(this.state.hsmG),[""]),amountG:[].concat(Object(c.a)(this.state.amountG),[""]),qtyG:[].concat(Object(c.a)(this.state.qtyG),[""]),gstG:[].concat(Object(c.a)(this.state.gstG),[""]),addTextbox:[].concat(Object(c.a)(this.state.addTextbox),[""])})}},{key:"delControl",value:function(e){console.log(this.state),this.state.addTextbox.splice(e,1),this.state.productG.splice(e,1),this.state.skuG.splice(e,1),this.state.hsmG.splice(e,1),this.state.amountG.splice(e,1),this.state.qtyG.splice(e,1),this.state.gstG.splice(e,1),this.setState({})}},{key:"componentDidMount",value:function(){var e=Object(r.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.get("/getwarehouse",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),t.setState({warehouseL:e.data.data})})).catch((function(e){console.log(e)})),S.a.get("/getReason",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),t.setState({reasonL:e.data.data})})).catch((function(e){console.log(e)})),S.a.get("/productbysellerbytoken",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e.data.data),t.setState({productC:e.data.data})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,n=this;return h.a.createElement("div",null,h.a.createElement(p.a,null,h.a.createElement(g.a,{className:"m-2"},h.a.createElement(E.a,null,h.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Stock Transfer")),h.a.createElement(E.a,null,h.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return _.a.push("/app/stockControl/stockTransferRequest")}},"Back"))),h.a.createElement(v.a,null,h.a.createElement(G.a,{className:"m-1",onSubmit:this.submitHandler},h.a.createElement(g.a,{className:"mb-2"},h.a.createElement(E.a,{lg:"6",md:"6"},h.a.createElement(y.a,null,"Referance Number"),h.a.createElement(b.a,{type:"number",name:"reference_no",value:this.state.reference_no,onChange:this.changeHandler})),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(y.a,null,"Select From Warehouse"),h.a.createElement(k.a,{type:"select",name:"from_warehouse",value:this.state.from_warehouse,onChange:this.changeHandler},null===(e=this.state.warehouseL)||void 0===e?void 0:e.map((function(e){return h.a.createElement("option",{key:e._id,value:e._id},e.warehousename)})))),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(y.a,null,"Select To Warehouse"),h.a.createElement(k.a,{type:"select",name:"to_warehouse",value:this.state.to_warehouse,onChange:this.changeHandler},null===(t=this.state.warehouseL)||void 0===t?void 0:t.map((function(e){return h.a.createElement("option",{key:e._id,value:e._id},e.warehousename)})))),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(y.a,null,"Transfer Date"),h.a.createElement(b.a,{type:"date",name:"transfer_date",value:this.state.transfer_date,onChange:this.changeHandler})),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(y.a,null,"Delivery Due Date"),h.a.createElement(b.a,{type:"date",name:"delivery_duedate",value:this.state.delivery_duedate,onChange:this.changeHandler})),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(y.a,null,"Transfer Type"),h.a.createElement(k.a,{type:"select",name:"transfer_type",value:this.state.transfer_type,onChange:this.changeHandler},h.a.createElement("option",{value:"ABC"},"ABC"),h.a.createElement("option",{value:"XYZ"},"XYZ"),h.a.createElement("option",{value:"ABCD"},"ABCD"),h.a.createElement("option",{value:"EFG"},"EFG"))),h.a.createElement(E.a,{lg:"6",md:"6",className:"mb-1"},h.a.createElement(y.a,null,"Reason"),h.a.createElement(k.a,{type:"select",name:"reason",value:this.state.reason,onChange:this.changeHandler},null===(a=this.state.reasonL)||void 0===a?void 0:a.map((function(e){return h.a.createElement("option",{key:e._id,value:e._id},e.reason)}))))),h.a.createElement(g.a,null,h.a.createElement("div",null,this.state.addTextbox.map((function(e,t){var a;return h.a.createElement("div",null,h.a.createElement("div",{id:"btn"},h.a.createElement(g.a,null,h.a.createElement(E.a,{lg:"6",md:"6",sm:"6",className:"mb-2 d-flex align-items-start"},h.a.createElement(f.a,{color:"primary",onClick:function(){return n.addControls()}},"Add")))),h.a.createElement(g.a,null,h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(y.a,null," Product Name "),h.a.createElement(k.a,{type:"select",name:"productG",placeholder:" Product Name",value:n.state.productG[t],onChange:function(e){n.changeHandlerG(e,t)}},h.a.createElement("option",null,"Select Product"),null===(a=n.state.productC)||void 0===a?void 0:a.map((function(e){return h.a.createElement("option",{key:e._id,value:e._id},e.product_name)}))))),h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(y.a,null," SKU "),h.a.createElement(b.a,{type:"number",name:"skuG",placeholder:"SKU",value:n.state.skuG[t],onChange:function(e){n.changeHandlerG(e,t)}}))),h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(y.a,null," HSN "),h.a.createElement(b.a,{type:"number",rows:"5",name:"hsmG",placeholder:"HSN",value:n.state.hsmG[t],onChange:function(e){n.changeHandlerG(e,t)}}))),h.a.createElement(E.a,{md:"1",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(y.a,null," Quantity "),h.a.createElement(b.a,{type:"number",rows:"5",name:"qtyG",placeholder:"Quantity",value:n.state.qtyG[t],onChange:function(e){n.changeHandlerG(e,t)}}))),h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(y.a,null," GST "),h.a.createElement(b.a,{type:"text",rows:"5",name:"gstG",placeholder:"GST",value:n.state.gstG[t],onChange:function(e){n.changeHandlerG(e,t)}}))),h.a.createElement(E.a,{md:"2",sm:"12"},h.a.createElement(C.a,null,h.a.createElement(y.a,null," Amount "),h.a.createElement(b.a,{type:"number",rows:"5",name:"amountG",placeholder:"Amount",value:n.state.amountG[t],onChange:function(e){n.changeHandlerG(e,t)}}))),h.a.createElement(E.a,{md:"1",sm:"6",className:"p-2 d-flex justify-content-end"},h.a.createElement(f.a,{color:"danger",onClick:function(){return n.delControl(t)}},"Remove"))))})))),h.a.createElement(g.a,{className:"d-flex justify-content-end"},h.a.createElement(E.a,{lg:"4"},h.a.createElement(C.a,null,h.a.createElement(y.a,null,"Grand Total"),h.a.createElement(b.a,{type:"number",name:"grandTotal",placeholder:"Grand Total",value:this.state.grandTotal,onChange:this.changeHandler})))),h.a.createElement(g.a,null,h.a.createElement(f.a,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),a}(i.Component));t.default=w}}]);
//# sourceMappingURL=255.08fe1dbe.chunk.js.map