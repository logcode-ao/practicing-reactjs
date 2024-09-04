export default function HeaderMenu() {
  return (
    <nav className="flex justify-between mt-3 mb-8 items-center">
      <h1 className="font-semibold text-2xl cursor-pointer ">My Web App</h1>
      <ul className="flex gap-3 font-medium cursor-pointer text-lg">
        <li className=" hover:underline ">Home</li>
        <li className="hover:underline ">About</li>
        <li className="hover:underline ">Contact</li>
      </ul>
    </nav>
  );
}
