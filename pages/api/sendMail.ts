// pages/api/sendMail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { fullName, email, subject, message }: FormData = req.body;

    // Create a transporter using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // use your email provider service or SMTP configuration
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
    });

    // Setup email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // your email address or where you want to receive the emails
      subject: `Contact Form Submission: ${subject}`,
      text: `You have a new contact form submission from ${fullName} (${email}).\n\nMessage:\n${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
};

export default sendMail;
