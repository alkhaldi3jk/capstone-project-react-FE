import { makeAutoObservable } from "mobx";
import {api} from "./api";

class OrderStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchServiceDetail = async () => {
    try {
      const res = await api.get("/options");
      this.items = res.items;
    } catch (error) {
      console.log(error);
    }
  };
}

const orderStore = new OrderStore();
orderStore.fetchServiceDetail();
export default orderStore;
