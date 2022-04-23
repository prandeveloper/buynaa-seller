import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  CardTitle,
  FormGroup,
  Input,
  Label,
  Button,
  CardHeader,
  Card,
  Col,
  Row,
  Form,
} from "reactstrap";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import glogo from "../../../assets/img/pages/glogo.png";
import { history } from "../../../history";
import axios from "axios";
import swal from "sweetalert";
import { tabsJustified } from "../../../components/reactstrap/tabs/TabSourceCode";
class NewPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mobile: "",
      password: "",
      username: "",
    };
  }
  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://35.154.86.59/api/admin/sellerlogin", this.state)
      .then((response) => {
        console.log(response.data.msg);

        localStorage.setItem("auth-adtoken", response.data.token);
        localStorage.setItem(
          "hasSubscribed",
          response.data.user?.hasSubscribed
        );
        history.push("/analyticsDashboard");
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.response.data.msg);
        if (
          error.response.data.msg !== "success" &&
          error.response.data.msg != "success"
        ) {
          swal(
            "Wrong UserName or Password",
            "Enter Correct Email / Number or Password",
            "error"
          );
          this.props.history.push("/pages/login");
        }
      });
  };
  render() {
    return (
      <Container>
        <Row className="m-0 justify-content-center">
          <Col
            sm="8"
            xl="7"
            lg="10"
            md="8"
            className="d-flex justify-content-center"
          >
            <Col lg="8" md="12" className="p-1">
              <Card className="rounded-0 mb-0 px-2 pb-3 login-tabs-container">
                <CardHeader className="pb-1">
                  <img src={glogo} class="img-fluid" alt="..." />
                  {/* <img src={glogo} alt="glogo" /> */}
                  <br />
                </CardHeader>

                <Form onSubmit={this.loginHandler}>
                  <Label>New Password</Label>
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Input
                      type="text"
                      name="username"
                      placeholder="E-mail / Phone"
                      value={this.state.username}
                      onChange={this.handlechange}
                      required
                    />
                  </FormGroup>
                  <Label>Confirm Password</Label>
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handlechange}
                      required
                    />
                  </FormGroup>

                  <div className="d-flex justify-content-between">
                    <Button.Ripple
                      color="primary"
                      outline
                      onClick={() => {
                        history.push("/pages/login");
                      }}
                    >
                      Login
                    </Button.Ripple>
                    <Button.Ripple color="primary" type="submit">
                      Update
                    </Button.Ripple>
                  </div>
                </Form>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default NewPassword;
