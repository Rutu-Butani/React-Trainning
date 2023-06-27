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
        checked={todo.done}
        onChange={handleCheckboxChange}
      />
      <span>{todo.message}</span>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Todo;
