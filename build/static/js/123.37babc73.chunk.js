(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[123],{1117:function(e,a,t){e.exports=t.p+"static/media/ilogo.5f6d14a9.png"},1118:function(e,a,t){},2149:function(e,a,t){"use strict";t.r(a);var l=t(13),s=t(14),n=t(16),m=t(15),r=t(0),c=t.n(r),d=t(138),o=t(56),i=t(578),u=t(579),E=t(135),h=t(851),v=(t(812),t(82)),p=t(21),N=(t(1126),t(841)),g=t.n(N),b=(t(1117),t(1118),function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={detail:{}},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/getoneorderbyseller/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a.data.data),e.setState({detail:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t,l,s,n,m,r,v,N,b,f,T,O,w,y,R,k,D,A,_,M,j,C,P,S,I,U,x,z,Y;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null,c.a.createElement(o.a,{className:"",sm:"12"},c.a.createElement(i.a,{className:""},c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(o.a,{md:"6",sm:"12",className:"pt-1"},c.a.createElement("h1",null,"Order Detail")),c.a.createElement(o.a,null,c.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return p.a.push("/app/order/allOrder")}},"Back"))),c.a.createElement(i.a,null,c.a.createElement(d.a,{className:"mt-3"},c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"ORDER ID")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},null===(e=this.state.detail)||void 0===e?void 0:e.cus_orderId)),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"ORDER STATUS")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},null===(a=this.state.detail)||void 0===a?void 0:a.status)),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"ORDER DATE")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},g()(null===(t=this.detail)||void 0===t?void 0:t.createdAt).format("ll"))),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"PAYMENT TYPE")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},null===(l=this.state.detail)||void 0===l?void 0:l.payment_type))),c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"CUSTOMER NAME")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},null===(s=this.state.detail)||void 0===s||null===(n=s.customer)||void 0===n?void 0:n.firstname," ",null===(m=this.state.detail)||void 0===m||null===(r=m.customer)||void 0===r?void 0:r.lastname)),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"EMAIL")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},null===(v=this.state.detail)||void 0===v||null===(N=v.customer)||void 0===N?void 0:N.email)),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"PHONE")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},null===(b=this.state.detail)||void 0===b||null===(f=b.customer)||void 0===f?void 0:f.mobile)))),c.a.createElement(d.a,null,c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"ADDRESS")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},null===(T=this.state.detail)||void 0===T||null===(O=T.shipping_address)||void 0===O?void 0:O.address," ,",null===(w=this.state.detail)||void 0===w||null===(y=w.shipping_address)||void 0===y?void 0:y.locality)),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"CITY/STATE")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},null===(R=this.state.detail)||void 0===R||null===(k=R.shipping_address)||void 0===k?void 0:k.city," /",null===(D=this.state.detail)||void 0===D||null===(A=D.shipping_address)||void 0===A?void 0:A.state)),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h5",{className:"m-2"},"PINCODE")),c.a.createElement(o.a,{lg:"6",md:"6",sm:"12",className:"shadow"},c.a.createElement("h6",{className:"m-2"},null===(_=this.state.detail)||void 0===_||null===(M=_.shipping_address)||void 0===M?void 0:M.pincode)))),c.a.createElement(i.a,{className:"invoice-items-table pt-1"},c.a.createElement("h3",null,"Product Detail"),c.a.createElement(d.a,null,c.a.createElement(o.a,{sm:"12"},c.a.createElement(h.a,{responsive:!0,borderless:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("h6",null,"PRODUCT NAME")),c.a.createElement("th",null,c.a.createElement("h6",null,"SKU NO.")),c.a.createElement("th",null,c.a.createElement("h6",null,"COLOR")),c.a.createElement("th",null,c.a.createElement("h6",null,"SIZE")),c.a.createElement("th",null,c.a.createElement("h6",null,"QUANTITY")),c.a.createElement("th",null,c.a.createElement("h6",null,"PRICE")))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("h5",null,null===(j=this.state.detail)||void 0===j||null===(C=j.product)||void 0===C?void 0:C.product_name)),c.a.createElement("td",null,c.a.createElement("h5",null,null===(P=this.state.detail)||void 0===P||null===(S=P.product)||void 0===S?void 0:S.sku_no)),c.a.createElement("td",null,c.a.createElement("h5",null,null===(I=this.state.detail)||void 0===I?void 0:I.color)),c.a.createElement("td",null,c.a.createElement("h5",null,null===(U=this.state.detail)||void 0===U?void 0:U.size)),c.a.createElement("td",null,c.a.createElement("h5",null,null===(x=this.state.detail)||void 0===x?void 0:x.product_qty)),c.a.createElement("td",null,c.a.createElement("h5",null,null===(z=this.state.detail)||void 0===z?void 0:z.product_price))))))),c.a.createElement(d.a,{className:"mt-3"},c.a.createElement(o.a,{lg:"10",md:"10",sm:"12"},c.a.createElement("h5",{className:"text-right"},"GRAND TOTAL")),c.a.createElement(o.a,{lg:"2",md:"2",sm:"12"},c.a.createElement("h5",{className:""},null===(Y=this.state.detail)||void 0===Y?void 0:Y.product_price)))))))))}}]),t}(c.a.Component));a.default=b},851:function(e,a,t){"use strict";var l=t(5),s=t(6),n=t(0),m=t.n(n),r=t(1),c=t.n(r),d=t(4),o=t.n(d),i=t(3),u=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],E={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:i.tagPropType,responsiveTag:i.tagPropType,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},h=function(e){var a=e.className,t=e.cssModule,n=e.size,r=e.bordered,c=e.borderless,d=e.striped,E=e.dark,h=e.hover,v=e.responsive,p=e.tag,N=e.responsiveTag,g=e.innerRef,b=Object(s.a)(e,u),f=Object(i.mapToCssModules)(o()(a,"table",!!n&&"table-"+n,!!r&&"table-bordered",!!c&&"table-borderless",!!d&&"table-striped",!!E&&"table-dark",!!h&&"table-hover"),t),T=m.a.createElement(p,Object(l.a)({},b,{ref:g,className:f}));if(v){var O=Object(i.mapToCssModules)(!0===v?"table-responsive":"table-responsive-"+v,t);return m.a.createElement(N,{className:O},T)}return T};h.propTypes=E,h.defaultProps={tag:"table",responsiveTag:"div"},a.a=h}}]);
//# sourceMappingURL=123.37babc73.chunk.js.map