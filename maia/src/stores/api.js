// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8080/api",
// });
// export default api;

import axios from "axios";

export const baseURL = "http://192.168.8.114:8080"; // Abdullah

// export const baseURL = "http://192.168.3.14:8080"; // Shahad

// export const baseURL = "http://192.168.8.170:8080"; // Shahad Work

// export const baseURL = "http://192.168.8.149:8080"; // Amnah

// export const baseURL = "http://172.20.10.3:8080"; // Ghadah

export const api = axios.create({
  baseURL: `${baseURL}/api`,
});
