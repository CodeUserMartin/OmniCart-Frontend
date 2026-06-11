import { apiClient } from "./axios.js";


export const signupUser = (data) => {
    return apiClient.post("/auth/register", data);
}

export const loginUser = (data) => {
    return apiClient.post("/auth/login", data);
}

export const logoutUser = () => {
    return apiClient.post("/auth/logout");
}