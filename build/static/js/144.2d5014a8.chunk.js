(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{2114:function(e,a,t){"use strict";t.r(a);var l=t(13),s=t(14),n=t(16),c=t(15),m=t(0),i=t.n(m),r=t(137),o=t(56),d=t(578),u=t(135),f=t(579),E=t(851),b=t(322),h=t(42),p=t(82),v=(t(803),t(21)),g=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={data:{}},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;p.a.get("/viewoneseller/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement(d.a,null,i.a.createElement(r.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Seller Detail")),i.a.createElement(o.a,null,i.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/app/seller/sellerList")}},"Back"))),i.a.createElement(f.a,null,i.a.createElement(r.a,{className:"mx-0",col:"12"},i.a.createElement(o.a,{className:"pl-0",sm:"12",lg:"6"},i.a.createElement(E.a,{className:"d-sm-flex d-block"},i.a.createElement(E.a,{className:"mt-md-1 mt-0",left:!0},i.a.createElement(E.a,{className:"rounded mr-2",object:!0,src:this.state.data.staffImage,alt:"Generic placeholder image",height:"180",width:"180"})),i.a.createElement(E.a,{body:!0},i.a.createElement(r.a,{className:"ml-4"},i.a.createElement(o.a,{sm:"9",md:"12",lg:"12"},i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"User Id"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.staffID))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Name"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.staffname))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.email)))),i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status"),i.a.createElement("div",null,this.state.data.status)),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Role"),i.a.createElement("div",null,this.state.data.role)),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Description"),i.a.createElement("div",null,i.a.createElement("span",null,this.state.data.desc))))))))),i.a.createElement(o.a,{className:"mt-1 pl-0",sm:"12"},i.a.createElement(u.a.Ripple,{className:"mr-1",color:"primary",outline:!0},i.a.createElement(h.a,{to:""},i.a.createElement(b.a,{size:15}),i.a.createElement("span",{className:"align-middle ml-50"},"Edit")))))))),i.a.createElement(o.a,{sm:"12",md:"6"})))}}]),t}(i.a.Component);a.default=g},803:function(e,a,t){},851:function(e,a,t){"use strict";var l=t(5),s=t(6),n=t(0),c=t.n(n),m=t(1),i=t.n(m),r=t(4),o=t.n(r),d=t(3),u=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],f={body:i.a.bool,bottom:i.a.bool,children:i.a.node,className:i.a.string,cssModule:i.a.object,heading:i.a.bool,left:i.a.bool,list:i.a.bool,middle:i.a.bool,object:i.a.bool,right:i.a.bool,tag:d.tagPropType,top:i.a.bool},E=function(e){var a,t=e.body,n=e.bottom,m=e.className,i=e.cssModule,r=e.heading,f=e.left,E=e.list,b=e.middle,h=e.object,p=e.right,v=e.tag,g=e.top,N=Object(s.a)(e,u);a=r?"h4":N.href?"a":N.src||h?"img":E?"ul":"div";var j=v||a,x=Object(d.mapToCssModules)(o()(m,{"media-body":t,"media-heading":r,"media-left":f,"media-right":p,"media-top":g,"media-bottom":n,"media-middle":b,"media-object":h,"media-list":E,media:!t&&!r&&!f&&!p&&!g&&!n&&!b&&!h&&!E}),i);return c.a.createElement(j,Object(l.a)({},N,{className:x}))};E.propTypes=f,a.a=E}}]);
//# sourceMappingURL=144.2d5014a8.chunk.js.map