(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[162],{2196:function(e,a,t){"use strict";t.r(a);var r=t(54),n=t.n(r),l=t(78),i=t(13),c=t(14),d=t(16),o=t(15),s=t(0),m=t.n(s),u=t(138),f=t(81),g=t(575),p=t(136),h=t(576),w=t(804),E=t(806),v=t(802),N=t(801),b=t(104),k=t(132),S=t(185),y=t(839),_=t(326),R=t(323),C=t(452),P=t(280),z=t(19),F=(t(825),t(808),function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Logo ",field:"shoplogo_img",filter:!0,width:120,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("img",{className:"rounded-circle",src:e.data.shoplogo_img,alt:"user",height:"45",width:"45"}))}},{headerName:"Image",field:"storeImg",filter:!1,width:200,setColumnVisible:!1,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},e.data.storeImg.map((function(e){return m.a.createElement("img",{className:" rounded-circle border-black m-0",src:e,alt:"user avatar",height:"40",width:"40"})})))}},{headerName:"Store Name ",field:"store_name\t",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.store_name))}},{headerName:"Store Description",field:" store_desc",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.store_desc))}},{headerName:"Website",field:"websiteUrl\t",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.websiteUrl))}},{headerName:"Email",field:"store_email\t",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.store_email))}},{headerName:"Phone No's.",field:"mobile\t",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.phone_no,",",e.data.altphone_no,","))}},{headerName:"Open Days",field:"day",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.day))}},{headerName:"Opening Time",field:"openingTym",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.openingTym))}},{headerName:"Closing Time",field:"closingTym",filter:!0,width:150,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.closingTym))}},{headerName:"Address",field:"address_line1,address_line2",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.address_line1," ",e.data.address_line2))}},{headerName:"LandMark",field:"landmark",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.landmark))}},{headerName:"City",field:"city",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.city))}},{headerName:"State",field:"state",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.state))}},{headerName:"PinCode",field:"pincode",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.pincode))}},{headerName:"GST No.",field:"gst_no",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.gst_no))}},{headerName:"Business Type",field:"business_type",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.business_type))}},{headerName:"PAN No.",field:"pan_no",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.pan_no))}},{headerName:"Comapny PAN no.",field:"company_panno",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.company_panno))}},{headerName:"Address Proof",field:"address_proof",filter:!0,width:200,cellRendererFramework:function(e){return m.a.createElement("div",null,m.a.createElement("span",null,e.data.address_proof))}},{headerName:"GST Image",field:"gstImg",filter:!1,width:200,setColumnVisible:!1,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},e.data.gstImg.map((function(e){return m.a.createElement("img",{className:" rounded-circle border-black m-0",src:e,alt:"user avatar",height:"40",width:"40"})})))}},{headerName:"PAN Img",field:"storepan_img",filter:!1,width:200,setColumnVisible:!1,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},e.data.storepan_img.map((function(e){return m.a.createElement("img",{className:" rounded-circle border-black m-0",src:e,alt:"user avatar",height:"40",width:"40"})})))}},{headerName:"Trade Licence",field:"tradelicence_img",filter:!1,width:200,setColumnVisible:!1,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},e.data.tradelicence_img.map((function(e){return m.a.createElement("img",{className:" rounded-circle border-black m-0",src:e,alt:"user avatar",height:"40",width:"40"})})))}},{headerName:"Comp.PAN Img",field:"companypan_img",filter:!1,width:200,setColumnVisible:!1,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},e.data.companypan_img.map((function(e){return m.a.createElement("img",{className:" rounded-circle border-black m-0",src:e,alt:"user avatar",height:"40",width:"40"})})))}},{headerName:"Address Proof",field:"address_proof_img",filter:!1,width:200,setColumnVisible:!1,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},e.data.address_proof_img.map((function(e){return m.a.createElement("img",{className:" rounded-circle border-black m-0",src:e,alt:"user avatar",height:"40",width:"40"})})))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Inactive"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(_.a,{size:"25px",color:"green",className:"mr-50",onClick:function(){return z.a.push("/app/myStore/viewStore/".concat(a.data._id))}}),m.a.createElement(R.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return z.a.push("/app/myStore/editStore/".concat(a.data._id))}}),m.a.createElement(C.a,{size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/storebyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){var t=e.data.data;console.log(t),console.log(e.data.data),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(l.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,k.a.get("/del_store/".concat(a)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return console.log(t),m.a.createElement(u.a,{className:"app-user-list"},m.a.createElement(f.a,{sm:"12"}),m.a.createElement(f.a,{sm:"12"},m.a.createElement(g.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(f.a,null,m.a.createElement("h1",{sm:"6",className:"float-left"},"Store List")),m.a.createElement(f.a,null,m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return z.a.push("/app/myStore/addMyStore")}},"Add Store"))),m.a.createElement(h.a,null,null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(w.a,{className:"p-1 ag-dropdown"},m.a.createElement(E.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(P.a,{className:"ml-50",size:15})),m.a.createElement(v.a,{right:!0},m.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(b.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(S.a.Consumer,null,(function(a){return m.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(m.a.Component));a.default=F},808:function(e,a,t){}}]);
//# sourceMappingURL=162.d1d6e539.chunk.js.map