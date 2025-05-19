import React from "react";

export default function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, i) => (
            <li key={i} className="mb-4">
              <div className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(i)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 font-semibold">Total: ${total.toFixed(2)}</p>
    </div>
  );
}
