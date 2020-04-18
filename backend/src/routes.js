const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController') ;
const SessionController = require('./controllers/SessionController') ;

const routes = express.Router();

//listagem das ongs que estão no banco de dados
routes.get('/ongs', OngController.index);

routes.post('/sessions', SessionController.create);   

//cadastro das ongs no banco de dados
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);  

routes.get('/incidents', IncidentsController.index);   
routes.post('/incidents', IncidentsController.create); 
routes.delete('/incidents/:id', IncidentsController.delete);  

module.exports = routes;

