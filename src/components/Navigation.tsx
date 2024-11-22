import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-semibold text-xl">
              Modelcode
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-gray-300 px-3 py-2">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2">
                About
              </Link>
              <Link to="/portfolio" className="text-white hover:text-gray-300 px-3 py-2">
                Portfolio
              </Link>
              <Link to="/contact" className="text-white hover:text-gray-300 px-3 py-2">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-white hover:text-gray-300 block px-3 py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 block px-3 py-2"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="text-white hover:text-gray-300 block px-3 py-2"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 block px-3 py-2"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;