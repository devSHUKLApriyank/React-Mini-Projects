const Input = ({ input, setInput, addTodo }) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={addTodo}
        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default Input;
