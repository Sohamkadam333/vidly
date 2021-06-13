import React from 'react';
import Todo from './Todo';

function Todos(props) {
  return (
    <div className='container'>
      <h1 className='text-center'>Todos Lits</h1>
      {props.todos.length === 0 ? (
        <h1>No Todos to display</h1>
      ) : (
        props.todos.map((todo) => {
          return (
            <Todo todo={todo} key={todo.id} onDelete={props.onDelete}></Todo>
          );
        })
      )}
    </div>
  );
}

export default Todos;
