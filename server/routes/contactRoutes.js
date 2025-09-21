import express from "express";
import { body, validationResult } from "express-validator";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/contact
router.post(
  "/",
  [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("legalMatter").notEmpty().withMessage("Please select a legal matter"), // match frontend
    body("message").notEmpty().withMessage("Message cannot be empty"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, legalMatter, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Legal Matter:</strong> ${legalMatter}</p>
          <p><strong>Message:</strong><br/> ${message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Server error. Email not sent." });
    }
  }
);

export default router;
