(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[175],{2162:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),i=t(16),l=t(15),s=t(0),c=t.n(s),o=t(990),m=t(991),u=t(992),d=t(178),f=t(995),p=t(793),g=t(795),h=t(791),v=t(790),b=t(798),E=(t(797),t(177)),w=t(841),S=t(316),z=t(446),N=t(273),y=t(21),P=(t(829),t(803),function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Product Name",field:"customerId",filter:!0,width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.customerId))}},{headerName:"SKU",field:"first_name",filter:!0,width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.first_name))}},{headerName:"HSN/SAC",field:"last_name",filter:!0,width:150,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.last_name))}},{headerName:"Quantity Sold",field:"customer_email",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.customer_email))}},{headerName:"Average Amount",field:"mobile_no",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.mobile_no))}},{headerName:"Total Amount",field:"mobile_no",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",{className:"ml-2 mr-4"},c.a.createElement("span",null,e.data.mobile_no))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(S.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return y.a.push("/app/contactUs/customer/editCustomer/".concat(a.data._id))}}),c.a.createElement(z.a,{size:"20px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return c.a.createElement(o.a,{className:"app-user-list"},c.a.createElement(m.a,{sm:"12"}),c.a.createElement(m.a,{sm:"12"},c.a.createElement(u.a,null,c.a.createElement(o.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Sales By Item")),c.a.createElement(m.a,null,c.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/billing/createInvoice")}},"Create Sales By Item"))),c.a.createElement(f.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(p.a,{className:"p-1 ag-dropdown"},c.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(N.a,{className:"ml-50",size:15})),c.a.createElement(h.a,{right:!0},c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(b.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(d.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(E.a.Consumer,null,(function(a){return c.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(c.a.Component));a.default=P},797:function(e,a,t){"use strict";var n=t(36),r=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=r},798:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(11),l=t(12),s=t(0),c=t.n(s),o=t(1),m=t.n(o),u=t(4),d=t.n(u),f=t(3),p={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,s=e.valid,o=e.invalid,m=e.tag,u=e.addon,p=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),E=m||("select"===i||"textarea"===i?i:"input"),w="form-control";p?(w+="-plaintext",E=m||"input"):"file"===i?w+="-file":"range"===i?w+="-range":v&&(w=u?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var S=Object(f.mapToCssModules)(d()(a,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,w),t);return("input"===E||m&&"function"===typeof m)&&(h.type=i),h.children&&!p&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(E,Object(n.a)({},h,{ref:g,className:S,"aria-invalid":o}))},a}(c.a.Component);g.propTypes=p,g.defaultProps={type:"text"},a.a=g},803:function(e,a,t){}}]);
//# sourceMappingURL=175.d164aa44.chunk.js.map