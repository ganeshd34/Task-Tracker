import React, { useState } from 'react';

function CreateCard(props) {
  const [input, setInput] = useState('');

  const handleInput = (event) => {
    event.persist();
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleNewCard = (event) => {
    event.preventDefault();
    console.log('Create new card');
    props.createNewCard(input);
  };

  return (
    <form className='new-card-form' onSubmit={handleNewCard}>
      <h4>Create Card</h4>
      <input
        onChange={handleInput}
        className='new-card-input'
        type='text'
        value={input}
      />
      <input className='new-card-input' type='submit' value='Create' />
    </form>
  );
}

export default CreateCard;
