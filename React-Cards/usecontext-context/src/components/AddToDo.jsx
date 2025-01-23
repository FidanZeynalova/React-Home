import React, { useContext } from 'react'
import { useState } from 'react'
import { ToDoContext } from '../context/ToDoContext'

function AddToDo() {
  let [inp,setInp] = useState()
  let {todos,setTodos} = useContext(ToDoContext)

  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos,{id:self.crypto.randomUUID(),text:inp}])
  }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
       <h1> Add  To Do List</h1>
        <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddToDo
