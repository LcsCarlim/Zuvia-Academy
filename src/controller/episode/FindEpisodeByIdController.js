const FindEpisodeByIdService = require('../../services/episode/FindEpisodeByIdService');

module.exports = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;

    const episode = await FindEpisodeByIdService(user, id);
    return res.status(200).json(episode);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again!',
      message: error.message
    });
  }
};
