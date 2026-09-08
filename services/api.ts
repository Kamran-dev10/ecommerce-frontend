import axios from "axios";

const api = axios.create({
  baseURL:"https://ecommerce-backend-ecommerse.up.railway.app",
});

export default api;