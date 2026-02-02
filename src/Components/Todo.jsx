import { ImCross } from "react-icons/im";

function Todo({ title, id, completed, tickBox, deleteTodo }) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            tickBox(id);
          }}
        />
        <p className={completed ? "completed" : ""}>{title}</p>
      </div>
      <div onClick={() => deleteTodo(id)} className="cross-btn">
        <ImCross />
      </div>
    </div>
  );
}

export default Todo;
