const ListAllUsersService = require('../services/ListAllUsersService');

module.exports = async (req, res) => {
  const { role } = req.user;
  try {
    const users = await ListAllUsersService(role);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(401).json({
      error: 'Error',
      message: error.message
    });
  }
};
