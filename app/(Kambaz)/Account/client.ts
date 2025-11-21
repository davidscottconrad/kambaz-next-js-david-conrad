import { axiosWithCredentials } from "@/lib/axiosConfig";
export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const USERS_API = `${HTTP_SERVER}/api/users`;
export const signin = async (credentials: any) => {
    const response = await axiosWithCredentials.post("/api/users/signin", credentials);
    return response.data;
};
export const profile = async () => {
    const response = await axiosWithCredentials.post("/api/users/profile");
    return response.data;
};
export const signup = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
};
export const signout = async () => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await axiosWithCredentials.get(USERS_API);
    console.log("findAllUsers response:", response.data);
    return response.data;
};
export const findUsersByRole = async (role: string) => {
    const response = await
        axiosWithCredentials.get(`${USERS_API}?role=${role}`);
    return response.data;
};
export const findUsersByPartialName = async (name: string) => {
    const response = await axiosWithCredentials.get(`${USERS_API}?name=${name}`);
    return response.data;
};
export const findUserById = async (id: string) => {
    const response = await axiosWithCredentials.get(`${USERS_API}/${id}`);
    return response.data;
};
export const deleteUser = async (userId: string) => {
    const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}`);
    return response.data;
};
export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};

