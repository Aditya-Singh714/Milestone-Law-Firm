// src/pages/PublicBlogPage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PublicBlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://milestone-law-firm.onrender.com/api/blogs")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">Our Blog</h1>
          {/* 👇 Admin Login Shortcut */}
          <Link
            to="/admin/blog"
            className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
          >
            Admin Login
          </Link>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white p-6 rounded-xl shadow border"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-2">{post.content}</p>
              <p className="text-sm text-gray-500">✍️ {post.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicBlogPage;
