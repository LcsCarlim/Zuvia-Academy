const CourseModel = require('../../database/model/CourseModel');

module.exports = async user => {
  try {
    const course = await CourseModel.find();
    return course;
  } catch (error) {
    throw new Error(error);
  }
};
