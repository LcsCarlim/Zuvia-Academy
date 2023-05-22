const UserModel = require('../database/model/UserModel');

module.exports = async (id, role) => {
  if (role !== 'Super') throw new Error('Without permission!');

  const findId = await UserModel.findById(id);
  if (!findId) throw new Error('User not found!');

  return findId;
};
