import { ChangeEvent, FormEvent, useState } from "react";
import { Check } from "lucide-react";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form className="todo-edit" onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit">
        <Check />
      </button>
    </form>
  );
}
