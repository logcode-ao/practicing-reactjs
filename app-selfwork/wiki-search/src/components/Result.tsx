import { Resultype } from "../data/types";

export function Result({ snippet, title }: Resultype) {
  return (
    <article className="">
      <h4 className="text-2xl">{title}</h4>
      <p className="text-zinc-400">{snippet}</p>
    </article>
  );
}
