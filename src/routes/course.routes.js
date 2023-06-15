const { Router } = require('express');
const routes = Router();

const userAuth = require('../middlewares/CheckTokenMiddleware');
const CreateCourseController = require('../controller/course/CreateCourseController');

routes.post('/createcourse',
  userAuth,
  CreateCourseController
);

module.exports = routes;
