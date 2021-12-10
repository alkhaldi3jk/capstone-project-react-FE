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
      const res = await api.get("/services");
      this.services = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createService = async (newService) => {
    try {
      const formData = new FormData();
      for (const key in newService) formData.append(key, newService[key]);
      const res = await api.post("/services", formData);
      this.services.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateService = async (updatedService, serviceId) => {
    try {
      const formData = new FormData();
      for (const key in updatedService)
        formData.append(key, updatedService[key]);
      const res = await api.put(`/services/${serviceId}`, formData);
      console.log(res.data);
      this.services = this.services.map((service) =>
        service._id === serviceId ? res.data : service
      );
    } catch (error) {
      console.log(error);
    }
  };
  deleteService = async (serviceId) => {
    try {
      await api.delete(`/services/${serviceId}`);
      this.services = this.services.filter(
        (service) => service._id !== serviceId
      );
    } catch (error) {
      console.log("serviceStore -> deleteService -> error", error);
    }
  };
}

const serviceStore = new ServiceStore();
serviceStore.fetchSrvices();
export default serviceStore;
