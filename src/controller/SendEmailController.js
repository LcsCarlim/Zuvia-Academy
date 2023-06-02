const SendEmailService = require('../services/SendEmailService');

module.exports = async (req, res) => {
  const { email } = req.body;
  try {
    const sendEmail = await SendEmailService(email);
    return res.status(200).json(sendEmail);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
