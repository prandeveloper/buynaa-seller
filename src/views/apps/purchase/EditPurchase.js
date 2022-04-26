import React from "react";
import Wizard from "./FormComponent";
import {
  FormGroup,
  Input,
  Label,
  CustomInput,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
  Container,
} from "reactstrap";
import "ag-grid-community/dist/styles/ag-grid.css";
import axiosConfig from "../../../axiosConfig";
//import { history } from "../../../history";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";

class EditPurchase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addTextbox: [{}],
      supplier: "",
      stock_due: "",
      gstIn: "",
      payment_due: "",
      amount: "",
      transportation_cost: "",
      grand_total: "",
      instructions: "",
      status: "",
      upload_Invoice: "",
      selectedFile: null,
      selectedName: "",
      supplierC: [],
      productC: [],
      productG: [""],
      skuG: [""],
      hsmG: [""],
      costG: [""],
      qtyG: [""],
      gstG: [""],
      discountG: [""],
    };
  }

  addControls() {
    this.setState({
      productG: [...this.state.productG, ""],
      skuG: [...this.state.skuG, ""],
      hsmG: [...this.state.hsmG, ""],
      costG: [...this.state.costG, ""],
      qtyG: [...this.state.qtyG, ""],
      gstG: [...this.state.gstG, ""],
      discountG: [...this.state.discountG, ""],
      addTextbox: [...this.state.addTextbox, ""],
    });
  }
  delControl(i) {
    console.log(this.state);
    this.state.addTextbox.splice(i, 1);
    this.state.productG.splice(i, 1);
    this.state.skuG.splice(i, 1);
    this.state.hsmG.splice(i, 1);
    this.state.costG.splice(i, 1);
    this.state.qtyG.splice(i, 1);
    this.state.gstG.splice(i, 1);
    this.state.discountG.splice(i, 1);
    this.setState({});
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeHandlerG = (e, i) => {
    // console.log(i);
    // console.log(e.target);
    var dum = this.state[e.target.name];
    console.log(dum);
    dum[i] = e.target.value;
    this.setState({ [e.target.name]: dum });
  };

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  submitHandler = (e) => {
    e.preventDefault();
    var product = [];
    for (var i = 0; i < this.state.productG.length; i++) {
      product.push({
        productname: this.state.productG[i],
        sku: this.state.skuG[i],
        hsn: this.state.hsmG[i],
        qty: this.state.qtyG[i],
        discount: this.state.discountG[i],
        gst: this.state.gstG[i],
        cost_price: this.state.costG[i],
      });
    }
    // var option = this.state;
    // option.product = product;
    // console.log("Option", option);
    const data = new FormData();
    data.append("supplier", this.state.supplier);
    data.append("stock_due", this.state.stock_due);
    data.append("gstIn", this.state.gstIn);
    data.append("payment_due", this.state.payment_due);
    data.append("amount", this.state.amount);
    data.append("transportation_cost", this.state.transportation_cost);
    data.append("grand_total", this.state.grand_total);
    data.append("instructions", this.state.instructions);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append(
        "upload_Invoice",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/editnewpurchaseorder/${id}`, data, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/purchase/purchaseOrderList");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  componentDidMount() {
    //get one api
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getonepurchaseorder/${id}`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          supplier: response.data.data.supplier._id,
          gstIn: response.data.data.gstIn,
          payment_due: response.data.data.payment_due,
          amount: response.data.data.amount,
          stock_due: response.data.data.stock_due,
          transportation_cost: response.data.data.transportation_cost,
          grand_total: response.data.data.grand_total,
          instructions: response.data.data.instructions,
          status: response.data.data.status,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
    ///get list
    axiosConfig
      .get("/Getsupplier", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        //console.log(response.data.data);
        this.setState({ supplierC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/productbysellerbytoken", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        //console.log(response.data.data);
        this.setState({ productC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const steps = [
      {
        title: "1",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Select Supplier </Label>
                <CustomInput
                  type="select"
                  name="supplier"
                  placeholder="Select Supplier"
                  value={this.state.supplier}
                  onChange={this.changeHandler}
                >
                  <option>Add Supplier</option>
                  {this.state.supplierC?.map((supply) => (
                    <option key={supply._id} value={supply._id}>
                      {supply.company}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> GSTIN </Label>
                <Input
                  type="text"
                  placeholder="GSTIN"
                  name="gstIn"
                  onChange={this.changeHandler}
                  value={this.state.gstIn}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Amount </Label>
                <Input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.changeHandler}
                >
                  <option>Select</option>
                  <option>Tax Includive</option>
                  <option>Tax Excludive</option>
                  <option>Add Supplier</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Stock Due </Label>
                <Input
                  type="number"
                  name="stock_due"
                  placeholder="Stock Due"
                  value={this.state.stock_due}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Payment Due </Label>
                <Input
                  type="number"
                  name="payment_due"
                  placeholder="Payment Due"
                  value={this.state.payment_due}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Status </Label>
                <CustomInput
                  type="select"
                  name="status"
                  placeholder="Payment Due"
                  value={this.state.status}
                  onChange={this.changeHandler}
                >
                  <option value="Pending">Pending</option>
                  <option value="Approve">Approve</option>
                  <option value="Decline">Decline</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col lg="6" md="6" sm="12">
              <FormGroup>
                <Label>Upload Invoice</Label>
                <CustomInput type="file" onChange={this.onChangeHandler} />
              </FormGroup>
            </Col>
          </Row>
        ),
      },

      {
        title: "2",
        content: (
          <div>
            {this.state.addTextbox.map((item, index) => (
              <div>
                {/* {index ? ( */}
                <div id="btn">
                  <Row>
                    <Col flax="left" lg="6" md="6" sm="6" className="mb-2">
                      <Button
                        color="primary"
                        onClick={() => this.addControls()}
                      >
                        Add
                      </Button>
                    </Col>
                    <Col flax="left" lg="6" md="6" sm="6" className="mb-2">
                      <Button
                        color="danger"
                        onClick={() => this.delControl(index)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </div>
                {/* ) : null} */}

                <Row>
                  <Col md="4" sm="12">
                    <FormGroup>
                      <Label> Product Name </Label>
                      <CustomInput
                        type="select"
                        name="productG"
                        placeholder=" Product Name"
                        value={this.state.productG[index]}
                        onChange={(e) => {
                          this.changeHandlerG(e, index);
                        }}
                      >
                        <option>Add Product</option>
                        {this.state.productC?.map((prod) => (
                          <option key={prod._id} value={prod.product_name}>
                            {prod.product_name}
                          </option>
                        ))}
                      </CustomInput>
                    </FormGroup>
                  </Col>
                  <Col md="4" sm="12">
                    <FormGroup>
                      <Label> SKU </Label>
                      <Input
                        type="number"
                        name="skuG"
                        placeholder="SKU"
                        value={this.state.skuG[index]}
                        onChange={(e) => {
                          this.changeHandlerG(e, index);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4" sm="12">
                    <FormGroup>
                      <Label> HSN </Label>
                      <Input
                        type="number"
                        rows="5"
                        name="hsmG"
                        placeholder="HSN"
                        value={this.state.hsmG[index]}
                        onChange={(e) => {
                          this.changeHandlerG(e, index);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> Quantity </Label>
                      <Input
                        type="number"
                        rows="5"
                        name="qtyG"
                        placeholder="Quantity"
                        value={this.state.qtyG[index]}
                        onChange={(e) => {
                          this.changeHandlerG(e, index);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> Cost price </Label>
                      <Input
                        type="number"
                        rows="5"
                        name="costG"
                        placeholder="Cost price"
                        value={this.state.costG[index]}
                        onChange={(e) => {
                          this.changeHandlerG(e, index);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> GST </Label>
                      <Input
                        type="text"
                        rows="5"
                        name="gstG"
                        placeholder="GST"
                        value={this.state.gstG[index]}
                        onChange={(e) => {
                          this.changeHandlerG(e, index);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3" sm="12">
                    <FormGroup>
                      <Label> Discount </Label>
                      <Input
                        type="number"
                        rows="5"
                        name="discountG"
                        placeholder="Discount"
                        value={this.state.discountG[index]}
                        onChange={(e) => {
                          this.changeHandlerG(e, index);
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: 3,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Transportation Cost </Label>
                <Input
                  type="number"
                  name="transportation_cost"
                  placeholder="Transportation Cost"
                  value={this.state.transportation_cost}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <FormGroup>
                <Label> Grand Total </Label>
                <Input
                  type="number"
                  placeholder="Grand Total"
                  name="grand_total"
                  value={this.state.grand_total}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <FormGroup>
                <Label> Instructions </Label>
                <Input
                  type="text"
                  placeholder="Instructions"
                  name="instructions"
                  value={this.state.instructions}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
    ];
    return (
      <Card>
        <CardHeader>
          <h1>Edit Purchase Order</h1>
        </CardHeader>
        <CardBody>
          <Wizard enableAllSteps onFinish={this.submitHandler} steps={steps} />

          {/* <Wizard
            enableAllSteps
            onFinish={() => alert("submitted")}
            steps={steps}
          /> */}
        </CardBody>
      </Card>
    );
  }
}

export default EditPurchase;
