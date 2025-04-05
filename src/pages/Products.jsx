import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow rounded-lg p-4">
            <img
              src={product.image || 'https://placehold.co/300x200?text=No+Image'}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-purple-600 font-bold">${product.price}</p>
            <Link
              to={`/product/${product._id}`}
              className="inline-block mt-4 text-sm bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
