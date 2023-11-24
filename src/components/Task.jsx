import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Title from "./Title";

const Tasks = () => {
  //estado para almacenar las tareas
  const [tasks, setTasks] = useState([]);
  const [idGenerator, setIdGenerator] = useState(
    parseInt(localStorage.getItem("mockId")) || 1
  );
  const [action, setAction] = useState(null);
  const [viewAlert, setViewAlert] = useState(null)

  // funcion para modificar estado completado de tarea
  const handleTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      taskId === task.id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("dataTasks", JSON.stringify(updatedTasks));
    setAction("edit");
  };

  //funcion para almacenar nueva tarea
  const handleTaskAdd = (taskName) => {
    if (taskName.length > 0) {
      localStorage.setItem("mockId", idGenerator);
      const newTask = {
        id: idGenerator,
        nameTask: taskName,
        completed: false,
      };
      const result = [...tasks, newTask];
      setTasks(result);
      localStorage.setItem("dataTasks", JSON.stringify(result));
      setIdGenerator(idGenerator + 1);
      setAction("add");
    }
  };

  //funcion para eliminar tarea
  const handleDeleteTask = (taskId) => {
    const newTaskArray = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskArray);
    localStorage.setItem("dataTasks", JSON.stringify(newTaskArray));
    setAction("delete");
  };

  // const firstRender = useRef(true);

  useEffect(() => {
    localStorage.setItem("mockId", idGenerator);
  }, [idGenerator]);

  useEffect(() => {
    switch (action) {
      case "add":
        setViewAlert("agregado");
        break;
      case "delete":
        setViewAlert("borrado");
        break;
      case "edit":
        setViewAlert("editado");
        break;
      default:
        break;
    }

    setAction(null);
  }, [tasks, action]);

  useEffect(() => {
    const StoredTasks = JSON.parse(localStorage.getItem("dataTasks")) || [];
    setTasks(StoredTasks);
  }, []);

  return (
    <div>
      {
        viewAlert &&
        (<div className="alert alert-warning alert-dismissible fade show my-0" role="alert">
        <strong>Holy!</strong> {viewAlert} con éxito...
        <button
          type="button"
          className="btn-close"
          
          onClick={() => setViewAlert(null)}
        ></button>
      </div>)
      }
      
      <Title title="Gestor de tareas" />
      <span className="text-white">Tareas completadas: {tasks.filter((t)=>t.completed).length}</span><br/>
      <span className="text-white">Tareas por completar: {tasks.filter((t)=>!t.completed).length}</span>
      
      <TaskForm setNewTask={handleTaskAdd} />

      <TaskList
        tasks={tasks}
        onTaskCompleted={handleTaskCompleted}
        taskDelete={handleDeleteTask}
      />
    </div>
  );
};

export default Tasks;
