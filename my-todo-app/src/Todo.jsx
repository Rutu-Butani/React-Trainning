import React from 'react';

const Todo = ({ todo, index, markTodoDone, deleteTodo }) => {
  const handleCheckboxChange = () => {
    markTodoDone(index);
  };

  const handleDeleteClick = () => {
    deleteTodo(index);
  };

  return (
    <div className={`todo ${todo.done ? 'done' : ''}`}>
      <input
        type="checkbox"
        className="form-check-input"
        checked={todo.done}
        onChange={handleCheckboxChange}
      />
      <span className="todo-message">{todo.message}</span>
      <button className="btn btn-link cross-button" onClick={handleDeleteClick}>
        &times;
      </button>
    </div>
  );
};

export default Todo;
