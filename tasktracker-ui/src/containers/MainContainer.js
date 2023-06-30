import React, { useState } from 'react';
import CreateCard from '../components/CreateCard';
import ToDoCardContainer from './ToDoCardContainer';

function MainContainer() {
  const [cards, setCards] = useState([
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
  ]);
  const [count, setCount] = useState(2);

  const createNewCard = (input) => {
    const newCount = count + 1;
    setCards([...cards, { id: newCount, title: input, list: [] }]);
    setCount(newCount);
  };

  const addToDoList = (id, todoName) => {
    const newCards = cards.map((card) => {
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
    setCards(newCards);
  };

  const handleTodoListClick = (cardId, listId) => {
    let card = cards.find((card) => card.id === cardId);
    const updatedList = card.list.map((item) => {
      if (item.id === listId) {
        item.completed = item.completed ? false : true;
        return item;
      } else return item;
    });
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        card.list = updatedList;
        return card;
      } else return card;
    });
    setCards(updatedCards);
  };

  return (
    <div className='main-container'>
      <ToDoCardContainer
        cards={cards}
        addToDoList={addToDoList}
        handleTodoListClick={handleTodoListClick}
      />
      <CreateCard createNewCard={createNewCard} />
    </div>
  );
}

export default MainContainer;
