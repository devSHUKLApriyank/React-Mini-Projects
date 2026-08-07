import React from 'react'
import { useState } from 'react'
import Input from './Input'
import TodoItem from './TodoItem'

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
      <Input input={input} setInput={setInput} addTodo={addtodo}/>
      <div>
        {
          todos.map((todo)=>(
             <TodoItem key={todo.id} todo = {todo} />
          ))
        }
      </div>
    </div>
  )
  
  
  
}

export default Todo
