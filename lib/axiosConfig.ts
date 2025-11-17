import axios from "axios";

export const axiosWithCredentials = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_HTTP_SERVER,
});

// Optional: Add interceptor to handle 401 errors globally
axiosWithCredentials.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Redirect to signin or clear user state
            console.error("Unauthorized - session expired");
        }
        return Promise.reject(error);
    }
);