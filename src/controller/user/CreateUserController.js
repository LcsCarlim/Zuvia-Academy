const CreateUserService = require('../../services/user/CreateUserService');
const CreateUserValidators = require('../../validators/CreateUserValidators');

module.exports = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const validators = await CreateUserValidators(req.body);
    if (validators.error) {
      throw validators.error;
    }

    const createUser = await CreateUserService({ name, email, password, role });
    return res.status(201).json({
      message: 'User created!',
      createUser
    });
  } catch (error) {
    if (error.message === 'Email already exists!') {
      return res.status(400).json({
        error: 'Registration failed',
        message: 'Email already exists'
      });
    }

    return res.status(400).json({
      error: 'Registration failed',
      message: error.message
    });
  }
};
