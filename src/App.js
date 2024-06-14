// src/App.js
import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1 className='todoapp1'>Todo App</h1>
        <ThemeToggle />
      </header>
      <TodoList />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
