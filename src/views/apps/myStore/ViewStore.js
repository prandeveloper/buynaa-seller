import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Container,
  Row,
  Col,
  Button,
  Label,
} from "reactstrap";
import { Edit, Trash } from "react-feather";
import { Link } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import Carousel from "react-elastic-carousel";
import "../../../assets/scss/pages/users.scss";
import { history } from "../../../history";

class ViewStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getonestore/${id}`)
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
        <Row>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 col-sm-6 className="float-left">
                    Store Detail
                  </h1>
                </Col>
                <Col>
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/myStore/storeList")}
                  >
                    Back
                  </Button>
                </Col>
              </Row>
              <Container>
                <Carousel>
                  {this.state.data?.storeImg?.map((i) => (
                    <img
                      className="border-black m-0"
                      src={i}
                      alt="user avatar"
                      height="400"
                      width="700"
                    />
                  ))}
                </Carousel>
              </Container>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" lg="6">
                    <Media className="d-sm-flex d-block">
                      <Media className="mt-md-1 mt-0" left>
                        <Col className="mt-1 pl-0" sm="12">
                          <h2 col-sm-6 className="float-left">
                            Shop Logo
                          </h2>
                        </Col>
                        {this.state.data?.shoplogo_img?.map((logo) => (
                          <Col className="mt-1 pl-0" md="4" sm="12">
                            <Media
                              className="rounded mr-2"
                              object
                              src={logo}
                              alt="Generic placeholder image"
                              height="150"
                              width="180"
                            />
                          </Col>
                        ))}
                        <Col className="mt-1 pl-0" sm="12">
                          <h2 col-sm-6 className="float-left">
                            GST Image
                          </h2>
                        </Col>
                        {this.state.data?.gstImg?.map((gst) => (
                          <Col className="mt-1 pl-0" md="4" sm="12">
                            <Media
                              className="rounded mr-2"
                              object
                              src={gst}
                              alt="Generic placeholder image"
                              height="150"
                              width="180"
                            />
                          </Col>
                        ))}
                        <Col className="mt-1 pl-0" sm="12">
                          <h2 col-sm-6 className="float-left">
                            Store PAN Image
                          </h2>
                        </Col>
                        {this.state.data?.storepan_img?.map((pan) => (
                          <Col className="mt-1 pl-0" md="4" sm="12">
                            <Media
                              className="rounded mr-2"
                              object
                              src={pan}
                              alt="Generic placeholder image"
                              height="150"
                              width="180"
                            />
                          </Col>
                        ))}
                        <Col className="mt-1 pl-0" sm="12">
                          <h2 col-sm-6 className="float-left">
                            Tradelicence Image
                          </h2>
                        </Col>
                        {this.state.data?.tradelicence_img?.map((trade) => (
                          <Col className="mt-1 pl-0" md="4" sm="12">
                            <Media
                              className="rounded mr-2"
                              object
                              src={trade}
                              alt="Generic placeholder image"
                              height="150"
                              width="180"
                            />
                          </Col>
                        ))}
                        <Col className="mt-1 pl-0" sm="12">
                          <h2 col-sm-6 className="float-left">
                            Company PAN Image
                          </h2>
                        </Col>
                        {this.state.data?.companypan_img?.map((coimg) => (
                          <Col className="mt-1 pl-0" md="4" sm="12">
                            <Media
                              className="rounded mr-2"
                              object
                              src={coimg}
                              alt="Generic placeholder image"
                              height="150"
                              width="180"
                            />
                          </Col>
                        ))}
                        <Col className="mt-1 pl-0" sm="12">
                          <h2 col-sm-6 className="float-left">
                            Adress Proof Image
                          </h2>
                        </Col>
                        {this.state.data?.address_proof_img?.map((address) => (
                          <Col className="mt-1 pl-0" md="4" sm="12">
                            <Media
                              className="rounded mr-2"
                              object
                              src={address}
                              alt="Generic placeholder image"
                              height="150"
                              width="180"
                            />
                          </Col>
                        ))}
                      </Media>
                    </Media>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle>
                  <h1>Information</h1>
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* <Media body> */}
                <Row className="ml-4">
                  <Col sm="9" md="12" lg="12">
                    <div className="users-page-view-table">
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Store Name
                        </div>
                        <div className="text-truncate">
                          <span>{this.state.data.store_name}</span>
                        </div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Store Email
                        </div>
                        <div className="text-truncate">
                          <span>{this.state.data.store_email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="users-page-view-table">
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Status
                        </div>
                        <div>{this.state.data.status}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Business Type
                        </div>
                        <div>{this.state.data.business_type}</div>
                      </div>
                    </div>

                    {/*  </Media> */}
                    <div className="users-page-view-table">
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Store Name
                        </div>
                        <div>{this.state.data.store_name}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Address
                        </div>
                        <div>
                          {this.state.data.address_line1},
                          {this.state.data.address_line2}
                        </div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Store Description
                        </div>
                        <div>{this.state.data.store_desc}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          LandMark
                        </div>
                        <div>{this.state.data.landmark}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Website
                        </div>
                        <div>{this.state.data.websiteUrl}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Phone No
                        </div>
                        <div>{this.state.data.altphone_no}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Open Days
                        </div>
                        <div>{this.state.data.day}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Time
                        </div>
                        <div>
                          {this.state.data.openingTym}-
                          {this.state.data.closingTym}
                        </div>
                      </div>
                      {/* <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Mobile No
                    </div>
                    <div>{this.state.data.mobile_no}</div>
                  </div> */}

                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          City
                        </div>
                        <div>{this.state.data.city}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          State
                        </div>
                        <div>{this.state.data.state}</div>
                      </div>
                      {/* <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Country
                    </div>
                    <div>{this.state.data.country}</div>
                  </div> */}
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Pin Code
                        </div>
                        <div>{this.state.data.pincode}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          GST No.
                        </div>
                        <div>{this.state.data.gst_no}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Business Type
                        </div>
                        <div>{this.state.data.business_type}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          PAN No.
                        </div>
                        <div>{this.state.data.pan_no}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Company PAN No.
                        </div>
                        <div>{this.state.data.company_panno}</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Address Proof
                        </div>
                        <div>{this.state.data.address_proof}</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6"></Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default ViewStore;
