import React, { useState } from 'react';

const ListItem = (props) => {

  const {task,setTask}= props;
  const [id, setId] = useState('');

  const addTask = () => {
    if (task && id) {
      const newTask = { task, id };
      setTask([...task, newTask]);
      setTask('');
      setId('');
    }
  };

  const taskListItems = task.map((taskObj, index) => (
    <li key={index}>
      ID: {taskObj.id} Task: {taskObj.task}
    </li>
  ));

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </>
  );
};

export default ListItem;
