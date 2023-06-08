const UserModel = require('../database/model/UserModel');

module.exports = async (email, token, password) => {
  const user = await UserModel.findOne({ email })
    .select(('+passwordResetToken passwordResetExpires'));

  if (!user) throw new Error('Email not exists!');
  if (token !== user.passwordResetToken) throw new Error('Wrong token!');

  const now = new Date();
  if (now > user.passwordResetExpires) throw new Error('Token expired, generate a new token!');

  user.password = password;

  await user.save();
};
