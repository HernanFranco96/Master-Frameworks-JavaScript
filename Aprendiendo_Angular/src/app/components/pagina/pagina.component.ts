import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellido: string;

  constructor(
    private _route: ActivatedRoute, // Obtiene los parametros de la url
    private _router: Router // Sirve para redireccionar la pagina
    ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellido = params.apellido;
    }); // Obtenemos el dato por url y luego lo asignamos a una variable
  }

  redireccion() {
    this._router.navigate(['/pagina-de-pruebas', 'Victor', 'Robles']); // Redirecciona a una pagina web (primer argumento) el resto son parametros
  }
}
