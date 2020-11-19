    
import Router, { response } from 'express'; 

import UsersController from './controllers/usersController';

const routes = Router();
const usersController = new UsersController();

// ROTAS MODULO DE USUÁRIOS
routes.get('/users',usersController.index);
routes.get('/user/:id',usersController.show);
routes.post('/user',usersController.create);
routes.delete('/user/:id',usersController.delete);
routes.put('/user/:id',usersController.update);


export default routes;