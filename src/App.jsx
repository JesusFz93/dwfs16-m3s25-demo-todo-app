import AppRouter from "./router/AppRouter";
import TaskState from "./context/TaskState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  return (
    <TaskState>
      <AppRouter />
    </TaskState>
  );
};

export default App;
