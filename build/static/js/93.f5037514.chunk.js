(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[93],{1230:function(t,e,a){"use strict";var s=a(1231),n=a.n(s),o=a(72),r=a.n(o),i=a(11),c=a.n(i),l=a(0),p=a.n(l),d=(a(1),{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),h={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},u={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},m={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},k={zIndex:1,position:"fixed",top:0,bottom:0},b=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={sidebarWidth:e.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},a.overlayClicked=a.overlayClicked.bind(c()(c()(a))),a.onTouchStart=a.onTouchStart.bind(c()(c()(a))),a.onTouchMove=a.onTouchMove.bind(c()(c()(a))),a.onTouchEnd=a.onTouchEnd.bind(c()(c()(a))),a.onScroll=a.onScroll.bind(c()(c()(a))),a.saveSidebarRef=a.saveSidebarRef.bind(c()(c()(a))),a}r()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!t}),this.saveSidebarWidth()},a.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},a.onTouchStart=function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchCurrentX:e.clientX})}},a.onTouchMove=function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX});break}},a.onTouchEnd=function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},a.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},a.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},a.isTouching=function(){return null!==this.state.touchIdentifier},a.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},a.saveSidebarWidth=function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})},a.saveSidebarRef=function(t){this.sidebar=t},a.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},a.render=function(){var t,e=n()({},h,this.props.styles.sidebar),a=n()({},u,this.props.styles.content),s=n()({},m,this.props.styles.overlay),o=this.state.dragSupported&&this.props.touch,r=this.isTouching(),i={className:this.props.rootClassName,style:n()({},d,this.props.styles.root),role:"navigation",id:this.props.rootId},c=this.props.shadow&&(r||this.props.open||this.props.docked);if(this.props.pullRight?(e.right=0,e.transform="translateX(100%)",e.WebkitTransform="translateX(100%)",c&&(e.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(e.left=0,e.transform="translateX(-100%)",e.WebkitTransform="translateX(-100%)",c&&(e.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),r){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(e.transform="translateX("+100*(1-l)+"%)",e.WebkitTransform="translateX("+100*(1-l)+"%)"):(e.transform="translateX(-"+100*(1-l)+"%)",e.WebkitTransform="translateX(-"+100*(1-l)+"%)"),s.opacity=l,s.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)"),this.props.pullRight?a.right=this.state.sidebarWidth+"px":a.left=this.state.sidebarWidth+"px"):this.props.open&&(e.transform="translateX(0%)",e.WebkitTransform="translateX(0%)",s.opacity=1,s.visibility="visible");if(!r&&this.props.transitions||(e.transition="none",e.WebkitTransition="none",a.transition="none",s.transition="none"),o)if(this.props.open)i.onTouchStart=this.onTouchStart,i.onTouchMove=this.onTouchMove,i.onTouchEnd=this.onTouchEnd,i.onTouchCancel=this.onTouchEnd,i.onScroll=this.onScroll;else{var b=n()({},k,this.props.styles.dragHandle);b.width=this.props.touchHandleWidth,this.props.pullRight?b.right=0:b.left=0,t=p.a.createElement("div",{style:b,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return p.a.createElement("div",i,p.a.createElement("div",{className:this.props.sidebarClassName,style:e,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),p.a.createElement("div",{className:this.props.overlayClassName,style:s,onClick:this.overlayClicked,id:this.props.overlayId}),p.a.createElement("div",{className:this.props.contentClassName,style:a,id:this.props.contentId},t,this.props.children))},e}(l.Component);b.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.a=b},1231:function(t,e,a){var s=a(21);t.exports=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach((function(e){s(t,e,a[e])}))}return t},t.exports.default=t.exports,t.exports.__esModule=!0},1770:function(t,e,a){},2302:function(t,e,a){"use strict";a.r(e);var s=a(13),n=a(14),o=a(16),r=a(15),i=a(0),c=a.n(i),l=a(1230),p=a(186),d=a(136),h=a(1024),u=a(1025),m=a(47),k=a.n(m),b=a(201),f=a(209),T=a(439),g=a(355),v=a(280),E=a(454),S=a(26),N=a(54),y=a.n(N),C=a(82),w=a(31),x=a.n(w),U=a(19),O=function(t){return function(){var e=Object(C.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("api/apps/todo",{params:t}).then((function(e){a({type:"GET_TODOS",todos:e.data,routeParams:t})})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(t){return function(e){e({type:"COMPLETE_TASK",id:t.id,value:t.isCompleted})}},P=function(t){return function(e){Promise.all([e({type:"STAR_TASK",id:t.id,value:t.isStarred})])}},W=function(t){return function(e){Promise.all([e({type:"IMPORTANT_TASK",id:t.id,value:t.isImportant})])}},X=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var t=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"sidebar-close-icon",onClick:function(){return t.props.mainSidebar(!1)}},c.a.createElement(b.a,{size:15})),c.a.createElement("div",{className:"todo-app-menu"},c.a.createElement("div",{className:"add-task"},c.a.createElement(d.a.Ripple,{block:!0,className:"btn-block my-1",color:"primary",onClick:function(){t.props.addTask("open"),t.props.mainSidebar(!1)}},"Add Task")),c.a.createElement(k.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1}},c.a.createElement(h.a,{className:"font-medium-1"},c.a.createElement(u.a,{className:"border-0 pt-0",action:!0,onClick:function(){t.props.changeFilter("all")},active:"/todo/all"===this.props.routerProps.location.pathname},c.a.createElement(f.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"All"))),c.a.createElement("hr",null),c.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Filters"),c.a.createElement(h.a,{className:"font-medium-1"},c.a.createElement(u.a,{className:"border-0",onClick:function(){t.props.changeFilter("starred")},active:"/todo/starred"===this.props.routerProps.location.pathname},c.a.createElement(T.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Starred")),c.a.createElement(u.a,{className:"border-0",onClick:function(){t.props.changeFilter("important")},active:"/todo/important"===this.props.routerProps.location.pathname},c.a.createElement(g.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Important")),c.a.createElement(u.a,{className:"border-0",onClick:function(){t.props.changeFilter("completed")},active:"/todo/completed"===this.props.routerProps.location.pathname},c.a.createElement(v.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Completed")),c.a.createElement(u.a,{className:"border-0",onClick:function(){t.props.changeFilter("trashed")},active:"/todo/trashed"===this.props.routerProps.location.pathname},c.a.createElement(E.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Trashed"))),c.a.createElement("hr",null),c.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Labels"),c.a.createElement(h.a,{className:"font-medium-1"},c.a.createElement(u.a,{className:"border-0",onClick:function(){t.props.changeFilter("frontend")},active:"/todo/frontend"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-primary align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Frontend")),c.a.createElement(u.a,{className:"border-0",onClick:function(){t.props.changeFilter("backend")},active:"/todo/backend"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-warning align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Backend")),c.a.createElement(u.a,{className:"border-0",onClick:function(){t.props.changeFilter("doc")},active:"/todo/doc"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-success align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Doc")),c.a.createElement(u.a,{className:"border-0",onClick:function(){t.props.changeFilter("bug")},active:"/todo/bug"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-danger align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Bug"))))))}}]),a}(c.a.Component),z=Object(S.b)(null,{changeFilter:function(t){return function(e){e({type:"CHANGE_FILTER",filter:t}),U.a.push("/todo/".concat(t)),e(O({filter:t}))}}})(X),A=a(73),I=a(85),D=a(373),R=a(421),M=a(835),F=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[],handleUpdateTask:null,currentLocation:t.props.routerProps.location.pathname,value:""},t.handleOnChange=function(e){t.setState({value:e.target.value}),t.props.searchTask(e.target.value)},t}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t=Object(C.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.getTodos(this.props.routerProps.match.params);case 2:this.setState({todos:this.props.app.todo.todos,handleUpdateTask:this.props.handleUpdateTask});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,a=e.todos,s=e.handleUpdateTask,n=e.value,o=this.props.routerProps.match.params.filter,r=n.length?this.props.app.todo.filteredTodos:a,i=r.length>0?r.map((function(e,a){return c.a.createElement("li",{className:"todo-item ".concat(e.isCompleted?"completed":""),key:a,onClick:function(){s(e)}},c.a.createElement("div",{className:"todo-title-wrapper d-flex justify-content-between mb-50"},c.a.createElement("div",{className:"todo-title-area d-flex align-items-center"},c.a.createElement("div",{className:"title-wrapper d-flex"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"",checked:e.isCompleted,size:"sm",onClick:function(a){a.stopPropagation(),t.props.completeTask(e)},onChange:function(t){return t.stopPropagation()}}),c.a.createElement("h6",{className:"todo-title mt-50 mx-50"},e.title)),e.tags.length>0?c.a.createElement("div",{className:"chip-wrapper"},e.tags.map((function(t,e){return c.a.createElement("div",{className:"chip mb-0",key:e},c.a.createElement("div",{className:"chip-body"},c.a.createElement("span",{className:"chip-text"},c.a.createElement("span",{className:"bullet bullet-".concat("backend"===t?"warning":"doc"===t?"success":"bug"===t?"danger":"primary"," bullet-xs")}),c.a.createElement("span",{className:"text-capitalize ml-25"},t))))}))):null),c.a.createElement("div",{className:"todo-item-action d-flex ".concat("trashed"===o?"justify-content-end":"")},c.a.createElement("div",{className:"todo-item-info d-inline-block ".concat("trashed"===o?"mr-1":"mr-1 mr-sm-0"),onClick:function(a){a.stopPropagation(),t.props.importantTask(e)}},c.a.createElement(g.a,{size:17,className:"".concat(e.isImportant?"text-success":"")})),c.a.createElement("div",{className:"todo-item-favorite d-inline-block mr-1 mr-sm-0",onClick:function(a){a.stopPropagation(),t.props.starTask(e)}},c.a.createElement(T.a,{size:17,className:"".concat(e.isStarred?"text-warning":"")})),"trashed"!==o?c.a.createElement("div",{className:"todo-item-delete d-inline-block mr-1 mr-sm-0",onClick:function(a){a.stopPropagation(),t.props.trashTask(e.id)}},c.a.createElement(E.a,{size:17})):null)),e.desc.length>0?c.a.createElement("p",{className:"todo-desc truncate mb-0"},e.desc):"")})):c.a.createElement("p",{className:"p-1 text-center mt-2 font-medium-3 text-bold-500"},"No tasks at this time");return c.a.createElement("div",{className:"content-right"},c.a.createElement("div",{className:"todo-app-area"},c.a.createElement("div",{className:"todo-app-list-wrapper"},c.a.createElement("div",{className:"todo-app-list"},c.a.createElement("div",{className:"app-fixed-search"},c.a.createElement("div",{className:"sidebar-toggle d-inline-block d-lg-none",onClick:function(){return t.props.mainSidebar(!0)}},c.a.createElement(D.a,{size:24})),c.a.createElement(A.a,{className:"position-relative has-icon-left m-0 d-inline-block d-lg-block"},c.a.createElement(I.a,{type:"text",placeholder:"Search...",onChange:function(e){return t.handleOnChange(e)},value:n}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(R.a,{size:15})))),c.a.createElement(k.a,{className:"todo-task-list",options:{wheelPropagation:!1}},c.a.createElement("ul",{className:"todo-task-list-wrapper"},i))))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.app.todo.routeParam!==e.currentLocation?{todos:t.app.todo.todos}:null}}]),a}(c.a.Component),L=Object(S.b)((function(t){return{app:t.todoApp}}),{getTodos:O,completeTask:j,starTask:P,importantTask:W,trashTask:function(t){return function(e,a){var s=a().todoApp.todo.routeParam;x.a.post("/api/app/todo/trash-todo",t).then((function(a){return e({type:"TRASH_TASK",id:t})})).then(e(O(s)))}},searchTask:function(t){return function(e){e({type:"SEARCH_TASK",val:t})}}})(F),_=a(2),K=a(805),H=a(807),B=a(803),Q=a(802),G=a(445),J=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={taskToUpdate:null,taskTitle:"",taskDesc:"",taskStatus:!1,taskStarred:!1,taskImportant:!1,newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}},t.handleNewTaskTags=function(e){var a=t.state.newTask.tags;a.includes(e)?a.splice(a.indexOf(e),1):a.push(e),t.setState(Object(_.a)(Object(_.a)({},t.state.newTask),{},{tags:e}))},t.renderTags=function(t){return t.map((function(t,e){return c.a.createElement("div",{className:"chip mb-0 mr-50",key:e},c.a.createElement("div",{className:"chip-body"},c.a.createElement("span",{className:"chip-text"},c.a.createElement("span",{className:"bullet bullet-".concat("backend"===t?"warning":"doc"===t?"success":"bug"===t?"danger":"primary"," bullet-xs")}),c.a.createElement("span",{className:"text-capitalize ml-25"},t))))}))},t}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(t,e){(null!==this.props.taskToUpdate&&this.state.taskToUpdate!==this.props.taskToUpdate||null!==this.props.taskToUpdate&&this.state.taskStatus!==this.props.taskToUpdate.isCompleted||null!==this.props.taskToUpdate&&this.state.taskStarred!==this.props.taskToUpdate.isStarred||null!==this.props.taskToUpdate&&this.state.taskImportant!==this.props.taskToUpdate.isImportant)&&this.setState({taskToUpdate:this.props.taskToUpdate,taskTitle:this.props.taskToUpdate.title,taskDesc:this.props.taskToUpdate.desc,taskStatus:this.props.taskToUpdate.isCompleted,taskStarred:this.props.taskToUpdate.isStarred,taskImportant:this.props.taskToUpdate.isImportant})}},{key:"render",value:function(){var t=this,e=this.state,a=e.taskToUpdate,s=e.taskTitle,n=e.taskDesc,o=e.newTask,r=e.taskStatus;return c.a.createElement("div",{className:"task-sidebar ".concat(!0===this.props.addTaskState?"show":"")},c.a.createElement("div",{className:"task-header"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"task-type-title text-bold-600"},c.a.createElement("h3",null,this.props.taskToUpdate&&this.props.taskToUpdate.id?"Update Task":"Add Task")),c.a.createElement("div",{className:"close-icon"},c.a.createElement(b.a,{className:"cursor-pointer",size:20,onClick:function(){return t.props.addTask("close")}})))),c.a.createElement(k.a,null,c.a.createElement("div",{className:"task-body"},c.a.createElement("div",{className:"d-flex justify-content-between mb-2"},c.a.createElement("div",{className:"mark-complete"},this.props.taskToUpdate&&this.props.taskToUpdate.id&&c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:15}),label:"",checked:r,onChange:function(e){t.props.completeTask(t.props.taskToUpdate)}})),c.a.createElement("div",{className:"task-actions"},c.a.createElement(g.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskImportant||o.isImportant?"text-success":""),onClick:function(){null!==t.props.taskToUpdate?t.props.importantTask(t.props.taskToUpdate):t.setState({newTask:Object(_.a)(Object(_.a)({},t.state.newTask),{},{isImportant:!t.state.newTask.isImportant})})}}),c.a.createElement(T.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskStarred||o.isStarred?"text-warning":""),onClick:function(){null!==t.props.taskToUpdate?t.props.starTask(t.props.taskToUpdate):t.setState({newTask:Object(_.a)(Object(_.a)({},t.state.newTask),{},{isStarred:!t.state.newTask.isStarred})})}}),c.a.createElement(K.a,{className:"d-inline-block"},c.a.createElement(H.a,{tag:"span"},c.a.createElement(G.a,{className:"mr-50",size:20})),c.a.createElement(B.a,{tag:"ul",right:!0},c.a.createElement(Q.a,{tag:"li"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"Frontend",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("frontend")||o.tags.includes("frontend")),size:"sm",onChange:function(e){e.stopPropagation(),null!==t.props.taskToUpdate?t.props.updateLabel(a.id,"frontend"):t.handleNewTaskTags("frontend")}})),c.a.createElement(Q.a,{tag:"li"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"Backend",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("backend")||o.tags.includes("backend")),size:"sm",onClick:function(t){return t.stopPropagation()},onChange:function(e){e.stopPropagation(),null!==t.props.taskToUpdate?t.props.updateLabel(a.id,"backend"):t.handleNewTaskTags("backend")}})),c.a.createElement(Q.a,{tag:"li"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"Doc",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("doc")||o.tags.includes("doc")),size:"sm",onClick:function(t){return t.stopPropagation()},onChange:function(e){e.stopPropagation(),null!==t.props.taskToUpdate?t.props.updateLabel(a.id,"doc"):t.handleNewTaskTags("doc")}})),c.a.createElement(Q.a,{tag:"li"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"Bug",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("bug")||o.tags.includes("bug")),size:"sm",onClick:function(t){return t.stopPropagation()},onChange:function(e){e.stopPropagation(),null!==t.props.taskToUpdate?t.props.updateLabel(a.id,"bug"):t.handleNewTaskTags("bug")}})))))),c.a.createElement(A.a,null,c.a.createElement(I.a,{type:"text",placeholder:"Title",value:null!==this.props.taskToUpdate?s:o.title,onChange:function(e){null!==t.props.taskToUpdate?t.setState({taskTitle:e.target.value}):t.setState({newTask:Object(_.a)(Object(_.a)({},t.state.newTask),{},{title:e.target.value})})}})),c.a.createElement(A.a,null,c.a.createElement(I.a,{type:"textarea",placeholder:"Description",rows:"5",value:null!==this.props.taskToUpdate?n:o.desc,onChange:function(e){null!==t.props.taskToUpdate?t.setState({taskDesc:e.target.value}):t.setState({newTask:Object(_.a)(Object(_.a)({},t.state.newTask),{},{desc:e.target.value})})}})),c.a.createElement("div",{className:"chip-wrapper my-1 d-flex flex-wrap"},null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags&&this.props.taskToUpdate.tags.length>0?this.renderTags(this.props.taskToUpdate.tags):null),c.a.createElement("hr",{className:"my-2"}),c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement(d.a.Ripple,{className:"mr-50",color:"primary",onClick:function(){null!==t.props.taskToUpdate?t.props.updateTask(a.id,s,n):t.props.addNewTask(t.state.newTask),t.props.addTask("close"),t.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})},disabled:!(s.length>0||o.title.length>0)},a&&a.id&&null!==this.props.taskToUpdate?"Update":"Add"),c.a.createElement(d.a.Ripple,{color:"light",outline:!0,onClick:function(){t.props.addTask("close"),t.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})}},"Cancel")))))}}]),a}(c.a.Component),Y=Object(S.b)((function(t){return{app:t.todoApp}}),{completeTask:j,importantTask:W,starTask:P,updateTask:function(t,e,a){return function(s){s({type:"UPDATE_TASK",id:t,title:e,desc:a})}},updateLabel:function(t,e){return function(a,s){a({type:"UPDATE_LABEL",label:e,id:t})}},addNewTask:function(t){return function(e,a){var s=a().todoApp.todo.routeParam;x.a.post("/api/apps/todo/new-task",{task:t}).then((function(a){e({type:"ADD_TASK",task:t}),e(O(s))}))}}})(J),q=(a(1770),window.matchMedia("(min-width: 992px)")),V=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={addTask:!1,sidebarDocked:q.matches,sidebarOpen:!1,taskToUpdate:null,prevState:null},t.onSetSidebarOpen=function(e){t.setState({sidebarOpen:e})},t.mediaQueryChanged=function(){t.setState({sidebarDocked:q.matches,sidebarOpen:!1})},t.handleAddTask=function(e){"open"===e?t.setState({addTask:!0}):t.setState({addTask:!1,taskToUpdate:null})},t.handleUpdateTask=function(e){void 0!==e?t.setState({addTask:!0,taskToUpdate:e}):t.setState({taskToUpdate:null})},t.handleUndoChanges=function(e){t.setState({prevState:e})},t}return Object(n.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){q.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){q.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"todo-application position-relative"},c.a.createElement("div",{className:"app-content-overlay ".concat(this.state.addTask||this.state.sidebarOpen?"show":""),onClick:function(){t.handleAddTask("close"),t.onSetSidebarOpen(!1)}}),c.a.createElement(p.a.Consumer,null,(function(e){return c.a.createElement(l.a,{sidebar:c.a.createElement(z,{routerProps:t.props,addTask:t.handleAddTask,mainSidebar:t.onSetSidebarOpen}),docked:t.state.sidebarDocked,open:t.state.sidebarOpen,sidebarClassName:"sidebar-content todo-sidebar d-flex",touch:!1,contentClassName:"sidebar-children d-none",pullRight:"rtl"===e.state.direction},'""')})),c.a.createElement(L,{routerProps:this.props,handleUpdateTask:this.handleUpdateTask,mainSidebar:this.onSetSidebarOpen,prevState:this.state.prevState}),c.a.createElement(Y,{addTask:this.handleAddTask,addTaskState:this.state.addTask,taskToUpdate:this.state.taskToUpdate,newTask:this.state.newTask,mainSidebar:this.onSetSidebarOpen,handleUndoChanges:this.handleUndoChanges}))}}]),a}(c.a.Component);e.default=V},835:function(t,e,a){"use strict";var s=a(13),n=a(14),o=a(16),r=a(15),i=a(0),c=a.n(i),l=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),a}(c.a.Component);e.a=l}}]);
//# sourceMappingURL=93.f5037514.chunk.js.map