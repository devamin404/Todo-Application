import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function Todoform({ addTodo }) {
  const [title, SetTitle] = useState("");
  function handleTask(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Please fill your input!", {
        autoClose: 1000,
      });
      return;
    }
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    SetTitle("");
  }

  return (
    <form onSubmit={handleTask} className="todoForm">
      <input
        type="text"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
        className="todoForm__input"
      />
      <button type="submit" className="todoForm__btn">
        Add Task
      </button>
    </form>
  );
}

export default Todoform;
