/***

Crie uma api com as seguintes caracteristicas:

 - A api deve ser desenvolvida utilizando node.js como linguagem de back-end
 - A api não precisa conectar com uma base de dados real. O retorno pode ser mockado
 - A api deve aceitar somente requisições via json
 - A api deve listar as informações de clientes
 - A api deve permitir listar as informações de um cliente pelo id do mesmo
 - A api deve permitir consultar os clientes por seu tipo (cpf ou cnpj)
 - A api deve conter uma documentação, especificando os parâmetros de entrada, e possíveis retornos

Opcional:

 - A api deve prover uma rota de health check
 - Desenvolver um teste de integração que verifica se a api esta retornando por padrão o formato json

Após finalizar o teste:

 - O código da aplicação deve ser compactado em um arquivo .zip e enviado a HITSS
 - No e-mail, responder o que melhoria poderia propôr para esta api como parâmetros de entrada, exposição.
 
***/

const express = require('express');
const app = express( );
var cors = require('cors');

app.use(cors());

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const cliente = require('./cliente');

const port = 3000;
const OKSTATUS = 200;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'Cliente API',
			description: 'API para pesquisa de clientes para controle administrativo.',
			contact: {
				name: 'HITSS setor de desnvolvimento'
			},
			servers: ['http://localhost:3000']
		}
	},
	apis: ['app.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


var listaClientes = new Array( );


/* Clientes pessoa fisíca */
listaClientes.push( new cliente( 1, 'Nicolaus Copernicus',    '834.264.450-26', ''));
listaClientes.push( new cliente( 2, 'Galileo Galilei',        '747.027.020-50', ''));
listaClientes.push( new cliente( 3, 'Johannes Kepler',        '780.139.120-94', ''));
listaClientes.push( new cliente( 4, 'René Descartes',         '190.621.630-41', ''));
listaClientes.push( new cliente( 5, 'Isaac Newton',           '941.546.520-44', ''));
listaClientes.push( new cliente( 6, 'Albert Einstein',        '815.871.010-76', ''));
listaClientes.push( new cliente( 7, 'Nikola Tesla',           '982.724.000-57', ''));
listaClientes.push( new cliente( 8, 'Marie Sktodowska Curie', '279.322.430-84', ''));
listaClientes.push( new cliente( 9, 'James Clerk Maxwell',    '404.821.220-64', ''));
listaClientes.push( new cliente(10, 'Michael Faraday',        '607.355.370-62', ''));

/* Clientes empresas */
listaClientes.push( new cliente( 11, 'AT&T',                              '', '92.128.436-0001-89'));
listaClientes.push( new cliente( 12, 'JPMorgan Chase & Co.',              '', '33.904.217-0001-85'));
listaClientes.push( new cliente( 13, 'General Electric',                  '', '39.221.755-0001-51'));
listaClientes.push( new cliente( 14, 'IBM Management Consulting Company', '', '72.971.382-0001-01'));
listaClientes.push( new cliente( 15, 'Google',                            '', '21.695.991-0001-44'));
listaClientes.push( new cliente( 16, 'Facebook',                          '', '05.520.909-0001-94'));
listaClientes.push( new cliente( 17, 'Amazon',                            '', '71.165.602-0001-47'));
listaClientes.push( new cliente( 18, 'Mercado Bitcoin',                   '', '00.110.058-0001-98'));
listaClientes.push( new cliente( 19, 'Petrobrás',                         '', '55.459.522-0001-48'));
listaClientes.push( new cliente( 20, 'Alibaba Group',                     '', '43.058.964-0001-01'));


// Routes
/**
 * @swagger
 * /findAll:
 *  get:
 *    description: Busca todos os clientes salvos
 *    responses:
 *      '200':
 *        description: Requisição da pesquisa feita com sucesso
 */
app.get( "/findAll", ( req, res ) => {
	res.status(OKSTATUS).send(listaClientes);
});

/**
 * @swagger
 * /findId/{id}:
 *    get:
 *      description: Busca o cliente pelo id
 *    parameters:
 *      - in: path
 *        name: id
 *        type: integer
 *        description: Id do cliente
 *        required: true
 *    responses:
 *      '200':
 *        description: Pesquisa feita com sucesso
 */
app.get( "/findId/:id", ( req, res ) => {
	res.status(OKSTATUS).send(cliente.idClientePesquisa(req.params.id, listaClientes));
});

/**
 * @swagger
 * /findCPFCNPJ/{cpfcnpj}:
 *    get:
 *      description: Busca o cliente pelo CPF ou CNPJ
 *    parameters:
 *      - in: path
 *        name: cpfcnpj
 *        type: string
 *        description: CPF ou CNPJ do cliente
 *        required: true
 *    responses:
 *      '200':
 *        description: Pesquisa feita com sucesso
 */
app.get( "/findCPFCNPJ/:cpfcnpj", ( req, res ) => {
	res.status(OKSTATUS).send(cliente.cpfcnpjClientePesquisa(req.params.cpfcnpj, listaClientes));
});

/**
 * @swagger
 * /testeTempo:
 *  get:
 *    description: Solicitação para a velocidade de requisição da API health check
 *    responses:
 *      '200':
 *        description: Requisição feita com sucesso
 */
app.use('/testeTempo', require('express-healthcheck')());

/**
 * @swagger
 * /testehealth:
 *  get:
 *    description: Solicitação para a velocidade de requisição da API health check
 *    responses:
 *      '200':
 *        description: Requisição feita com sucesso
 */
app.use('/testehealth', require('express-healthcheck')({
    healthy: function () {
        return { everything: 'Está ok' };
    }
}));


app.listen(port, () => console.log(`Running on port ${port}`));
