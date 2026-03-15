import React, { useState } from 'react';

// TaskInput Component - Contains input field and add button
function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  function handleAdd() {
    if (inputValue.trim() === '') return; // Don't add empty task
    onAddTask(inputValue);
    setInputValue(''); // Clear input after adding
  }
 
  // Allow pressing Enter to add task
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  return (
    <div className="task-input-area">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TaskInput;
