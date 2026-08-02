import  axios  from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Add your Backend API URL here or Localhost URL
    withCredentials: true,
})

