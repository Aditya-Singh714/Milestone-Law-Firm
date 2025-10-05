import { useState } from "react";
import axios from "axios";

const AdminLoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://milestone-law-firm.onrender.com/api/auth/login",
        credentials
      );

      localStorage.setItem("token", res.data.token); // ✅ Save token
      onLogin(); // notify parent (BlogPage)
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Admin Login
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="w-full p-3 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="w-full p-3 border rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
