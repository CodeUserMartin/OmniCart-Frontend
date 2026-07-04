import { apiClient } from './axios.js';

export const searchProducts = (query) => {
    return apiClient.get(`/product?search=${encodeURIComponent(query)}`);
}

export const searchProductByCategoryOrBySearch = (search, category) => {

    if (search && category) {
        return apiClient.get(`/product?category=${category}&search=${search}`)
    } else {
        return apiClient.get(`/product?category=${category}`)
    }
}

// export const renderCategoryProducts = (category) => {
//     return apiClient.get(`/product?category=${category}`)
// }

export const addProduct = (formData) => {
    return apiClient.post('/product', formData)
}

export const updateProduct = (productId, data) => {
    return apiClient.put(`/product/${productId}`, data);
};

export const deleteProduct = (productId) => {
    return apiClient.delete(`/product/${productId}`);
};

export const getSellerProducts = () => {
    return apiClient.get('/product/my-products')
}

export const getProductById = (id) => {
    return apiClient.get(`/product/${id}`);
}


