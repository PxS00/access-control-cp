import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <div>
      {isHomePage && <Header />}
      <Outlet />
      {isHomePage && <Footer />}
    </div>
  );
}
