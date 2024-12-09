import express from "express";
const Router = express.Router();
import SendMail from "../mailer/SendMail.js";
// API endpoints
Router.post("/contact", (req, res) => {
 
  try {
    const { fname, phone, email, subject, message } = req.body;
    if (!fname || !phone || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    } else {
      res.status(200).json({ message: "Form submitted successfully" });
      SendMail(fname,phone,email,subject,message);
    }
    console.log(fname, phone, email, subject, message);
  } catch (error) {}
});

export default Router;
