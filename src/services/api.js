import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coronavirus.dev.org.br/"
});

export default api;
