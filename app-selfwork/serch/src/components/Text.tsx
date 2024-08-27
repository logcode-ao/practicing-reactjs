interface TextResultProps {
  title: string;
  snippet: string;
}

export function TextResult({ title, snippet }: TextResultProps) {
  return (
    <div>
      <h2 className="border border-zinc-800 border-t-0 border-r-0 border-l-0 py-2 font-bold">
        {title}
      </h2>
      <p className=" py-2 hover:bg-zinc-800 cursor-pointer px-2 mt-2">
        {snippet}
      </p>
    </div>
  );
}
