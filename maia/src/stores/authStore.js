import { makeAutoObservable } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };
  // REVIEW: Remove commented out code
  // setUser = (token) => {
  //   localStorage.setItem("myToken", token);
  //   api.defaults.headers.common.Authorization = `Bearer ${token}`;
  //   this.user = decode(token);
  // };

  signup = async (userData) => {
    try {
      const res = await api.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await api.post("/signin", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    delete api.defaults.headers.common.Authorization;
    // REVIEW: No need for 39foora if it's a regular string, use ""
    localStorage.removeItem(`myToken`);
    this.user = null;
  };

  checkForToken = () => {
    // REVIEW: Remove commented out code
    // this.user = null
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now(); // give us the current time
      let tempUser = decode(token);
      if (tempUser.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
  fetchUsers = async () => {
    try {
      const res = await api.get("/dashboard");
      // REVIEW: this.user is reserved for the logged in user, you're overwriting it with the list of all users. This is incorrect. I recommend you put all users in their own store.
      this.user = res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
authStore.fetchUsers();
export default authStore;
