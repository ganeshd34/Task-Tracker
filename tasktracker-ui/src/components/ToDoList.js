import React from 'react';

class ToDoList extends React.Component {
  handleOnClick = (event) => {
    event.preventDefault();
    this.props.handleTodoListClick(
      this.props.cardId,
      this.props.toDoItem.id
    );
  };
  render() {
    return (
      <div onClick={this.handleOnClick}>
        <h3
          className={
            this.props.toDoItem.completed ? 'completed-list' : 'to-do-list'
          }
        >
         {this.props.toDoItem.id}-{this.props.toDoItem.name}
        </h3>
      </div>
    );
  }
}
export default ToDoList;
