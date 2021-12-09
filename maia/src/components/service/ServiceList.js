import React from "react";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observer } from "mobx-react";
import SigninModal from "../navbar/SigninModal";
import SignupModal from "../navbar/SignupModal";
import authStore from "../../stores/authStore";
import { Nav, Table } from "react-bootstrap";
import AddService from "./AddService";
import { Col, Row,Button } from "react-bootstrap";
import { useState } from "react";
import { Form, Card} from "react-bootstrap";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";


function ServiceList({ service }) {
  const [query, setQuery] = useState("");

  const serviceList = serviceStore.services
  .filter((service) =>
  service.name.toLowerCase().includes(query.toLowerCase())
  )
  .map((service) => (
    <Col className="list">
      <ServiceItem service={service} key={service._id} />
    </Col>
  ));
  return (
    <div>
          
          {/* <Form.Control className="d-flex input-group w-auto"
              type="search"
              // className="form-control"
              placeholder="Search for Service"
              aria-label="Search"
              onChange={(event) => setQuery(event.target.value)}
            /> */}
 
      {/* {!authStore.user ? (
        <>
          <SigninModal />
        </>
      ) : (
        <>
          <div className={`user`}>
            <h6>{authStore.user.username}</h6>
          </div>

          <div>
            <Nav.Link >
             <Button
              // href=""
              variant="light"
              // justify="space-between"
              onClick={authStore.logout}>
           
              Signout
              </Button> 
            </Nav.Link>
          </div>
        </>
      )} */}
      {/* <AddService service={service} /> */}

        {serviceList}
    </div>
  );
}

export default observer(ServiceList);
