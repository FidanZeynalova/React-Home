import React, { useState } from 'react'

function Button() {
  let [count, setState] = useState(0);
  function handleIncrease() {
    setState(count + 1)
  }
  function handleDisincrease() {
    setState(count - 1)
  }
  function handleReset() {
    setState(0)
  }

  return (
    <div className="container">
      <span>Counter</span>
      <div className='buttons'>
        <button onClick={handleIncrease}>+</button>
        <span>{count}</span>
        <button onClick={handleDisincrease}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Button
