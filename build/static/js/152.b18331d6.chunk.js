(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[152],{2177:function(e,a,t){"use strict";t.r(a);var n=t(53),r=t.n(n),i=t(77),l=t(13),c=t(14),o=t(16),s=t(15),u=t(0),d=t.n(u),m=t(990),p=t(991),f=t(992),g=t(178),h=t(995),v=t(793),b=t(795),E=t(791),w=t(790),y=t(798),S=t(797),z=t(177),N=t(841),x=t(316),P=t(446),R=t(273),k=t(21),C=(t(829),t(803),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Image",field:"image",filter:!1,width:120,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("img",{className:"rounded-circle  mr-4",src:e.data.image,alt:"img",height:"40",width:"40"}))}},{headerName:"Employee Name",field:"name",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.name))}},{headerName:"Email",field:"email",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.email))}},{headerName:"Phone No.",field:"mobile",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.mobile))}},{headerName:"Role Name",field:"rolename",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",{className:"ml-2 mr-4"},d.a.createElement("span",null,e.data.rolename))}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(x.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return k.a.push("/app/contactUs/employee/editEmployee/".concat(a.data._id))}}),d.a.createElement(P.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/getemployecreatedbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,S.a.get("/delSeller/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return d.a.createElement(m.a,{className:"app-user-list"},d.a.createElement(p.a,{sm:"12"}),d.a.createElement(p.a,{sm:"12"},d.a.createElement(f.a,null,d.a.createElement(m.a,{className:"m-2"},d.a.createElement(p.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Employee List")),d.a.createElement(p.a,null,d.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return k.a.push("/app/contactUs/employee/addEmployee")}},"Add New Employee"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(b.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(R.a,{className:"ml-50",size:15})),d.a.createElement(E.a,{right:!0},d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(y.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(z.a.Consumer,null,(function(a){return d.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(d.a.Component));a.default=C},797:function(e,a,t){"use strict";var n=t(36),r=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=r},798:function(e,a,t){"use strict";var n=t(5),r=t(7),i=t(11),l=t(12),c=t(0),o=t.n(c),s=t(1),u=t.n(s),d=t(4),m=t.n(d),p=t(3),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,l=e.bsSize,c=e.valid,s=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),E=u||("select"===i||"textarea"===i?i:"input"),w="form-control";f?(w+="-plaintext",E=u||"input"):"file"===i?w+="-file":"range"===i?w+="-range":v&&(w=d?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var y=Object(p.mapToCssModules)(m()(a,s&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,w),t);return("input"===E||u&&"function"===typeof u)&&(h.type=i),h.children&&!f&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(E,Object(n.a)({},h,{ref:g,className:y,"aria-invalid":s}))},a}(o.a.Component);g.propTypes=f,g.defaultProps={type:"text"},a.a=g},803:function(e,a,t){}}]);
//# sourceMappingURL=152.b18331d6.chunk.js.map