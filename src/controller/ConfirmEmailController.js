const ConfirmEmailService = require('../services/ConfirmEmailService');

module.exports = async (req, res) => {
  const { _id } = req.user;
  const { code } = req.body;
  try {
    const user = await ConfirmEmailService({ id: _id, code });
    res.status(200).json({
      message: 'Validated code',
      user
    });
  } catch (error) {
    res.status(401).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
