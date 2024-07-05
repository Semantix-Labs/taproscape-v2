import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const sendComment = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, comment, ratings } = req.body;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., using Gmail
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Create the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient@example.com', // Replace with your desired recipient
      subject: 'New Comment Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Comment: ${comment}

        Ratings:
        Accommodation: ${ratings.Accommodation || 0} stars
        Destination: ${ratings.Destination || 0} stars
        Meals: ${ratings.Meals || 0} stars
        Overall: ${ratings.Overall || 0} stars
        Transport: ${ratings.Transport || 0} stars
        Value for Money: ${ratings['Value for Money'] || 0} stars
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
};

export default sendComment;
