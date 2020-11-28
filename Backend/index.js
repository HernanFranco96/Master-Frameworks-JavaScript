'use strict'  //Activamos el modo estricto


var mongoose = require('mongoose'); //Cargamos el modulo de mongoose
var app = require('./app'); // Cargamos el archivo app
var port = 3900;

mongoose.set('useFindAndModify', false); // Desactivamos metodos antiguos

mongoose.Promise = global.Promise; // Configuramos Promesas en mongoose

// Hacemos la conexion a la base de datos api_rest_blog
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true })
   .then(() => {
      console.log('La conexion a la base datos se a realizado correctamente!!');
   
      // Creamos servidor y ponerme a escuchar peticiones HTTP
      app.listen(port, () => {
         console.log('Servidor creado correctamente en http://localhost/' + port)
      });
   });
