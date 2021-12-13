import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import serviceStore from "../../stores/serviceStore";


function ServiceItem({ service }) {
  const handleDelete = () => {
    serviceStore.deleteService();
  };
  return (
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody flex-direction="column">
        <tr>
          <td>*</td>
          <td>
            <Link className="text2" to={`/services/${service._id}`}>
              {/* <td>{service._id}</td> */}
              <th>{service.name}</th>
            </Link>
          </td>
          <td>
            <Button variant="secondary">Approve</Button>
          </td>
          <td>
            <Button variant="secondary" onClick={handleDelete}>
              Deny
            </Button>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default observer(ServiceItem);
