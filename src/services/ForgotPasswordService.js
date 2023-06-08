const UserModel = require('../database/model/UserModel');
const dotenv = require('dotenv');
const crypto = require('crypto');
const SendForgotPasswordHTML = require('../utils/html/SendForgotPasswordHTML');
const transporter = require('../utils/smtp/SmtpConfig');

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

  const mailSent = await transporter.sendMail({
    text: user.passwordResetToken,
    subject: 'Esqueci minha senha',
    from: 'Zuvia-Academy <lucascarlim0520@gmail.com>',
    to: user.email,
    html: SendForgotPasswordHTML(token)
  });

  return mailSent;
};
