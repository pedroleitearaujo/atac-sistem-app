import axios from 'axios';

let url = 'http://localhost:3333';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const api = axios.create({
  baseURL: url,
  headers
});

export default api;
