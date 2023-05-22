const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserModel = require('../../database/model/UserModel');

module.exports = async ({ email, password }) => {
  const user = await UserModel.findOne({
    email
  }).select('+password');

  if (!user) throw new Error("User doesn't exists!");

  const correctPassword = await compare(password, user.password);

  if (!correctPassword) throw new Error('Invalid password!');

  const secret = process.env.ACCESS_TOKEN;

  const token = jwt.sign({
    id: user._id,
    role: user.role
  },
  secret
  );

  return token;
};
