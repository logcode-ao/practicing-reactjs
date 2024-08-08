import { useState } from "react";
import { TodoEdit } from "./TodoEdit";

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

  const handleDelete = (e) => {
    removeTodo(todo.id);
  };

  const handleEdit = (e) => {
    setShowEdit(true);
  };

  const handleDoubleClick = (e) => {
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
        <button onClick={handleDelete}>
          <img src={DeleteIcon} title="Delete" />
        </button>
        <button onClick={handleEdit}>
          <img src={EditIcon} title="Edit" />
        </button>
      </div>
    </li>
  );
}
