const express = require('express');
const routes = require('./routes'); 
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); //serve para casting de tipo do express para a aplicação
app.use(routes); 


/**
 * métodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 * 
 * 
 * Query Params: parâmetros nomeados enviados na rota após '?' (filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos '/'
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 *
 */

/**
 * Tipos de bancos de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle
 * NoSQL: MongoDB, CouchDB  
 * 
 */


 /**
  * Driver: SELECT * FROM 'users'
  * Query Builder: table('users').select('*').where()
  */


 

app.listen(33330);