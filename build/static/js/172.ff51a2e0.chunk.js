(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[172],{2167:function(e,a,t){"use strict";t.r(a);var n=t(53),r=t.n(n),i=t(83),l=t(13),c=t(14),o=t(16),s=t(15),u=t(0),d=t.n(u),m=t(138),p=t(56),f=t(578),g=t(135),h=t(579),v=t(799),w=t(801),E=t(798),N=t(797),S=t(86),b=t(82),z=t(186),k=t(834),C=t(322),P=t(451),A=t(279),D=t(21),y=(t(820),t(803),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Coupon Code",field:"offer_code",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:""},d.a.createElement("span",null,e.data.offer_code))}},{headerName:"Coupon Title",field:"coupon_title",filter:!0,width:150,cellRendererFramework:function(e){return d.a.createElement("div",{className:""},d.a.createElement("span",null,e.data.coupon_title))}},{headerName:"Product Name",field:"coupon_title",filter:!0,width:150,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:""},d.a.createElement("span",null,null===(a=e.data.product)||void 0===a?void 0:a.product_name))}},{headerName:"Start Date",field:"startDate",filter:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:""},d.a.createElement("span",null,e.data.startDate))}},{headerName:"Expire On",field:"expireOn",filter:!0,width:180,cellRendererFramework:function(e){return d.a.createElement("div",{className:" mr-4"},d.a.createElement("span",null,e.data.expireOn))}},{headerName:"Amont",field:"amount",filter:!0,width:120,cellRendererFramework:function(e){return d.a.createElement("div",{className:" mr-4"},d.a.createElement("span",null,e.data.amount))}},{headerName:"Description",field:"description",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.description))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success "},e.data.status):"Inactive"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(C.a,{className:"mr-50",size:15,color:"blue",onClick:function(){return D.a.push("/app/offerAndCoupon/coupons/editCoupon/".concat(a.data._id))}}),d.a.createElement(P.a,{size:15,color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/getcouponbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("/delcoupon/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return d.a.createElement(m.a,{className:"app-user-list"},d.a.createElement(p.a,{sm:"12"}),d.a.createElement(p.a,{sm:"12"},d.a.createElement(f.a,null,d.a.createElement(m.a,{className:"m-2"},d.a.createElement(p.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Coupon List")),d.a.createElement(p.a,null,d.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return D.a.push("/app/offerAndCoupon/coupons/addCoupons")}},"Add New Coupons"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(w.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(A.a,{className:"ml-50",size:15})),d.a.createElement(E.a,{right:!0},d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(z.a.Consumer,null,(function(a){return d.a.createElement(k.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(d.a.Component));a.default=y},803:function(e,a,t){}}]);
//# sourceMappingURL=172.ff51a2e0.chunk.js.map