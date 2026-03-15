import React from 'react';

// TaskItem Component - Displays individual task with checkbox and delete button
function TaskItem({ task, onDelete, onToggle }) {
  return (
    // Conditional class - highlight if completed (Bonus Feature)
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>

      {/* Checkbox to mark task as completed */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      /> 

      {/* Task text - strikethrough if completed */}
      <span className={`task-text ${task.completed ? 'done' : ''}`}>
        {task.text}
      </span>

      {/* Delete button */}
      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
