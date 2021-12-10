import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Button } from "react-bootstrap";
 {/* REVIEW: Why is every service a table? It should be just a row in the table. */}
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

const BasicTable = ({ service }) => {
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
      <MDBTableBody flex-direction="column">
        <tr>
          <td>*</td>
          <td><Link className="text2" to={`/dashboard/${service._id}`}>
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
  );
};

export default BasicTable;
