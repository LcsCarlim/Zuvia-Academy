const ConfirmEmailService = require('../services/user/ConfirmEmailService');

module.exports = async (req, res) => {
  try {
    const { user } = req;
    const { code } = req.body;

    const userConfirmed = await ConfirmEmailService({ user, code });
    return res.status(200).json({
      message: 'Validated code',
      user: userConfirmed
    });
  } catch (error) {
    return res.status(401).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
