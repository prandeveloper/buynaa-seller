(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[95],{2236:function(e,t,a){"use strict";a.r(t);var n=a(53),r=a.n(n),i=a(83),l=a(13),s=a(14),o=a(16),c=a(15),u=a(0),m=a.n(u),d=a(137),p=a(56),f=a(578),g=a(994),h=a(995),E=a(854),v=a(579),b=a(904),O=a(72),y=a(73),S=a(86),N=a(799),w=a(801),j=a(798),C=a(797),D=a(925),x=a(33),A=a.n(x),T=a(186),k=a(836),P=a(322),z=a(451),R=a(279),M=a(415),F=a(200),V=a(287),G=a(409),I=a(318),L=a(4),Q=a.n(L),U=a(21),B=(a(823),a(803),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={rowData:null,pageSize:20,isVisible:!0,reload:!1,collapse:!0,status:"Opened",role:"All",selectStatus:"All",verified:"All",department:"All",defaultColDef:{sortable:!0},searchVal:"",columnDefs:[{headerName:"ID",field:"id",width:150,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Username",field:"username",filter:!0,width:250,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer",onClick:function(){return U.a.push("/app/user/edit")}},m.a.createElement("img",{className:"rounded-circle mr-50",src:e.data.avatar,alt:"user avatar",height:"30",width:"30"}),m.a.createElement("span",null,e.data.name))}},{headerName:"Email",field:"email",filter:!0,width:250},{headerName:"Name",field:"name",filter:!0,width:200},{headerName:"Country",field:"country",filter:!0,width:200},{headerName:"Role",field:"role",filter:!0,width:150},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"active"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-light-success"},e.value):"blocked"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-light-danger"},e.value):"deactivated"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-light-warning"},e.value):null}},{headerName:"Verified",field:"is_verified",filter:!0,width:125,cellRendererFramework:function(e){return!0===e.value?m.a.createElement("div",{className:"bullet bullet-sm bullet-primary"}):!1===e.value?m.a.createElement("div",{className:"bullet bullet-sm bullet-secondary"}):null}},{headerName:"Department",field:"department",filter:!0,width:160},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(P.a,{className:"mr-50",size:15,onClick:function(){return U.a.push("/app/user/edit")}}),m.a.createElement(z.a,{size:15,onClick:function(){var t=e.gridApi.getSelectedRows();e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi},e.filterData=function(t,a){var n=null;"all"!==a&&(n={type:"equals",filter:a}),e.gridApi.getFilterInstance(t).setModel(n),e.gridApi.onFilterChanged()},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({pageSize:t}))},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t),e.setState({searchVal:t})},e.refreshCard=function(){e.setState({reload:!0}),setTimeout((function(){e.setState({reload:!1,role:"All",selectStatus:"All",verified:"All",department:"All"})}),500)},e.toggleCollapse=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.onEntered=function(){e.setState({status:"Opened"})},e.onEntering=function(){e.setState({status:"Opening..."})},e.onEntered=function(){e.setState({status:"Opened"})},e.onExiting=function(){e.setState({status:"Closing..."})},e.onExited=function(){e.setState({status:"Closed"})},e.removeCard=function(){e.setState({isVisible:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("api/users/list").then((function(e){var a=e.data;t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef,i=t.pageSize;return m.a.createElement(d.a,{className:"app-user-list"},m.a.createElement(p.a,{sm:"12"},m.a.createElement(f.a,{className:Q()("card-action card-reload",{"d-none":!1===this.state.isVisible,"card-collapsed":"Closed"===this.state.status,closing:"Closing..."===this.state.status,opening:"Opening..."===this.state.status,refreshing:this.state.reload})},m.a.createElement(g.a,null,m.a.createElement(h.a,null,"Filters"),m.a.createElement("div",{className:"actions"},m.a.createElement(R.a,{className:"collapse-icon mr-50",size:15,onClick:this.toggleCollapse}),m.a.createElement(M.a,{className:"mr-50",size:15,onClick:function(){e.refreshCard(),e.gridApi.setFilterModel(null)}}),m.a.createElement(F.a,{size:15,onClick:this.removeCard}))),m.a.createElement(E.a,{isOpen:this.state.collapse,onExited:this.onExited,onEntered:this.onEntered,onExiting:this.onExiting,onEntering:this.onEntering},m.a.createElement(v.a,null,this.state.reload?m.a.createElement(b.a,{color:"primary",className:"reload-spinner"}):"",m.a.createElement(d.a,null,m.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},m.a.createElement(O.a,{className:"mb-0"},m.a.createElement(y.a,{for:"role"},"Role"),m.a.createElement(S.a,{type:"select",name:"role",id:"role",value:this.state.role,onChange:function(t){e.setState({role:t.target.value},(function(){return e.filterData("role",e.state.role.toLowerCase())}))}},m.a.createElement("option",{value:"All"},"All"),m.a.createElement("option",{value:"User"},"User"),m.a.createElement("option",{value:"Staff"},"Staff"),m.a.createElement("option",{value:"Admin"},"Admin")))),m.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},m.a.createElement(O.a,{className:"mb-0"},m.a.createElement(y.a,{for:"status"},"Status"),m.a.createElement(S.a,{type:"select",name:"status",id:"status",value:this.state.selectStatus,onChange:function(t){e.setState({selectStatus:t.target.value},(function(){return e.filterData("status",e.state.selectStatus.toLowerCase())}))}},m.a.createElement("option",{value:"All"},"All"),m.a.createElement("option",{value:"Active"},"Active"),m.a.createElement("option",{value:"Blocked"},"Blocked"),m.a.createElement("option",{value:"Deactivated"},"Deactivated")))),m.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},m.a.createElement(O.a,{className:"mb-0"},m.a.createElement(y.a,{for:"verified"},"Verified"),m.a.createElement(S.a,{type:"select",name:"verified",id:"verified",value:this.state.verified,onChange:function(t){e.setState({verified:t.target.value},(function(){return e.filterData("is_verified",e.state.verified.toLowerCase())}))}},m.a.createElement("option",{value:"All"},"All"),m.a.createElement("option",{value:"True"},"True"),m.a.createElement("option",{value:"False"},"False")))),m.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},m.a.createElement(O.a,{className:"mb-0"},m.a.createElement(y.a,{for:"department"},"Department"),m.a.createElement(S.a,{type:"select",name:"department",id:"department",value:this.state.department,onChange:function(t){e.setState({department:t.target.value},(function(){return e.filterData("department",e.state.department.toLowerCase())}))}},m.a.createElement("option",{value:"All"},"All"),m.a.createElement("option",{value:"Sales"},"Sales"),m.a.createElement("option",{value:"Development"},"Development"),m.a.createElement("option",{value:"Management"},"Management"))))))))),m.a.createElement(p.a,{sm:"12"},m.a.createElement(f.a,null,m.a.createElement(v.a,null,m.a.createElement("div",{className:"ag-theme-material ag-grid-table"},m.a.createElement("div",{className:"ag-grid-actions d-flex justify-content-between flex-wrap mb-1"},m.a.createElement("div",{className:"sort-dropdown"},m.a.createElement(N.a,{className:"ag-dropdown p-1"},m.a.createElement(w.a,{tag:"div"},"1 - ",i," of 150",m.a.createElement(R.a,{className:"ml-50",size:15})),m.a.createElement(j.a,{right:!0},m.a.createElement(C.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(C.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(C.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(C.a,{tag:"div",onClick:function(){return e.filterSize(150)}},"150")))),m.a.createElement("div",{className:"filter-actions d-flex"},m.a.createElement(S.a,{className:"w-50 mr-1 mb-1 mb-sm-0",type:"text",placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.searchVal}),m.a.createElement("div",{className:"dropdown actions-dropdown"},m.a.createElement(D.a,null,m.a.createElement(w.a,{className:"px-2 py-75",color:"white"},"Actions",m.a.createElement(R.a,{className:"ml-50",size:15})),m.a.createElement(j.a,{right:!0},m.a.createElement(C.a,{tag:"a"},m.a.createElement(z.a,{size:15}),m.a.createElement("span",{className:"align-middle ml-50"},"Delete")),m.a.createElement(C.a,{tag:"a"},m.a.createElement(V.a,{size:15}),m.a.createElement("span",{className:"align-middle ml-50"},"Archive")),m.a.createElement(C.a,{tag:"a"},m.a.createElement(G.a,{size:15}),m.a.createElement("span",{className:"align-middle ml-50"},"Print")),m.a.createElement(C.a,{tag:"a"},m.a.createElement(I.a,{size:15}),m.a.createElement("span",{className:"align-middle ml-50"},"CSV"))))))),null!==this.state.rowData?m.a.createElement(T.a.Consumer,null,(function(t){return m.a.createElement(k.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,pivotPanelShow:"always",paginationPageSize:i,resizable:!0,enableRtl:"rtl"===t.state.direction})})):null)))))}}]),a}(m.a.Component));t.default=B},803:function(e,t,a){},854:function(e,t,a){"use strict";var n,r=a(5),i=a(6),l=a(8),s=a(12),o=a(36),c=a(0),u=a.n(c),m=a(1),d=a.n(m),p=a(4),f=a.n(p),g=a(104),h=a(3),E=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=b(b({},g.Transition.propTypes),{},{isOpen:d.a.bool,children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:h.tagPropType,className:d.a.node,navbar:d.a.bool,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.func,d.a.string,d.a.object])}),y=b(b({},g.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:h.TransitionTimeouts.Collapse}),S=((n={})[h.TransitionStatuses.ENTERING]="collapsing",n[h.TransitionStatuses.ENTERED]="collapse show",n[h.TransitionStatuses.EXITING]="collapsing",n[h.TransitionStatuses.EXITED]="collapse",n);function N(e){return e.scrollHeight}var w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(l.a)(a))})),a}Object(s.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:N(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:N(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,l=t.className,s=t.navbar,o=t.cssModule,c=t.children,m=(t.innerRef,Object(i.a)(t,E)),d=this.state.height,p=Object(h.pick)(m,h.TransitionPropTypeKeys),v=Object(h.omit)(m,h.TransitionPropTypeKeys);return u.a.createElement(g.Transition,Object(r.a)({},p,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return S[e]||"collapse"}(t),i=Object(h.mapToCssModules)(f()(l,n,s&&"navbar-collapse"),o),m=null===d?null:{height:d};return u.a.createElement(a,Object(r.a)({},v,{style:b(b({},v.style),m),className:i,ref:e.props.innerRef}),c)}))},t}(c.Component);w.propTypes=O,w.defaultProps=y,t.a=w},872:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),l=a(1),s=a.n(l),o=a(133),c={children:s.a.node},u=function(e){return i.a.createElement(o.a,Object(n.a)({group:!0},e))};u.propTypes=c,t.a=u},904:function(e,t,a){"use strict";var n=a(5),r=a(6),i=a(0),l=a.n(i),s=a(1),o=a.n(s),c=a(4),u=a.n(c),m=a(3),d=["className","cssModule","type","size","color","children","tag"],p={tag:m.tagPropType,type:o.a.string,size:o.a.string,color:o.a.string,className:o.a.string,cssModule:o.a.object,children:o.a.string},f=function(e){var t=e.className,a=e.cssModule,i=e.type,s=e.size,o=e.color,c=e.children,p=e.tag,f=Object(r.a)(e,d),g=Object(m.mapToCssModules)(u()(t,!!s&&"spinner-"+i+"-"+s,"spinner-"+i,!!o&&"text-"+o),a);return l.a.createElement(p,Object(n.a)({role:"status"},f,{className:g}),c&&l.a.createElement("span",{className:Object(m.mapToCssModules)("sr-only",a)},c))};f.propTypes=p,f.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=f},925:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(36),r=a(5),i=a(8),l=a(12),s=a(0),o=a.n(s),c=a(1),u=a.n(c),m=a(872),d=a(3);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var f=["defaultOpen"],g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return o.a.createElement(m.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(d.omit)(this.props,f)))},t}(s.Component);g.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:u.a.bool},m.a.propTypes)}}]);
//# sourceMappingURL=95.1bd7c258.chunk.js.map