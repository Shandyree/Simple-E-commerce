import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import { Trash2 } from 'lucide-react';

interface ShoppingCartProps {
  cart: CartItem[];
  removeFromCart: (productId: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.product.id} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.product.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-blue-600 font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-6 w-6" />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Link
              to="/transaction"
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded inline-block hover:bg-green-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;