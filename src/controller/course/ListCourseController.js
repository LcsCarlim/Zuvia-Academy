const ListCourseService = require('../../services/course/ListCourseService');

module.exports = async (req, res) => {
  try {
    const { user } = req;

    const course = await ListCourseService(user);
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
