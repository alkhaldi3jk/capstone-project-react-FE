import { makeAutoObservable } from "mobx";
import { api } from "./api";

class OptionStore {
  options = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchOptions = async () => {
    try {
      const res = await api.get("/options");
      this.options = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createOption = async (newOption) => {
    try {
      const formData = new FormData();
      for (const key in newOption) formData.append(key, newOption[key]);
      const res = await api.post("/options", formData);
      this.options.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateOption = async (updatedOption, optionId) => {
    try {
      const formData = new FormData();
      for (const key in updatedOption) formData.append(key, updatedOption[key]);
      const res = await api.put(`/options/${optionId}`, formData);
      console.log(res.data);
      this.options = this.options.map((option) =>
        option._id === optionId ? res.data : option
      );
    } catch (error) {
      console.log(error);
    }
  };
  deleteOption = async (optionId) => {
    try {
      await api.delete(`/options/${optionId}/`);
      this.options = this.options.filter((option) => option._id !== optionId);
    } catch (error) {
      console.log("optionStore -> deleteOption -> error", error);
    }
  };
}

const optionStore = new OptionStore();
optionStore.fetchOptions();
export default optionStore;
