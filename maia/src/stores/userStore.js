import { makeAutoObservable } from "mobx";
import { api } from "./api";

class UserStore {
  users = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      this.users = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
    
  };

  updateUser = async (updatedUser) => {
    try {
      const res = await api.put(`/users`, updatedUser);
      console.log(res.data);
      this.users = this.users.map((user) =>
        user._id === user ? res.data : user
      );
    } catch (error) {
      console.log(error);
    }
  };
  deleteUser = async () => {
    try {
      await api.delete(`/users`);
      this.users = this.users.filter((user) => user._id !== user);
    } catch (error) {
      console.log("userStore -> deleteUser -> error", error);
    }
  };
}

const userStore = new UserStore();
userStore.fetchUsers();
export default userStore;
