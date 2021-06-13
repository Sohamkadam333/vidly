import React from 'react';
import './card-list.css';
import Card from '../Card/card-component';

const CardList = (props) => {
  return (
    <div>
      <div className='card-list '>
        {props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
