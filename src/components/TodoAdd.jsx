import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, taskdesc, onInputChange, onResetForm } = useForm({
    description: "",
    taskdesc: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      taskdesc: taskdesc,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input-add"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="¿Qué hay que hacer?"
      />

      <input
        type="text"
        className="input-desc"
        name="taskdesc"
        value={taskdesc}
        onChange={onInputChange}
        placeholder="Descripción de tarea"
      />

      <button className="btn-add" type="submit">
        +
      </button>
    </form>
  );
};
