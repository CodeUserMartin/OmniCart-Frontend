import { apiClient } from "./axios.js"

export const addToCart = (productId, quantity) => {
    return apiClient.post(`/cart`, { productId, quantity })
}

export const getUserCart = () => {
    return apiClient.get("/cart");
};