import axios from 'axios';

// const baseUrl = 'https://apicentraldeventiladores.inova.esp.br';
const baseUrl = 'https://api.centralventiladores.dev.org.br';
//
// const baseUrl = 'http://localhost:5000';

export const getUrlRequest = (uri) => baseUrl + uri;

export const getHeadersRequest = () => ({
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const getBaseUrl = () => baseUrl;

const api = axios.create({
  headers: getHeadersRequest(),
  baseURL: baseUrl,
});

export default api;
