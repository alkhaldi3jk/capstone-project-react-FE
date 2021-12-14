import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Table } from "react-bootstrap";

function UserItem({ user }) {
  return (
    <>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>User name</th>
      <th>E-mail</th>
   </tr>
   </thead>
  <tbody>
    <tr>
    <td>{user.username}</td>
    <td>{user.email}</td>
    </tr>
  </tbody>
</Table>
      {/* <Row>
        <div> <Row>username</Row> {user.username}</div>
        <div> {user.email}</div>
      </Row> */}
    </>
  );
}

export default UserItem;
