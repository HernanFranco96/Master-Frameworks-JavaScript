import { Component } from '@angular/core'

@Component({
   selector: 'my-component',
   templateUrl: './my-component.component.html'
})

export class MyComponent{

   public titulo: string;
   public comentario: string;
   public year: number;
   public mostrarPeliculas: boolean;

   constructor(){
      this.titulo = 'Hola Mundo, soy mi priomer componente';
      this.comentario = 'Este es mi primer componente';
      this.year = 2020;
      this.mostrarPeliculas = true;

      console.log('Mi componente cargado');
      console.log(this.titulo,this.comentario,this.year)
   }


   ocultarPeliculas(){
      this.mostrarPeliculas = false;
   }
}