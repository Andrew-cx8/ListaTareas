import React from "react";
import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from "./TodoUpdate";

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label
          className={`container-done ${todo.done ? "active" : ""}`}
        ></label>
      </span>
      <div className="descripcion-tarea">
        <p>{todo.taskdesc}</p>
      </div>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />

      <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
        <FaTrash />
      </button>
    </li>
  );
};
