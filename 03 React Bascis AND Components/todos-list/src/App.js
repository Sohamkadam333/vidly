import React, { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  const title = 'My Todos List';
  const searchBar = true;
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Market',
      desc: 'Go to the Market',
    },
    {
      id: 2,
      title: 'Mall',
      desc: 'Go to the Mall',
    },
    {
      id: 3,
      title: 'Barber Shop',
      desc: 'Go to the Barber Shop',
    },
  ]);

  return (
    <div className='App'>
      <div className=''>
        <Header title={title} searchBar={searchBar}></Header>
        <Todos todos={todos} onDelete={onDelete}></Todos>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
