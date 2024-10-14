import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">E-Shop</Link>
        <form onSubmit={handleSearch} className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 rounded-full text-gray-800"
            />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </form>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/cart" className="flex items-center">
                <ShoppingCart className="h-6 w-6 mr-1" />
                Cart
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="flex items-center">
                <Heart className="h-6 w-6 mr-1" />
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/account" className="flex items-center">
                <User className="h-6 w-6 mr-1" />
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;