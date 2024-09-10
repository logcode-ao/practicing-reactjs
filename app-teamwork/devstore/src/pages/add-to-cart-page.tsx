import { useParams } from "react-router-dom";
import { products } from "../data/data.json";
import { Tamanhos } from "../components/Tamanhos";
export default function AddToCartPage() {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Produto não econtrado</div>;
  }

  return (
    <>
      <main className="text-white bg-black">
        <div className="relative grid max-h-screen overflow-hidden grid-cols-3">
          <figure className="col-span-2 overflow-hidden ">
            <img
              src={product.image}
              alt="casacos"
              className="w-full object-cover"
            />
          </figure>
          <div className="flex flex-col space-y-4 mt-20 mr-5">
            <h1 className="text-4xl font-bold"> {product.title}</h1>
            <div>
              <p className="text-inherit mb-8 font-thin">{product.description}</p>
              <p className="font-thin">
                <span className="rounded-3xl w-20 h-10 bg-purple-600 text-center p-2 mr-5 hover:cursor-pointer font-bold">
                  R${product.price}
                </span>
                Em 12x s/ juros de R$ 8,25
              </p>
              <h3 className="mt-6 font-bold mb-4">Tamanhos</h3>
              <Tamanhos />
              <button className="rounded-3xl w-[350px] h-10 bg-green-500 text-center p-2 mr-5 hover:cursor-pointer">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
