import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "@components/layout/Layout";
import CartPage from "@pages/cart";
import ProductsPage from "@pages/products";
import ProductDetailPage from "@pages/productDetail";
import CheckoutPage from "@pages/checkout";
import NotFoundPage from "@pages/notFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Route>
    </Routes>
  )
}
export default App
