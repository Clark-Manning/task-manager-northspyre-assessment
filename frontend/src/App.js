import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TaskManager></TaskManager>
    </div>
  );
}

export default App;
