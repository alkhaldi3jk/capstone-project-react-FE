import { observer } from "mobx-react";
import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import serviceStore from "../../stores/serviceStore";
import AddService from "./AddService";
import ServiceDetail from "./ServiceDetail";
import UpdateServiceModal from "./UpdateServiceModal";

function ServiceItem({ service }) {
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
      
            <Link to={`/dashboard/${service._id}`}>
              <td>{service._id}</td>

              <th>{service.name}</th>
            </Link>
            <td>
              <UpdateServiceModal />
            </td>
          </tr>
        </tbody>
      </Table>
      <ServiceDetail service={service}/>
      {/* <img
        src={service.image}
        alt={service.name}
        style={{ width: "10", height: "10" }}
      /> */}
    </div>
  );
}

export default observer(ServiceItem);
