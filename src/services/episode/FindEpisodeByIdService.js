const EpisodeModel = require('../../database/model/EpisodeModel');

module.exports = async (user, id) => {
  try {
    const episode = await EpisodeModel.findById(id);
    return episode;
  } catch (error) {
    throw new Error(error);
  }
};
