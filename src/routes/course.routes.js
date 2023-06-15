const { Router } = require('express');
const routes = Router();

const userAuth = require('../middlewares/CheckTokenMiddleware');
const CreateCourseController = require('../controller/course/CreateCourseController');
const FindCourseCOntroller = require('../controller/course/FindCourseCOntroller');
const ListCourseController = require('../controller/course/ListCourseController');

routes.post('/createcourse',
  userAuth,
  CreateCourseController
);

routes.get('/find/:id',
  userAuth,
  FindCourseCOntroller
);

routes.get('/listcourses',
  userAuth,
  ListCourseController
);

module.exports = routes;
