import "../App.css";
function TodoItem({ todo, handleDelete, handelComplted }) {
  return (
    <>
      <li
        className={todo.completed ? "completed" : ""}
        onClick={() => handelComplted(todo)}
      >
        {todo.text}

        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(todo);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default TodoItem;
