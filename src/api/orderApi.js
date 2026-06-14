import { apiClient } from "./axios.js"

export const placeOrder = async (data) => {
  return await apiClient.post("/order/checkout", data);
};