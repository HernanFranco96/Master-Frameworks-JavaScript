//alert('Hello Wolrd')

// var nombre = 'Hernán Franco';
// var altura = 188;

// var concatenacion = nombre + ' ' + altura;

// // Incluye el parametro que recibe en el html
// //document.write(concatenacion);

// var datos = document.getElementById('datos');
// //datos.innerHTML = concatenacion;
// datos.innerHTML = `
//    <h1>Soy una caja de datos</h1>
//    <h2>Mi nombre es: ${nombre}</h2>
//    <h3>Mi altura es: ${altura} cm</h3>
// `;

// if(altura >= 190){
//    datos.innerHTML += `<h1>Eres una persona alta</h1>`;
// }else{
//    datos.innerHTML += `<h1>No eres tan alto</h1>`;
// }

// for(var i=0;i<=20;i++){
//    // Bloque de instrucciones
//    datos.innerHTML += "<h2>Estamos en el año "+ i +"</h2>" 
// }

function MuestraMiNombre(nombre, altura){
   var misDatos = `
      <h1>Soy una caja de datos</h1>
      <h2>Mi nombre es: ${nombre}</h2>
      <h3>Mi altura es: ${altura} cm</h3>`;

   return misDatos;
}

function imprimir(){
   var datos = document.getElementById('datos');
   datos.innerHTML = MuestraMiNombre("Hernan",177)
}

imprimir()

var nombres = ['German', 'Hernan', 'Lola'];

// document.write('<h1>Listado de nombres</h1>')
// for (i=0;i<nombres.length;i++){
//    document.write(nombres[i] + '<br/>')
// }

nombres.forEach((nombre) => {
   document.write(nombre + '<br/>')
});

var coche = {
   modelo: 'Mercedes Clase A',
   maxima: 500,
   antiguedad: 2020,
   mostrarDatos(){
      console.log(this.modelo, this.maxima, this.antiguedad)
   },

};

document.write("<h1>"+coche.modelo+"</h1>")
coche.mostrarDatos();

var nums = [0,1,2];
var doubleNums = nums.map( (element) => { return element * 2; });
document.write(nums+'<br>')
document.write(doubleNums)


// Una promesa nos promete que nos va a llegar un dato o un error
// Una promesa representa un valor que puede estar disponible ahora, despues o nunca
// resolve = resolvio la promera
// reject = No reseolvio la promesa
var saludar = new Promise((resolve, reject) => {

   // Se ejecutara el codigo que esta dentro a los 2 seg
   setTimeout(() => {
      let saludo = "Hola muy buenas a todos!";
      saludo = false;
      if(saludo){
         resolve(saludo);
      }else{
         reject('No hay saludo disponible');
      }
   }, 2000);

});

// Cuando recibimos el resultado que se ejecute el then
saludar.then(resultado => {
   alert(resultado);
}).catch(err => {
   alert(err);
});