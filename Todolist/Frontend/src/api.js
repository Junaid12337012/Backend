import axios from "axios";

const API_URL = 'http://localhost:5000/api/tasks';

// Fetch all Tasks 
export const getTask = async () => {
    return await axios.get(API_URL);
};

// Update Task 
export const updatedTask = async () => {
    return await axios.put(`${API_URL}/${id}`);
};

// Create New Task 
export const createTask = async () => {
    return await axios.post(API_URL);
};

// Deleta Task 
export const deleteTask = async () => {
    return await axios.delete(`${API_URL}/${id}`)
}