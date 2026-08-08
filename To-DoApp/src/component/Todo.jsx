import { useState } from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <div className="min-h-screen bg-black flex justify-center pt-20">
      <div className="w-full max-w-lg bg-gray-600 p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Todo App
        </h1>

        <Input
          input={input}
          setInput={setInput}
          addTodo={addTodo}
        />

        <div className="mt-6 space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;