import axios from 'axios';

// const baseUrl = 'https://apicentraldeventiladores.inova.esp.br';
const baseUrl = 'https://api.centralventiladores.dev.org.br';
// const baseUrl = 'http://localhost:5000';

export function getUrlRequest(uri) {
  return baseUrl + uri;
}

export function getHeadersRequest() {
  return {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}

const api = axios.create({
  headers: getHeadersRequest(),
  baseURL: baseUrl,
});

export function getBaseUrl() {
  return baseUrl;
}

export default api;
