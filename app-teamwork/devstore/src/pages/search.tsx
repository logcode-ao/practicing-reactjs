import { CardDescricacao } from "../CardDescricacao";
import data from "../data/data.json";

export function Search() {
  const { products } = data;

  return (
    <section className="px-8 flex items-center justify-center">
      <div className="py-4 grid grid-cols-3 gap-6 max-w-7xl">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex justify-center items-end size-[384px] bg-zinc-900"
            >
              <figure className="col-span-2 overflow-hidden ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full object-cover border border-red-100"
                />
              </figure>
              <CardDescricacao name={product.title} price={product.price} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
