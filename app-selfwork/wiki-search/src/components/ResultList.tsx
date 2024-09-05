import { Resultype } from "../data/types";
import { Result } from "./Result";

interface ResultListProps {
  data: Resultype[];
}

export function ResultList({ data }: ResultListProps) {
  return (
    <section className="space-y-8 border-t border-zinc-500 py-5 mt-5">
      <h3 className="font-semibold text-xl">API Data</h3>
      {data.map((result) => (
        <Result
          key={result.title}
          snippet={result.snippet}
          title={result.title}
        />
      ))}
    </section>
  );
}
