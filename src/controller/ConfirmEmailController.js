const ConfirmEmailService = require('../services/ConfirmEmailService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const { code } = req.body;
  try {
    const user = await ConfirmEmailService({ id, code });
    res.status(200).json({
      message: 'Validated code',
      user
    });
  } catch (error) {
    res.status(400).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};