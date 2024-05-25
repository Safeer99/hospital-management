import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

function MainLayout() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
