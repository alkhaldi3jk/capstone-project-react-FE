import React from "react";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observer } from "mobx-react";
import { Col,Form } from "react-bootstrap";
import { useState } from "react";

function ServiceList() {
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
      <Form.Control className="d-flex input-group w-auto"
              type="search"
              // className="form-control"
              placeholder="Search for Service"
              aria-label="Search"
              onChange={(event) => setQuery(event.target.value)}
            />

      {serviceList}
    </div>
  );
}

export default observer(ServiceList);
