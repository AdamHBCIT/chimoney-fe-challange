import { Outlet } from "react-router-dom";
import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";

const Layout = () => {
  return (
    <>
      <main className="container mt-10 border border-zinc-300">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
