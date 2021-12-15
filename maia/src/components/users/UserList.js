import userEvent from "@testing-library/user-event";
import { observer } from "mobx-react";
import React from "react";
import userStore from "../../stores/userStore";
import UserItem from "./UserItem";
function UserList() {
  const userList = userStore.users.map((user) => (
    <UserItem user={user} key={user._id} />
  ));

  return <div>{userList}</div>;
}

export default observer(UserList);
