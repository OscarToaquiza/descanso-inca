import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "src/app/services/categoria.service";

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.component.html",
  styleUrls: ['../home/home.component.css']
})

export class CalendarioComponent implements OnInit {
  
  public arrayCategorias;
  
  constructor( private _categoriaService: CategoriaService ) {}
  
  ngOnInit(): void {
    this.categoriasTemporada();
  }

  categoriasTemporada(){
    this._categoriaService.getCategoria().subscribe(
      response => {
          this.arrayCategorias = response;
      },
      error => console.log(error)
      );
  }

}
