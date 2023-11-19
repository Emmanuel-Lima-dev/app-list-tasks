import React, { useEffect, useState, useRef } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Title from "./Title";

const Tasks = () => {
  //estado para almacenar las tareas
  const [tasks, setTasks] = useState([]);
  const [idGenerator, setIdGenerator] = useState(1);

  // funcion para modificar estado completado de tarea
  const handleTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      taskId === task.id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  //funcion para almacenar nueva tarea
  const handleTaskAdd = (taskName) => {
    if (taskName.length > 0) {
      setIdGenerator(idGenerator + 1);
      const newTask = {
        id: idGenerator,
        nameTask: taskName,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  //funcion para eliminar tarea
  const handleDeleteTask = (taskId) => {
    const newTaskArray = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskArray);
  };

  const firstRender = useRef(true);

  //useEffect que ejecutara un alert cada vez que cambien el estado en el almacenamiento de tareas
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    
  }, [tasks]);

  return (
    <div>
      
      <Title title="Gestor de tareas" />
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
