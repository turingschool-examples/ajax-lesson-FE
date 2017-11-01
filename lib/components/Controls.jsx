import React from 'react';

const Controls = ({ qty, setQty, getTrivia }) => {

  return (
    <div className='controls'>
      <input type='text'
             value={qty}
             onChange={(e) => setQty(e.target.value)}/>

      <button onClick={getTrivia}>Get Trivia</button>
    </div>
  )
}

export default Controls;
