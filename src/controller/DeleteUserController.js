const DeleteUserService = require('../services/user/DeleteUserService');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  try {
    const deleteUser = await DeleteUserService(id, role);
    return res.status(200).json({
      message: 'User deleted!',
      deleteUser
    });
  } catch (error) {
    return error;
  }
};
