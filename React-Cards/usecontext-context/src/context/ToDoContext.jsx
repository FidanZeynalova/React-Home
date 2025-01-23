import React, { createContext, useState } from 'react'
export const ToDoContext = createContext()

function ToDoProvider({children}) {
  let [todos,setTodos] = useState([
    {
      id:"1",
      text:"Go"
    },
    {
      id:"2",
      text:"Walk"
    },
    {
      id:"3",
      text:"Run"
    }
  ])
  const value = {
    todos,
    setTodos
  }
  return (
    <ToDoContext.Provider value={value}>
      {children}
    </ToDoContext.Provider>
  )
}

export default ToDoProvider
