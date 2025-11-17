import { axiosWithCredentials } from "@/lib/axiosConfig";

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get("/api/courses");
    return data;
};

export const findMyCourses = async () => {
    const { data } = await axiosWithCredentials.get("/api/users/current/courses");
    return data;
};

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post("/api/users/current/courses", course);
    return data;
};

export const deleteCourse = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`/api/courses/${id}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`/api/courses/${course._id}`, course);
    return data;
};
