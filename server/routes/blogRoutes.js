import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // latest first
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create blog (POST route)
router.post("/", async (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  try {
    const blog = new Blog({ title, content, author });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update a blog
router.put("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a blog
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
