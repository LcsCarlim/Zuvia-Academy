const CreateCourseService = require('../../services/course/CreateCourseService');

module.exports = async (req, res) => {
  try {
    const { user, id } = req;
    const { name, description, introduction_video } = req.body;

    const createCourse = await CreateCourseService(user, id, name, description, introduction_video);
    return res.status(201).json({
      message: 'Course created',
      createCourse
    });
  } catch (error) {
    return res.status(401).json({
      error: 'Something wrong happened, try again!',
      message: error.message
    });
  }
};
