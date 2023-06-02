const UserModel = require('../database/model/UserModel');
const GetCepGateway = require('../gateway/GetCepGateway');
const SendEmailService = require('./SendEmailService');

module.exports = async ({ name, last_name, email, password, confirm_password, phone_number, cep, role }) => {
  try {
    const emailAlreadyExists = await UserModel.findOne({
      email
    });
    if (emailAlreadyExists) throw new Error('Email already exists!');

    const phoneAlreadyExists = await UserModel.findOne({
      phone_number
    });
    if (phoneAlreadyExists) throw new Error('Phone number already exists!');

    if (password !== confirm_password) throw new Error("Password doesn't match!");

    const response = await GetCepGateway(cep);

    const code = {
      code: Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
      status: 'Created'
    };

    const createUser = await UserModel.create({
      name,
      last_name,
      email,
      password,
      phone_number,
      cep: response.data.logradouro,
      role,
      code
    });

    await SendEmailService(createUser);

    return createUser;
  } catch (error) {
    console.log(error);
  }
};
