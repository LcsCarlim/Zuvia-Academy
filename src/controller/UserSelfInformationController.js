const UserSelfInformationService = require('../services/UserSelfInformationService');

module.exports = async (req, res) => {
  try {
    const { user } = req;
    const userSelf = await UserSelfInformationService(user);

    return res.status(200).json(userSelf);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
