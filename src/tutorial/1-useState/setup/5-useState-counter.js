import React, { useState } from 'react';

const UseStateCounter = () => {
  const [number, setNumber] = useState(0);

  // functions that are part of the simple counter example

  const decrease = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(0);
  };

  const increase = () => {
    setNumber(number + 1);
  };

  // function that is part of the complex counter example

  const complexIncrease = () => {
    setTimeout(() => {
      // doesn't work as intended
      // always gets same initial value
      // setNumber(number + 1);

      // works perfectly
      // gets updated value and then makes next function call
      setNumber((prevState) => prevState + 1);
    }, 2000);
  };

  // simple counter

  // return (
  //   <>
  //     <h2>Regular Counter</h2>
  //     <h1>{number}</h1>
  //     <button className='btn' onClick={decrease}>
  //       decrease
  //     </button>
  //     <button className='btn' onClick={reset}>
  //       reset
  //     </button>
  //     <button className='btn' onClick={() => increase()}>
  //       increase
  //     </button>
  //   </>
  // );

  // alternatively simple counter

  // return (
  //   <>
  //     <h2>Regular Counter</h2>
  //     <h1>{number}</h1>
  //     <button className='btn' onClick={() => setNumber(number - 1)}>
  //       decrease
  //     </button>
  //     <button className='btn' onClick={() => setNumber(0)}>
  //       reset
  //     </button>
  //     <button className='btn' onClick={() => setNumber(number + 1)}>
  //       increase
  //     </button>
  //   </>
  // );

  // complex counter
  return (
    <>
      <h2>Complex Counter</h2>
      <h1>{number}</h1>
      <button className='btn' onClick={complexIncrease}>
        complex increase
      </button>
    </>
  );
};

export default UseStateCounter;
