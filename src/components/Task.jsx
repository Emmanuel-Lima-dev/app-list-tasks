import React, { useEffect, useState} from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Title from "./Title";

const Tasks = () => {
  //estado para almacenar las tareas
  const [tasks, setTasks] = useState([]);
  const [idGenerator, setIdGenerator] = useState(parseInt(localStorage.getItem('mockId')) || 1);

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
      
      localStorage.setItem('mockId', idGenerator)
      const newTask = {
        id: idGenerator,
        nameTask: taskName,
        completed: false,
      };
      const result = [...tasks, newTask];
      setTasks(result);
      localStorage.setItem('dataTasks', JSON.stringify(result));
      setIdGenerator(idGenerator + 1);
    }
  };

  //funcion para eliminar tarea
  const handleDeleteTask = (taskId) => {
    const newTaskArray = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskArray);
    localStorage.setItem('dataTasks', JSON.stringify(newTaskArray))
  };

  // const firstRender = useRef(true);

  useEffect(()=>{
    localStorage.setItem('mockId', idGenerator);
  }, [idGenerator])

  //useEffect que ejecutara un alert cada vez que cambien el estado en el almacenamiento de tareas
  useEffect(() => {
    // if (firstRender.current) {
    //   firstRender.current = false;
    //   return;
    // }   
    const StoredTasks =  JSON.parse(localStorage.getItem('dataTasks')) || [];
    setTasks(StoredTasks);

  }, []);

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
