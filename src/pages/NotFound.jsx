import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
}
