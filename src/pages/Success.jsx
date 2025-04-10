import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function Success() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-white"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold text-green-600 mb-4">✅ Order Placed!</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Thank you for your purchase! A confirmation email will be sent to you shortly. 
          We appreciate your business and hope you enjoy your order!
        </p>
        <Link
          to="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition text-sm font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </motion.section>
  );
}
