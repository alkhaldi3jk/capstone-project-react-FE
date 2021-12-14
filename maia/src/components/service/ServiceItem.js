import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Button, Container, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react";
import serviceStore from "../../stores/serviceStore";

function ServiceItem({ service }) {
  const handleDelete = () => {
    serviceStore.deleteService();
  };
  return (
    <Container>
      <Row>
        <Col xl={{ order: 12 }}>
          <Link className="text2" to={`/services/${service._id}`}>
            {/* <td>{service._id}</td> */}
            <th>{service.name}</th>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default observer(ServiceItem);
