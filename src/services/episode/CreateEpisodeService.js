const CourseModel = require('../../database/model/CourseModel');
const EpisodeModel = require('../../database/model/EpisodeModel');

module.exports = async ({ user, id, course_id, name, description, video_url }) => {
  if (user.role !== 'Super') throw Error('Without permission!');

  const courseId = await CourseModel.findById(id);
  if (!courseId) throw new Error('Course not found!');

  const createEpisode = await EpisodeModel.create({
    course_id,
    name,
    description,
    video_url
  });

  return createEpisode;
};
