import { useEffect, useState } from "react";
import { Award, Users } from "lucide-react";

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const educationDetails = [
    { degree: "B.Com", field: "Commerce" },
    { degree: "MA", field: "Economics" },
    { degree: "LLB", field: "Law" },
    { degree: "Diploma", field: "Cyber Crime" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            About Milestone Law Firm
          </h1>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded on the principles of integrity, excellence, and unwavering
            dedication to our clients, Milestone Law Firm has been a cornerstone
            of legal excellence for over two decades.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional legal services while building lasting
              relationships based on trust, transparency, and results. We are
              committed to protecting our clients' rights and interests with the
              highest level of professionalism.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, excellence, and client-focused service form the
              foundation of our practice. We believe in clear communication,
              strategic thinking, and delivering results that exceed
              expectations.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Founder</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Meet the visionary behind Milestone Law Firm
            </p>
          </div>

          <div
            className={`max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col items-center">
              <img
                src="/founder.jpeg" // replace with your founder's photo path
                alt="Adv Bhavesh Beniwal"
                className="w-40 h-40 rounded-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Adv Bhavesh Beniwal
              </h3>
              <p className="text-gray-600 text-center mb-2">
                Founder & Lead Attorney
              </p>
              <p className="text-gray-600 text-center text-sm">
                5+ years of practice specializing in legal advisory, corporate
                law, and client representation. Committed to upholding justice
                and providing top-notch legal services.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Educational Qualifications
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Credentials that reflect our expertise and dedication
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {educationDetails.map((edu, index) => (
              <div
                key={edu.degree}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {edu.degree[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 text-center text-sm">{edu.field}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
