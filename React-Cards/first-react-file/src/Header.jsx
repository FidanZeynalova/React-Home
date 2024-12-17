import React from 'react'

function Header() {
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
            <button>Card <span>1</span></button>
        </div>
      </div>
    </div>
  )
}

export default Header
