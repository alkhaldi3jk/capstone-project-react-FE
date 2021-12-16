import userEvent from "@testing-library/user-event";
import { observer } from "mobx-react";
import React from "react";
import { Col, Table } from "react-bootstrap";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";
import UserItem from "./UserItem";
function UserList() {
  const userList = userStore.users.map((user) => (
    <UserItem user={user} key={user._id} />
  ));

  return (
    <div>
      <a>
        <img
          src="https://cdn.discordapp.com/attachments/912274609162833922/917847105937231882/Screen_Shot_2021-11-29_at_10.19.15_PM.png"
          style={{ width: 250, marginTop: -7 }}
        />
      </a>
      <br />
      <h6>Maia Users</h6>
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th width="170">E-mail</th>
            <th width="170">Username</th>
          </tr>
        </thead>
      </Table>

      {userList}
    </div>
  );
}

export default observer(UserList);
