import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const[todos , setTodos] = useState("")
    const[input , setInput] = useState([])
  return (
    <div>
      <h1>To-Do App</h1>
    </div>
  )
}

export default Todo
