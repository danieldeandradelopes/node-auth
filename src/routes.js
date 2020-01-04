import { Router } from 'express';
import User from './app/models/Users';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
