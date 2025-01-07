import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // or another service
        auth: {
          user: process.env.EMAIL_USER, // your Gmail address
          pass: process.env.EMAIL_PASS, // your Gmail app password
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Newsletter Subscription Confirmation',
        text: 'Thank you for subscribing to our newsletter!',
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
