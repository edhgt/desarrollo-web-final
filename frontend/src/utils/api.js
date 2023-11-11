// src/utils/api.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
