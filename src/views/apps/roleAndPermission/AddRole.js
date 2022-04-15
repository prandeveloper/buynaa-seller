import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Form,
  CustomInput,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";

export default class AddUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addemp: "",
      emp: "",
      tabs: {
        dashboard: false,
        store: false,
        addMyStore: false,
        storeList: false,
        contacts: false,
        addEmployee: false,
        employeeList: false,
        addCustomer: false,
        customerList: false,
        addSupplier: false,
        supplierList: false,
        inventory: false,
        products: false,
        AddMyProduct: false,
        productsList: false,
        stockControl: false,
        stockTransferRequest: false,
        stockAdjustment: false,
        coupons: false,
        subscription: false,
        choosePaymentOption: false,
        subsList: false,
        billing: false,
        order: false,
        purchase: false,
        newPurchaseOrder: false,
        purchaseOrderList: false,
        purchaseInvoiceList: false,
        reports: false,
        rolesPermission: false,
        roleList: false,
        addRole: false,
        setting: false,
        brandList: false,
        taxList: false,
        unitList: false,
        reasonList: false,
        colourList: false,
        sizeList: false,
        productCategory: false,
        material: false,
        warehouseList: false,
      },
      employeeD: [],
    };
  }

  handleClick = (event) => {
    const { name, checked } = event.target;
    this.setState((prevState) => {
      const tabs = prevState.tabs;
      tabs[name] = checked;
      return tabs;
    });
    console.log(this.state);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    //Employee
    axiosConfig
      .get("/getemployecreatedbyseller", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({ employeeD: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axiosConfig
      .post("/addrole", this.state, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/roleAndPermission/roleList");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    const favtabs = Object.keys(this.state.tabs)
      .filter((key) => this.state.tabs[key])
      .join(", ");
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Assign Tabs Permission</h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/roleAndPermission/RoleList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="12">
                  <Row className="m-2">
                    <Col lg="12" md="6" sm="12">
                      <FormGroup>
                        <Label>Select Employee</Label>
                        <CustomInput
                          type="select"
                          name="emp"
                          placeholder="Employee"
                          onChange={this.changeHandler}
                          value={this.state.emp}
                        >
                          <option>Select Employee....</option>
                          {this.state.employeeD?.map((emp) => (
                            <option key={emp?._id} value={emp?._id}>
                              {emp?.name}
                            </option>
                          ))}
                        </CustomInput>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="m-0">
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.dashboard}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="dashboard"
                        />{" "}
                        Dashboard
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.store}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="store"
                        />{" "}
                        Store
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.addMyStore}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="addMyStore"
                        />{" "}
                        Add Store
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.storeList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="storeList"
                        />{" "}
                        Store List
                      </div>
                    </Col>

                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.contacts}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="contacts"
                        />{" "}
                        Contacts
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.addEmployee}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="addEmployee"
                        />{" "}
                        Add Employee
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.employeeList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="employeeList"
                        />{" "}
                        Employee List
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.addCustomer}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="addCustomer"
                        />{" "}
                        Add Customer
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.customerList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="customerList"
                        />{" "}
                        Customer List
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.addSupplier}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="addSupplier"
                        />{" "}
                        Add Supplier
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.supplierList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="supplierList"
                        />{" "}
                        Supplier List
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.inventory}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="inventory"
                        />{" "}
                        Inventory
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.products}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="products"
                        />{" "}
                        Products
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.AddMyProduct}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="AddMyProduct"
                        />{" "}
                        Add Product
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.productsList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="productsList"
                        />{" "}
                        Products List
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.stockControl}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="stockControl"
                        />{" "}
                        Stock Control
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.stockTransferRequest}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="stockTransferRequest"
                        />{" "}
                        Stock Transfer Request
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.stockAdjustment}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="stockAdjustment"
                        />{" "}
                        Stock Adjustment
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.coupons}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="coupons"
                        />{" "}
                        Coupons
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.subscription}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="subscription"
                        />{" "}
                        Subscription
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.choosePaymentOption}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="choosePaymentOption"
                        />{" "}
                        Add Subscription
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.subsList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="subsList"
                        />{" "}
                        Subscription List
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.billing}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="billing"
                        />{" "}
                        Billing
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.order}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="order"
                        />{" "}
                        Order
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.purchase}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="purchase"
                        />{" "}
                        Purchase
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.newPurchaseOrder}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="newPurchaseOrder"
                        />{" "}
                        New Purchase Order
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.purchaseOrderList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="purchaseOrderList"
                        />{" "}
                        Purchase Order List
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.purchaseInvoiceList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="purchaseInvoiceList"
                        />{" "}
                        Purchase Invoice List
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.reports}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="reports"
                        />{" "}
                        Reports
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.rolesPermission}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="rolesPermission"
                        />{" "}
                        Permissions
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.roleList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="roleList"
                        />{" "}
                        Role List
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.addRole}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="addRole"
                        />{" "}
                        Add Role
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.setting}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="setting"
                        />{" "}
                        Setting
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.brandList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="brandList"
                        />{" "}
                        Brand
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.taxList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="taxList"
                        />{" "}
                        Tax
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.unitList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="unitList"
                        />{" "}
                        Unit
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.reasonList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="reasonList"
                        />{" "}
                        Reason
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.colourList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="colourList"
                        />{" "}
                        Colour
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.sizeList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="sizeList"
                        />{" "}
                        Size
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.productCategory}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="productCategory"
                        />{" "}
                        Category
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.material}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="material"
                        />{" "}
                        Material
                      </div>
                    </Col>
                    <Col lg="3" md="3" sm="6" className="m-1">
                      <div>
                        <input
                          checked={this.state.tabs.warehouseList}
                          onChange={this.handleClick}
                          type="checkbox"
                          name="warehouseList"
                        />{" "}
                        Warehouse
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2 ml-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Permission
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
