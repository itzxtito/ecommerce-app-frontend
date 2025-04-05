import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <section className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-green-600 mb-4">✅ Order Placed!</h2>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for your purchase. You’ll receive a confirmation email shortly.
      </p>
      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
