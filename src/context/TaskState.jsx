import { useReducer, useCallback } from "react";
import TaskContext from "./TaskContext";
import taskReducer from "./TaskReducer";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import {
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from "../services/tasksServices";

const initialState = {
  task: {},
  tasks: [],
};

const TaskState = ({ children }) => {
  const [globalState, dispatch] = useReducer(taskReducer, initialState);

  const getTasks = useCallback(async (form) => {
    try {
      const response = await getTasksService(form);

      dispatch({
        type: "OBTENER_TAREAS",
        payload: response.data.tasks,
      });
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, []);

  const updateTask = async (id, form) => {
    try {
      const response = await updateTaskService(id, form);

      dispatch({
        type: "ACTUALIZAR_TAREA",
        payload: response.data.task,
      });
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskService(id);

      dispatch({
        type: "ELIMINAR_TAREA",
        payload: response.data.task,
      });
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const createTask = async (form) => {
    try {
      const response = await createTaskService(form);

      dispatch({
        type: "CREAR_TAREA",
        payload: response.data.task,
      });

      // Swal.fire({
      //   icon: "success",
      //   title: "Tarea creada",
      //   showConfirmButton: false,
      //   timer: 2000,
      // });
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <TaskContext.Provider
      value={{
        createTask,
        task: globalState.task,
        getTasks,
        tasks: globalState.tasks,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

TaskState.propTypes = {
  children: PropTypes.node,
};

export default TaskState;
