import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

interface InputSearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function InputSearch({ setSearch }: InputSearchProps) {
  const [valueInput, setValueInput] = useState();

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!valueInput) return;
    setSearch(() => valueInput);
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="border border-zinc-400 h-12 max-w-xl rounded-full mx-auto mt-8 flex items-center"
    >
      <input
        value={valueInput}
        type="text"
        className="h-8 flex-1 bg-transparent px-4 outline-none"
        onChange={(event) => setValueInput(event.currentTarget.value)}
      />
      <button className="h-12 px-4">
        <Search className="size-5 mx-auto" />
      </button>
    </form>
  );
}
