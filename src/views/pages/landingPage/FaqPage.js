import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Accordion from "../../../components/reactstrap/collapse/Accordion";
export class FaqPage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Accordion open="1" toggle={function noRefCheck() {}}>
            <Accordion>
              <Accordion targetId="1">Accordion Item 1</Accordion>
              <Accordion accordionId="1">
                <strong>This is the first item's accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It's also worth noting that just about any
                HTML can go within the <code>.accordion-body</code>, though the
                transition does limit overflow.
              </Accordion>
            </Accordion>
            <Accordion>
              <Accordion targetId="2">Accordion Item 2</Accordion>
              <Accordion accordionId="2">
                <strong>This is the second item's accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It's also worth noting that just about any
                HTML can go within the <code>.accordion-body</code>, though the
                transition does limit overflow.
              </Accordion>
            </Accordion>
            <Accordion>
              <Accordion targetId="3">Accordion Item 3</Accordion>
              <Accordion accordionId="3">
                <strong>This is the third item's accordion body.</strong>
                You can modify any of this with custom CSS or overriding our
                default variables. It's also worth noting that just about any
                HTML can go within the <code>.accordion-body</code>, though the
                transition does limit overflow.
              </Accordion>
            </Accordion>
          </Accordion>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default FaqPage;
