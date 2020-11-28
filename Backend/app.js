'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas
var article_routes = require('./routes/articles');

// MiddLewares = Es algo que se ejecuta antes de cargar una ruta
app.use(bodyParser.urlencoded({extended:false})); // Cargamos el body-parser
app.use(bodyParser.json()); // Convertimos cualquier peticion que llegue en json

// CORS = Permite peticiones desde el frontend
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// Añadir prefijos a rutas
app.use('/api', article_routes);


// Ruta o metodo de prueba para el API REST
/*
app.post('/datos-curso', (req, res) => {
   var hola = req.body.hola;

   return res.status(200).send({
      curso: 'Master en Frameworks JS',
      autor: 'Hernan Franco',
      url: 'hernanfranco.arg',
      hola
   });
});
*/

// Exportar modulo (fichero actual)
module.exports = app;