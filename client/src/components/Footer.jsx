import { Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigation = [
    { id: "/", name: "Home" },
    { id: "/about", name: "About" },
    { id: "/contact", name: "Contact" },
    { id: "/blog", name: "Blog" }, // ✅ Added Blog
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold">MILESTONE Law Firm</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Excellence in legal representation with integrity and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  className="block text-gray-400 hover:text-amber-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>+91 9557601233</p>
              <p>milestonelawfirminfo@gmail.com</p>
              <p>
                Western Katchery Road,
                <br />
                Meerut, Uttar Pradesh 250001
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Milestone Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
