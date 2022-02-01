import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    msg: 'random message',
  });

  const changeMessage = () => {
    // setPerson({ name: 'peter', age: 24, msg: 'hello world' });
    setPerson({ ...person, msg: 'hello world' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.msg}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
