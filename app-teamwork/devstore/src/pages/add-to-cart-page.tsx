import { Link, useParams } from "react-router-dom";
import { products } from "../data/data.json";

export default function AddToCartPage() {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Produto não econtrado</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>

      <img src={product.image} alt="alg" />

      <br />
      <Link to={"/"}>Voltar a Home</Link>
    </div>
  );
}
