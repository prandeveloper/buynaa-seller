(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[191],{2160:function(e,a,t){"use strict";t.r(a);var n=t(54),r=t.n(n),i=t(78),l=t(13),c=t(14),s=t(16),o=t(15),d=t(0),u=t.n(d),m=t(138),f=t(81),g=t(575),p=t(136),h=t(576),v=t(804),E=t(806),w=t(802),N=t(801),S=t(104),z=t(132),k=t(19),b=t(185),A=t(839),j=(t(1129),t(326)),x=t(452),y=t(280),P=(t(825),t(808),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:80,filter:!0},{headerName:"Referance Number",field:"reference_no",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{className:"ml-2"},u.a.createElement("span",null,e.data.reference_no)))}},{headerName:"Adjustment Date",field:"adjustment_date",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{className:"ml-2"},u.a.createElement("span",null,e.data.adjustment_date)))}},{headerName:"Warehouse",field:"warehouse",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{className:"ml-2"},u.a.createElement("span",null,null===(a=e.data.warehouse)||void 0===a?void 0:a.warehousename)))}},{headerName:"Reason",field:"reason",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{className:"ml-2"},u.a.createElement("span",null,null===(a=e.data.reason)||void 0===a?void 0:a.reason)))}},{headerName:"Adjusted Quantity",field:"adjusted_qty",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{className:"ml-2"},u.a.createElement("span",null,e.data.adjusted_qty)))}},{headerName:"Adjusted Value",field:"adjusted_value",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{className:"ml-2"},u.a.createElement("span",null,e.data.adjusted_value)))}},{headerName:"Grand Total",field:"grandTotal",filter:!0,resizable:!0,width:180,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("div",{className:"ml-2"},u.a.createElement("span",null,e.data.grandTotal)))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(j.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return k.a.push("/app/stockControl/viewStockAdjustment/".concat(a.data._id))}}),u.a.createElement(x.a,{size:20,onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/getstockadjustment",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){var t=e.data.data;a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,z.a.get("/delstockadjustment/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"},u.a.createElement(g.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Stock Adjustment List")),u.a.createElement(f.a,null,u.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return k.a.push("/app/stockControl/addStockAdjustment")}},"Add Stock Adjustment"))),u.a.createElement(h.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(v.a,{className:"p-1 ag-dropdown"},u.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(y.a,{className:"ml-50",size:15})),u.a.createElement(w.a,{right:!0},u.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(b.a.Consumer,null,(function(a){return u.a.createElement(A.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component));a.default=P},808:function(e,a,t){}}]);
//# sourceMappingURL=191.37226731.chunk.js.map