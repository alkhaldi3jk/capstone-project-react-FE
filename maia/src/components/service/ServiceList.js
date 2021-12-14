import React from "react";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observer } from "mobx-react";
import { Col, Form, Card, ListGroup, Table } from "react-bootstrap";
import { useState } from "react";

function ServiceList() {
  const [query, setQuery] = useState("");

  const serviceList = serviceStore.services
    .filter((service) =>
      service.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((service) => (
   
        <ServiceItem service={service} key={service._id} />
  
    ));
    return <div>
    <a>
    <img src="https://cdn.discordapp.com/attachments/912274609162833922/917847105937231882/Screen_Shot_2021-11-29_at_10.19.15_PM.png" style={{width:250 , marginTop: -7}} />
          </a>
    <br />
  <h6>Maia Services</h6><br />
  <Table striped bordered hover size="sm">
  <thead>
    <tr>
    <th >Services</th>
   </tr>
   </thead>
</Table>
          

{serviceList}
    </div>
}

export default observer(ServiceList);
