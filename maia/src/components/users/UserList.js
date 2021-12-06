import userEvent from "@testing-library/user-event";
import { observer } from "mobx-react";
import React from "react";
import authStore from "../../stores/authStore";
import UserItem from "./UserItem";
function UserList() {
//   const userList = authStore.fetchUsers(authStore.user);
  return <div>{}</div>;
}

export default observer(UserList);
