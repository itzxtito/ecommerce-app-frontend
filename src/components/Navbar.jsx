import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Tito’s Shop</h1>
        <div className="space-x-6 text-sm md:text-base flex items-center">
          <Link to="/" className="transition hover:text-purple-400">
            Home
          </Link>
          <Link
            to="/products"
            className="transition hover:text-purple-400 hover:scale-105"
          >
            Products
          </Link>
          <Link to="/cart" className="relative transition hover:text-purple-400">
            Cart
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
