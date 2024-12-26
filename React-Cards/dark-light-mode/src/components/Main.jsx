import React from 'react'
import { useState } from 'react'
import  { BodyColor } from '../context/BodyColor'

function Main() {
let [bColor,setBColor] = useState(BodyColor)
let [color,setColor] = useState("red")

function handleClick() {
    console.log(bColor);
    
    if(setBColor == "light"){
        setBColor("dark")
        document.body.style = 'background: black'
    }
}
  return (
    <div className='main'>
      <h1>This is main page</h1>
      <button onClick={()=>handleClick()}>Dark</button>
    </div>
  )
}

export default Main
