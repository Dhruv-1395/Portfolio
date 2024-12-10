import nodemailer from 'nodemailer';
import 'dotenv/config';

const SendMail = async (fname, phone, email, subject, message) => {
    
    try {
      // Define the HTML content with correct order and dynamic data
      const mailHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f9;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              overflow: hidden;
            }
            .header {
              background-color: #4CAF50;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 24px;
              font-weight: bold;
            }
            .content {
              padding: 20px;
              font-size: 16px;
              line-height: 1.6;
            }
            .content table {
              width: 100%;
              border-collapse: collapse;
            }
            .content table th,
            .content table td {
              text-align: left;
              padding: 10px;
              border: 1px solid #ddd;
            }
            .content table th {
              background-color: #f2f2f2;
              color: #333;
            }
            .footer {
              text-align: center;
              background-color: #f4f4f9;
              color: #888;
              padding: 10px;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              New Contact Form Submission
            </div>
            <div class="content">
              <p>You have received a new message from the contact form on your website:</p>
              <table>
                <tr>
                  <th>Full Name</th>
                  <td>${fname || 'N/A'}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>${email || 'N/A'}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>${phone || 'N/A'}</td>
                </tr>
                <tr>
                  <th>Subject</th>
                  <td>${subject || 'N/A'}</td>
                </tr>
                <tr>
                  <th>Message</th>
                  <td>${message || 'N/A'}</td>
                </tr>
              </table>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Your Website Name. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `;
  
      // Create the transporter
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
          user: "official.dhruv1395@gmail.com",
          pass: process.env.EMAIL_AUTH,
        },
      });
  
      // Send the email
      const info = await transporter.sendMail({
        from: `"${fname}" <${email}>`, // Sender's name and email
        to: 'official.dhruv1395@gmail.com', // Receiver
        subject: subject || "No Subject", // Subject line
        text: message || "No message provided.", // Plain text body
        html: mailHTML, // HTML body
      });
  
      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

export default SendMail;