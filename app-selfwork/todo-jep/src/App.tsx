import { useState } from "react";
import "./App.css";
import { TodoCreate } from "./components/TodoCreate";
import { TodoList } from "./components/TodoList";
type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const createTodo = (title: string) => {
    const newTodo = { id: crypto.randomUUID(), title: title, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const changeTodo = (id: string, title: string, completed = false) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <main className="main">
      <h1>
        React Todo <span>Simplifique o seu dia, do jeito React!</span>
      </h1>
      <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
      <TodoCreate createTodo={createTodo} />
    </main>
  );
}

export default App;
