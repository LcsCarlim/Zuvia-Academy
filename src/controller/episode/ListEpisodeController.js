const ListEpisodeService = require('../../services/episode/ListEpisodeService');

module.exports = async (req, res) => {
  try {
    const listEp = await ListEpisodeService();
    return res.status(200).json(listEp);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wring happened, try again',
      message: error.message
    });
  }
};
