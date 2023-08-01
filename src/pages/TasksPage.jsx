import { useState, useContext, useEffect } from "react";
import TaskContext from "../context/TaskContext";
// import { Link } from "react-router-dom";

const initForm = {
  name: "",
};

const TasksPage = () => {
  const [form, setForm] = useState(initForm);

  const { createTask, tasks, getTasks, updateTask, deleteTask } =
    useContext(TaskContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    createTask(form);

    setForm(initForm);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <>
      <main className="row">
        <article className="col">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-auto">
              <label htmlFor="inputTask" className="visually-hidden">
                Task Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputTask"
                placeholder="Task Name"
                autoComplete="off"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                New Task
              </button>
            </div>
          </form>
        </article>
      </main>
      <section className="row">
        <article className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                {/* <th scope="col">Status</th> */}
                <th scope="col">Completar</th>
                <th scope="col">Eliminar</th>
                {/* <th scope="col">Ver mas...</th> */}
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task) => (
                <tr
                  key={task.id}
                  className={task.status ? "" : "table-success"}
                >
                  <th scope="row">{task.id}</th>
                  <td>{task.name}</td>
                  {/* <td>{task.status ? "Pendiente" : "Completado"}</td> */}
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => updateTask(task.id, { status: false })}
                    >
                      Completar
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteTask(task.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                  {/* <td>
                    <Link to={`/tasks/${task.id}`} className="btn btn-info">
                      Ver mas...
                    </Link>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
};

export default TasksPage;
