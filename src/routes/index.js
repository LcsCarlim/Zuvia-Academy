const { Router } = require('express');
const routes = Router();

const userRoutes = require('../routes/user.routes');
const courseRoutes = require('../routes/course.routes');
const episodeRoutes = require('../routes/episode.routes');

routes.use('/users',
  userRoutes
);

routes.use('/course',
  courseRoutes
);

routes.use('/episode',
  episodeRoutes
);

module.exports = routes;
