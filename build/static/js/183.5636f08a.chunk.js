(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[183],{2195:function(e,t,a){"use strict";a.r(t);var n=a(53),r=a.n(n),i=a(77),l=a(13),c=a(14),o=a(16),s=a(15),u=a(0),d=a.n(u),p=a(990),f=a(991),m=a(992),g=a(178),h=a(995),v=a(793),b=a(795),w=a(791),E=a(790),z=a(798),S=a(797),x=a(177),y=a(841),N=a(319),P=a(316),k=a(446),R=a(273),C=a(21),D=(a(829),a(803),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"GST Title",field:"gst_title",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.gst_title))}},{headerName:"Value",field:"value",filter:!0,width:170,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.value))}},{headerName:"Description",field:"desc",filter:!0,width:200,cellRendererFramework:function(e){return d.a.createElement("div",null,d.a.createElement("span",null,e.data.desc))}},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(t){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(N.a,{className:"mr-50",color:"green",size:20,onClick:function(){return C.a.push("/app/Tax/viewTax/".concat(t.data._id))}}),d.a.createElement(P.a,{className:"mr-50",color:"blue",size:20,onClick:function(){return C.a.push("/app/tax/editTax/".concat(t.data._id))}}),d.a.createElement(k.a,{color:"red",size:20,onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/getgstbyseller",{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){var a=e.data.data;console.log(a),t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,S.a.get("/delgst/".concat(t)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return console.log(a),d.a.createElement(p.a,{className:"app-user-list"},d.a.createElement(f.a,{sm:"12"}),d.a.createElement(f.a,{sm:"12"},d.a.createElement(m.a,null,d.a.createElement(p.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{sm:"6",className:"float-left"},"Tax List")),d.a.createElement(f.a,null,d.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return C.a.push("/app/tax/addTax")}},"Add Tax"))),d.a.createElement(h.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(v.a,{className:"p-1 ag-dropdown"},d.a.createElement(b.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(R.a,{className:"ml-50",size:15})),d.a.createElement(w.a,{right:!0},d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(z.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(x.a.Consumer,null,(function(t){return d.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component));t.default=D},797:function(e,t,a){"use strict";var n=a(36),r=a.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});t.a=r},798:function(e,t,a){"use strict";var n=a(5),r=a(7),i=a(11),l=a(12),c=a(0),o=a.n(c),s=a(1),u=a.n(s),d=a(4),p=a.n(d),f=a(3),m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,l=e.bsSize,c=e.valid,s=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),w=u||("select"===i||"textarea"===i?i:"input"),E="form-control";m?(E+="-plaintext",w=u||"input"):"file"===i?E+="-file":"range"===i?E+="-range":v&&(E=d?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var z=Object(f.mapToCssModules)(p()(t,s&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,E),a);return("input"===w||u&&"function"===typeof u)&&(h.type=i),h.children&&!m&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(f.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(w,Object(n.a)({},h,{ref:g,className:z,"aria-invalid":s}))},t}(o.a.Component);g.propTypes=m,g.defaultProps={type:"text"},t.a=g},803:function(e,t,a){}}]);
//# sourceMappingURL=183.5636f08a.chunk.js.map