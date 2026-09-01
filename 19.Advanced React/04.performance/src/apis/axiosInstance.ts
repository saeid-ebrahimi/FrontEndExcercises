import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "",
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "http://localhost:5173",
  },
});

export default axiosInstance;
