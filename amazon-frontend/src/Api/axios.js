import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-2025-d67bf/us-central1/api",
  baseURL: "https://api-63fla567dq-uc.a.run.app/",
});

export {axiosInstance};