(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[213],{2102:function(e,t,a){"use strict";a.r(t);var n=a(53),i=a.n(n),r=a(77),c=a(13),l=a(14),o=a(16),d=a(15),s=a(0),u=a.n(s),p=a(990),f=a(991),h=a(992),m=a(178),g=a(995),b=a(793),k=a(795),v=a(791),w=a(790),y=a(798),S=a(36),N=a.n(S),x=a(177),R=a(841),z=a(446),E=a(273),P=a(21),C=(a(829),a(803),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No.",field:"",valueGetter:"node.rowIndex + 1",width:110,filter:!0},{headerName:"Employee Name",field:"name",filter:!0,width:120,cellRendererFramework:function(e){var t;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(t=e.data.emp)||void 0===t?void 0:t.name))}},{headerName:"Store",field:"store",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.store?"checked":""," />")}},{headerName:"Employee",field:"employee",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.employee?"checked":""," />")}},{headerName:"Customer",field:"customer",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.customer?"checked":""," />")}},{headerName:"Supplier",field:"store",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.supplier?"checked":""," />")}},{headerName:"Product",field:"product",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.product?"checked":""," />")}},{headerName:"Stock Control",field:"stockControl",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.stockControl?"checked":""," />")}},{headerName:"Offers",field:"offers",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.offers?"checked":""," />")}},{headerName:"Coupons",field:"coupons",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.coupons?"checked":""," />")}},{headerName:"Subscription",field:"subscription",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.subscription?"checked":""," />")}},{headerName:"Billing",field:"billing",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.billing?"checked":""," />")}},{headerName:"Order",field:"order",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.order?"checked":""," />")}},{headerName:"Purcahse",field:"purcahse",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.purcahse?"checked":""," />")}},{headerName:"Reports",field:"reports",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.reports?"checked":""," />")}},{headerName:"Notification",field:"notification",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.notification?"checked":""," />")}},{headerName:"Permission",field:"rolesPermission",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.rolesPermission?"checked":""," />")}},{headerName:"Setting",field:"setting",filter:!0,editable:!1,width:120,cellRenderer:function(e){return"<input type='checkbox' ".concat(e.data.setting?"checked":""," />")}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(z.a,{size:20,onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://35.154.86.59/api/admin/allrole",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){var a=e.data.data;t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,N.a.get("http://35.154.86.59/api/admin/del_role/".concat(t)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return u.a.createElement(p.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"}),u.a.createElement(f.a,{sm:"12"},u.a.createElement(h.a,null,u.a.createElement(p.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"All User Roles")),u.a.createElement(f.a,null,u.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return P.a.push("/app/roleAndPermission/addRole")}},"Add New User"))),u.a.createElement(g.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(b.a,{className:"p-1 ag-dropdown"},u.a.createElement(k.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(E.a,{className:"ml-50",size:15})),u.a.createElement(v.a,{right:!0},u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(y.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(x.a.Consumer,null,(function(t){return u.a.createElement(R.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(u.a.Component));t.default=C},798:function(e,t,a){"use strict";var n=a(5),i=a(7),r=a(11),c=a(12),l=a(0),o=a.n(l),d=a(1),s=a.n(d),u=a(4),p=a.n(u),f=a(3),h={children:s.a.node,type:s.a.string,size:s.a.oneOfType([s.a.number,s.a.string]),bsSize:s.a.string,valid:s.a.bool,invalid:s.a.bool,tag:f.tagPropType,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),plaintext:s.a.bool,addon:s.a.bool,className:s.a.string,cssModule:s.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,c=e.bsSize,l=e.valid,d=e.invalid,s=e.tag,u=e.addon,h=e.plaintext,m=e.innerRef,g=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(r)>-1,k=new RegExp("\\D","g"),v=s||("select"===r||"textarea"===r?r:"input"),w="form-control";h?(w+="-plaintext",v=s||"input"):"file"===r?w+="-file":"range"===r?w+="-range":b&&(w=u?null:"form-check-input"),g.size&&k.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var y=Object(f.mapToCssModules)(p()(t,d&&"is-invalid",l&&"is-valid",!!c&&"form-control-"+c,w),a);return("input"===v||s&&"function"===typeof s)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(v,Object(n.a)({},g,{ref:m,className:y,"aria-invalid":d}))},t}(o.a.Component);m.propTypes=h,m.defaultProps={type:"text"},t.a=m},803:function(e,t,a){}}]);
//# sourceMappingURL=213.106b1789.chunk.js.map