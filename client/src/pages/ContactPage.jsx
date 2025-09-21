import { useEffect, useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    legalMatter: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setLoading(true);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.legalMatter ||
      !formData.message
    ) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      setStatus({ type: "success", message: res.data.message });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        legalMatter: "",
        message: "",
      });
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setStatus({
          type: "error",
          message: err.response.data.errors.map((e) => e.msg).join(", "),
        });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Try again!",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const practiceAreas = [
    "Corporate Law",
    "Criminal Defense",
    "Personal Injury",
    "Real Estate Law",
    "Family Law",
    "Immigration Law",
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Header */}
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
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-amber-50 hover:translate-x-1 transform transition-all duration-300 cursor-pointer">
                  <Phone className="text-amber-500 w-6 h-6" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-lg font-semibold text-slate-800">
                      +91 9557601233
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-amber-50 hover:translate-x-1 transform transition-all duration-300 cursor-pointer">
                  <Mail className="text-amber-500 w-6 h-6" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-semibold text-slate-800">
                      milestonelawfirminfo@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-amber-50 hover:translate-x-1 transform transition-all duration-300 cursor-pointer">
                  <MapPin className="text-amber-500 w-6 h-6" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-lg font-semibold text-slate-800">
                      Western Katchery Road, Meerut, UP 250001
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-amber-50 hover:translate-x-1 transform transition-all duration-300 cursor-pointer">
                  <Clock className="text-amber-500 w-6 h-6" />
                  <div>
                    <p className="text-sm text-gray-500">Office Hours</p>
                    <p className="text-lg font-semibold text-slate-800">
                      Mon - Fri: 9:00 AM - 6:00 PM
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

            {status.message && (
              <p
                className={`mb-4 p-3 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
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
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Legal Matter
                </label>
                <select
                  name="legalMatter"
                  value={formData.legalMatter}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                >
                  <option value="">Select Practice Area</option>
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300"
                  placeholder="Describe your legal matter..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg flex justify-center items-center gap-2 transform transition-all duration-300 hover:scale-105"
                disabled={loading}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
