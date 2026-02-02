import Todoform from "./Components/Todoform";
import Todos from "./Components/Todos";
import { useState } from "react";
import "./index.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  function tickBox(id) {
    // const newTodos = [];
    // for (let todo of todos) {
    //   if (todo.id === id) {
    //     newTodos.push({ ...todo, completed: !todo.completed });
    //   } else {
    //     newTodos.push(todo);
    //   }
    // }
    // setTodos(newTodos);
    setTodos((prevState) => {
      return prevState.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    // const newTodos = [];
    // for (let todo of todos) {
    //   if (todo.id !== id) {
    //     newTodos.push(todo);
    //   }
    // }
    // setTodos(newTodos);
  }

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List Application</h1>
      <Todoform addTodo={addTodo} />
      <Todos todos={todos} tickBox={tickBox} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
