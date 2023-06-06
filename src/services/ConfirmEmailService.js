const UserModel = require('../database/model/UserModel');

module.exports = async ({ id, code }) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw new Error('User not found');
  }

  if (user.code.code !== code) {
    throw new Error('Invalid code');
  }
};
