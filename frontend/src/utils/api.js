// src/utils/api.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;
console.log(baseURL)

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
