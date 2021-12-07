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

function ServiceList({ service }) {
  const serviceList = serviceStore.services.map((service) => (
    <Col className="list">
      <ServiceItem service={service} key={service._id} />
    </Col>
  ));
  return (
    <div>
      {!authStore.user ? (
        <>
          <SigninModal />
        </>
      ) : (
        <>
          <div className={`user`}>
            <h6>{authStore.user.username}</h6>
          </div>

          <div>
            {/* <Nav.Link */}
            {/* <Button
              // href=""
              variant="light"
              // justify="space-between"
              onClick={authStore.logout}
            >
              Signout
              </Button> */}
            {/* </Nav.Link> */}
          </div>
        </>
      )}
      {/* <AddService service={service} /> */}

        {serviceList}
    </div>
  );
}

export default observer(ServiceList);
