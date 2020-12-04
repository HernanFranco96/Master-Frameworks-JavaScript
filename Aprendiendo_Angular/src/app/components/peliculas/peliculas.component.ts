import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];

  constructor() {
    this.titulo = "Componente Pelicula";
    this.peliculas = [
      new Pelicula("Titanic", 1997, "https://travelandleisure.mx/wp-content/uploads/2018/09/Titanic-Destacada.jpg"),
      new Pelicula("Dragon ball Z Broly", 2019, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._q5zocL1qj8OSaNO6hKLtAHaFj%26pid%3DApi&f=1'),
      new Pelicula('Busqueda Implacable', 2008, 'https://i.pinimg.com/originals/0f/a0/1e/0fa01ee883f27bf8cc36ed15e95631ad.jpg'),
      new Pelicula('Busqueda Implacable 2', 2012, 'https://i.pinimg.com/originals/12/cc/2b/12cc2b59c59b1680929c17ad5ba5541a.jpg')
    ];
  }

  ngOnInit(): void {
    console.log(this.peliculas)
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
