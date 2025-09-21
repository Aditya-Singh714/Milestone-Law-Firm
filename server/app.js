import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(
  cors({
    origin: "https://milestone-law-firm.vercel.app", // include https://
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if you need cookies or auth headers
  })
);

app.use(express.json());

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
