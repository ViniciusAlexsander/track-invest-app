import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://track-invest-production.up.railway.app",
  timeout: 1000,
});

axiosClient.interceptors.request.use(
  async (config) => {
    try {
      const jsonValue = await AsyncStorage.getItem("authToken");
      const token = jsonValue != null ? JSON.parse(jsonValue) : null;

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error retrieving token from AsyncStorage:", error);
    }

    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export { axiosClient };
