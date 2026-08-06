import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const[todos , setTodos] = useState([])
    const[input , setInput] = useState("")

    function addtodo(){
      if(input.trim() === ""){
        return
      }

      const newTodo = {
        id: Date.now(),
        text:input,
        completed:false,
      };

      setTodos([
        ...todos,
        newTodo
      ])

      setInput("")

    }

  return (
    <div>
      <h1>To-Do App</h1>
    </div>
  )
}

export default Todo
