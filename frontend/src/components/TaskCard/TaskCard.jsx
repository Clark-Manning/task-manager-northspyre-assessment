import React from 'react';

const TaskCard = ({ item, handleMarkComplete, handleDelete }) => {
  const renderButtons = (taskId, completed) => (
    <div className="d-flex align-items center">
      <button
        className={`btn mx-2 ${
          completed ? 'btn-success' : 'btn-outline-success'
        }`}
        onClick={() => handleMarkComplete(taskId, completed)}
      >
        {completed ? 'Completed' : 'Mark Complete'}
      </button>
      <button
        className="btn btn-danger mx-2"
        onClick={() => handleDelete(taskId)}
      >
        Delete
      </button>
    </div>
  );

  if (item.parentId === null) {
    return (
      <div className="row border rounded shadow p-3 mb-2 bg-white rounded my-1 p-1">
        <div className="col-12">
          <div>
            <h4>
              <b>
                {item.id}. {item.title}
              </b>
            </h4>
            <p>{item.description}</p>
          </div>
          <div>{renderButtons(item.id, item.completed)}</div>
        </div>
        {item.subTasks && item.subTasks.length > 0 && (
          <div className="col-12 mt-3">
            <h5>Subtasks:</h5>
            {item.subTasks.map((subTask) => (
              <div key={subTask.id} className="subtask">
                <h6>
                  <b>
                    {subTask.id}. {subTask.title}
                  </b>
                </h6>
                <p>{subTask.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default TaskCard;
