import { Link, useNavigate } from "react-router-dom";
import foto from "../assets/foto1.png";
import { FormEvent } from "react";
import { useCart } from "../context/cartContext";

export function Header() {
  const navigate = useNavigate();
  const { items } = useCart();
  console.log(items);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    if (!data.search) {
      return null;
    }

    navigate(`/search?q=${data.search}`);
  };

  return (
    <header className="flex justify-between py-4 container mx-auto">
      <div className="flex items-center gap-3">
        <Link to={"/"}>
          <h2 className="text-xl">devstore</h2>
        </Link>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Buscar produtos"
            className="bg-[#18181B] px-3 py-1 text-lg font-light rounded-full w-96"
          />
        </form>
      </div>
      <ul className="flex gap-3 items-center">
        <li>Cart({items.length})</li>
        <li>|</li>
        <li className="flex gap-1 items-center">
          <span>Account</span>{" "}
          <img src={foto} className="size-6 cursor-pointer" />
        </li>
      </ul>
    </header>
  );
}
