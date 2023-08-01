import axios from "axios";

const URL_ROOT = `http://localhost:4000/api/tasks`;

const getTasksService = async () => {
  const response = await axios.get(`${URL_ROOT}`);
  return response;
};

const createTaskService = async (form) => {
  const response = await axios.post(`${URL_ROOT}`, form);
  return response;
};

const updateTaskService = async (id, form) => {
  const response = await axios.put(`${URL_ROOT}/${id}`, form);
  return response;
};

const deleteTaskService = async (id) => {
  const response = await axios.delete(`${URL_ROOT}/${id}`);
  return response;
};

export {
  createTaskService,
  getTasksService,
  updateTaskService,
  deleteTaskService,
};
