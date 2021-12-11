import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
{
  /* REVIEW: Why is every service a table? It should be just a row in the table. */
}
function ServiceItem({ service }) {
  return (
    // {/* REVIEW: Why is every service a table? It should be just a row in the table. */}

    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody flex-direction="column" >
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
              <Button variant="secondary">Deny</Button>
            </td>
          </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default observer(ServiceItem);
