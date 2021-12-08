import React from "react";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observer } from "mobx-react";
import SigninModal from "../navbar/SigninModal";
import SignupModal from "../navbar/SignupModal";
import authStore from "../../stores/authStore";
import { Nav, Table } from "react-bootstrap";
import AddService from "./AddService";
import { Col, Row } from "react-bootstrap";
// REVIEW: Remove unused imports
// REVIEW: You're importing from "react-bootstrap" twice. Clean it up.

// REVIEW: Why are using one service as a prop?
function ServiceList({ service }) {
  const serviceList = serviceStore.services.map((service) => (
    <Col className="list">
      <ServiceItem service={service} key={service._id} />
    </Col>
  ));
  return (
    // REVIEW: This should be in the navbar component, not in the list
    <div>
      {!authStore.user ? (
        <>
          <SigninModal />

          <SignupModal />
        </>
      ) : (
        <>
          {/* REVIEW: We use 39foora only if we have a variable within the string (interpolation), if it's a regular string use "" */}
          <div className={`user`}>
            <h6>{authStore.user.username}</h6>
          </div>

          <div>
            <Nav.Link
              href=""
              variant="contained"
              justify="space-between"
              onClick={authStore.logout}
            >
              Signout
            </Nav.Link>
          </div>
        </>
      )}
      {/* REVIEW: Why are you passing a service to the add form? you're creating a new service, you dont need to apss any prop */}
      <AddService service={service} />
      {/* REVIEW: The service list ahould be the table, and every item is a row in this table */}
      {serviceList}
    </div>
  );
}

export default observer(ServiceList);
