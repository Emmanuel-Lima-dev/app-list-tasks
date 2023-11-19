import React from "react";

const TaskItem = ({ name, completed}) => {


  return (
    <div>
      <h4 className={completed?'text-body-tertiary animate__animated animate__swing': ' text-dark'}>{!completed ? name  : <s>{name}</s>}</h4>  
    </div>
  );
};

export default TaskItem;
