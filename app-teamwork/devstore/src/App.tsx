import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Search } from "./pages/search";
import AddToCartPage from "./pages/add-to-cart-page";
import { LayoutRoot } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutRoot />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/add-to-card/:id" element={<AddToCartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
