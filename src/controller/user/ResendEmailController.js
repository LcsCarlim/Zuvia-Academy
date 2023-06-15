const ResendCodeService = require('../../services/user/ResendCodeService');

module.exports = async (req, res) => {
  const { user } = req;
  try {
    await ResendCodeService(user);
    return res.status(200).json({
      sucess: true,
      message: 'Email sent'
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
