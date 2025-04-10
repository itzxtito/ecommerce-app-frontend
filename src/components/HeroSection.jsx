import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function HeroSection() {
  return (
    <motion.div
      className="relative bg-cover bg-center bg-no-repeat min-h-[50vh] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/050/532/704/non_2x/a-store-with-many-electronic-devices-on-display-photo.jpg')",
      }}
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 text-white max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Discover. Shop. Enjoy.
        </h1>
        <p className="text-base md:text-lg mb-4 opacity-90">
          Hand-picked tech & lifestyle essentials. Quality gear for modern life.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition duration-200"
        >
          Start Shopping <FaArrowRight />
        </Link>
        <div className="mt-8 animate-bounce flex justify-center">
          <FaChevronDown className="text-white text-xl opacity-75" />
        </div>
      </div>
    </motion.div>
  );
}
