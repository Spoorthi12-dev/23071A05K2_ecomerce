import React from "react";

const products = [
  { id: 1, name: "Sneakers", price: 49.99, image: "/sneakers.jpg" },
  { id: 2, name: "Smart Watch", price: 89.99, image: "/watch.jpg" },
];

export default function Home({ addToCart }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-xl shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="text-lg mt-2">{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
