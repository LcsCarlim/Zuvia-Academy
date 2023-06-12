const UserModel = require('../database/model/UserModel');

module.exports = async ({ user, code }) => {
  // eslint-disable-next-line eqeqeq
  if (user.code.code != code) {
    throw new Error('Invalid code');
  }

  return await UserModel.findOneAndUpdate({ _id: user._id }, { code: { ...user.code, status: 'Used' }, status: 'Approved' });
};
