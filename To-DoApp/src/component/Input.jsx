import React from 'react'

const Input = ({input,setInput,addTodo}) => {
    
  return (
    <div>
      <input type="text" placeholder='Add a task' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input
