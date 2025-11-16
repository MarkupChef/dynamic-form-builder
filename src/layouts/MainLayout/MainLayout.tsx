import Navigation from "@/layouts/Navigation";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2025</footer>
    </div>
  );
};

export default MainLayout;
