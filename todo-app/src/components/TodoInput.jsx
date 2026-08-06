function TodoInput({ input, handleInputVal, handleTodos }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Add a new task..."
        onChange={handleInputVal}
      />
      <button onClick={handleTodos}>Add todo</button>
    </div>
  );
}

export default TodoInput;
