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

  return <div>
    <a>
          <img src="https://cdn.discordapp.com/attachments/912274609162833922/917847105937231882/Screen_Shot_2021-11-29_at_10.19.15_PM.png" style={{width:250 , marginTop: -7}} />
          </a>

    {userList};
    </div>
}

export default observer(UserList);
