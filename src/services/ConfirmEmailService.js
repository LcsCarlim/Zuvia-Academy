const UserModel = require('../database/model/UserModel');

module.exports = async ({ id, code }) => {
  const userId = await UserModel.findById(id);
  if (!userId) throw new Error('User not found!');

  const user = await UserModel.findOne({
    code: {
      code
    }
  });
  if (!user) throw new Error('Invalid code!');
};
