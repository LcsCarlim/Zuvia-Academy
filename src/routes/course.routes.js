const { Router } = require('express');
const routes = Router();

const userAuth = require('../middlewares/CheckTokenMiddleware');
const CreateCourseController = require('../controller/course/CreateCourseController');
const FindCourseController = require('../controller/course/FindCourseController');
const ListCourseController = require('../controller/course/ListCourseController');

routes.post('/createcourse',
  userAuth,
  CreateCourseController
);

routes.get('/find/:id',
  userAuth,
  FindCourseController
);

routes.get('/listcourses',
  userAuth,
  ListCourseController
);

module.exports = routes;
