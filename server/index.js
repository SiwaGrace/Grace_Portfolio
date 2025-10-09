import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendEmail } from "./emailController.js";

dotenv.config();

const app = express();

// ✅ CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://grace-portfolio-pink.vercel.app",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// This ensures preflight requests are handled
app.options("*", cors());
app.use(express.json());

// Confirm backend running
app.get("/", (req, res) => {
  res.send("✅ Portfolio backend (Resend version) is running smoothly!");
});

// Email route
app.post("/send-email", sendEmail);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
