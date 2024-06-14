import React from 'react';

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
