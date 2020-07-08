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
  post: (url, params, v1) => api.post(url, v1 ? params : formatParams(params)),
  patch: (url, params, v1) => api.post(url, v1 ? params : formatParams(params)),
  put: (url, params, v1) => api.post(url, v1 ? params : formatParams(params)),
  delete: (url, params, v1) =>
    api.post(url, v1 ? params : formatParams(params)),
  defaults: api.defaults,
};
