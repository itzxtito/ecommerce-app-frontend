export default function Home() {
    const products = [
      {
        id: 1,
        name: "Wireless Headphones",
        price: "$99.99",
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: 2,
        name: "Gaming Mouse",
        price: "$49.99",
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: 3,
        name: "Mechanical Keyboard",
        price: "$79.99",
        image: "https://via.placeholder.com/300x200",
      },
    ];
  
    return (
      <section className="px-6 py-20 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-purple-600 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  