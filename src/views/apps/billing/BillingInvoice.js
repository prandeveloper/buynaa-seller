import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Media,
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import axiosConfig from "../../../axiosConfig";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";
import logo from "../../../assets/img/logo/ilogo.png";
import { Mail, Phone, FileText, Download } from "react-feather";
import "../../../assets/scss/pages/invoice.scss";

const params = {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
class BillingInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getoneorderbyseller/${id}`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs breadCrumbTitle="Invoice" />

        <Row>
          {/* <Col className="mb-1 invoice-header" md="5" sm="12">
            <InputGroup>
              <Input placeholder="Email" />
              <InputGroupAddon addonType="append">
                <Button.Ripple color="primary" outline>
                  Send Invoice
                </Button.Ripple>
              </InputGroupAddon>
            </InputGroup>
          </Col> */}
          <Col
            className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
            md="7"
            sm="12"
          >
            <Button
              className="mr-1 mb-md-0 mb-1"
              color="primary"
              onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Print</span>
            </Button>
          </Col>
          <Col className="invoice-wrapper" sm="12">
            <Card className="invoice-page">
              <CardBody>
                <Row>
                  <Col md="6" sm="12" className="pt-1">
                    <Media className="pt-1">
                      <img
                        src={this.state.data?.product?.store?.shoplogo_img}
                        alt="logo"
                        width={150}
                      />
                    </Media>
                  </Col>
                  <Col md="6" sm="12" className="text-right">
                    <h1>Invoice</h1>
                    <div className="invoice-details mt-2">
                      <h5 className="mt-2">ORDER ID</h5>
                      <h6>{this.state.data?.cus_orderId}</h6>
                    </div>
                    <div className="invoice-details mt-2">
                      <h5 className="mt-2">INVOICE DATE</h5>
                      <h6>{moment(this.data?.createdAt).format("ll")}</h6>
                    </div>
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col md="6" sm="12">
                    <h5>Recipient</h5>
                    <div className="recipient-info my-2">
                      <p>
                        {this.state.data?.customer?.firstname}{" "}
                        {this.state.data?.customer?.lastname}
                      </p>
                    </div>
                    <div className="recipient-contact pb-2">
                      <p>
                        <Mail size={15} className="mr-50" />
                        {this.state.data?.customer?.email}
                      </p>
                      <p>
                        <Phone size={15} className="mr-50" />
                        {this.state.data?.customer?.mobile}
                      </p>
                    </div>
                    <div className="recipient-info my-2">
                      <p>
                        {this.state.data?.shipping_address?.address} ,
                        {this.state.data?.shipping_address?.locality}
                      </p>
                    </div>
                    <div className="recipient-info my-2">
                      <p>
                        {this.state.data?.shipping_address?.city} /
                        {this.state.data?.shipping_address?.state}
                      </p>
                    </div>
                    <div className="recipient-info my-2">
                      <p>{this.state.data?.shipping_address?.pincode}</p>
                    </div>
                  </Col>
                  <Col md="6" sm="12" className="text-right">
                    <h5>{this.state.data?.product?.store?.store_name}</h5>
                    <div className="company-info my-2">
                      <p>
                        {this.state.data?.product?.store?.address_line1} ,{" "}
                        {this.state.data?.product?.store?.address_line2}
                      </p>
                      <p>
                        {this.state.data?.product?.store?.city},{" "}
                        {this.state.data?.product?.store?.state}
                      </p>
                      <p>{this.state.data?.product?.store?.pincode}</p>
                    </div>
                    <div className="company-contact">
                      <p>
                        <Mail size={15} className="mr-50" />
                        {this.state.data?.product?.store?.store_email}
                      </p>
                      <p>
                        <Phone size={15} className="mr-50" />
                        {this.state.data?.product?.store?.phone_no}
                      </p>
                    </div>
                  </Col>
                </Row>
                <div className="invoice-items-table pt-1">
                  <Row>
                    <Col sm="12">
                      <Table responsive borderless>
                        <thead>
                          <tr>
                            <th>Product Nane</th>
                            <th>SKU NO.</th>
                            <th>COLOR</th>
                            <th>SIZE</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.state.data?.product?.product_name}</td>
                            <td>{this.state.data?.product?.sku_no}</td>
                            <td>{this.state.data?.color}</td>
                            <td>{this.state.data?.size}</td>
                            <td>{this.state.data?.product_qty}</td>
                            <td>{this.state.data?.product_price}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
                <div className="invoice-total-table">
                  <Row>
                    <Col
                      sm={{ size: 7, offset: 5 }}
                      xs={{ size: 7, offset: 5 }}
                    >
                      <Table responsive borderless>
                        <tbody>
                          {/* <tr>
                            <th>Sell Price</th>
                            <td>114000 USD</td>
                          </tr> */}

                          <tr>
                            <th>Total Quantity</th>
                            <td>{this.state.data?.product_qty}</td>
                          </tr>
                          <tr>
                            <th>Total GST</th>
                            <td>
                              {this.state.data?.product?.gstrate?.value *
                                this.state.data?.product_qty}
                            </td>
                          </tr>
                          <tr>
                            <th>Grand Total</th>
                            <td>{this.state.data?.product_price}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default BillingInvoice;
