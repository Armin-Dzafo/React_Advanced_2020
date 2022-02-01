import React from 'react';

const ErrorExample = () => {
  let title = 'some text';
  function changeName() {
    title = 'hook me up';
    console.log(title);
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={changeName}>
        Change text
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
