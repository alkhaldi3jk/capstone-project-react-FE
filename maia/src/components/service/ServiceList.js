import React from "react";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observer } from "mobx-react";
import SigninModal from "../navbar/SigninModal";
import SignupModal from "../navbar/SignupModal";
import authStore from "../../stores/authStore";
import { Nav } from "react-bootstrap";
import AddService from "./AddService";
import { Col, Row } from "react-bootstrap";


function ServiceList({ service }) {
  const serviceList = serviceStore.services.map((service) => ( <Col className="list">
    <ServiceItem service={service} key={service._id} /></Col>
  ));
  return (
    <div>
      {!authStore.user ? (
        <>
          <SigninModal />

          <SignupModal />
        </>
      ) : (
        <>
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
      <AddService service={service} />
      <div>{serviceList}</div>
    </div>
  );
}

export default observer(ServiceList);