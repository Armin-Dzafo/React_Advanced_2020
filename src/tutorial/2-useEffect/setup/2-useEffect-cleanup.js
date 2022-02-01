import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const resizeWindow = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // you HAVE to work with the reference to a function ('resizeWindow')
    window.addEventListener('resize', resizeWindow);

    // cleanup (removeEventListener as a return of useEffect function)
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  });

  console.log(size);
  return (
    <>
      <h1>Window width</h1>
      <h2>{size} pixels</h2>
    </>
  );
};

export default UseEffectCleanup;
