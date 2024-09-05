import { Link } from "react-router-dom";
import data from "../data/data.json";

export function Home() {
  const { products } = data;

  return (
    <div>
      <h1 className="text-5xl">Home</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <Link to={`/add-to-card/${product.id}`}>Detalhes</Link>
        </div>
      ))}
    </div>
  );
}
