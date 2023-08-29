import React, { useState } from 'react';
import ListItem from '../Components/ListItem';

const ToDoList = () => {
    const [id, setId] = useState({ id: '', newTask: '' }); 
    const [tasksToDo, setTasksToDo] = useState([]);

    const handleAddTask = () => {
        if (id.newTask && id.id) { 
            const newTaskObj = { task: id.newTask, id: id.id }; 
            setTasksToDo([newTaskObj,...tasksToDo, ]);
            setId({ id: '', newTask: '' }); 
        }
    };

    return (
        <>
            <input
                name='task'
                type="text"
                placeholder="Enter Task"
                value={id.newTask}
                onChange={(e) => setId({ ...id, newTask: e.target.value })} 
            />
            <input
                type="text"
                placeholder="Enter ID"
                value={id.id}
                onChange={(e) => setId({ ...id, id: e.target.value })} 
            />
            <button onClick={handleAddTask}>Add Task</button>
            {tasksToDo.map((taskObj, index) => (
                <ListItem key={index} taskObj={taskObj} />
            ))}
        </>
    );
}

export default ToDoList;
