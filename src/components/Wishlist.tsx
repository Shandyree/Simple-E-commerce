import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Trash2 } from 'lucide-react';

interface WishlistProps {
  wishlist: Product[];
  removeFromWishlist: (productId: number) => void;
  addToCart: (product: Product) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlist, removeFromWishlist, addToCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => (
            <li key={product.id} className="bg-white p-4 rounded shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.category} - {product.subcategory}</p>
              <p className="text-blue-600 font-bold mt-2">${product.price.toFixed(2)}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-3 py-1 rounded flex items-center"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;