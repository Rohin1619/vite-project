import React, { useState } from 'react';
import ListItem from '../Components/ListItem';

const ToDoList = () => {
    const [task, setTask] = useState({ id: '', newTask: '' });
    const [tasksToDo, setTasksToDo] = useState([]);
    const [editingTaskId, setEditingTaskId] = useState(null);

    const handleAddTask = () => {
        const randomId = Math.floor(Math.random() * 10);
        if (task.newTask) {
            const newTaskObj = { task: task.newTask, id: randomId };
            setTasksToDo([newTaskObj, ...tasksToDo]);
            setTask({ id: '', newTask: '' });
        }
        console.log({task: task.newTask});
        console.log({id: randomId});
    };



    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasksToDo.filter((taskObj) => taskObj.id !== taskId);
        setTasksToDo(updatedTasks);
    };

    const handleEditTask = (taskId, editedTaskText) => {
        const taskIndex = tasksToDo.findIndex((taskObj) => taskObj.id === taskId);
        if (taskIndex !== -1) {
          const updatedTasks = [...tasksToDo];
          updatedTasks[taskIndex].task = editedTaskText;
          setTasksToDo(updatedTasks);
        }
      };
    
      const handleEditClick = (taskId) => {
        setEditingTaskId(taskId);
      };

    return (
        <>
            <input
                name='task'
                type="text"
                placeholder="Enter Task"
                value={task.newTask}
                onChange={(e) => setTask({ ...task, newTask: e.target.value })}
            />
            {/* <input
                type="text"
                placeholder="Enter ID"
                value={task.id}
                onChange={(e) => setTask({ ...task, id: e.target.value })} 
    />*/}
            <button onClick={handleAddTask}>Add Task</button>
            {tasksToDo.map((taskObj, index) => (
                <ListItem
                    key={index}
                    taskObj={taskObj}
                    onDelete={handleDeleteTask}
                    onEdit={handleEditTask}
                    isEditing={editingTaskId === taskObj.id}
                    onEditClick={handleEditClick}
                />
            ))}
        </>
    );
}

export default ToDoList;
