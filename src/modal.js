import React, { useState } from 'react';

function Modal() {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    // Add todo logic here
  };

  return (
    <div className="modal">
      <h2>Add New Todo</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default Modal;
