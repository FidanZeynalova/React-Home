import React, { useState } from 'react'

function Header() {
let [count,setState] = useState(0)
let [display,setDisplay] = useState("none")
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
function handleDisplay() {
  // e.preventDefault()
  if (display == "none") {
    setDisplay("block")
  }else{
    setDisplay("none")
  }
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
                    <li><a href="#" onClick={()=>handleDisplay()}>Shop ▼</a>
                    <div className="nav"  style={{display:display}}>
                       <ul>
                           <li><a href="#">All Products</a></li>
                           <li><a href="#">Popular Items</a></li>
                           <li><a href="#">New Arrivals</a></li>
                       </ul>
                    </div>
                    </li>
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
