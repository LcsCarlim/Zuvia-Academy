const CreateUserService = require('../services/CreateUserService');
const CreateUserValidators = require('../validators/CreateUserValidators');

module.exports = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const validators = await CreateUserValidators(req.body);
    if (validators.error) throw validators.error;

    const createUser = await CreateUserService({
      name,
      // last_name,
      email,
      password,
      // confirm_password,
      // cep,
      role
    });
    return res.status(201).json({
      createUser,
      message: 'User created!'
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Registration failed',
      message: error.message
    });
  }
};
