import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(true);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return (
      <motion.section
        className="min-h-screen flex items-center justify-center text-center px-6"
        variants={fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div>
          <h2 className="text-3xl font-bold text-red-600 mb-2">Product Not Found</h2>
          <p className="text-gray-600">We couldn’t find the product you’re looking for.</p>
        </div>
      </motion.section>
    );
  }

  if (!product)
    return (
      <motion.div
        className="text-center py-20"
        variants={fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Loading...
      </motion.div>
    );

  return (
    <motion.section
      className="min-h-screen px-6 py-20"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <img
          src={product.image || 'https://placehold.co/600x300?text=No+Image'}
          alt={product.name}
          className="w-full h-60 object-cover rounded mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-purple-600 text-xl font-semibold mb-2">${product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
        <p className={`mt-2 font-bold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.section>
  );
}
