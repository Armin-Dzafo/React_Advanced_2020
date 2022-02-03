import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    // the use of this cleanup function is crucial
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const style = {
    color: 'limegreen',
    width: '70%',
    backgroundColor: 'darkgreen',
    margin: '10vw auto',
    padding: '4vw',
    fontSize: '8vw',
  };
  return (
    <section style={style}>
      <h6>window</h6>
      <h6>size: {size}</h6>
    </section>
  );
};
export default ShowHide;
