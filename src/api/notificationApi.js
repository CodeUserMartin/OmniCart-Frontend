import { apiClient } from "./axios.js";

export const getNotifications = () => {
    return apiClient.get("/notification");
};

export const markNotificationRead = (notificationId) => {
    return apiClient.put(
        `/notification/read/${notificationId}`
    );
};

export const markAllNotificationsRead = () => {
    return apiClient.put(
        "/notification/read-all"
    );
};