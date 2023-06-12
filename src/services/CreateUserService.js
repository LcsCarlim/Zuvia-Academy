const UserModel = require('../database/model/UserModel');
const GetCepGateway = require('../gateway/GetCepGateway');
const SendEmailService = require('./SendEmailService');

module.exports = async ({ name, last_name, email, password, confirm_password, cep, role }) => {
  try {
    const emailAlreadyExists = await UserModel.findOne({
      email
    });
    if (emailAlreadyExists) throw new Error('Email already exists!');

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
