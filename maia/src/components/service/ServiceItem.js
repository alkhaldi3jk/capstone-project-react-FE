import { observer } from "mobx-react";
import React from "react";
import { Table } from "react-bootstrap";
import serviceStore from "../../stores/serviceStore";
import AddService from "./AddService";
import UpdateServiceModal from "./UpdateServiceModal";

function ServiceItem({ service }) {
  return (
    <div>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{service._id}</td>
      <td>{service.name}</td>
      <td><UpdateServiceModal/></td>
      <td>@mdo</td>
    </tr>


  </tbody>
</Table>
      {/* <text>{service.name}</text>
      <image src={service.image} alt=""/> */}
    </div>
  );
}

export default observer(ServiceItem);
