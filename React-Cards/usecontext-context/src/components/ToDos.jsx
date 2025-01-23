import React, { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import ToDo from './ToDo';

function ToDos() {
    let {todos} = useContext(ToDoContext)
    console.log(todos);
    
  return (
    <div>
      <ul>
        {
            todos.map(todo =>(
                <li>{<ToDo todo = {todo}/>}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default ToDos
