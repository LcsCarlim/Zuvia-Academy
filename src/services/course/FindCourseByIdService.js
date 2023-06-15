const CourseModel = require('../../database/model/CourseModel');

module.exports = async (user, id) => {
  try {
    const course = await CourseModel.findById(id);
    return course;
  } catch (error) {
    throw new Error(error);
  }
};
