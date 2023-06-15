const CourseModel = require('../../database/model/CourseModel');

module.exports = async (user, name, description, introduction_video) => {
  if (user.role !== 'Super') throw Error('User without permission!');

  const createCourse = await CourseModel.create({
    name,
    description,
    introduction_video
  });

  return createCourse;
};
