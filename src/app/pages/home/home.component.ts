import { Component, OnInit } from "@angular/core";
import { CategoriaService } from '../../services/categoria.service';
import { FechaService } from '../../services/fecha.service';
@Component({
  selector: "app-inicio",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {

  public arrayCategorias;
  public fechasSemana;
  public fechaSeleccionada;
  public idCategoriaSeleccionada;
  
  constructor(private _categoriaService: CategoriaService, private _fechaService: FechaService) {}
  
  ngOnInit(): void {
   this.categoriasTemporada(); 
  }

  categoriasTemporada(){
    this._categoriaService.getCategoria().subscribe(
      response => {
          this.arrayCategorias = response;
          this.idCategoriaSeleccionada = this.arrayCategorias[0]._id;
          this.getFechasSeleccionadas(this.idCategoriaSeleccionada);
      },
      error => console.log(error)
      );
  }

  //TODO: Ver como cambiar el numero de fecha dinamica
  getFechasSeleccionadas(id){
    this._fechaService.getFechasCategoriaSemana(id,2).subscribe(
      response =>{
        this.fechaSeleccionada = response;
      },
      error => console.log(error)
    );
  }

  cargarPartidos(id){
    this.idCategoriaSeleccionada = id;
    this.getFechasSeleccionadas(id);
  }

}
