import axios from "axios";
import { envConfig } from "@/config/env";

const axiosInstance = axios.create({
  baseURL: envConfig.apiBaseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;