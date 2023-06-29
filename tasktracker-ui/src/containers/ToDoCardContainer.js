import React from 'react';
import ToDoCard from '../components/ToDoCard';

function ToDoCardContainer(props) {
  return (
    <div>
      {props.cards.map((card) => {
        console.log('id:', card.id);
        return (
          <ToDoCard
            key={card.id}
            card={card}
            handleTodoListClick={props.handleTodoListClick}
            addToDoList={props.addToDoList}
          />
        );
      })}
    </div>
  );
}

export default ToDoCardContainer;
