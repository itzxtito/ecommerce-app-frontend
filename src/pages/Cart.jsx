import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-gray-50"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className="text-3xl font-bold text-center mb-10">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-24 h-24 object-cover rounded"
                />

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-purple-600 font-bold">${item.price}</p>

                  <div className="flex justify-center sm:justify-start items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      className="bg-gray-200 px-2 rounded text-lg"
                    >
                      −
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item._id)}
                      className="bg-gray-200 px-2 rounded text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 text-right">
            <p className="text-xl font-bold">
              Total: <span className="text-purple-700">${total}</span>
            </p>
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </motion.section>
  );
}
