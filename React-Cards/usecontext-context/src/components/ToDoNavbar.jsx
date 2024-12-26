import React, { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'

function ToDoNavbar() {
    let {todos, setToDos} = useContext(ToDoContext)
    console.log(todos.length);
    
  return (
    <div>
      <h1>ToDoApp</h1>
      <p>To Do : {todos.length}</p>
    </div>
  )
}

export default ToDoNavbar
