
class Coche{
   constructor(modelo, velocidad, antiguedad){
      this.modelo = modelo;
      this.velocidad = velocidad;
      this.antiguedad = antiguedad;
   }

   aumentarVelocidad(){
      this.velocidad += 1;
   }

   reducirVelocidad(){
      this.velocidad -= 1;
   }
}


// HERENCIA
class Autobus extends Coche{
   constructor(modelo, velocidad, antiguedad){
      super(modelo, velocidad, antiguedad);
      this.altura = 5;
   }

   mostrarAltura(){
      return 'La altura del bus es: ' + this.altura;
   }
}


var autobus1 = new Autobus('Ford', 180, 2008)
console.log(autobus1.mostrarAltura())

var coche1 = new Coche('Siena', 200, 2010);
var coche2 = new Coche('Duna', 150, 1998);

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

console.log(coche1)

