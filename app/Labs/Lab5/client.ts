import axios from "axios";
const REMOTE_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};
export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

export const createTodo = async () => {
  const response = await
            axios.get(`${TODOS_API}/create`);
  return response.data;
};
export const postTodo = async (todo: any) => {
  const response = await
    axios.post(`${TODOS_API}`, todo); //多了一个argument"todo"
  return response.data;
};
export const updateTodo = async (todo: any) => {
  const response = await
axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};





//The job of this TypeScript file is handling all server communication. 
// This is a practice known as Separation of Concerns.

//The rule is: TSX files (Components) should communicate with service/utility TS files, 
//not the server directly.