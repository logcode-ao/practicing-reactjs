import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

interface HeaderProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({ setSearch }: HeaderProps) {
  const [value, setValue] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      return null;
    }

    setSearch(() => value);
  };
  return (
    <header>
      <form
        onSubmit={handleSearch}
        className="flex w-[320px] mx-auto items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
      >
        <Search className="text-zinc-500" />
        <input
          name="text"
          type="search"
          placeholder="Pesquise"
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          required
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value}
        />
      </form>
    </header>
  );
}
