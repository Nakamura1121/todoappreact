import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
