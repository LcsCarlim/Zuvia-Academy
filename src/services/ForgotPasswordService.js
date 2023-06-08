const UserModel = require('../database/model/UserModel');
const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('../config/smtp');
const dotenv = require('dotenv');
const crypto = require('crypto');
const SendForgotPasswordHTML = require('../utils/html/SendForgotPasswordHTML');

dotenv.config();

module.exports = async (email) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error('Email not exists!');

  const token = crypto.randomBytes(20).toString('hex');

  const now = new Date();
  now.setMinutes(now.getMinutes() + 5);

  user.passwordResetToken = token;
  user.passwordResetExpires = now;

  await user.save();

  const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailSent = await transporter.sendMail({
    text: user.passwordResetToken,
    subject: 'Esqueci minha senha',
    from: 'Zuvia-Academy <lucascarlim0520@gmail.com>',
    to: user.email,
    html: SendForgotPasswordHTML(token)
  });

  return mailSent;
};
