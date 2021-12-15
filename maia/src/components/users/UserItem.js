import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import authStore from "../../stores/authStore";

function UserItem({ user }) {
  return (
    <Container>
      <Row>
        <Col xl={{ order: 12 }}>{user.username}</Col>
        <Col xl={{ order: 1 }}>{user.email}</Col>
        <Col>{authStore.user?.request}</Col>
      </Row>
    </Container>
  );
}

export default UserItem;
