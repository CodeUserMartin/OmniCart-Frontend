import { apiClient } from "./axios.js";


export const signupUser = (data) => {
    return apiClient.post("/auth/register", data);
}

export const loginUser = (data) => {
    return apiClient.post("/auth/login", data);
}

export const getCurrentUser = () => {
    return apiClient.get("/auth/current-user");
}

export const becomeSeller = (formData) => {
    return apiClient.post("/auth/become-seller", formData);
}

export const getUserAddresses = () => {
    return apiClient.get("/auth/address");
}

export const forgetPassword = (email) => {
    return apiClient.post(
        "/auth/forget-password",
        { email }
    );
}

export const resetPassword = (resetToken, newPassword) => {
    return apiClient.post(
        `/auth/reset-password/${resetToken}`,
        { newPassword }
    );
};



export const logoutUser = () => {
    return apiClient.post("/auth/logout");
}