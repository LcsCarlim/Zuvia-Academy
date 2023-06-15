const { Router } = require('express');
const routes = Router();

const userAuth = require('../middlewares/CheckTokenMiddleware');
const CreateEpisodeController = require('../controller/episode/CreateEpisodeController');
const FindEpisodeByIdController = require('../controller/episode/FindEpisodeByIdController');
const ListEpisodeController = require('../controller/episode/ListEpisodeController');

routes.post('/createepisode',
  userAuth,
  CreateEpisodeController
);

routes.get('/find/:id',
  userAuth,
  FindEpisodeByIdController
);

routes.get('/listepisode',
  userAuth,
  ListEpisodeController
);

module.exports = routes;
