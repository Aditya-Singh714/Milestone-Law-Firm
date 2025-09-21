import { useEffect, useState } from "react";
import { Scale, ChevronRight } from "lucide-react";

const practiceAreas = [
  "Corporate Law",
  "Criminal Defense",
  "Personal Injury",
  "Real Estate Law",
  "Family Law",
  "Immigration Law",
];

const HomePage = ({ onNavigate }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div
            className={`transition-all duration-1000 transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                MILESTONE
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Excellence in Legal Representation
              </p>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                With decades of combined experience, we deliver strategic legal
                solutions that protect your interests and achieve your goals.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Legal Consultation
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500 opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500 opacity-10 rounded-full animate-bounce"></div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Practice Areas
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services tailored to meet your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={area}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <Scale className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {area}
                </h3>
                <p className="text-gray-600">
                  Expert legal services in {area.toLowerCase()}, helping you
                  navigate complex challenges with confidence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
