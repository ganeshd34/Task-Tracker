import React, { useState } from 'react';
import ToDoList from './ToDoList';

function ToDoCard(props) {
  const [input, setInput] = useState('');
  
  const handleOnInput = (event) => {
    setInput(event.target.value);
  };

  const handleOnSubmitList = (event) => {
    event.preventDefault();
    console.log('input:', input);
    props.addToDoList(props.card.id, input);
    setInput('');
  };

  const renderLists = () => {
    return props.card.list.map((item) => {
      return (
        <ToDoList
          key={item.id}
          cardId={props.card.id}
          toDoItem={item}
          handleTodoListClick={props.handleTodoListClick}
        />
      );
    });
  };

  return (
    <div className='to-do-card'>
      <h4>{props.card.title}</h4>
      <form onSubmit={handleOnSubmitList}>
        <input type='text' value={input} onChange={handleOnInput} />
      </form>
      {renderLists()}
    </div>
  );
}

export default ToDoCard;
