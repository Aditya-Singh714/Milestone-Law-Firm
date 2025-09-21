import { Scale, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items
  const navigation = [
    { id: "/", name: "Home" },
    { id: "/about", name: "About" },
    { id: "/contact", name: "Contact" },
    { id: "/blog", name: "Blog" }, // ✅ Added Blog
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <img src="/logo.png" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">MILESTONE</h1>
              <p className="text-sm text-gray-600">Law Firm</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`font-semibold transition-colors duration-300 hover:text-amber-600 ${
                  location.pathname === item.id
                    ? "text-amber-600"
                    : "text-slate-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-2 font-semibold transition-colors duration-300 hover:text-amber-600 ${
                  location.pathname === item.id
                    ? "text-amber-600"
                    : "text-slate-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
