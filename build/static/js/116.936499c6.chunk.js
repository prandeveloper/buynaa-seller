(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[116],{2113:function(e,a,t){"use strict";t.r(a),t.d(a,"EditBrand",(function(){return j}));var n=t(41),s=t(13),r=t(14),l=t(16),o=t(15),c=t(0),i=t.n(c),d=t(992),u=t(990),m=t(991),p=t(178),f=t(995),h=t(825),g=t(818),b=t(820),v=t(798),E=t(785),y=t(21),O=t(797),j=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",r.state.name),a.append("desc",r.state.desc),a.append("sortorder",r.state.sortorder),a.append("status",r.state.status),null!==r.state.selectedFile&&a.append("brand_img",r.state.selectedFile,r.state.selectedName);var t=r.props.match.params.id;O.a.post("/editbrand/".concat(t),a,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),r.props.history.push("/app/products/brand/brandList")})).catch((function(e){console.log(e)}))},r.state={name:"",brand_img:"",desc:"",sortorder:"",status:"",selectedFile:null,selectedName:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;O.a.get("/viewonebrand/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({brand_img:a.data.data.brand_img,name:a.data.data.name,desc:a.data.data.desc,sortorder:a.data.data.sortorder,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Brand")),i.a.createElement(m.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/products/brand/brandList")}},"Back"))),i.a.createElement(f.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Brand Name"),i.a.createElement(v.a,{type:"text",placeholder:"Brand Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Sort Order"),i.a.createElement(v.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Description"),i.a.createElement(v.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(g.a,null,i.a.createElement(b.a,null,"Brand Image / Logo"),i.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler}))),i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(g.a,null,i.a.createElement(b.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),i.a.createElement(u.a,null,i.a.createElement(p.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Update Brand"))))))}}]),t}(c.Component);a.default=j},797:function(e,a,t){"use strict";var n=t(36),s=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=s},798:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),l=t(12),o=t(0),c=t.n(o),i=t(1),d=t.n(i),u=t(4),m=t.n(u),p=t(3),f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,h=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=d||("select"===r||"textarea"===r?r:"input"),y="form-control";f?(y+="-plaintext",E=d||"input"):"file"===r?y+="-file":"range"===r?y+="-range":b&&(y=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var O=Object(p.mapToCssModules)(m()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===E||d&&"function"===typeof d)&&(g.type=r),g.children&&!f&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:h,className:O,"aria-invalid":i}))},a}(c.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},818:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),d=t.n(i),u=t(3),m={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,c=e.check,i=e.inline,m=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.mapToCssModules)(d()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===m&&(p.disabled=o),l.a.createElement(m,Object(n.a)({},p,{className:f}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},820:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),d=t.n(i),u=t(3),m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,m=e.size,p=e.for,f=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];o.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=g(l,a,s.size),h.push(Object(u.mapToCssModules)(d()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=g(l,a,s),h.push(r)}}));var b=Object(u.mapToCssModules)(d()(a,!!r&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:p},f,{className:b}))};b.propTypes=f,b.defaultProps=h,a.a=b},825:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),l=t(12),o=t(0),c=t.n(o),i=t(1),d=t.n(i),u=t(4),m=t.n(u),p=t(3),f={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(p.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:d}))},a}(o.Component);h.propTypes=f,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=116.936499c6.chunk.js.map