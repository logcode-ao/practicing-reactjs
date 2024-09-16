import { useSearchParams } from "react-router-dom";
import { CardDescricacao } from "../components/CardDescricacao";
import data from "../data/data.json";

export function Search() {
  const { products } = data;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const filter = products.filter((product) =>
    product.title.toLowerCase().includes((query ?? "").toLowerCase())
  );

  return (
    <section className="px-8 flex items-center justify-center">
      <div className="py-4 grid grid-cols-3 gap-6 max-w-7xl">
        {filter.map((product) => {
          return (
            <div
              key={product.id}
              className="flex justify-center items-end size-[384px] bg-zinc-900"
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
