const SendEmailHTML = require('../../utils/html/SendEmailHTML');
const transporter = require('../../utils/smtp/SmtpConfig');

module.exports = async user => {
  if (user.status === 'Approved') throw Error('User already approved!');

  const mailSent = await transporter.sendMail({
    text: user.code.code.toString(),
    subject: 'Código de verificação',
    from: 'Zuvia-Academy <lucascarlim0520@gmail.com',
    to: user.email,
    html: SendEmailHTML(user.code.code)
  });

  return mailSent;
};
