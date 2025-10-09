import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://grace-portfolio-pink.vercel.app",
    ],
  })
);
// ({ origin: ["http://localhost:5173", "https://yourdomain.com"] });
app.use(express.json());

// ====== confirm backend is working ======
app.get("/", (req, res) => {
  res.send("✅ Portfolio backend is running smoothly!");
});
// ====== ROUTE TO SEND EMAIL ======
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Email to you
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // 2️⃣ Auto-reply to user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for reaching out! 🙌",
      text: `Hi ${
        name || "there"
      },\n\nThanks for contacting me through my portfolio! I'll get back to you as soon as possible.\n\nBest,\nGrace Djobokou 💫`,
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({
      success: true,
      message: "Email sent and auto-reply delivered!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email or auto-reply.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
