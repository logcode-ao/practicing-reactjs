import { CardDescricacao } from "../CardDescricacao";
import data from "../data/data.json";

export function Search() {
  const { products } = data;

  return (
    <section className="px-8 items-center justify-center">
      <div className="py-4 grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex justify-center items-end size-[384px] border border-red-950 bg-zinc-900"
            >
              <img src={product.image} alt="Imagem dos altigos" />
              <CardDescricacao name={product.title} price={product.price} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
