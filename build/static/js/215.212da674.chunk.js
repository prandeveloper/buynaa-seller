(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[215],{2183:function(e,a,t){"use strict";t.r(a),t.d(a,"EditEmployee",(function(){return k}));var n=t(916),l=t(37),r=t(13),o=t(14),m=t(16),c=t(15),i=t(0),s=t.n(i),u=t(575),d=t(138),p=t(81),h=t(136),E=t(576),f=t(577),g=t(102),y=t(103),b=t(104),v=t(796),N=t(19),S=t(132),k=function(e){Object(m.a)(t,e);var a=Object(c.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]}),o.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},o.changeHandler=function(e){o.setState(Object(l.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",o.state.name),a.append("mobile",o.state.mobile),a.append("email",o.state.email),a.append("rolename",o.state.rolename),null!==o.state.selectedFile&&a.append("image",o.state.selectedFile,o.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(s){l.e(s)}finally{l.f()}var m,c=Object(n.a)(a.values());try{for(c.s();!(m=c.n()).done;){r=m.value;console.log(r)}}catch(s){c.e(s)}finally{c.f()}var i=o.props.match.params.id;S.a.post("/editempbyseller/".concat(i),a,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),o.props.history.push("/app/contactUs/employee/employeeList")})).catch((function(e){console.log(e.response)}))},o.state={name:"",mobile:"",email:"",rolename:"",image:"",selectedFile:null,selectedName:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;S.a.get("/getoneempcreatedbyseller/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({name:a.data.data.name,mobile:a.data.data.mobile,email:a.data.data.email,rolename:a.data.data.rolename,image:a.data.data.image})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,null,s.a.createElement(d.a,{className:"m-2"},s.a.createElement(p.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Employee")),s.a.createElement(p.a,null,s.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/contactUs/employee/employeeList")}},"Back"))),s.a.createElement(E.a,null,s.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},s.a.createElement(d.a,{className:"mb-2"},s.a.createElement(p.a,{lg:"6",md:"6"},s.a.createElement(g.a,null,s.a.createElement(y.a,null,"Employee Name"),s.a.createElement(b.a,{type:"text",placeholder:"Employee Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),s.a.createElement(p.a,{lg:"6",md:"6"},s.a.createElement(g.a,null,s.a.createElement(y.a,null,"Phone Number"),s.a.createElement(b.a,{type:"number",placeholder:"Phone Number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler}))),s.a.createElement(p.a,{lg:"6",md:"6"},s.a.createElement(g.a,null,s.a.createElement(y.a,null,"Employee Email"),s.a.createElement(b.a,{type:"email",placeholder:"Employee Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),s.a.createElement(p.a,{lg:"6",md:"6"},s.a.createElement(g.a,null,s.a.createElement(y.a,null,"Role Name"),s.a.createElement(v.a,{type:"select",name:"rolename",value:this.state.rolename,onChange:this.changeHandler},s.a.createElement("option",null,"select"),s.a.createElement("option",{value:"owner"},"Owner"),s.a.createElement("option",{value:"manager"},"Manager"),s.a.createElement("option",{value:"employee"},"Employee")))),s.a.createElement(p.a,{lg:"6",md:"6"},s.a.createElement(g.a,null,s.a.createElement(y.a,null,"Image"),s.a.createElement(v.a,{type:"file",onChange:this.onChangeHandler})))),s.a.createElement(d.a,null,s.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"ml-2 mb-1"},"Add Employee"))))))}}]),t}(i.Component);a.default=k},916:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(101);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,o=!0,m=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return o=e.done,e},e:function(e){m=!0,r=e},f:function(){try{o||null==l.return||l.return()}finally{if(m)throw r}}}}}}]);
//# sourceMappingURL=215.212da674.chunk.js.map