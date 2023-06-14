const ForgotPasswordService = require('../services/user/ForgotPasswordService');

module.exports = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await ForgotPasswordService(email);
    res.status(200).json({
      user,
      sucess: true,
      message: 'Email sent'
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      error: 'Error on forgot password, try again',
      message: error.message
    });
  }
};
