import { observer } from "mobx-react";
import React from "react";
import { Table } from "react-bootstrap";
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
      
//             <Link to={`/dashboard/${service._id}`}>
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
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Button from "@restart/ui/esm/Button";

const BasicTable = ({service}) => {
  return (
    <MDBTable striped >
      
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Service</th>
          <th>Service Detail</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody flex-direction= "column">
        <tr>
          <td >1</td>
          <td>{service.name}</td>
          <td> <Button>Detail</Button></td>
        </tr>

      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;