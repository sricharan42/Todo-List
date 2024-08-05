import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/tasks.json')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = (task) => {
    const newTask = { ...task, id: tasks.length + 1, completed: false, timestamp: new Date().toISOString() };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, ...updatedTask, timestamp: new Date().toISOString() } : task));
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <TaskForm onSave={taskToEdit ? (updatedTask) => updateTask(taskToEdit.id, updatedTask) : addTask} taskToEdit={taskToEdit} />
      <TaskList tasks={filteredTasks} onUpdate={updateTask} onEdit={handleEdit} />
    </div>
  );
};

export default App;
