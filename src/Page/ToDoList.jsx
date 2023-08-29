import React, { useState } from 'react';
import ListItem from '../Components/ListItem';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    return (
        <>
            <ListItem tasks={tasks} setTasks={setTasks} />
            <div className="container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', border: '1px solid', borderRadius: '12px', padding: '16px' }}>

                <div className="container-left">
                    {Object.entries(tasks).map(([tasks], index) => {
                        return (
                            <div key={index}>
                                <h2>{tasks}</h2>

                            </div>
                        );
                    })}
                </div>
                <div className="container-right" style={{ margin: '16px' }}>
                    <button className="editBtn">
                        Edit
                    </button>
                    <button className="delBtn">
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default ToDoList;
