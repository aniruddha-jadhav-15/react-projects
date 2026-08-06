import TodoItem from "./TodoItem";
function TodoList({ todos, handleDelete, handelComplted }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleDelete={handleDelete}
            handelComplted={handelComplted}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
