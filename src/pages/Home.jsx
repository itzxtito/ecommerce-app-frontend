import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-gray-50"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
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

              <Link
                to={`/product/${product._id}`}
                className="inline-block mt-4 text-sm bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
