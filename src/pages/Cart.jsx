import { Link } from 'react-router-dom'; // at the top
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow p-4 rounded flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-purple-600 font-bold">${item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item._id)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="text-right mt-10 text-xl font-bold max-w-4xl mx-auto">
            Total: <span className="text-purple-700">${total}</span>
          </div>

          {/* Checkout Button */}
          <div className="text-right max-w-4xl mx-auto mt-4">
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
