import { axiosWithCredentials } from "@/lib/axiosConfig";

const COURSES_API = `${process.env.NEXT_PUBLIC_HTTP_SERVER}/api/courses`;
const USERS_API = `${process.env.NEXT_PUBLIC_HTTP_SERVER}/api/users`;

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get("/api/courses");
    return data;
};

export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get("/api/users/current/courses");
    return data;
};

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
    return data;
};

export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
};
