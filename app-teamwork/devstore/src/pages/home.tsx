import { Link } from "react-router-dom";
import data from "../data/data.json";
import moletom1 from "../assets/moletom1.png";
import foto from "../assets/foto1.png";

export function Home() {
  const { products } = data;

  return (
    <main className="min-h-[100vh] text-white pt-8 pb-8 pr-10 pl-10 text bg-[#09090B]">
      <div>
        <header className="flex gap-3">
          <h2 className="text-xl">devstore</h2>
          <input type="text" placeholder="Buscar produtos" />
          <ul className="flex gap-3">
            <li>Cart(3)</li>
            <li className="flex gap-1">
              <span>Account</span> <img src={foto} />
            </li>
          </ul>
        </header>
        {products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <Link to={`/add-to-card/${product.id}`}>Detalhes</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
