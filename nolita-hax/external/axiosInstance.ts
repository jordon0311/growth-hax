import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.forge-ml.com/q/jordonwaters",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.FORGE_API_KEY}`,
  },
  timeout: 10000,
});
