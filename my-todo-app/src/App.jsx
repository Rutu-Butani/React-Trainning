import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (message) => {
    const newTodo = {
      message: message,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const markTodoDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='main_div'>
      <h1 className='heading'>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a new todo"
        className="todo-input"
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            addTodo(event.target.value);
            event.target.value = '';
          }
        }}
      />
      <TodoList todos={todos} markTodoDone={markTodoDone} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
