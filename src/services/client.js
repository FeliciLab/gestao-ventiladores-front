import axios from 'axios';

export const baseURL = 'http://localhost:5000';
// const baseURL = 'https://apicentraldeventiladores.inova.esp.br';
// export const baseURL = 'https://api.centralventiladores.dev.org.br';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

const api = axios.create({
  headers,
  baseURL,
});

const formatParams = (params) => ({
  content: params,
});

export default {
  get: (url, params) => api.get(url, params),
  post: (url, params, { v1, ...options }) =>
    api.post(url, v1 ? params : formatParams(params), options || {}),
  patch: (url, params, { v1, ...options }) =>
    api.post(url, v1 ? params : formatParams(params), options || {}),
  put: (url, params, { v1, ...options }) =>
    api.post(url, v1 ? params : formatParams(params), options || {}),
  delete: (url, params, { v1, ...options }) =>
    api.post(url, v1 ? params : formatParams(params), options || {}),
  defaults: api.defaults,
};
