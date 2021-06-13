import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import '../main.css';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickUpdateHandler = () => {
    console.log('Clicked');
    setTitle('Updated Value');
  };


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickUpdateHandler}>Click to Update the title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
