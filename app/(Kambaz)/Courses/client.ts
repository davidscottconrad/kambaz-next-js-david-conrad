import { axiosWithCredentials } from "@/lib/axiosConfig";
import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

// Course functions
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

// Module functions
export const findModulesForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const deleteModule = async (moduleId: string) => {
    const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};

export const updateModule = async (module: any) => {
    const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
    return data;
};

// Assignment functions
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
};

// Enrollment functions
export const enrollInCourse = async (userId: string, courseId: string) => {
    const { data } = await axiosWithCredentials.post(`/api/users/${userId}/courses/${courseId}`);
    return data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const { data } = await axiosWithCredentials.delete(`/api/users/${userId}/courses/${courseId}`);
    return data;
};

export const findCoursesForUser = async (userId: string) => {
    const { data } = await axiosWithCredentials.get(`/api/users/${userId}/enrollments`);
    return data;
};

export const findEnrollmentsForCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.get(`/api/courses/${courseId}/enrollments`);
    return data;
};
