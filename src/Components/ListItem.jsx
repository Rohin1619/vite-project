import React from 'react';

const ListItem = (props) => {
  const {taskObj } = props;

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', border: '1px solid', borderRadius: '12px', padding: '16px' }}>
      <div className="container-left">
        <h2>{taskObj.task}</h2>
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
  );
};

export default ListItem;

