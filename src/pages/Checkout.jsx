import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd send this data to your backend here
    navigate('/success');
  };

  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-gray-50"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Checkout</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="address">
            Shipping Address
          </label>
          <input
            id="address"
            type="text"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="text-right text-lg font-bold">
          Total: <span className="text-purple-700">${total}</span>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
        >
          Place Order
        </button>
      </form>
    </motion.section>
  );
}
