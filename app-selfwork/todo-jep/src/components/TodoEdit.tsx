import { useState } from "react";

interface Props {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
  onSubmit: (id: string, title: string) => void;
}

export function TodoEdit({ onSubmit, todo }: Props) {
  const [title, setTitle] = useState(todo.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form className="todo-edit">
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        <img src={CheckIcon} title="Save" />
      </button>
    </form>
  );
}
