/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};
//retriving my courses need "axiosWithCredentials"
export const findMyCourses = async () => {
  try {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
  }
  catch (err) {
    console.error("Failed to load my courses", err);
    // decide what you want to return on error
    return [];
  }
};

export const createCourse = async (course: any) => {
  console.log('Course client: createCourse')
  const { data } = await axiosWithCredentials.post(`${COURSES_API}`, course);
  console.log('Course client: after posting new courses')
  return data;
};
export const deleteCourse = async (id: string) => {
  console.log('course client deleteCourse');
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};
export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
 const response = await axios.get(`${COURSES_API}/${courseId}/users`);
 return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => { 
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

const MODULES_API = `${HTTP_SERVER}/api/modules`;
export const deleteModule = async (courseId: string,moduleId: string) => {
  const response = await axios.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
  //const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
}
export const updateModule = async (courseId: string, module: any) => {
  const { data } = await axios.put(`${COURSES_API}/${courseId}/modules/${module._id}`,module);
  //const { data } = await axios.put(`${MODULES_API}/${module._id}`,module);
  return data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {  
  console.log('📤 Client sending assignment:', assignment);
  console.log('course id: ', courseId);
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  console.log('📥 Client received:', response);
  return response.data;
};

export const deleteAssignment = async (courseId: string, assignmentId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
}

export const updateAssignment = async (courseId: string, assignment: any) => {
  console.log('📤 Course Client updating assignment:', assignment._id);
  console.log('course id: ', courseId);
  const { data } = await axios.put(`${COURSES_API}/${courseId}/assignments/${assignment._id}`,assignment);
  console.log('📤 Client sent update assignment');
  return data;
};











