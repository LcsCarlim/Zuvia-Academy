const ResetPasswordService = require('../services/ResetPasswordService');
const ResetPasswordValidators = require('../validators/ResetPasswordValidators');

module.exports = async (req, res) => {
  const { email, token, password } = req.body;
  try {
    const validator = await ResetPasswordValidators({ password });
    if (validator.error) throw validator.error;

    const resetPass = await ResetPasswordService(email, token, password);
    res.status(200).json({
      resetPass,
      sucess: true,
      message: 'Password reseted!'
    });
  } catch (error) {
    res.status(400).json({
      error: 'Cannot reset password, try again',
      message: error.message
    });
  }
};
