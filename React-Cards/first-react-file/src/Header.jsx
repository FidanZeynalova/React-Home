import React, { useState } from 'react'

function Header() {
let [count,setState] = useState(0)
  function handleDicrease() {
      setState(++count)
  }
  function handleIncrease() {
    if (count> 0) {
      setState(--count)
    }else{
      setState(0)
    }
}
function handleReset() {
  setState(0)
}


  return (
    <div className='header'>
      <div className="container">
        <div className="logo-navbar">
            <div className="logo">
                <h1>Start Bootstrap</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Shop ▼</a></li>
                </ul>
            </div>
        </div>
        <div className="button">
            <button onClick={handleDicrease}>+</button>
            <span>{count}</span>
            <button onClick={handleIncrease}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Header
