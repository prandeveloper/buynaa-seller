import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
import { history } from "../../../../history";
// import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";

class SalesByCustomer extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,

        // Search Button, (Date, Invoice ID, Customer Name, Sales Amount, Sales Amount with GST) - Column Table, Export Button - Excel, Print Option.
      },
      {
        headerName: "Invoice ID",
        field: "cus_orderId",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{params.data.cus_orderId}</span>
            </div>
          );
        },
      },
      {
        headerName: "Customer FirstName",
        field: "customer?.firstname",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{params.data.customer?.firstname}</span>
            </div>
          );
        },
      },
      {
        headerName: "Customer FirstName",
        field: "customer?.lastname",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{params.data.customer?.lastname}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product Name",
        field: "product?.product_name",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{params.data.product?.product_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product Amount",
        field: "product_price",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{params.data.product_price}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product Quantity",
        field: "product_qty",
        filter: true,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="ml-2 mr-4">
              <span>{params.data.product_qty}</span>
            </div>
          );
        },
      },

      //   {
      //     headerName: "Status",
      //     field: "status",
      //     filter: true,
      //     width: 150,
      //     cellRendererFramework: params => {
      //       return params.value === "Active" ? (
      //         <div className="badge badge-pill badge-success ml-2">
      //           {params.data.status}
      //         </div>
      //       ) : params.value === "Inactive" ? (
      //         <div className="badge badge-pill badge-danger">
      //           {params.data.status}
      //         </div>
      //       ) : null;
      //     },
      //   },
      {
        headerName: "Actions",
        field: "transactions",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Edit
                className="mr-50"
                size="20px"
                color="blue"
                onClick={() =>
                  history.push(
                    `/app/contactUs/customer/editCustomer/${params.data._id}`
                  )
                }
              />
              <Trash2
                size="20px"
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };

  async componentDidMount() {
    await axiosConfig
      .get("/salesbyseller", {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        const rowData = response.data.data;
        console.log(rowData);
        this.setState({ rowData });
      });
  }
  // async runthisfunction(id) {
  //   console.log(id);
  //   await axiosConfig.get(`/del_product/${id}`).then(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Sales By Customer
                </h1>
              </Col>
            </Row>
            <CardBody>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default SalesByCustomer;
