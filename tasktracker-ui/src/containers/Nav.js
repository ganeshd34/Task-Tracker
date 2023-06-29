import React from 'react';
import taskLogo from '../tasks.png';

function Nav() {
  return (
    <div className='nav'>
      <img className='logo' alt='task logo' src={taskLogo} />
      <h2>ToDo Tracker</h2>
    </div>
  );
}

export default Nav;
