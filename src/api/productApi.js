import { apiClient } from './axios.js';

export const searchProducts = (query) => {
    return apiClient.get(`/product?search=${encodeURIComponent(query)}`);
}

export const addProduct = (formData) => {
    return apiClient.post('/product', formData)
}

export const getSellerProducts = () => {
    return apiClient.get('/product/my-products')
}

