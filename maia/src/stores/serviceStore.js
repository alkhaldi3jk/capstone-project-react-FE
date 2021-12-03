import { makeAutoObservable } from "mobx";
import api from "./api";

class ServiceStore {
  services = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchSrvices = async () => {
    try {
      const res = await api.get("/");
      this.services = res.data;
    } catch (error) {
        console.log(error)
    }
  };

  createService = async (newService) => {
    try {
      const formData = new FormData();
      for (const key in newService) {
        formData.append(key, newService[key]);
      }
      const res = await api.post("/", formData);
      this.services.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const serviceStore = new ServiceStore()
serviceStore.fetchSrvices()
export default serviceStore
