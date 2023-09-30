import axios from 'axios';
import { getJWTToken } from '../utils/Helper';

const API = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${getJWTToken()}`;
  return config;
});
export default API;
