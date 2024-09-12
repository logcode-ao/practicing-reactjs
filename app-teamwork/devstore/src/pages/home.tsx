import { Link } from "react-router-dom";
import data from "../data/data.json";
import moletom1 from "../assets/moletom02up.png";
import moletom2 from "../assets/moletom03down.png";
import foto from "../assets/foto1.png";

export function Home() {
  const { products } = data;

  return (
    <div className="min-h-[100vh] text-white pt-8 pb-8 pr-10 pl-10 text bg-[#09090B]">
      <header className="flex justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl">devstore</h2>
          <input
            type="text"
            placeholder="Buscar produtos"
            className="bg-[#18181B] px-3 py-1 text-lg font-light rounded-full w-96"
          />
        </div>
        <ul className="flex gap-3 items-center">
          <li>Cart(3)</li>
          <li>|</li>
          <li className="flex gap-1 items-center">
            <span>Account</span>{" "}
            <img src={foto} className="size-6 cursor-pointer" />
          </li>
        </ul>
      </header>
      <main className="flex px-4 mt-7 gap-6 ">
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
      </main>
    </div>
  );
}
