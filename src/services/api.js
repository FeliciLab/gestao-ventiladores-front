import axios from "axios";

const baseUrl = 'http://localhost:5000';

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  baseURL: baseUrl
});

export default api;
