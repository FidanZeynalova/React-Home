import React, { createContext } from 'react'
import { useState } from 'react'

export const BodyColor = createContext()

function ContextProvider({children}) {
    let[color,setColor] = useState("light")

const value = {
    color,setColor
}
  return (
    <BodyColor.Provider value = {value}>
      {children}
    </BodyColor.Provider>
  )
}

export default ContextProvider
