const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('../config/smtp');
const UserModel = require('../database/model/UserModel');

const userModel = await UserModel.findOne({
  email
});

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

async function run () {
  const mailSent = await transporter.sendMail({
    text: 'Texto do E-Mail',
    subject: 'Assunto do e-mail',
    from: 'name <email',
    to: userModel
  });
  console.log(mailSent);
}

run();
