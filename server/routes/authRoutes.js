import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Username and password required" });

  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const match = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  // safe payload (don't include sensitive info)
  const token = jwt.sign({ role: "admin", username }, JWT_SECRET, {
    expiresIn: "4h",
  });

  res.json({ token });
});

export default router;
