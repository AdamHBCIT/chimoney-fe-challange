import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "@components/layout/Layout";
import CartPage from "@pages/cart";

const App = () => {

  /*
  const fetchData = await fetch("https://api.chimoney.io/v0.2/info/assets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Accept": "application/json",
    },
    body: JSON.stringify(newQuestion),
  });
  */

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CartPage />} />
      </Route>
    </Routes>
  )
}

export default App
