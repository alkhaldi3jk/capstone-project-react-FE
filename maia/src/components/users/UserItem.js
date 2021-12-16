import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Table } from "react-bootstrap";

function UserItem({ user }) {
  return (
    <>
   <Table striped bordered hover>
<tbody>
<tr>
<td width="%">{user.email}</td>
<td width="50%">{user.username}</td>
{/* <td width="50%">{user.requests.option}</td> */}
  </tr>
  </tbody>
</Table>
    </>

  );
}

export default UserItem;
