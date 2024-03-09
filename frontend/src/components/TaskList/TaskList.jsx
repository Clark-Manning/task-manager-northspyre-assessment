import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

const TaskList = ({ items, handleMarkComplete, handleDelete }) => {
  return (
    <div className="container py-2">
      {items.map((item) => (
        <TaskCard
          key={item.id}
          item={item}
          handleMarkComplete={handleMarkComplete}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
