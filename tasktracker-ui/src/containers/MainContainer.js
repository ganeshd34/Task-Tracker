import React from 'react';
import CreateCard from '../components/CreateCard';
import ToDoCardContainer from './ToDoCardContainer';

class MainContainer extends React.Component {
  state = {
    cards: [
      {
        id: 1,
        title: 'Monday',
        list: [{ id: 1, name: 'attend meeting', completed: false }],
      },
      {
        id: 2,
        title: 'Tuesday',
        list: [
          { id: 1, name: 'go for run' },
          { id: 2, name: 'pick up order', completed: true },
        ],
      },
    ],
    count: 2,
  };

  createNewCard = (input) => {
    const newCount = this.state.count + 1;
    this.setState({
      cards: [...this.state.cards, { id: newCount, title: input, list: [] }],
      count: newCount,
    });
  };

  addToDoList = (id, todoName) => {
    const newCards = this.state.cards.map((card) => {
      if (card.id === id) {
        let listId =
          card.list.length > 0
            ? Math.max(...card.list.map((item) => item.id))
            : 0;
        console.log('newId', listId);
        card.list = [
          ...card.list,
          { id: listId + 1, name: todoName, completed: false },
        ];
        return card;
      } else return card;
    });
    this.setState({ cards: newCards });
  };

  handleTodoListClick = (cardId, listId) => {
    let card = this.state.cards.find((card) => card.id === cardId);
    const updatedList = card.list.map((item) => {
      if (item.id === listId) {
        item.completed = item.completed ? false : true;
        return item;
      } else return item;
    });
    const updatedCards = this.state.cards.map((card) => {
      if (card.id === cardId) {
        card.list = updatedList;
        return card;
      } else return card;
    });
    this.setState({ cards: updatedCards });
  };

  render() {
    return (
      <div className='main-container'>
        <ToDoCardContainer
          cards={this.state.cards}
          addToDoList={this.addToDoList}
          handleTodoListClick={this.handleTodoListClick}
        />
        <CreateCard createNewCard={this.createNewCard} />
      </div>
    );
  }
}

export default MainContainer;
