import React from 'react';

const TaskCard = ({ item, handleMarkComplete, handleDelete }) => {
  return (
    <div className="row border rounded shadow p-3 mb-2 bg-white rounded my-1 p-1">
      <div className="col-12 d-flex justify-content-between">
        <div>
          <h4>
            {item.id}. {item.title}
          </h4>
          <p>{item.description}</p>
        </div>
        <div className="d-flex align-items center">
          <button
            className={`btn mx-2 ${
              item.completed ? 'btn-success' : 'btn-outline-success'
            }`}
            onClick={() => handleMarkComplete(item.id, item.completed)}
          >
            {item.completed ? 'Completed' : 'Mark Complete'}
          </button>

          <button
            className="btn btn-danger mx-2"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
