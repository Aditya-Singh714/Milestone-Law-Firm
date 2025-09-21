// src/pages/ThankYouPage.jsx
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: redirect back to home after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-12 rounded-xl shadow-lg text-center">
        <CheckCircle className="w-16 h-16 text-amber-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your message has been successfully submitted. We will get back to you
          soon.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
