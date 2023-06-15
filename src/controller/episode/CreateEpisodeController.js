const CreateEpisodeService = require('../../services/episode/CreateEpisodeService');

module.exports = async (req, res) => {
  try {
    const { user } = req;
    const { course_id, name, description, video_url } = req.body;

    const createEpisode = await CreateEpisodeService({ user, course_id, name, description, video_url });
    return res.status(201).json({
      message: 'Episode created',
      createEpisode
    });
  } catch (error) {
    return res.status(401).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
