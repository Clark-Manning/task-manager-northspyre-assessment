import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

const TaskList = ({ items, handleMarkComplete, handleDelete }) => {
  let taskNum = 0;

  return (
    <div className="container py-2">
      {items.map((item, index) => {
        if (item.parentId === null) {
          taskNum++;
        }
        return (
          <TaskCard
            key={item.id}
            taskNum={item.parentId === null ? taskNum : null}
            item={item}
            handleMarkComplete={handleMarkComplete}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
