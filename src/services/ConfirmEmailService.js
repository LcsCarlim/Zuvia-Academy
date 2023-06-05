const { compare } = require('bcryptjs');
const UserModel = require('../database/model/UserModel');

module.exports = async ({ id, email, password, code }) => {
  const userId = await UserModel.findById(id);
  if (!userId) throw new Error('User not found!');

  const user = await UserModel.findOne({
    email
  });
  if (!user) throw new Error('Email not found!');

  const userCode = await UserModel.findOne({
    code: {
      code
    }
  });
  if (!userCode) throw new Error('Invalid code');

  const correctPassword = await compare(password, user.password);
  if (!correctPassword) throw new Error('Invalid password!');
};
