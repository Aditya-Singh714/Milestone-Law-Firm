import { useState, useEffect } from "react";
import axios from "axios";
import AdminLoginPage from "./AdminLoginPage";

const BlogAdminPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [editingPost, setEditingPost] = useState(null);
  const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem("token"));

  // ✅ Fetch posts from backend
  useEffect(() => {
    axios
      .get("https://milestone-law-firm.onrender.com/api/blogs")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  // ✅ Add Post
  const handleAddPost = async () => {
    if (!newPost.title || !newPost.content || !newPost.author) return;

    try {
      const res = await axios.post(
        "https://milestone-law-firm.onrender.com/api/blogs",
        newPost,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setPosts([res.data, ...posts]);
      setNewPost({ title: "", content: "", author: "" });
    } catch (err) {
      console.error("Error creating blog:", err.response?.data);
    }
  };

  // ✅ Delete Post
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://milestone-law-firm.onrender.com/api/blogs/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setPosts(posts.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  // ✅ Edit Post
  const handleSaveEdit = async () => {
    try {
      const res = await axios.put(
        `https://milestone-law-firm.onrender.com/api/blogs/${editingPost._id}`,
        editingPost,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setPosts(posts.map((p) => (p._id === editingPost._id ? res.data : p)));
      setEditingPost(null);
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAdmin(false);
  };

  // ✅ If not logged in → show login page
  if (!isAdmin) {
    return <AdminLoginPage onLogin={() => setIsAdmin(true)} />;
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">Blog</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Logout
          </button>
        </div>

        {/* Add New Post */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="w-full p-3 border rounded mb-4"
          />
          <textarea
            placeholder="Content"
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
            className="w-full p-3 border rounded mb-4"
            rows="4"
          />
          <input
            type="text"
            placeholder="Author"
            value={newPost.author}
            onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
            className="w-full p-3 border rounded mb-4"
          />
          <button
            onClick={handleAddPost}
            className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
          >
            Add Post
          </button>
        </div>

        {/* All Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white p-6 rounded-xl shadow border"
            >
              {editingPost?._id === post._id ? (
                <>
                  <input
                    type="text"
                    value={editingPost.title}
                    onChange={(e) =>
                      setEditingPost({ ...editingPost, title: e.target.value })
                    }
                    className="w-full p-3 border rounded mb-4"
                  />
                  <textarea
                    value={editingPost.content}
                    onChange={(e) =>
                      setEditingPost({
                        ...editingPost,
                        content: e.target.value,
                      })
                    }
                    className="w-full p-3 border rounded mb-4"
                    rows="4"
                  />
                  <input
                    type="text"
                    value={editingPost.author}
                    onChange={(e) =>
                      setEditingPost({ ...editingPost, author: e.target.value })
                    }
                    className="w-full p-3 border rounded mb-4"
                  />
                  <button
                    onClick={handleSaveEdit}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingPost(null)}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{post.content}</p>
                  <p className="text-sm text-gray-500 mb-4">✍️ {post.author}</p>
                  <button
                    onClick={() => setEditingPost(post)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAdminPage;
