import React, { useState } from 'react';
import './App.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

// App Component - Main component that stores tasks in state
function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task 
  function handleAddTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  // Delete a task by id
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle completed status
  function handleToggle(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="app-container">
      <h1>My Task Manager</h1>

      {/* Task Counter - Bonus Feature */}
      <p className="task-counter">
        Total: {tasks.length} &nbsp;|&nbsp; Done: {completedCount} &nbsp;|&nbsp; Pending: {tasks.length - completedCount}
      </p>

      {/* TaskInput Component */}
      <TaskInput onAddTask={handleAddTask} />

      {/* TaskList Component */}
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;
