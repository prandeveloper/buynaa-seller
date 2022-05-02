(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[119],{1120:function(a,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return d}));var t=n(0),c=n.n(t),s=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsBasic extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsBasic\n')),i=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsVerticalLeft extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n    <div className="nav-vertical">\n      <Nav tabs className="nav-left">\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "1"\n            })}\n            onClick={() => {\n              this.toggle("1")\n            }}\n          >\n            Tab 1\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "2"\n            })}\n            onClick={() => {\n              this.toggle("2")\n            }}\n          >\n            Tab 2\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "3"\n            })}\n            onClick={() => {\n              this.toggle("3")\n            }}\n          >\n            Tab 3\n          </NavLink>\n        </NavItem>\n      </Nav>\n      <TabContent activeTab={this.state.active}>\n        <TabPane tabId="1">\n          Oat cake marzipan cake lollipop caramels wafer pie jelly\n          beans. Icing halvah chocolate cake carrot cake. Jelly beans\n          carrot cake marshmallow gingerbread chocolate cake. Gummies\n          cupcake croissant.\n        </TabPane>\n        <TabPane tabId="2">\n          Sugar plum tootsie roll biscuit caramels. Liquorice brownie\n          pastry cotton candy oat cake fruitcake jelly chupa chups.\n          Pudding caramels pastry powder cake souffl\xe9 wafer caramels.\n          Jelly-o pie cupcake.\n        </TabPane>\n        <TabPane tabId="3">\n          Biscuit ice cream halvah candy canes bear claw ice cream\n          cake chocolate bar donut. Toffee cotton candy liquorice. Oat\n          cake lemon drops gingerbread dessert caramels. Sweet dessert\n          jujubes powder sweet sesame snaps.\n        </TabPane>\n    </TabContent>\n  </div>\n    )\n  }\n}\nexport default TabsVerticalLeft\n')),o=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsVerticalRight extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n    <div className="nav-vertical">\n      <Nav tabs className="nav-right">\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "1"\n            })}\n            onClick={() => {\n              this.toggle("1")\n            }}\n          >\n            Tab 1\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "2"\n            })}\n            onClick={() => {\n              this.toggle("2")\n            }}\n          >\n            Tab 2\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink\n            className={classnames({\n              active: this.state.active === "3"\n            })}\n            onClick={() => {\n              this.toggle("3")\n            }}\n          >\n            Tab 3\n          </NavLink>\n        </NavItem>\n      </Nav>\n      <TabContent activeTab={this.state.active}>\n        <TabPane tabId="1">\n          Oat cake marzipan cake lollipop caramels wafer pie jelly\n          beans. Icing halvah chocolate cake carrot cake. Jelly beans\n          carrot cake marshmallow gingerbread chocolate cake. Gummies\n          cupcake croissant.\n        </TabPane>\n        <TabPane tabId="2">\n          Sugar plum tootsie roll biscuit caramels. Liquorice brownie\n          pastry cotton candy oat cake fruitcake jelly chupa chups.\n          Pudding caramels pastry powder cake souffl\xe9 wafer caramels.\n          Jelly-o pie cupcake.\n        </TabPane>\n        <TabPane tabId="3">\n          Biscuit ice cream halvah candy canes bear claw ice cream\n          cake chocolate bar donut. Toffee cotton candy liquorice. Oat\n          cake lemon drops gingerbread dessert caramels. Sweet dessert\n          jujubes powder sweet sesame snaps.\n        </TabPane>\n    </TabContent>\n  </div>\n    )\n  }\n}\nexport default TabsVerticalRight\n')),r=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsFilled extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs className="nav-fill">\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsFilled\n')),l=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsJustified extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs className="nav-justified">\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsJustified\n')),m=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsCentered extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs className="justify-content-center">\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsCentered\n')),d=c.a.createElement("pre",null,c.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"\n\nclass TabsEnd extends React.Component {\n\n  state = {\n    active: "1"\n  }\n\n  toggle = tab => {\n    if (this.state.active !== tab) {\n      this.setState({ active: tab })\n    }\n  }\n\n  render() {\n    return(\n      <Nav tabs className="justify-content-end">\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "1"\n          })}\n          onClick={() => {\n            this.toggle("1")\n          }}\n        >\n          Home\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "2"\n          })}\n          onClick={() => {\n            this.toggle("2")\n          }}\n        >\n          Service\n        </NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink disabled>Disabled</NavLink>\n      </NavItem>\n      <NavItem>\n        <NavLink\n          className={classnames({\n            active: this.state.active === "3"\n          })}\n          onClick={() => {\n            this.toggle("3")\n          }}\n        >\n          Account\n        </NavLink>\n      </NavItem>\n    </Nav>\n    <TabContent activeTab={this.state.active}>\n      <TabPane tabId="1">\n        Candy canes donut chupa chups candy canes lemon drops oat\n        cake wafer. Cotton candy candy canes marzipan carrot cake.\n        Sesame snaps lemon drops candy marzipan donut brownie\n        tootsie roll. Icing croissant bonbon biscuit gummi bears.\n      </TabPane>\n      <TabPane tabId="2">\n        Pudding candy canes sugar plum cookie chocolate cake powder\n        croissant. Carrot cake tiramisu danish candy cake muffin\n        croissant tart dessert. Tiramisu caramels candy canes\n        chocolate cake sweet roll liquorice icing cupcake.\n      </TabPane>\n      <TabPane tabId="3">\n        Carrot cake drag\xe9e chocolate. Lemon drops ice cream wafer\n        gummies drag\xe9e. Chocolate bar liquorice cheesecake cookie\n        chupa chups marshmallow oat cake biscuit. Dessert toffee\n        fruitcake ice cream powder tootsie roll cake.\n      </TabPane>\n    </TabContent>\n    )\n  }\n}\nexport default TabsEnd\n'))},1226:function(a,e,n){a.exports=n.p+"static/media/glogo.5f6d14a9.png"},2208:function(a,e,n){"use strict";n.r(e);var t=n(37),c=n(13),s=n(14),i=n(16),o=n(15),r=n(0),l=n.n(r),m=n(866),d=n(137),u=n(56),v=n(578),b=n(994),p=n(995),h=n(580),k=n(73),N=n(72),g=n(86),f=n(135),T=(n(832),n(1226)),C=n.n(T),I=n(21),y=n(33),L=n.n(y),w=n(187),P=n.n(w),E=(n(1120),function(a){Object(i.a)(n,a);var e=Object(o.a)(n);function n(a){var s;return Object(c.a)(this,n),(s=e.call(this,a)).handlechange=function(a){a.preventDefault(),s.setState(Object(t.a)({},a.target.name,a.target.value))},s.checkHandler=function(a){a.preventDefault(),""!=a.target.value.trim()?isNaN(a.target.value.trim())?!1===/^([A-Za-z0-9_\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a.target.value.trim())?s.setState({username:a.target.value.trim(),mobile:"",email:""}):s.setState({username:a.target.value.trim(),mobile:"",email:a.target.value.trim()}):s.setState({username:a.target.value.trim(),mobile:a.target.value.trim(),email:""}):s.setState({username:a.target.value.trim(),mobile:"",email:""})},s.loginHandler=function(a){a.preventDefault(),L.a.post("http://35.154.86.59/api/admin/sellerlogin",s.state).then((function(a){var e;console.log(a.data),localStorage.setItem("auth-adtoken",a.data.token),localStorage.setItem("hasSubscribed",null===(e=a.data.user)||void 0===e?void 0:e.hasSubscribed),I.a.push("/analyticsDashboard")})).catch((function(a){console.log(a.response),console.log(a.response.data.msg),"success"!==a.response.data.msg&&"success"!=a.response.data.msg&&(P()("Wrong UserName or Password","Enter Correct Email / Number or Password","error"),s.props.history.push("/pages/login"))}))},s.state={email:"",mobile:"",password:"",username:""},s}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(d.a,{className:"m-0 justify-content-center"},l.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},l.a.createElement(u.a,{lg:"8",md:"12",className:"p-1"},l.a.createElement(v.a,{className:"rounded-0 mb-0 px-2 pb-3 login-tabs-container"},l.a.createElement(b.a,{className:"pb-1"},l.a.createElement("img",{src:C.a,class:"img-fluid",alt:"..."}),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement("h4",{className:"mb-0"},"Login"))),l.a.createElement("h5",{className:"px-2 py-2 auth-title fw-bolder text-dark"},"Welcome back, please login to your account."),l.a.createElement(h.a,{onSubmit:this.loginHandler},l.a.createElement(k.a,null,"Email / Phone"),l.a.createElement(N.a,{className:"form-label-group position-relative has-icon-left"},l.a.createElement(g.a,{type:"text",name:"username",placeholder:"E-mail / Phone",value:this.state.username,onChange:this.checkHandler,required:!0})),l.a.createElement(k.a,null,"Password"),l.a.createElement(N.a,{className:"form-label-group position-relative has-icon-left"},l.a.createElement(g.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handlechange,required:!0})),l.a.createElement("div",{className:"m-2"},l.a.createElement("a",{className:"font-weight-bolder",onClick:function(){I.a.push("/pages/forgot-password")}},"Forget Password ?")),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(f.a.Ripple,{color:"primary",outline:!0,onClick:function(){I.a.push("/pages/register")}},"Register"),l.a.createElement(f.a.Ripple,{color:"primary",type:"submit"},"Login"))))))))}}]),n}(l.a.Component));e.default=E},832:function(a,e,n){"use strict";var t=n(13),c=n(14),s=n(16),i=n(15),o=n(0),r=n.n(o),l=function(a){Object(s.a)(n,a);var e=Object(i.a)(n);function n(){return Object(t.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},r.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),r.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},r.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),r.a.createElement("span",null,this.props.label))}}]),n}(r.a.Component);e.a=l},866:function(a,e,n){"use strict";var t=n(5),c=n(6),s=n(0),i=n.n(s),o=n(1),r=n.n(o),l=n(4),m=n.n(l),d=n(3),u=["className","cssModule","fluid","tag"],v={tag:d.tagPropType,fluid:r.a.oneOfType([r.a.bool,r.a.string]),className:r.a.string,cssModule:r.a.object},b=function(a){var e=a.className,n=a.cssModule,s=a.fluid,o=a.tag,r=Object(c.a)(a,u),l="container";!0===s?l="container-fluid":s&&(l="container-"+s);var v=Object(d.mapToCssModules)(m()(e,l),n);return i.a.createElement(o,Object(t.a)({},r,{className:v}))};b.propTypes=v,b.defaultProps={tag:"div"},e.a=b}}]);
//# sourceMappingURL=119.f6a3dd84.chunk.js.map