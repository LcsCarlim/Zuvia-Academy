const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('../config/smtp');
const SendEmailHTML = require('../utils/html/SendEmailHTML');

module.exports = async (user) => {
  if (user.status === 'Approved') throw Error('User already approved!');
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
    text: user.code.code.toString(),
    subject: 'código de verificação',
    from: 'Zuvia-Academy <lucascarlim0520@gmail.com',
    to: user.email,
    html: SendEmailHTML(user.code.code)
  });

  return mailSent;
};
