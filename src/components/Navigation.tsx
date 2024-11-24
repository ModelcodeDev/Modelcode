import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-semibold text-lg">
              Modelcode
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 text-sm">
                {t.navigation.home}
              </Link>
              <Link to="/portfolio" className="text-white hover:text-gray-300 px-3 py-2 text-sm">
                {t.navigation.portfolio}
              </Link>
              <Link to="/contact" className="text-white hover:text-gray-300 px-3 py-2 text-sm">
                {t.navigation.contact}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-black/90 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="text-white hover:text-gray-300 block px-3 py-2 text-sm"
                onClick={toggleMenu}
              >
                {t.navigation.home}
              </Link>
              <Link
                to="/portfolio"
                className="text-white hover:text-gray-300 block px-3 py-2 text-sm"
                onClick={toggleMenu}
              >
                {t.navigation.portfolio}
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 block px-3 py-2 text-sm"
                onClick={toggleMenu}
              >
                {t.navigation.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;