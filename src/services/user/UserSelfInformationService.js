const UserModel = require('../../database/model/UserModel');

module.exports = async (user) => {
  const userSelf = await UserModel.findOne(user);

  return userSelf;
};
