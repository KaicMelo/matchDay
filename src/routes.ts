    
import Router, { response } from 'express'; 

import UsersController from './controllers/usersController';
import TeamsController from './controllers/teamsController';

const routes = Router();
const usersController = new UsersController();
const teamsController = new TeamsController();

// ROUTE USERS
routes.get('/users',usersController.index);
routes.get('/user/:id',usersController.show);
routes.post('/user',usersController.create);
routes.put('/user/:id',usersController.update);
routes.delete('/user/:id',usersController.delete);

//GAME ROUTES
routes.get('/teams',teamsController.index);
routes.get('/team/:id',teamsController.show);
routes.delete('/team/:id',teamsController.delete);

 
routes.put('/team/:id',teamsController.update);

export default routes;