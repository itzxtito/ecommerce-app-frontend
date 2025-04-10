import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function NotFound() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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
    </motion.section>
  );
}
