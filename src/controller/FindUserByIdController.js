const FindUserByIdService = require('../services/user/FindUserByIdService');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  try {
    const findId = await FindUserByIdService(id, role);
    return res.status(200).json(findId);
  } catch (error) {
    return error;
  }
};
