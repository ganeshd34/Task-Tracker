import React from 'react';

function ToDoList(props) {
  const handleOnClick = (event) => {
    event.preventDefault();
    props.handleTodoListClick(props.cardId, props.toDoItem.id);
  };
  return (
    <div onClick={handleOnClick}>
      <h3
        className={props.toDoItem.completed ? 'completed-list' : 'to-do-list'}
      >
        {props.toDoItem.id}-{props.toDoItem.name}
      </h3>
    </div>
  );
}
export default ToDoList;
