import TodoInput from "./components/TodoInput";
import { useState } from "react";
import TodoList from "./components/TodoList";
function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputVal = (e) => {
    setInput(e.target.value);
  };

  const handelComplted = (t) => {
    const updatedTodo = todos.map((todo) => {
      if (todo === t) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodo);
  };

  const handleTodos = () => {
    const todoObj = {
      id: todos.length,
      text: input,
      completed: false,
    };

    if (input.trim()) {
      setTodos([...todos, todoObj]);
      setInput("");
    }
  };

  const handleDelete = (todo) => {
    const filteredTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <TodoInput
        input={input}
        handleInputVal={handleInputVal}
        handleTodos={handleTodos}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handelComplted={handelComplted}
      />
    </div>
  );
}

export default TodoApp;
