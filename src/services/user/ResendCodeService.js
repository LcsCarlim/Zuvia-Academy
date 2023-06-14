const SendEmailService = require('./SendEmailService');

module.exports = async (user) => {
  user.code = {
    code: Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
    status: 'Created'
  };

  await user.save();

  await SendEmailService(user);
};
