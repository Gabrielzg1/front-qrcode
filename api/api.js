import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.232.85:8080",
});

export default api;
