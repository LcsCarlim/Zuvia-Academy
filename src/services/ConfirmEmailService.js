const UserModel = require('../database/model/UserModel');

module.exports = async ({ id, code }) => {
  const user = await UserModel.findById(id);
  if (user.code.code !== code) {
    throw new Error('Invalid code');
  }

  user.code.status = 'Used';
  user.status = 'Approved';

  await user.save();
};
// a
