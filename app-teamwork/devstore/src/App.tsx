import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Search } from "./pages/search";
import AddToCartPage from "./pages/add-to-cart-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "add-to-card/:id",
    element: <AddToCartPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
