import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/public/logo.svg" alt="Logo" className='size-10' />
            <span className="font-bold text-amber-900 text-2xl">Atlas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-10'>
          <Link to="/" className="text-gray-700 hover:text-amber-800 transition-colors">
              Accueil
            </Link>
            <Link to="/maps" className="text-gray-700 hover:text-amber-800 transition-colors">
              Carte
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
          
            <Link to="/" className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors">
              Connexion
            </Link>
            <Link to="/" className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors">
              Inscription
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:bg-amber-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/maps"
                className="block px-3 py-2 text-gray-700 hover:bg-amber-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Carte
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Connexion
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Inscription
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;