(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[119,1],{2157:function(e,a,t){"use strict";t.r(a);var r=t(13),n=t(14),i=t(16),l=t(15),c=t(0),s=t.n(c),d=t(139),o=t(56),u=t(577),m=t(578),g=t(805),p=t(807),f=t(803),v=t(802),h=t(85),E=t(136),w=(t(132),t(186)),S=t(840),b=t(327),N=t(324),z=t(453),P=t(281),y=t(19),C=(t(826),t(809),t(1200),t(1130),t(847)),A=t.n(C),D=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:80,filter:!0},{headerName:"Order ID",field:"cus_orderId",filter:!0,width:200,cellRendererFramework:function(e){return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,e.data.cus_orderId))}},{headerName:"Order Date",field:"createdAt",filter:!0,width:200,cellRendererFramework:function(a){var t;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,A()(null===(t=e.state.data)||void 0===t?void 0:t.createdAt).format("ll")))}},{headerName:"Payment Type",field:"orderId.payment_type",filter:!0,width:150,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.payment_type))}},{headerName:"Customer Name",field:"cartId.customer.firstname",filter:!0,width:200,cellRendererFramework:function(e){var a,t,r,n;return s.a.createElement("div",null,s.a.createElement("span",null,null===(a=e.data)||void 0===a||null===(t=a.customer)||void 0===t?void 0:t.firstname," ",null===(r=e.data)||void 0===r||null===(n=r.customer)||void 0===n?void 0:n.lastname))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Order Placed"===e.value||"Delivered"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Pending"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-primary"},e.data.status):"Cancelled"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):"Completed"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(b.a,{className:"mr-50",size:20,onClick:function(){return y.a.push("/app/order/viewOrder/".concat(a.data._id))}}),s.a.createElement(N.a,{className:"mr-50",size:20,onClick:function(){return y.a.push("/app/order/editOrder/".concat(a.data._id))}}),s.a.createElement(z.a,{size:20,onClick:function(){var a=e.gridApi.getSelectedRows();e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return s.a.createElement(d.a,{className:"app-user-list"},s.a.createElement(o.a,{sm:"12"}),s.a.createElement(o.a,{sm:"12"},s.a.createElement(u.a,null,s.a.createElement(d.a,{className:"m-2"},s.a.createElement(o.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Subscription"))),s.a.createElement(m.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(p.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(P.a,{className:"ml-50",size:15})),s.a.createElement(f.a,{right:!0},s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(h.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(E.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(w.a.Consumer,null,(function(a){return s.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(s.a.Component);a.default=D},809:function(e,a,t){},826:function(e,a,t){}}]);
//# sourceMappingURL=119.788a8031.chunk.js.map