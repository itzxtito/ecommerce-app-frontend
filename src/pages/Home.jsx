import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import { useCart } from '../context/CartContext';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // 🛒 useCart hook

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <motion.section
      className="min-h-screen bg-gray-50"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />

      {/* Featured Products */}
      <div className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.slice(0, 6).map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden group"
            >
              <img
                src={product.image || 'https://placehold.co/300x200?text=No+Image'}
                alt={product.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                <p className="text-purple-600 font-bold text-lg">${product.price}</p>

                <div className="mt-4 flex justify-between items-center">
                  <Link
                    to={`/product/${product._id}`}
                    className="text-sm font-medium text-purple-600 hover:underline"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-xs bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
