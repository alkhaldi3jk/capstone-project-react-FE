import { makeAutoObservable } from "mobx";
import api from "./api";

class ServiceStore {
  services = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchSrvices = async () => {
    try {
      const res = await api.get("/");
      this.services = res.data;
      this.isLoading = false;

    } catch (error) {
      console.log(error);
    }
  };

  createService = async (newService) => {
    try {
      const formData = new FormData();
      for (const key in newService) {
        formData.append(key, newService[key]);
      }
      const res = await api.post("/dashboard", formData);
      this.services.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const serviceStore = new ServiceStore();
serviceStore.fetchSrvices();
export default serviceStore;
