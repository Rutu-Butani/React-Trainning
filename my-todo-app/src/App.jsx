import React, { useReducer } from 'react';
import TodoList from './TodoList';
import './App.css';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'MARK_TODO_DONE':
      return state.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const addTodo = (message) => {
    const newTodo = {
      message: message,
      done: false,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const markTodoDone = (index) => {
    dispatch({ type: 'MARK_TODO_DONE', payload: index });
  };

  const deleteTodo = (index) => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  return (
    <div className='main_div'>
      <h1 className='heading'>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a new todo"
        className="todo-input form-control"
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
