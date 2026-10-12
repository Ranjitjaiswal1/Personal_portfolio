import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MESSAGES_FILE = path.join(__dirname, 'inbox_messages.json');

// Helper to save message
function saveMessageLocally(entry) {
  try {
    let list = [];
    if (fs.existsSync(MESSAGES_FILE)) {
      list = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf-8'));
    }
    list.unshift(entry);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save message to inbox_messages.json:', err.message);
  }
}

// Enable CORS and JSON body parser
app.use(cors({ origin: '*' }));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio email server is running' });
});

// View all received messages
app.get('/api/messages', (req, res) => {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf-8'));
      return res.json({ success: true, count: data.length, messages: data });
    }
    return res.json({ success: true, count: 0, messages: [] });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Contact transmission endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide name, email, and message.'
    });
  }

  const timestamp = new Date().toISOString();
  console.log(`[Contact Form Received] [${timestamp}] From: ${name} <${email}> | Subject: ${subject}`);
  console.log(`Message: ${message}`);

  // Automatically save every message in local database
  saveMessageLocally({
    timestamp,
    name,
    email,
    subject: subject || 'General Inquiry',
    message
  });

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || 'ranjitjaiswal321@gmail.com';

  // If email credentials are provided, send via Nodemailer
  if (emailUser && emailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass, // Google 16-digit App Password
        },
      });

      const mailOptions = {
        from: `"${name}" <${emailUser}>`,
        replyTo: email,
        to: receiverEmail,
        subject: `[Portfolio Inquiry] ${subject || 'New Message from ' + name}`,
        text: `You received a new message from your 3D Portfolio:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #0c1021; padding: 30px; color: #e2e8f0;">
            <div style="max-width: 600px; margin: 0 auto; background: #131838; border: 1px solid #1e293b; border-radius: 16px; padding: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
              <div style="border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 20px;">
                <span style="display: inline-block; background: #0284c7; color: #ffffff; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; rounded: 8px;">Portfolio Transmission</span>
                <h2 style="color: #38bdf8; margin: 12px 0 4px 0; font-size: 22px;">New Contact Message</h2>
                <p style="color: #94a3b8; font-size: 13px; margin: 0;">Sent directly from your 3D Portfolio website.</p>
              </div>

              <div style="background: #090d24; border-radius: 10px; padding: 16px; margin-bottom: 20px;">
                <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Sender Name:</strong> <span style="color: #ffffff;">${name}</span></p>
                <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></p>
                <p style="margin: 0; font-size: 14px;"><strong>Subject:</strong> <span style="color: #ffffff;">${subject || 'General Inquiry'}</span></p>
              </div>

              <div style="margin-bottom: 24px;">
                <p style="font-size: 14px; font-weight: bold; color: #cbd5e1; margin-bottom: 8px;">Message Content:</p>
                <div style="background: #090d24; border-left: 4px solid #38bdf8; padding: 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #f1f5f9; white-space: pre-wrap;">${message}</div>
              </div>

              <div style="text-align: center; border-top: 1px solid #1e293b; padding-top: 16px;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Portfolio Inquiry')}" style="display: inline-block; background: linear-gradient(90deg, #06b6d4, #3b82f6); color: #000000; font-weight: bold; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px;">Reply to ${name}</a>
              </div>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`[Email Delivered] Successfully sent email to ${receiverEmail}`);
      return res.status(200).json({
        success: true,
        message: 'Your message has been sent and delivered to Ranjit Kumar Jaiswal\'s email!'
      });
    } catch (err) {
      console.error('[Nodemailer Error]', err);
      return res.status(500).json({
        success: false,
        error: 'Failed to send email via SMTP. Please verify email credentials.'
      });
    }
  } else {
    // Use Nodemailer's Ethereal test account for demo when real credentials are missing
    try {
      const testAccount = await nodemailer.createTestAccount();
      const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      const mailOptions = {
        from: `"${name}" <${testAccount.user}>`,
        replyTo: email,
        to: receiverEmail,
        subject: `[Portfolio Inquiry] ${subject || 'New Message from ' + name}`,
        text: `You received a new message from your 3D Portfolio:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      };
      const info = await transporter.sendMail(mailOptions);
      console.log('[Ethereal] Message sent: %s', info.messageId);
      console.log('[Ethereal Preview] %s', nodemailer.getTestMessageUrl(info));
      return res.status(200).json({
        success: true,
        delivered: true,
        message: 'Message sent via Ethereal test email. Check server logs for preview URL.',
        previewUrl: nodemailer.getTestMessageUrl(info),
      });
    } catch (err) {
      console.error('[Ethereal Error]', err);
      return res.status(500).json({
        success: false,
        error: 'Failed to send test email via Ethereal.',
      });
    }
}
});



app.listen(PORT, () => {
  console.log(`Portfolio Email Backend listening on http://localhost:${PORT}`);
});
