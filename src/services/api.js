import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://pingcast.duckdns.org:5000"
});

export default api;