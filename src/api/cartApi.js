import { apiClient } from "./axios.js"

export const addToCart = (productId, quantity) => {
    return apiClient.post(`/cart`, { productId, quantity })
}

export const deleteCartItem = (productId) => {
    return apiClient.delete(`/cart/${productId}`);
}

export const decreaseCartItem = (productId) => {
    return apiClient.patch(`/cart/decrease/${productId}`);
};

export const getUserCart = (category = "") => {
    return apiClient.get("/cart", {
        params: {
            category
        }
    });
}

