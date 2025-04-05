import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd send to backend here
    navigate('/success');
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Checkout</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow p-6 rounded space-y-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Shipping Address"
          className="w-full border px-4 py-2 rounded"
          required
        />

        <div className="text-right font-bold text-xl mt-4">
          Total: <span className="text-purple-700">${total}</span>
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Place Order
        </button>
      </form>
    </section>
  );
}
