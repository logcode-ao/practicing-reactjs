import { Link } from "react-router-dom";
import data from "../data/data.json";
import moletom1 from "../assets/moletom02up.png";
import moletom2 from "../assets/moletom03down.png";

export function Home() {
  const { products } = data;

  return (
    <div className="flex px-4 mt-7 gap-6 ">
      <section className="bg-[#18181B] p-3 flex-1 ">
        {products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <Link to={`/add-to-card/${product.id}`}>Detalhes</Link>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-6">
        <aside className="bg-[#18181B] h-80 overflow-hidden">
          <img src={moletom1} className="cursor-pointer" />
        </aside>
        <aside className="bg-[#18181B] h-80 overflow-hidden">
          <img src={moletom2} className="cursor-pointer" />
        </aside>
      </section>
    </div>
  );
}
