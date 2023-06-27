import Todo from './Todo';
import './index.css';

const TodoList = ({ todos, markTodoDone, deleteTodo }) => {
  return (
    <div className='todo-box'>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            markTodoDone={markTodoDone}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
