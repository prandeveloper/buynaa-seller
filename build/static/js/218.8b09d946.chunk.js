(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[218],{2102:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t(916),l=t(37),r=t(13),s=t(14),m=t(16),o=t(15),c=t(0),i=t.n(c),u=t(575),d=t(138),p=t(81),h=t(136),E=t(576),g=t(577),y=t(103),v=t(104),b=t(796),f=t(31),N=t.n(f),C=t(19),w=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state);var a=new FormData;a.append("usertype",s.state.usertype),a.append("username",s.state.username),a.append("password",s.state.password),a.append("pincode",s.state.pincode),a.append("phone_no",s.state.phone_no),a.append("mobile_no",s.state.mobile_no),a.append("email",s.state.email),a.append("website",s.state.website),a.append("country",s.state.country),a.append("state",s.state.state),a.append("city",s.state.city),a.append("status",s.state.status),a.append("userImage",s.state.selectedFile,s.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(i){l.e(i)}finally{l.f()}var m,o=Object(n.a)(a.keys());try{for(o.s();!(m=o.n()).done;){var c=m.value;console.log(c)}}catch(i){o.e(i)}finally{o.f()}N.a.post("http://65.2.150.118:4444/api/user/adduserbyadmin",a).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},s.state={userID:"",usertype:"",username:"",password:"",pincode:"",phone_no:"",mobile_no:"",email:"",website:"",country:"",state:"",city:"",userImage:"",status:"",selectedName:"",selectedFile:null},s}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Create A New User")),i.a.createElement(p.a,null,i.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return C.a.push("/app/users/user/allUsers")}},"Back"))),i.a.createElement(E.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"UserName:"),i.a.createElement(v.a,{required:!0,type:"text",placeholder:"User Name",name:"username",value:this.state.username,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"UserEmail:"),i.a.createElement(v.a,{required:!0,type:"email",name:"email",value:this.state.email,onChange:this.changeHandler,placeholder:"Enter Email"})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Mobile Number:"),i.a.createElement(v.a,{required:!0,type:"text",placeholder:"Mobile Number",name:"mobile_no",value:this.state.mobile_no,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"City / District:"),i.a.createElement(b.a,{required:!0,type:"select",placeholder:"City",name:"city",value:this.state.city,onChange:this.changeHandler},i.a.createElement("option",{value:"city"},"City"),i.a.createElement("option",{value:"indore"},"Indore"),i.a.createElement("option",{value:"sagar"},"Sagar"),i.a.createElement("option",{value:"jabalpur"},"Jabalpur"),i.a.createElement("option",{value:"delhi"},"Delhi"))),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"State:"),i.a.createElement(b.a,{required:!0,type:"select",placeholder:"State",name:"state",value:this.state.state,onChange:this.changeHandler},i.a.createElement("option",{value:"state"},"State"),i.a.createElement("option",{value:"mp"},"MP"),i.a.createElement("option",{value:"goa"},"Goa"),i.a.createElement("option",{value:"maharashtra"},"Maharashtra"),i.a.createElement("option",{value:"gujarat"},"Gujarat"))),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Country:"),i.a.createElement(b.a,{required:!0,type:"select",placeholder:"Country",name:"country",value:this.state.country,onChange:this.changeHandler},i.a.createElement("option",{value:"country"},"Country"),i.a.createElement("option",{value:"india"},"India"),i.a.createElement("option",{value:"algeria"},"Algeria"),i.a.createElement("option",{value:"austria"},"Austria"),i.a.createElement("option",{value:"canada"},"Canada"),i.a.createElement("option",{value:"UK"},"UK"))),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Pin Code:"),i.a.createElement(v.a,{required:!0,type:"text",placeholder:"Pin Code",name:"pincode",value:this.state.pincode,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"User Type:"),i.a.createElement(b.a,{required:!0,type:"select",name:"usertype",value:this.state.usertype,onChange:this.changeHandler},i.a.createElement("option",{value:"dealer"},"Dealer"),i.a.createElement("option",{value:"retailer"},"Seller"),i.a.createElement("option",{value:"retailer"},"Support"),i.a.createElement("option",{value:"customer"},"Customer"),i.a.createElement("option",{value:"distributor"},"Blocked"))),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"User Image"),i.a.createElement(v.a,{required:!0,type:"file",name:"userImage",onChange:this.onChangeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Password:"),i.a.createElement(v.a,{required:!0,type:"text",name:"password",id:"show_hide_password",placeholder:"Set Password For User"})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Confirm Password:"),i.a.createElement(v.a,{required:!0,type:"text",name:"password",placeholder:"Set Password For User"}))),i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add User")))))))}}]),t}(c.Component)},916:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(101);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,m=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){m=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(m)throw r}}}}}}]);
//# sourceMappingURL=218.8b09d946.chunk.js.map