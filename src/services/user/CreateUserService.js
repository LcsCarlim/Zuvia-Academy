const UserModel = require('../../database/model/UserModel');
const SendEmailService = require('./SendEmailService');
const bcrypt = require('bcrypt');

module.exports = async ({ name, email, password, role }) => {
  try {
    const emailAlreadyExists = await UserModel.findOne({ email });
    if (emailAlreadyExists) {
      throw new Error('Email already exists!');
    }

    const code = {
      code: Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
      status: 'Created'
    };

    const hashedPassword = await bcrypt.hash(password, 12);

    const createUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
      code
    });

    await SendEmailService(createUser);

    return createUser;
  } catch (error) {
    throw new Error(error);
  }
};
