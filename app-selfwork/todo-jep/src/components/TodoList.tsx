import { TodoShow } from "./TodoShow";

interface Props {
  todos: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  removeTodo: (id: string) => void;
  changeTodo: (id: string, title: string, completed?: boolean) => void;
}

export function TodoList({ changeTodo, removeTodo, todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoShow
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          changeTodo={changeTodo}
        />
      ))}
    </ul>
  );
}
