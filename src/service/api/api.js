import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    timeout: 20000,
    headers: { "X-Custom-Header": "foobar" },
});
export const getTodosAPI = () => {
    return axiosInstance.get(`/todos`);
};

export const addTodoAPI = (todo) => {
    return axiosInstance.post(`/todos`, todo);
};

export const deleteTodoAPI = (id) => {
    return axiosInstance.delete(`/todos/${id}`);
};

export const updateTodoAPI = (todo) => {
    return axiosInstance.put(`/todos/${todo.id}`, {
        title: todo.title,
        isCompleted: todo.isCompleted,
        deadline: todo.deadline,
    });
};
