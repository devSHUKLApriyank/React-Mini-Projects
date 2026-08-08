function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="flex items-center justify-between border border-slate-200 p-4 rounded-lg">

      <p
        className={`text-lg ${
          todo.completed
            ? "line-through text-slate-400"
            : "text-slate-700"
        }`}
      >
        {todo.text}
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => toggleTodo(todo.id)}
          className="bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600"
        >
          {todo.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default TodoItem;
