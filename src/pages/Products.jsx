import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFiltered(data);
      const unique = ['All', ...new Set(data.map((p) => p.category))];
      setCategories(unique);
    };
    getProducts();
  }, []);

  const handleFilter = (cat) => {
    setCategory(cat);
    filterProducts(cat, searchTerm);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProducts(category, term);
  };

  const filterProducts = (cat, term) => {
    let result = products;

    if (cat !== 'All') {
      result = result.filter((p) => p.category === cat);
    }

    if (term.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFiltered(result);
  };

  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-gray-50"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="text-3xl font-bold text-center mb-10">All Products</h2>

      {/* Sticky Filter + Search */}
      <div className="sticky top-16 z-10 bg-gray-50 py-4 mb-10 shadow-sm">
        <div className="max-w-5xl mx-auto space-y-4 text-center">
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  category === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-purple-600 border-purple-600'
                } hover:bg-purple-600 hover:text-white transition`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded focus:outline-none"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((product) => (
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
    </motion.section>
  );
}
