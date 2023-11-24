import React, { useState } from 'react'

const TaskForm = ({setNewTask}) => {

  const [task, setTask] = useState('');

  const handleInputChange = (event)=>{
    setTask(event.target.value);
  }

  const handleAddTask = (e)=> {
    e.preventDefault();
    setNewTask(task);
    setTask('');
  }

  return (

    <form className='form-floating d-flex mb-3'>
        <input type='text' value={task} onChange={handleInputChange} className='form-control' id="floatingInputGroup1" placeholder="Nueva tarea"/>
        <label htmlFor="floatingInputGroup1">Ingrese nueva tarea</label>
        <button onClick={handleAddTask} className='btn btn-sm btn-primary ms-2'>Añadir Tarea</button>
    </form>
  )
}

export default TaskForm;