import userEvent from "@testing-library/user-event";
import { observer } from "mobx-react";
import React from "react";
import { Col } from "react-bootstrap";
import userStore from "../../stores/userStore";
import UserItem from "./UserItem";
function UserList() {
  const userList = userStore.users.map((user) => (
    // <Col className="list">
      <UserItem user={user} key={user._id} />
    // </Col>
  ));

  return <div>{userList}</div>;
}

export default observer(UserList);
