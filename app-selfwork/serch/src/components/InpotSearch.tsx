import { Search } from "lucide-react";

export function InputSearch() {
  return (
    <div className="border border-zinc-400 h-12 max-w-xl rounded-full mx-auto mt-8 flex items-center">
      <input
        type="text"
        className="h-8 flex-1 bg-transparent px-4 outline-none"
      />
      <button className="h-12 px-4">
        <Search className="size-5 mx-auto" />
      </button>
    </div>
  );
}
