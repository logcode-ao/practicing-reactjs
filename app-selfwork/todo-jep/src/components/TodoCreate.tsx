import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  createTodo: (title: string) => void;
}

export function TodoCreate({ createTodo }: Props) {
  const [title, setTitle] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-create">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Informe uma tarefa"
        value={title}
        onChange={handleChange}
      />
    </form>
  );
}
