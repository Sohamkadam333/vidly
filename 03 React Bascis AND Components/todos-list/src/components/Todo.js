import './main.css';

function Todo(props) {
  return (
    <div className='todo'>
      <h2>{props.todo.title}</h2>
      <p>{props.todo.desc}</p>
      <button
        className='btn btn-sm btn-danger delete '
        onClick={() => props.onDelete(props.todo)}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
