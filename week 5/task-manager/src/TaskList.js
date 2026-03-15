import React from 'react';
import TaskItem from './TaskItem';

// TaskList Component - Displays all tasks using map()
function TaskList({ tasks, onDelete, onToggle }) {

  // Conditional Rendering - show message when no tasks
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks available</p>;
  }
 
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TaskList;
