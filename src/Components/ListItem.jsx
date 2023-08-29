import React, { useState } from 'react';
import ToDoList from '../Page/ToDoList';

const ListItem = () => {
  const [task, setTask] = useState([]);

  const updateTask = (newTask) => {
    setTask(newTask);
  };

  return (
    <>
      <ToDoList task={task} setTask={setTask} />
    </>
  );
};

export default ListItem;

