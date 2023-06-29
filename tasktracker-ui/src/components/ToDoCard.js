import React from 'react';
import ToDoList from './ToDoList';

class ToDoCard extends React.Component {
  state = {
    input: '',
  };
  handleOnInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  handleOnSubmitList = (event) => {
    event.preventDefault();
    console.log('input:', this.state.input);
    this.props.addToDoList(this.props.card.id, this.state.input);
    this.setState({input:''})
  };
  renderLists() {
    return this.props.card.list.map((item) => {
      return <ToDoList key={item.id} cardId={this.props.card.id} toDoItem={item} handleTodoListClick={this.props.handleTodoListClick} />;
    });
  }
  render() {
    return (
      <div className='to-do-card'>
        <h4>
          {this.props.card.title}
        </h4>
        <form onSubmit={this.handleOnSubmitList}>
          <input
            type='text'
            value={this.state.input}
            onChange={this.handleOnInput}
          />
        </form>
        {this.renderLists()}
      </div>
    );
  }
}

export default ToDoCard;
