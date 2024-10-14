import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';

const mockProducts: Product[] = [
  { id: 1, name: 'Smartphone', price: 599.99, category: 'Electronics', subcategory: 'Phones', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Laptop', price: 999.99, category: 'Electronics', subcategory: 'Computers', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Running Shoes', price: 89.99, category: 'Sports', subcategory: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Coffee Maker', price: 49.99, category: 'Home', subcategory: 'Appliances', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

interface ProductCatalogProps {
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ addToCart, addToWishlist }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? mockProducts.filter((product) => product.category === selectedCategory)
    : mockProducts;

  const categories = Array.from(new Set(mockProducts.map((product) => product.category)));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Catalog</h2>
      <div className="mb-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`mr-2 px-3 py-1 rounded ${
            selectedCategory === null ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mr-2 px-3 py-1 rounded ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
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
                onClick={() => addToWishlist(product)}
                className="bg-pink-500 text-white px-3 py-1 rounded flex items-center"
              >
                <Heart className="h-4 w-4 mr-1" /> Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;