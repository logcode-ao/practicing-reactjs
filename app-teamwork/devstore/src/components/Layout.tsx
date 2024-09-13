import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function LayoutRoot() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
}
