import axios from "axios";

// const baseUrl = 'https://apicentraldeventiladores.inova.esp.br';
const baseUrl = 'https://api.centralventiladores.dev.org.br';
// const baseUrl = 'http://localhost:5000';

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  baseURL: baseUrl
});

export function getBaseUrl () {
  return baseUrl;
};

export default api;
