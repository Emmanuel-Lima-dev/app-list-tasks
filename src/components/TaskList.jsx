import React from 'react';
import TaskItem from './TaskItem';
import 'animate.css';

const TaskList = ({ tasks, onTaskCompleted, taskDelete }) => {

  const deleteTask = (id)=> {
    taskDelete(id)
  }


  return (
    <ol className='p-0 bg-secondary-subtle rounded'>
      {tasks.map((task) => (
        <li key={task.id} className='d-flex justify-content-between align-items-center px-3 py-1 animate__animated animate__headShake'>
        <TaskItem
          name={task.nameTask}
          completed={task.completed}
          id={task.id}
        />
        <div className='d-flex align-items-center'>
          <button onClick={() =>  onTaskCompleted(task.id)} className=' mx-lg-2 fs-3 btn' ><i className="bi bi-check-lg text-success"></i></button>
          <button onClick={() => deleteTask(task.id)} className='p-0 fs-5 btn'><i className="bi bi-trash3-fill text-danger"></i></button>
        </div>
            
      </li>
      ))}
    </ol>
  );
};

export default TaskList;