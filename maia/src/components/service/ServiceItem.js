import { observer } from "mobx-react";
import React from "react";
import { Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import serviceStore from "../../stores/serviceStore";
import AddService from "./AddService";
import ServiceDetail from "./ServiceDetail";
import UpdateServiceModal from "./UpdateServiceModal";

// function ServiceItem({ service }) {
//   return (
//     <div>
//       <Table striped bordered hover>
//         <tbody>
//           <tr>

//             <Link to={`/services/${service._id}`}>
//               {/* <td>{service._id}</td> */}

//               <th>{service.name}</th>
//             </Link>
//             <td>
//               <UpdateServiceModal />
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//       {/* <img
//         src={service.image}
//         alt={service.name}
//         style={{ width: "10", height: "10" }}
//       /> */}
//     </div>
//   );
// }

// export default observer(ServiceItem);
// import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Button } from "react-bootstrap";
import ServiceUpdateModal from "./ServiceUpdateModal";
const BasicTable = ({ service }) => {
  return (
    <Row>
    
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
          <td><Link className="text2" to={`/services/${service._id}`}>
              {/* <td>{service._id}</td> */}

          <th>{service.name}</th>
          </Link></td> 
          <td>
            <Button variant="secondary">Approve</Button>
          </td>
          <td>
            <Button variant="secondary">Deny</Button>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </Row>
  );
};

export default BasicTable;
