'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Article = require('../models/article');
const { exists } = require('../models/article');

var controller = {
   datosCurso: (req, res) => {
      var hola = req.body.hola;
   
      return res.status(200).send({
         curso: 'Master en Frameworks JS',
         autor: 'Hernan Franco',
         url: 'hernanfranco.arg',
         hola
      });
   },

   test: (req, res) => {
      return res.status(200).send({
         message: 'Soy la acción test de mi controlador de articulos'
      });
   },

   save: (req, res) => {
      // Recoger parametros por post
      var params = req.body;

      // Validar datos (validator)
      try{
         var validate_title = !validator.isEmpty(params.title);
         var validate_content = !validator.isEmpty(params.content);
      }catch(error){
         return res.status(200).send({
            status: 'error',
            message: 'Faltan datos por enviar!!'
         });
      }

      if(validate_title && validate_content){
         // Crear el objeto a guardar
         var article = new Article();

         // Asignar valores
         article.title = params.title;
         article.content = params.content;
         article.image = null;

         // Guardar el articulo
         article.save((err, articleStored) => {
            if(err || !articleStored){
               return res.status(404).send({
                  status: 'error',
                  message: 'El articulo no se ha guardado!'
               });
            }
               // Devolver una respuesta
            return res.status(200).send({
               status: 'success',
               article: articleStored
            });
         });

      }else{
         return res.status(200).send({
            status: 'error',
            message: 'Los datos no son validos!'
         });
      }
   },

   getArticles: (req, res) => {

      var query = Article.find({});

      var last = req.params.last;
      if(last || last != undefined){
         query.limit(5); // Le ponemos un limite de 5 articulos al query
      }

      // Find = Saca los datos de la BD
      // -_id ordena del mas nuevo a mas viejo
      query.sort('-_id').exec((err, articles) => {
         
         if(err){
            return res.status(500).send({
               status: 'error',
               message: 'Error al devolver los articulos!!'
            });
         }

         if(!articles){
            return res.status(404).send({
               status: 'error',
               message: 'No hay articulos para mostrar!!'
            });
         }

         return res.status(200).send({
            status: 'success',
            articles
         });
      });
   },

   getArticle: (req, res) => {

      // Recoger el id de la url
      var articleId = req.params.id;

      // Comprobar que existe
      if(!articleId || articleId == null){
         return res.status(404).send({
            status: 'error',
            message: 'El articulo no existe!!'
         });
      }

      // Buscar el articulo 
      Article.findById(articleId, (err, article) => {
         if(err || !article){
            return res.status(404).send({
               status: 'error',
               message: 'El articulo no existe!!'
            });
         }

         // Devolver el json
         return res.status(200).send({
            status: 'success',
            article
         });

      });
   },

   update: (req, res) => {

      // Recoger el id del articulo por la url
      var articleId = req.params.id;

      // Recorger los datos que llegan por put
      var params = req.body;

      // Validar datos
      try{
         var validateTitle = !validator.isEmpty(params.title);
         var validateContent = !validator.isEmpty(params.content);
      }catch(err){
         return res.status(200).send({
            status: 'error',
            message: 'Faltan datos por enviar!!'
         });
      }

      if(validateTitle && validateContent){
         // Find and update
         Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
            if(err){
               return res.status(500).send({
                  status: 'error',
                  message: 'Error al actualizar!!'
               });
            }

            if(!articleUpdated){
               return res.status(404).send({
                  status: 'error',
                  message: 'No existe el articulo!!'
               });
            }

            // Devolver respuesta
            return res.status(200).send({
               status: 'success',
               article: articleUpdated
            });
         });

      }else{
         return res.status(200).send({
            status: 'error',
            message: 'La validacion no es correcta!!'
         });
      }
   },

   delete: (req, res) => {

      // recorger el id de la url
      var articleId = req.params.id;

      // Find and delete = Buscar el articulo y eliminarlo
      Article.findOneAndDelete({_id: articleId}, (err, articleRemove) => {
         if(err){
            return res.status(500).send({
               status: 'error',
               message: 'Error al borrar!'
            });
         }

         if(!articleRemove){
            return res.status(404).send({
               status: 'error',
               message: 'No se ha borrado el articulo, posiblemente no exista!'
            });
         }

         return res.status(200).send({
            status: 'success',
            article: articleRemove
         });
      });
   },

   upload: (req, res) => {

      // Configurar el modulo connect multiparty router/article.js

      // Recoger el fichero de la peticion
      var file_name = 'iamgen no subida...';

      if(!req.files){
         return res.status(404).send({
            status: 'error',
            message: file_name
         });
      }

      // Conseguir el nombre y la extension del archivo
      var file_path = req.files.file0.path; // Obtenemos el Path
      var file_split = file_path.split('\\'); // Divide el path entre los \\

      // * ADVERTENCIA * EN LINUX O MAC
      // var file_split = file_path.split('/');

      // Nombre del archivo
      file_name = file_split[2]; // Obtenemos el nombre

      // Extension del fichero
      var extension_split = file_name.split('\.'); //Dividimos el path en entre los puntos
      var file_ext = extension_split[1]; // Obtenemos la extension

      // Comprobar la extension, solo imagenes, y si no es valida borrar el fichero
      if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
         
         // Borrar el archivo subido
         fs.unlink(file_path, (err) => {
            return res.status(200).send({
               status: 'error',
               message: 'La extension de la imagen no es valida!'
            }); 
         });
      }else{
         // Si todo es valido, sacando id de la url
         var articleId = req.params.id;

         // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo

         Article.findOneAndUpdate({_id:articleId}, {image: file_name}, {new:true}, (err, articleUpdate) =>{
            
            if(err || !articleUpdate){
               return res.status(404).send({
                  status: 'error',
                  message: 'Error al guardar la imagen del articulo!'
               });
            }

            return res.status(200).send({
               status: 'success',
               article: articleUpdate
            });
         });
      }
   }, // End upload file

   getImage: (req, res) => {

      var file = req.params.image;
      var path_file = './upload/articles/'+file;

      fs.exists(path_file, (exists) => {
         if(exists){
            return res.sendFile(path.resolve(path_file));
         }else{
            return res.status(404).send({
               status: 'error',
               message: 'La imagen no existe!'
            });
         }
      }); 
   },

   search: (req, res) => {

      // Sacar el string a buscar
      var searchString = req.params.search;

      // Find or 
      Article.find({"$or": [ // Si el searchString esta incluido dentro del title o dentro del content entonces voy a sacar los articulos que contengan eso
         {"title": {"$regex": searchString, "$options": "i"}}, 
         {"content": {"$regex": searchString, "$options": "i"}},
      ]})
      .sort([['date', 'descending']])
      .exec((err, articles) => {

         if(err){
            return res.status(500).send({
               status: 'error',
               message: 'Error al hacer la petición'
            });
         }

         if(!articles || articles.length <= 0){
            return res.status(404).send({
               status: 'error',
               message: 'No hay articulos que coincidan con tu busqueda!'
            });
         }

         return res.status(200).send({
            status: 'success',
            articles
         });
      });
   }

}; // end controllers

module.exports = controller;