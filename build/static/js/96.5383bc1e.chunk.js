(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[96],{2179:function(e,a,t){"use strict";t.r(a),t.d(a,"EditEmployee",(function(){return N}));var n=t(969),l=t(41),o=t(13),r=t(14),s=t(16),i=t(15),c=t(0),m=t.n(c),u=t(992),d=t(990),p=t(991),f=t(178),h=t(995),b=t(825),g=t(818),y=t(820),v=t(798),E=t(785),O=t(21),j=t(797),N=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",r.state.name),a.append("mobile",r.state.mobile),a.append("email",r.state.email),a.append("rolename",r.state.rolename),null!==r.state.selectedFile&&a.append("image",r.state.selectedFile,r.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var o=t.value;console.log(o)}}catch(m){l.e(m)}finally{l.f()}var s,i=Object(n.a)(a.values());try{for(i.s();!(s=i.n()).done;){o=s.value;console.log(o)}}catch(m){i.e(m)}finally{i.f()}var c=r.props.match.params.id;j.a.post("/editempbyseller/".concat(c),a,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),r.props.history.push("/app/contactUs/employee/employeeList")})).catch((function(e){console.log(e.response)}))},r.state={name:"",mobile:"",email:"",rolename:"",image:"",selectedFile:null,selectedName:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;j.a.get("/getoneempcreatedbyseller/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({name:a.data.data.name,mobile:a.data.data.mobile,email:a.data.data.email,rolename:a.data.data.rolename,image:a.data.data.image})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(p.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Employee")),m.a.createElement(p.a,null,m.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/contactUs/employee/employeeList")}},"Back"))),m.a.createElement(h.a,null,m.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(d.a,{className:"mb-2"},m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(g.a,null,m.a.createElement(y.a,null,"Employee Name"),m.a.createElement(v.a,{type:"text",placeholder:"Employee Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(g.a,null,m.a.createElement(y.a,null,"Phone Number"),m.a.createElement(v.a,{type:"number",placeholder:"Phone Number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(g.a,null,m.a.createElement(y.a,null,"Employee Email"),m.a.createElement(v.a,{type:"email",placeholder:"Employee Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(g.a,null,m.a.createElement(y.a,null,"Role Name"),m.a.createElement(E.a,{type:"select",name:"rolename",value:this.state.rolename,onChange:this.changeHandler},m.a.createElement("option",null,"select"),m.a.createElement("option",{value:"owner"},"Owner"),m.a.createElement("option",{value:"manager"},"Manager"),m.a.createElement("option",{value:"employee"},"Employee")))),m.a.createElement(p.a,{lg:"6",md:"6"},m.a.createElement(g.a,null,m.a.createElement(y.a,null,"Image"),m.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler})))),m.a.createElement(d.a,null,m.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"ml-2 mb-1"},"Add Employee"))))))}}]),t}(c.Component);a.default=N},797:function(e,a,t){"use strict";var n=t(36),l=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=l},798:function(e,a,t){"use strict";var n=t(5),l=t(7),o=t(11),r=t(12),s=t(0),i=t.n(s),c=t(1),m=t.n(c),u=t(4),d=t.n(u),p=t(3),f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,r=e.bsSize,s=e.valid,c=e.invalid,m=e.tag,u=e.addon,f=e.plaintext,h=e.innerRef,b=Object(l.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),v=m||("select"===o||"textarea"===o?o:"input"),E="form-control";f?(E+="-plaintext",v=m||"input"):"file"===o?E+="-file":"range"===o?E+="-range":g&&(E=u?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var O=Object(p.mapToCssModules)(d()(a,c&&"is-invalid",s&&"is-valid",!!r&&"form-control-"+r,E),t);return("input"===v||m&&"function"===typeof m)&&(b.type=o),b.children&&!f&&"select"!==o&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(v,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":c}))},a}(i.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},818:function(e,a,t){"use strict";var n=t(5),l=t(7),o=t(0),r=t.n(o),s=t(1),i=t.n(s),c=t(4),m=t.n(c),u=t(3),d={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.row,s=e.disabled,i=e.check,c=e.inline,d=e.tag,p=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.mapToCssModules)(m()(a,!!o&&"row",i?"form-check":"form-group",!(!i||!c)&&"form-check-inline",!(!i||!s)&&"disabled"),t);return"fieldset"===d&&(p.disabled=s),r.a.createElement(d,Object(n.a)({},p,{className:f}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},820:function(e,a,t){"use strict";var n=t(5),l=t(7),o=t(0),r=t.n(o),s=t(1),i=t.n(s),c=t(4),m=t.n(c),u=t(3),d=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:d,order:d,offset:d})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,o=e.hidden,s=e.widths,i=e.tag,c=e.check,d=e.size,p=e.for,f=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];s.forEach((function(a,n){var l=e[a];if(delete f[a],l||""===l){var o,r=!n;if(Object(u.isObject)(l)){var s,i=r?"-":"-"+a+"-";o=b(r,a,l.size),h.push(Object(u.mapToCssModules)(m()(((s={})[o]=l.size||""===l.size,s["order"+i+l.order]=l.order||0===l.order,s["offset"+i+l.offset]=l.offset||0===l.offset,s))),t)}else o=b(r,a,l),h.push(o)}}));var g=Object(u.mapToCssModules)(m()(a,!!o&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),t);return r.a.createElement(i,Object(n.a)({htmlFor:p},f,{className:g}))};g.propTypes=f,g.defaultProps=h,a.a=g},825:function(e,a,t){"use strict";var n=t(5),l=t(7),o=t(11),r=t(12),s=t(0),i=t.n(s),c=t(1),m=t.n(c),u=t(4),d=t.n(u),p=t(3),f={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,r=e.tag,s=e.innerRef,c=Object(l.a)(e,["className","cssModule","inline","tag","innerRef"]),m=Object(p.mapToCssModules)(d()(a,!!o&&"form-inline"),t);return i.a.createElement(r,Object(n.a)({},c,{ref:s,className:m}))},a}(s.Component);h.propTypes=f,h.defaultProps={tag:"form"},a.a=h},969:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(100);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o,r=!0,s=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return r=e.done,e},e:function(e){s=!0,o=e},f:function(){try{r||null==l.return||l.return()}finally{if(s)throw o}}}}}}]);
//# sourceMappingURL=96.5383bc1e.chunk.js.map