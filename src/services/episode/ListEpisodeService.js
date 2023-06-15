const EpisodeModel = require('../../database/model/EpisodeModel');

module.exports = async () => {
  try {
    const listEp = await EpisodeModel.find();
    return listEp;
  } catch (error) {
    throw new Error(error);
  }
};
