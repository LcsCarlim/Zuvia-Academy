const CourseModel = require('../../database/model/CourseModel');
const EpisodeModel = require('../../database/model/EpisodeModel');

module.exports = async ({ user, course_id, name, description, video_url }) => {
  try {
    if (user.role !== 'Super') throw new Error('Without permission!');

    const courseId = await CourseModel.findById(course_id);
    if (!courseId) throw new Error('Course not found!');

    const createEpisode = await EpisodeModel.create({
      course_id,
      name,
      description,
      video_url
    });

    return createEpisode;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
