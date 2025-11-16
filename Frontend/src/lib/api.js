import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL_3000 || "https://heartfelt-presence-production.up.railway.app",
  withCredentials: false,
  timeout: 20000,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;

