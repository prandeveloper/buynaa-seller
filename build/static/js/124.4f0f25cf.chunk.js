(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[124],{1117:function(e,a,t){e.exports=t.p+"static/media/ilogo.5f6d14a9.png"},1118:function(e,a,t){},2158:function(e,a,t){"use strict";t.r(a);var l=t(37),s=t(13),n=t(14),m=t(16),c=t(15),r=t(0),o=t.n(r),d=t(138),i=t(56),u=t(578),h=t(579),E=t(135),p=t(580),N=t(73),v=t(74),g=t(577),b=t(851),T=t(82),f=t(21),O=(t(1126),t(841)),w=t.n(O),S=(t(1117),t(1118),function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0]}),n.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},n.changeHandler=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("status",n.state.status),null!==n.state.selectedFile&&a.append("upload_Invoice",n.state.selectedFile,n.state.selectedName);var t=n.props.match.params.id;T.a.post("/updateOrderStatusbyseller/".concat(t),a,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),n.props.history.push("/app/purchase/purchaseInvoice/purchaseInvoiceList")})).catch((function(e){console.log(e.error)}))},n.state={status:"",selectedFile:null,selectedName:"",purchase:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;T.a.get("/getonepurchaseorder/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data.data),e.setState({purchase:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t,l,s,n,m,c,r,T,O,S,R,y,A,C,D,I,P,k,M,_,j,U,H;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null,o.a.createElement(i.a,{className:"",sm:"12"},o.a.createElement(u.a,{className:""},o.a.createElement(h.a,null,o.a.createElement(d.a,null,o.a.createElement(i.a,{md:"6",sm:"12",className:"pt-1"},o.a.createElement("h1",null,"Edit Purchase Order")),o.a.createElement(i.a,null,o.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return f.a.push("/app/purchase/purchaseOrderList")}},"Back"))),o.a.createElement(p.a,{onSubmit:this.submitHandler},o.a.createElement(d.a,{className:"my-3"},o.a.createElement(i.a,{md:"6",sm:"12"},o.a.createElement(N.a,null,o.a.createElement(v.a,null,"Change Order Status"),o.a.createElement(g.a,{type:"select",placeholder:"Order Status",name:"status",value:this.state.status,onChange:this.changeHandler},o.a.createElement("option",null,"Select Status....."),o.a.createElement("option",{value:"Pending"},"Pending"),o.a.createElement("option",{value:"Approve"},"Approve"),o.a.createElement("option",{value:"Decline"},"Decline")))),o.a.createElement(i.a,{md:"6",sm:"12"},o.a.createElement(N.a,null,o.a.createElement(v.a,null,"Upload Image"),o.a.createElement(g.a,{type:"file",onChange:this.onChangeHandler}))),o.a.createElement(i.a,{md:"8",sm:"12"},o.a.createElement(E.a,{color:"primary",type:"submit"},"Update")))),o.a.createElement(u.a,null,o.a.createElement(d.a,{className:"mt-3"},o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"ORDER ID")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(e=this.state.purchase)||void 0===e?void 0:e.orderId)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"ORDER STATUS")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(a=this.state.purchase)||void 0===a?void 0:a.status)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"ORDER DATE")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},w()(null===(t=this.purchase)||void 0===t?void 0:t.createdAt).format("ll")))),o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"SUPPLIER NAME")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(l=this.state.purchase)||void 0===l||null===(s=l.supplier)||void 0===s?void 0:s.first_name," ",null===(n=this.state.purchase)||void 0===n||null===(m=n.supplier)||void 0===m?void 0:m.last_name)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"EMAIL")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(c=this.state.purchase)||void 0===c||null===(r=c.supplier)||void 0===r?void 0:r.email)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"COMPANY")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(T=this.state.purchase)||void 0===T||null===(O=T.supplier)||void 0===O?void 0:O.company)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"PHONE")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(S=this.state.purchase)||void 0===S||null===(R=S.supplier)||void 0===R?void 0:R.phone_no)))),o.a.createElement(d.a,null,o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"STOCK DUE")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(y=this.state.purchase)||void 0===y?void 0:y.stock_due)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"GSTIN NO.")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(A=this.state.purchase)||void 0===A?void 0:A.gstIn)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"PAYMENT DUE")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(C=this.state.purchase)||void 0===C?void 0:C.payment_due)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"TRANSPORT COST")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(D=this.state.purchase)||void 0===D?void 0:D.transportation_cost)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"TRANSPORT COST")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(I=this.state.purchase)||void 0===I?void 0:I.transportation_cost)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"TRANSPORT COST")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(P=this.state.purchase)||void 0===P?void 0:P.transportation_cost)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"AMOUNT")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(k=this.state.purchase)||void 0===k?void 0:k.amount)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"INSTRUCTION")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(M=this.state.purchase)||void 0===M?void 0:M.instructions)),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h5",{className:"m-2"},"GRAND TOTAL")),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12",className:"shadow"},o.a.createElement("h6",{className:"m-2"},null===(_=this.state.purchase)||void 0===_?void 0:_.grand_total)))),o.a.createElement(u.a,{className:"invoice-items-table pt-1"},o.a.createElement("h3",null,"Product Detail"),o.a.createElement(d.a,null,o.a.createElement(i.a,{sm:"12"},o.a.createElement(b.a,{responsive:!0,borderless:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("h6",null,"PRODUCT NAME")),o.a.createElement("th",null,o.a.createElement("h6",null,"HSN")),o.a.createElement("th",null,o.a.createElement("h6",null,"QUANTITY")),o.a.createElement("th",null,o.a.createElement("h6",null,"DISCOUNT")),o.a.createElement("th",null,o.a.createElement("h6",null,"GST%")),o.a.createElement("th",null,o.a.createElement("h6",null,"COST PRICE")))),o.a.createElement("tbody",null,null===(j=this.state.purchase)||void 0===j||null===(U=j.product)||void 0===U?void 0:U.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("h5",null,null===e||void 0===e?void 0:e.productname)),o.a.createElement("td",null,o.a.createElement("h5",null,null===e||void 0===e?void 0:e.hsn)),o.a.createElement("td",null,o.a.createElement("h5",null,null===e||void 0===e?void 0:e.qty)),o.a.createElement("td",null,o.a.createElement("h5",null,null===e||void 0===e?void 0:e.discount)),o.a.createElement("td",null,o.a.createElement("h5",null,null===e||void 0===e?void 0:e.gst)),o.a.createElement("td",null,o.a.createElement("h5",null,null===e||void 0===e?void 0:e.cost_price)))})))))),o.a.createElement(d.a,{className:"mt-3"},o.a.createElement(i.a,{lg:"10",md:"10",sm:"12"},o.a.createElement("h5",{className:"text-right"},"GRAND TOTAL")),o.a.createElement(i.a,{lg:"2",md:"2",sm:"12"},o.a.createElement("h5",{className:""},null===(H=this.state.purchase)||void 0===H?void 0:H.product_price)))))))))}}]),t}(o.a.Component));a.default=S},851:function(e,a,t){"use strict";var l=t(5),s=t(6),n=t(0),m=t.n(n),c=t(1),r=t.n(c),o=t(4),d=t.n(o),i=t(3),u=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],h={className:r.a.string,cssModule:r.a.object,size:r.a.string,bordered:r.a.bool,borderless:r.a.bool,striped:r.a.bool,dark:r.a.bool,hover:r.a.bool,responsive:r.a.oneOfType([r.a.bool,r.a.string]),tag:i.tagPropType,responsiveTag:i.tagPropType,innerRef:r.a.oneOfType([r.a.func,r.a.string,r.a.object])},E=function(e){var a=e.className,t=e.cssModule,n=e.size,c=e.bordered,r=e.borderless,o=e.striped,h=e.dark,E=e.hover,p=e.responsive,N=e.tag,v=e.responsiveTag,g=e.innerRef,b=Object(s.a)(e,u),T=Object(i.mapToCssModules)(d()(a,"table",!!n&&"table-"+n,!!c&&"table-bordered",!!r&&"table-borderless",!!o&&"table-striped",!!h&&"table-dark",!!E&&"table-hover"),t),f=m.a.createElement(N,Object(l.a)({},b,{ref:g,className:T}));if(p){var O=Object(i.mapToCssModules)(!0===p?"table-responsive":"table-responsive-"+p,t);return m.a.createElement(v,{className:O},f)}return f};E.propTypes=h,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E}}]);
//# sourceMappingURL=124.4f0f25cf.chunk.js.map