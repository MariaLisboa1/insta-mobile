import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.4.70:3333',
});
export default api;

