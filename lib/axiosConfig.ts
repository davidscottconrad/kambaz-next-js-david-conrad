import axios from "axios";

export const axiosWithCredentials = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_HTTP_SERVER,
});

