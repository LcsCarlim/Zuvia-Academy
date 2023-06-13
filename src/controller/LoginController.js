const LoginService = require('../services/LoginService');
const LoginValidator = require('../validators/LoginValidator');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validator = await LoginValidator(req.body);
    if (validator.error) throw validator.error;

    const usersAuth = await LoginService({ email, password });
    res.status(200).json({
      message: 'Authentication successful',
      usersAuth
    });
  } catch (error) {
    res.status(400).json({
      error: 'Something wrong happened, try again!',
      message: error.message
    });
  }
};
