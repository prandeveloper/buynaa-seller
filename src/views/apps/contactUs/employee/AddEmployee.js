import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
  FormGroup,
  CardTitle,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email: "",
      password: "",
      cnfrm_password: "",
      rolename: "",
      image: "",
      selectedFile: null,
      selectedName: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandler2 = (e) => {
    if (e.target.value.length < 11)
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("mobile", this.state.mobile);
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("cnfrm_password", this.state.cnfrm_password);
    data.append("rolename", this.state.rolename);
    if (this.state.selectedFile !== null) {
      data.append("image", this.state.selectedFile, this.state.selectedName);
    }
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post("/addemployee", data, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/contactUs/employee/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Employee
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/contactUs/employee/employeeList")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Employee Name</Label>
                    <Input
                      type="text"
                      placeholder="Employee Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                      name="mobile"
                      value={this.state.mobile}
                      onChange={this.changeHandler2}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Employee Email</Label>
                    <Input
                      type="email"
                      placeholder="Employee Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input
                      type="password"
                      name="cnfrm_password"
                      value={this.state.cnfrm_password}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Role Name</Label>
                    <CustomInput
                      type="select"
                      name="rolename"
                      value={this.state.rolename}
                      onChange={this.changeHandler}
                    >
                      <option>select</option>
                      <option value="owner">Owner</option>
                      <option value="manager">Manager</option>
                      <option value="employee">Employee</option>
                    </CustomInput>
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Image</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="ml-2 mb-1"
                >
                  Add Employee
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddEmployee;
