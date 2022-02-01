import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('random title');

  const onClickHandler = () => {
    if (title === 'random title') {
      setTitle('hello world');
    } else {
      setTitle('random title');
    }
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={onClickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
