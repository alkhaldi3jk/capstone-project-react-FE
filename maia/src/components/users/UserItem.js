import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function UserItem({ user }) {
  return (
    <>
    <Container>
  <Row>
    <Col xs>username</Col>
    <Col xs={{ order: 12 }}>{user.username}</Col>
    <Col xs={{ order: 1 }}>{user.email}</Col>
  </Row>
</Container>
      {/* <Row>
        <div> <Row>username</Row> {user.username}</div>
        <div> {user.email}</div>
      </Row> */}
    </>
  );
}

export default UserItem;
