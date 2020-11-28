import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = "Componente Pelicula";
    console.log('Contructor Lanzado');  
  }

  ngOnInit(): void {
    console.log('Componente iniciado');
  }

  ngDoCheck(){
    console.log('DoCheck Lanzado');
  }

  cambiarTitulo() {
    this.titulo = 'El titulo a sido cambiado';
  }

  ngOnDestroy() {
    console.log('El componente se va a eliminar!!');
  }
}
