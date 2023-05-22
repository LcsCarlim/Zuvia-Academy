const UserModel = require('../database/model/UserModel');
const GetCepGateway = require('../gateway/GetCepGateway');

module.exports = async ({ name, last_name, email, password, confirm_password, phone_number, cep, role }) => {
  const emailAlreadyExists = UserModel.findOne({
    email
  });
  if (!emailAlreadyExists) throw new Error('Email already exists!');

  const phoneAlreadyExists = UserModel.findOne({
    phone_number
  });
  if (!phoneAlreadyExists) throw new Error('Phone number already exists!');

  if (password !== confirm_password) throw new Error("Password doesn't match!");

  const response = await GetCepGateway(cep);

  const createUser = await UserModel.create({
    name,
    last_name,
    email,
    password,
    phone_number,
    cep: response.data.logradouro,
    role
  });

  return createUser;
};
