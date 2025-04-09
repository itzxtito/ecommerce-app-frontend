import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Tito’s Shop</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link to="/cart" className="hover:text-purple-400 transition">
            Cart
          </Link>
         
          <Link
            to="/products"
            className="transition duration-200 hover:text-purple-400 hover:scale-105"
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
