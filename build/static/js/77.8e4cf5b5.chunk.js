(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[77],{1117:function(e,a,t){e.exports=t.p+"static/media/ilogo.5f6d14a9.png"},1118:function(e,a,t){},2241:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),r=t(16),s=t(15),c=t(0),o=t.n(c),m=t(138),i=t(56),d=t(915),u=t(86),p=t(927),E=t(135),b=t(578),v=t(579),g=t(852),h=t(851),N=t(812),f=t(82),y=t(1117),T=t.n(y),j=t(331),O=t(318),M=t(366),P=t(400),z=(t(1118),function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;f.a.get("/viewonebilling/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t,l,n,r;return o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,{breadCrumbTitle:"Invoice",breadCrumbParent:"Pages",breadCrumbActive:"Invoice"}),o.a.createElement(m.a,null,o.a.createElement(i.a,{className:"mb-1 invoice-header",md:"5",sm:"12"},o.a.createElement(d.a,null,o.a.createElement(u.a,{placeholder:"Email"}),o.a.createElement(p.a,{addonType:"append"},o.a.createElement(E.a.Ripple,{color:"primary",outline:!0},"Send Invoice")))),o.a.createElement(i.a,{className:"d-flex flex-column flex-md-row justify-content-end invoice-header mb-1",md:"7",sm:"12"},o.a.createElement(E.a,{className:"mr-1 mb-md-0 mb-1",color:"primary",onClick:function(){return window.print()}},o.a.createElement(j.a,{size:"15"}),o.a.createElement("span",{className:"align-middle ml-50"},"Print")),o.a.createElement(E.a.Ripple,{color:"primary",outline:!0},o.a.createElement(O.a,{size:"15"}),o.a.createElement("span",{className:"align-middle ml-50"},"Download"))),o.a.createElement(i.a,{className:"invoice-wrapper",sm:"12"},o.a.createElement(b.a,{className:"invoice-page"},o.a.createElement(v.a,null,o.a.createElement(m.a,null,o.a.createElement(i.a,{md:"6",sm:"12",className:"pt-1"},o.a.createElement(g.a,{className:"pt-1"},o.a.createElement("img",{src:T.a,alt:"logo"}))),o.a.createElement(i.a,{md:"6",sm:"12",className:"text-right"},o.a.createElement("h1",null,"Invoice"),o.a.createElement("div",{className:"invoice-details mt-2"},o.a.createElement("h6",null,this.state.data.product_name),o.a.createElement("p",null,"001/2020"),o.a.createElement("h6",{className:"mt-2"},"INVOICE DATE"),o.a.createElement("p",null,"10 Dec 2018")))),o.a.createElement(m.a,{className:"pt-2"},o.a.createElement(i.a,{md:"6",sm:"12"},o.a.createElement("h5",null,"Recipient"),o.a.createElement("div",{className:"recipient-info my-2"},o.a.createElement("p",null,"Peter Stark"),o.a.createElement("p",null,"8577 West West Drive"),o.a.createElement("p",null,"Holbrook, NY"),o.a.createElement("p",null,"90001")),o.a.createElement("div",{className:"recipient-contact pb-2"},o.a.createElement("p",null,o.a.createElement(M.a,{size:15,className:"mr-50"}),"peter@mail.com"),o.a.createElement("p",null,o.a.createElement(P.a,{size:15,className:"mr-50"}),"+91 988 888 8888"))),o.a.createElement(i.a,{md:"6",sm:"12",className:"text-right"},o.a.createElement("h5",null,"Microsion Technologies Pvt. Ltd."),o.a.createElement("div",{className:"company-info my-2"},o.a.createElement("p",null,"9 N. Sherwood Court"),o.a.createElement("p",null,"Elyria, OH"),o.a.createElement("p",null,"94203")),o.a.createElement("div",{className:"company-contact"},o.a.createElement("p",null,o.a.createElement(M.a,{size:15,className:"mr-50"}),"hello@pixinvent.net"),o.a.createElement("p",null,o.a.createElement(P.a,{size:15,className:"mr-50"}),"+91 999 999 9999")))),o.a.createElement("div",{className:"invoice-items-table pt-1"},o.a.createElement(m.a,null,o.a.createElement(i.a,{sm:"12"},o.a.createElement(h.a,{responsive:!0,borderless:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"TASK DESCRIPTION"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Quantity"),o.a.createElement("th",null,"Sell Price"),"Select Product(tab)")),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Website Redesign"),o.a.createElement("td",null,this.state.data.name),o.a.createElement("td",null,null===(e=this.state.data.product)||void 0===e?void 0:e.qty),o.a.createElement("td",null,null===(a=this.state.data.product)||void 0===a?void 0:a.cost)),o.a.createElement("tr",null,o.a.createElement("td",null,"Newsletter template design"),o.a.createElement("td",null,null===(t=this.state.data.product)||void 0===t?void 0:t.name),o.a.createElement("td",null,null===(l=this.state.data.product)||void 0===l?void 0:l.qty),o.a.createElement("td",null,null===(n=this.state.data.product)||void 0===n?void 0:n.cost))))))),o.a.createElement("div",{className:"invoice-total-table"},o.a.createElement(m.a,null,o.a.createElement(i.a,{sm:{size:7,offset:5},xs:{size:7,offset:5}},o.a.createElement(h.a,{responsive:!0,borderless:!0},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"GST"),o.a.createElement("td",null)),o.a.createElement("tr",null,o.a.createElement("th",null,"Discount (5%)"),o.a.createElement("td",null,null===(r=this.state.data.product)||void 0===r?void 0:r.discount)),o.a.createElement("tr",null,o.a.createElement("th",null,"Grand Total"),o.a.createElement("td",null,this.state.data.total_amount))))))),o.a.createElement("div",{className:"text-right pt-3 invoice-footer"},o.a.createElement("p",null,"Transfer the amounts to the business amount below. Please include invoice number on your check."),o.a.createElement("p",{className:"bank-details mb-0"},o.a.createElement("span",{className:"mr-4"},"BANK: ",o.a.createElement("strong",null,"FTSBUS33")),o.a.createElement("span",null,"IBAN: ",o.a.createElement("strong",null,"G882-1111-2222-3333")))))))))}}]),t}(o.a.Component));a.default=z},851:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(0),s=t.n(r),c=t(1),o=t.n(c),m=t(4),i=t.n(m),d=t(3),u=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],p={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.tagPropType,responsiveTag:d.tagPropType,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},E=function(e){var a=e.className,t=e.cssModule,r=e.size,c=e.bordered,o=e.borderless,m=e.striped,p=e.dark,E=e.hover,b=e.responsive,v=e.tag,g=e.responsiveTag,h=e.innerRef,N=Object(n.a)(e,u),f=Object(d.mapToCssModules)(i()(a,"table",!!r&&"table-"+r,!!c&&"table-bordered",!!o&&"table-borderless",!!m&&"table-striped",!!p&&"table-dark",!!E&&"table-hover"),t),y=s.a.createElement(v,Object(l.a)({},N,{ref:h,className:f}));if(b){var T=Object(d.mapToCssModules)(!0===b?"table-responsive":"table-responsive-"+b,t);return s.a.createElement(g,{className:T},y)}return y};E.propTypes=p,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},852:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(0),s=t.n(r),c=t(1),o=t.n(c),m=t(4),i=t.n(m),d=t(3),u=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],p={body:o.a.bool,bottom:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,heading:o.a.bool,left:o.a.bool,list:o.a.bool,middle:o.a.bool,object:o.a.bool,right:o.a.bool,tag:d.tagPropType,top:o.a.bool},E=function(e){var a,t=e.body,r=e.bottom,c=e.className,o=e.cssModule,m=e.heading,p=e.left,E=e.list,b=e.middle,v=e.object,g=e.right,h=e.tag,N=e.top,f=Object(n.a)(e,u);a=m?"h4":f.href?"a":f.src||v?"img":E?"ul":"div";var y=h||a,T=Object(d.mapToCssModules)(i()(c,{"media-body":t,"media-heading":m,"media-left":p,"media-right":g,"media-top":N,"media-bottom":r,"media-middle":b,"media-object":v,"media-list":E,media:!t&&!m&&!p&&!g&&!N&&!r&&!b&&!v&&!E}),o);return s.a.createElement(y,Object(l.a)({},f,{className:T}))};E.propTypes=p,a.a=E},879:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(0),s=t.n(r),c=t(1),o=t.n(c),m=t(4),i=t.n(m),d=t(3),u=["className","cssModule","tag"],p={tag:d.tagPropType,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(n.a)(e,u),o=Object(d.mapToCssModules)(i()(a,"input-group-text"),t);return s.a.createElement(r,Object(l.a)({},c,{className:o}))};E.propTypes=p,E.defaultProps={tag:"span"},a.a=E},915:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(0),s=t.n(r),c=t(1),o=t.n(c),m=t(4),i=t.n(m),d=t(3),u=["className","cssModule","tag","size"],p={tag:d.tagPropType,size:o.a.string,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.size,o=Object(n.a)(e,u),m=Object(d.mapToCssModules)(i()(a,"input-group",c?"input-group-"+c:null),t);return s.a.createElement(r,Object(l.a)({},o,{className:m}))};E.propTypes=p,E.defaultProps={tag:"div"},a.a=E},927:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(0),s=t.n(r),c=t(1),o=t.n(c),m=t(4),i=t.n(m),d=t(3),u=t(879),p=["className","cssModule","tag","addonType","children"],E={tag:d.tagPropType,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.addonType,o=e.children,m=Object(n.a)(e,p),E=Object(d.mapToCssModules)(i()(a,"input-group-"+c),t);return"string"===typeof o?s.a.createElement(r,Object(l.a)({},m,{className:E}),s.a.createElement(u.a,{children:o})):s.a.createElement(r,Object(l.a)({},m,{className:E,children:o}))};b.propTypes=E,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=77.8e4cf5b5.chunk.js.map