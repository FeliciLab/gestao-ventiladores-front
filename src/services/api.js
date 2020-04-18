import axios from "axios";

const baseUrl = 'https://api.centralventiladores.dev.org.br';

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  baseURL: baseUrl
});

export default api;
