(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[187],{2097:function(e,a,t){"use strict";t.r(a);var r=t(54),n=t.n(r),l=t(78),i=t(13),c=t(14),s=t(16),o=t(15),d=t(0),u=t.n(d),m=t(138),f=t(81),g=t(575),p=t(136),h=t(576),w=t(804),E=t(806),v=t(802),S=t(801),N=t(104),b=t(132),k=t(185),z=t(839),y=t(326),R=t(323),P=t(452),C=t(280),x=t(19),A=(t(825),t(808),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Seller Name",field:"seller_name",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.seller_name))}},{headerName:"Seller Id",field:" sellerId",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.sellerId))}},{headerName:"Seller Email",field:"selleremail\t",filter:!0,width:190,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.selleremail))}},{headerName:"Mobile No.",field:"mobile_no\t",filter:!0,width:170,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.mobile_no))}},{headerName:"Business Type",field:"business_type",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.business_type))}},{headerName:"Store Name",field:"store_name",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.store_name))}},{headerName:"Store Image",field:"store_img",filter:!1,width:150,setColumnVisible:!1,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("img",{className:" rounded-circle  mr-3",src:e.data.store_img,alt:"user avatar",height:"40",width:"40"}))}},{headerName:"Store Address",field:"store_address",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.store_address))}},{headerName:"GSTIN NO.",field:"gstin_no",filter:!0,width:180,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.gstin_no))}},{headerName:"City ",field:"city",filter:!0,width:170,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.city))}},{headerName:" State",field:"state",filter:!0,width:170,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.state))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Inactive"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(y.a,{className:"mr-50",size:20,onClick:function(){return x.a.push("/app/seller/viewSeller/".concat(a.data._id))}}),u.a.createElement(R.a,{className:"mr-50",size:20,onClick:function(){return x.a.push("/app/seller/editSeller")}}),u.a.createElement(P.a,{size:20,onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/getseller").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(l.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("/delproduct/".concat(a)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return console.log(t),u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"}),u.a.createElement(f.a,{sm:"12"},u.a.createElement(g.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"Seller List")),u.a.createElement(f.a,null,u.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return x.a.push("/app/seller/addSeller")}},"Add Seller"))),u.a.createElement(h.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(w.a,{className:"p-1 ag-dropdown"},u.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(C.a,{className:"ml-50",size:15})),u.a.createElement(v.a,{right:!0},u.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(S.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(N.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(k.a.Consumer,null,(function(a){return u.a.createElement(z.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component));a.default=A},808:function(e,a,t){}}]);
//# sourceMappingURL=187.1e4602bd.chunk.js.map