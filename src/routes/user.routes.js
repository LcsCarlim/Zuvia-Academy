const { Router } = require('express');
const routes = Router();

const CreateUserController = require('../controller/CreateUserController');
const CreateUserAuthController = require('../controller/CreateUserAuthController');
const ListAllUsersController = require('../controller/ListAllUsersController');
const FindUserById = require('../controller/FindUserByIdController');
const LogoutUserController = require('../controller/LogoutUserController');
const userAuth = require('../middlewares/CheckTokenMiddleware');
const userLogout = require('../middlewares/LogoutMiddleware');
const DeleteUserController = require('../controller/DeleteUserController');

routes.post('/register',
  CreateUserController
);

routes.post('/login',
  CreateUserAuthController
);

routes.post('/logout',
  userLogout,
  LogoutUserController
);

routes.get('/list',
  userAuth,
  ListAllUsersController
);

routes.get('/find/:id',
  userAuth,
  FindUserById
);

routes.get('/delete/:id',
  userAuth,
  DeleteUserController
);
module.exports = routes;
