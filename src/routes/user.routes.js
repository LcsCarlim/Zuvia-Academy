const { Router } = require('express');
const routes = Router();

const CreateUserController = require('../controller/user/CreateUserController');
const LoginController = require('../controller/user/LoginController');
const ListAllUsersController = require('../controller/user/ListAllUsersController');
const FindUserById = require('../controller/user/FindUserByIdController');
const LogoutUserController = require('../controller/user/LogoutUserController');
const userAuth = require('../middlewares/CheckTokenMiddleware');
const userLogout = require('../middlewares/LogoutMiddleware');
const DeleteUserController = require('../controller/user/DeleteUserController');
const ConfirmEmailController = require('../controller/user/ConfirmEmailController');
const SendEmailController = require('../controller/user/ResendEmailController');
const ForgotPasswordController = require('../controller/user/ForgotPasswordController');
const ResetPasswordController = require('../controller/user/ResetPasswordController');
const UserSelfInformationController = require('../controller/user/UserSelfInformationController');

routes.post('/register',
  CreateUserController
);

routes.post('/login',
  LoginController
);

routes.post('/logout',
  userLogout,
  LogoutUserController
);

routes.post('/confirmemail',
  userAuth,
  ConfirmEmailController
);

routes.post('/resend-code',
  userAuth,
  SendEmailController
);

routes.post('/forgot_password',
  ForgotPasswordController
);

routes.post('/reset_password',
  ResetPasswordController
);

routes.get('/list',
  userAuth,
  ListAllUsersController
);

routes.get('/find/:id',
  userAuth,
  FindUserById
);

routes.get('/userself',
  userAuth,
  UserSelfInformationController
);

routes.delete('/delete/:id',
  userAuth,
  DeleteUserController
);

module.exports = routes;
