import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // short-circuit evaluation
  // choose one of the next 2 lines (the other has to be commented out)
  const [text, setText] = useState('');
  // const [text, setText] = useState('zum');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  // short-circuit example 2
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <h2>short circuit example</h2>
      <p>firstValue: {firstValue}</p>
      <p>secondValue: {secondValue}</p>
      <hr />
      <h2>short circuit II example</h2>
      <p>Is there an error?</p>
      <div>{isError || <h4>there is no error</h4>}</div>
      <hr />
      <h2>ternary operator example</h2>
      <div>{isError ? <h5>error error omg</h5> : <h5>no error here</h5>}</div>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
    </div>
  );
};

export default ShortCircuit;
