const { Router } = require('express');
const routes = Router();

const userAuth = require('../middlewares/CheckTokenMiddleware');
const CreateEpisodeController = require('../controller/episode/CreateEpisodeController');

routes.post('/createepisode',
  userAuth,
  CreateEpisodeController
);

module.exports = routes;
