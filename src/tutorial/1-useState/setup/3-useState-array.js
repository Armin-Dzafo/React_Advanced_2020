import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);

    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h2>{person.name}</h2>
            <button onClick={() => removeItem(person.id)}>remove</button>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
