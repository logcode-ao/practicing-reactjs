import { useState } from "react";
import { TodoEdit } from "./TodoEdit";
import { Trash, Pencil } from "lucide-react";
interface Props {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
  removeTodo: (id: string) => void;
  changeTodo: (id: string, title: string, completed?: boolean) => void;
}

export function TodoShow({ changeTodo, removeTodo, todo }: Props) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleDoubleClick = () => {
    changeTodo(todo.id, todo.title, !todo.completed);
  };

  const handleSubmit = (id: string, title: string) => {
    changeTodo(id, title);
    setShowEdit(false);
  };

  if (showEdit) {
    return (
      <li className="todo">
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    );
  }
  return (
    <li className="todo" onDoubleClick={handleDoubleClick}>
      <p className={todo.completed ? "completed" : ""}>{todo.title}</p>

      <div className="actions">
        <button className="detele" onClick={handleDelete}>
          <Trash />
        </button>
        <button onClick={handleEdit}>
          <Pencil />
        </button>
      </div>
    </li>
  );
}
