import React, { useState } from 'react';

function ToDoList(props) {
    const { task = [], setTask } = props;
    const [newTask, setNewTask] = useState('');
    const [id, setId] = useState('');

    const addTask = () => {
        if (newTask && id) {
            const newTaskObj = { task: newTask, id };
            setTask([...task, newTaskObj]);
            setNewTask('');
            setId('');
        }
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', border: '1px solid', borderRadius: '12px', padding: '16px' }}>

                <div className="container-left">
                    <ul>
                        {task.map((taskObj, index) => (
                            <li key={index}>
                                ID: {taskObj.id} Task: {taskObj.task}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="container-right" style={{ margin: '16px', float:'right', justifyContent:'right', marginLeft:'180px' }}>
                    <button className="editBtn" onClick={() => handleEdit(task.id)}>
                        Edit
                    </button>
                    <button className="delBtn" onClick={() => handleDelete(task.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
}


export default ToDoList;
