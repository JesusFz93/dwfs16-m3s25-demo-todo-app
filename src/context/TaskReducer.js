const reducer = (globalState, action) => {
  switch (action.type) {
    case "CREAR_TAREA":
      return {
        ...globalState,
        tasks: [...globalState.tasks, action.payload],
      };

    case "OBTENER_TAREAS":
      return {
        ...globalState,
        tasks: action.payload,
      };

    case "ACTUALIZAR_TAREA":
      return {
        ...globalState,
        tasks: globalState.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
      };

    case "ELIMINAR_TAREA":
      return {
        ...globalState,
        tasks: globalState.tasks.filter(
          (task) => task.id !== action.payload.id
        ),
      };

    default:
      return globalState;
  }
};

export default reducer;
