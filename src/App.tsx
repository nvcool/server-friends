import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./components/Counter";
import { getTodo, getTodos } from "./lib/queries";
import { ITodo } from "./types/ITodo";
import "./App.css";

function App() {
  const [todo, setTodo] = useState<ITodo>();
  const [todosArray, setTodosArray] = useState<ITodo[]>();

  const handleGetTodo = async () => {
    const data = await getTodo(5);
    setTodo(data);
  };

  const handleGetTodos = async () => {
    const data = await getTodos();
    setTodosArray(data);
  };

  useEffect(() => {
    handleGetTodo();
    handleGetTodos();
  }, []);

  console.log(todo, todosArray);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
