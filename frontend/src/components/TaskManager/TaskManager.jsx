import React, { useState, useEffect } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import {
  getTasks,
  addTask,
  deleteTask,
  completeTask,
} from '../../utility/utility';

const TaskManager = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setItems(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputDesc = (e) => {
    setInputDesc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputTitle || !inputDesc) {
      alert('Fill in all fields before saving');
    } else {
      try {
        await addTask(inputTitle, inputDesc);
        fetchTasks();
        setInputTitle('');
        setInputDesc('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleMarkComplete = async (id, completed) => {
    try {
      console.log('Value of completed passed to completeTask:', completed);
      await completeTask(id, completed);
      const updatedItems = items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      setItems(updatedItems);
    } catch (error) {
      console.error('Error marking task as complete:', error);
    }
  };

  return (
    <>
      <div className="container border rounded d-flex justify-content-center shadow p-3 mb-3 bg-white rounded">
        <div className="row">
          <div className="text-center">
            <h2>Tasks</h2>
          </div>
          <TaskForm
            onSubmit={handleSubmit}
            inputTitle={inputTitle}
            inputDesc={inputDesc}
            handleInputTitle={handleInputTitle}
            handleInputDesc={handleInputDesc}
          />
        </div>
      </div>
      <TaskList
        items={items}
        handleMarkComplete={handleMarkComplete}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default TaskManager;
