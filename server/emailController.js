import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1️⃣ Email to you (Grace)
    await resend.emails.send({
      from: "onboarding@resend.dev", // official Resend sender
      to: process.env.EMAIL_RECEIVER,
      subject: `Portfolio Contact from ${name || "Anonymous"}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // 2️⃣ Auto-reply to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thanks for reaching out! 🙌",
      text: `Hi ${
        name || "there"
      },\n\nThanks for contacting me through my portfolio! I'll get back to you as soon as possible.\n\nBest,\nGrace Djobokou 💫`,
    });

    res
      .status(200)
      .json({ success: true, message: "Email sent and auto-reply delivered!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send email or auto-reply." });
  }
};
