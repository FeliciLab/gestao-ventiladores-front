import axios from 'axios';

const baseURL = 'http://localhost:5000';
// const baseURL = 'https://apicentraldeventiladores.inova.esp.br';
// const baseURL = 'https://api.centralventiladores.dev.org.br';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export default axios.create({
  headers,
  baseURL,
});