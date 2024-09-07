import { CardDescricacao } from "../CardDescricacao";

export function Search() {
  return (
    <section className="px-8 flex flex-col gap-6 items-center justify-center">
      <div className="flex gap-6 flex-wrap max-w-7xl">
        <div className="size-[384px] border border-red-950 bg-[url('../public/products/moletom-ai-side.png')] bg-cover bg-center bg-zinc-900">
          <CardDescricacao />
        </div>
        <div className="size-[384px] border border-red-950 bg-[url('../public/products/moletom-ia-p-devs.png')] bg-cover bg-center bg-zinc-900">
          <CardDescricacao />
        </div>
        <div className="size-[384px] border border-red-950 bg-[url('../public/products/moletom-java.png')] bg-cover bg-center bg-zinc-900">
          <CardDescricacao />
        </div>
        <div className="size-[384px] border border-red-950 bg-[url('../public/products/moletom-never-stop-learning.png')] bg-cover bg-center bg-zinc-900">
          <CardDescricacao />
        </div>
      </div>
    </section>
  );
}
