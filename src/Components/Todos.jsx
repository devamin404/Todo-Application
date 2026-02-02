import Todo from "./Todo";

function Todos({ todos, tickBox, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          tickBox={tickBox}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
