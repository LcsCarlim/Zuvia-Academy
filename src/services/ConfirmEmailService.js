const UserModel = require('../database/model/UserModel');

module.exports = async (id) => {
  const user = await UserModel.findById(id);
  
};
