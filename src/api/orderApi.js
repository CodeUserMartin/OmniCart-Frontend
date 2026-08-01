import { apiClient } from "./axios.js"

export const placeOrder = async (data) => {
  return await apiClient.post("/order/checkout", data);
};

// Buy Now (direct product purchase)
export const buyProduct = (productId, data) => {
  return apiClient.post(
    `/order/buy-now/${productId}`,
    data
  );
};

// export const getUserOrders = async () => {
//   return await apiClient.get("/order");
// }

export const getUserOrders = (category = "") => {
    return apiClient.get("/order", {
        params: {
            category
        }
    });
}

// GET Pending Orders
export const getSellerPendingOrders = () => {
  return apiClient.get(
    "/order/seller/pending"
  );
};

// Accept Order
export const acceptOrder = (itemId) => {
  return apiClient.put(
    `/order/seller/accept/${itemId}`
  );
};

export const getSellerConfirmedOrders = () => {
  return apiClient.get(
    "/order/seller/confirmed"
  );
};

export const shipOrder = (itemId) => {
  return apiClient.put(
    `/order/seller/ship/${itemId}`
  );
};

export const getSellerShippedOrders = () => {
  return apiClient.get(
    "/order/seller/shipped"
  );
}

export const deliverOrder = (itemId) => {
  return apiClient.put(
    `/order/seller/deliver/${itemId}`
  );
};

export const getSellerDeliveredOrders = () => {
  return apiClient.get(
    "/order/seller/delivered"
  );
};

export const cancelOrder = (itemId) => {
  return apiClient.put(`/order/cancel/${itemId}`);
};

export const getSellerCancelledOrders = () => {
  return apiClient.get("/order/seller/cancelled");
};

export const getSellerDashboard = () => {
  return apiClient.get(
    "/order/seller/dashboard"     
  );
};