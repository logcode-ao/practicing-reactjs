import { Resultype } from "../data/types";
import { stripHTMLTags } from "../utils";

export function Result({ snippet, title }: Resultype) {
  return (
    <article>
      <h4 className="text-2xl">{title}</h4>
      <p className="text-zinc-400 line-clamp-3">{stripHTMLTags(snippet)}</p>
    </article>
  );
}
