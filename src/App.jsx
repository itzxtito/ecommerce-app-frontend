import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Products from './pages/Products';

<Route path="/products" element={<Products />} />

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}
