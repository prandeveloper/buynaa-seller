(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[181],{2127:function(e,a,t){"use strict";t.r(a);var n=t(53),r=t.n(n),i=t(83),l=t(13),c=t(14),s=t(16),o=t(15),d=t(0),u=t.n(d),m=t(137),g=t(56),p=t(578),f=t(135),h=t(579),v=t(799),w=t(801),E=t(798),b=t(797),S=t(86),N=t(82),z=t(186),k=t(836),P=t(322),y=t(451),A=t(279),D=t(21),x=(t(823),t(803),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.no",field:"sortorder",valueGetter:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Logo",field:"brand_img",filter:!1,width:120,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("img",{className:"rounded-circle  mr-4",src:e.data.brand_img,alt:" brand",height:"40",width:"40"}))}},{headerName:"Brand Title",field:"name",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"ml-2 mr-4"},u.a.createElement("span",null,e.data.name))}},{headerName:"Description",field:"desc",filter:!0,width:200,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.desc))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-success ml-2"},e.data.status):"Inactive"===e.value?u.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(P.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return D.a.push("/app/products/brand/editBrand/".concat(a.data._id))}}),u.a.createElement(y.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/allbrandbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,N.a.get("/deletebrand/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(g.a,{sm:"12"}),u.a.createElement(g.a,{sm:"12"},u.a.createElement(p.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(g.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Brand List")),u.a.createElement(g.a,null,u.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return D.a.push("/app/products/brand/addBrand")}},"Add New Brand"))),u.a.createElement(h.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(v.a,{className:"p-1 ag-dropdown"},u.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(A.a,{className:"ml-50",size:15})),u.a.createElement(E.a,{right:!0},u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(b.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(f.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(z.a.Consumer,null,(function(a){return u.a.createElement(k.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component));a.default=x},803:function(e,a,t){}}]);
//# sourceMappingURL=181.8402fa0f.chunk.js.map