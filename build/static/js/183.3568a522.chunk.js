(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[183],{2167:function(e,a,t){"use strict";t.r(a);var r=t(54),n=t.n(r),i=t(78),l=t(13),c=t(14),s=t(16),o=t(15),u=t(0),m=t.n(u),d=t(138),p=t(81),g=t(575),f=t(136),h=t(576),v=t(804),E=t(806),w=t(802),S=t(801),z=t(104),N=t(132),b=t(185),C=t(839),P=t(323),y=t(452),k=t(280),A=t(19),D=(t(825),t(808),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Invoice ID",field:"customerId",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.customerId))}},{headerName:"Customer Name",field:"customer?.first_name, last_name",filter:!0,width:150,cellRendererFramework:function(e){var a,t;return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,null===(a=e.data.customer)||void 0===a?void 0:a.first_name," ",null===(t=e.data.customer)||void 0===t?void 0:t.last_name))}},{headerName:"Sales Amount",field:"purchaseprice",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.purchaseprice))}},{headerName:"Sales Amount with GST",field:"order_date",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",{className:"ml-2 mr-4"},m.a.createElement("span",null,e.data.order_date))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(P.a,{className:"mr-50",size:"20px",color:"blue",onClick:function(){return A.a.push("/app/contactUs/customer/editCustomer/".concat(a.data._id))}}),m.a.createElement(y.a,{size:"20px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a,t=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,N.a.get("/salesbyseller/".concat(a)).then((function(e){var a=e.data.data;console.log(a),t.setState({rowData:a})}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return m.a.createElement(d.a,{className:"app-user-list"},m.a.createElement(p.a,{sm:"12"}),m.a.createElement(p.a,{sm:"12"},m.a.createElement(g.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(p.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Sales By Customer")),m.a.createElement(p.a,null,m.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return A.a.push("/app/billing/createInvoice")}},"Create  Sales By Customer"))),m.a.createElement(h.a,null,null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(v.a,{className:"p-1 ag-dropdown"},m.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(k.a,{className:"ml-50",size:15})),m.a.createElement(w.a,{right:!0},m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(z.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(f.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(b.a.Consumer,null,(function(a){return m.a.createElement(C.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(m.a.Component));a.default=D},808:function(e,a,t){}}]);
//# sourceMappingURL=183.3568a522.chunk.js.map