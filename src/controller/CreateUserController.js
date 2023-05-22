const CreateUserService = require('../services/CreateUserService');
const CreateUserValidators = require('../validators/CreateUserValidators');

module.exports = async (req, res) => {
  const { name, last_name, email, password, confirm_password, phone_number, cep, role } = req.body;

  const validators = await CreateUserValidators(req.body);
  if (validators.error) throw validators.error;

  try {
    const createUser = await CreateUserService({
      name,
      last_name,
      email,
      password,
      confirm_password,
      phone_number,
      cep,
      role
    });
    return res.status(201).json(createUser);
  } catch (error) {
    return res.status(400).json({
      error: 'Registration failed',
      message: error.message
    });
  }
};
