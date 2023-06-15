const FindCourseByIdService = require('../../services/course/FindCourseByIdService');

module.exports = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;

    const course = await FindCourseByIdService(user, id);
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
