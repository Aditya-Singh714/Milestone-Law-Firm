import React, { useState, useEffect } from "react";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Users,
  Award,
  Clock,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const MilestoneLawFirm = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const practiceAreas = [
    "Corporate Law",
    "Criminal Defense",
    "Personal Injury",
    "Real Estate Law",
    "Family Law",
    "Immigration Law",
  ];

  const teamMembers = [
    {
      name: "Sarah Mitchell",
      title: "Managing Partner",
      experience: "15+ years",
      specialty: "Corporate & Commercial Law",
    },
    {
      name: "Michael Chen",
      title: "Senior Partner",
      experience: "12+ years",
      specialty: "Criminal Defense & Litigation",
    },
    {
      name: "Emily Rodriguez",
      title: "Partner",
      experience: "10+ years",
      specialty: "Personal Injury & Medical Malpractice",
    },
  ];

  const HomePage = () => (
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
                onClick={() => setCurrentPage("contact")}
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
                <p className="text-gray-600 leading-relaxed">
                  Expert legal representation with a track record of successful
                  outcomes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-lg text-gray-300">Cases Won</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-lg text-gray-300">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-lg text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Mission & Vision */}
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

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Meet Our Team
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Experienced attorneys dedicated to your success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold text-center mb-2">
                  {member.title}
                </p>
                <p className="text-sm text-gray-500 text-center mb-4">
                  {member.experience}
                </p>
                <p className="text-gray-600 text-center text-sm">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Get in touch with our experienced
            team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@milestonelaw.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      123 Legal District
                      <br />
                      Downtown, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Send Us a Message
            </h3>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Legal Matter
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300">
                  <option>Select Practice Area</option>
                  {practiceAreas.map((area) => (
                    <option key={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="Describe your legal matter..."
                ></textarea>
              </div>

              <button
                onClick={() =>
                  alert("Thank you for your message! We will contact you soon.")
                }
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">MILESTONE</h1>
                <p className="text-sm text-gray-600">Law Firm</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`font-semibold transition-colors duration-300 hover:text-amber-600 ${
                    currentPage === item.id
                      ? "text-amber-600"
                      : "text-slate-700"
                  }`}
                >
                  {item.name}
                </button>
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
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 font-semibold transition-colors duration-300 hover:text-amber-600 ${
                    currentPage === item.id
                      ? "text-amber-600"
                      : "text-slate-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <div className="transition-all duration-500">
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "contact" && <ContactPage />}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold">MILESTONE Law Firm</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Excellence in legal representation with integrity and
                dedication.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className="block text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>+1 (555) 123-4567</p>
                <p>info@milestonelaw.com</p>
                <p>
                  123 Legal District
                  <br />
                  Downtown, NY 10001
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Milestone Law Firm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MilestoneLawFirm;
