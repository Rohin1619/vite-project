import React, {useState} from 'react';

const ListItem = (props) => {
  const { taskObj, onDelete, onEdit, isEditing, onEditClick } = props;
  const [editedTask, setEditedTask] = useState(taskObj.task);

  const handleDeleteClick = () => {
    onDelete(taskObj.id);
  };

  const handleEditClick = () => {
    if (isEditing) {
      onEdit(taskObj.id, editedTask); 
    } else {
      onEditClick(taskObj.id);
    }
  };
  

  const handleTaskChange = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', border: '1px solid', borderRadius: '12px', padding: '16px' }}>
      <div className="container-left">
        {isEditing ? (
          <input
            type="text"
            placeholder="Edit Task"
            value={editedTask}
            onChange={handleTaskChange}
          />
          
        ) : (
          <>
            <h2>{taskObj.id}</h2>
          <h2>{taskObj.task}</h2>
          </>

        )}
      </div>
      <div className="container-right" style={{ margin: '16px' }}>
        <button className="editBtn" onClick={handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="delBtn" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
