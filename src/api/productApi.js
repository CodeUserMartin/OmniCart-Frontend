import { apiClient } from './axios.js';

export const searchProducts = (query) => {
    return apiClient.get(`/product?search=${encodeURIComponent(query)}`);
}