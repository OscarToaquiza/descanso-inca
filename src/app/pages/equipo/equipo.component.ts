import { Component, OnInit } from "@angular/core";
import { EquipoService } from '../../services/equipo.service';
@Component({
  selector: "app-equipo",
  templateUrl: "./equipo.component.html",
  styleUrls: ["./equipo.component.css"]
})

export class EquipoComponent implements OnInit {
  
  public equipos;

  constructor(private _equipoService: EquipoService) {}
  
  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos(){
    this._equipoService.getEquipos().subscribe(
      resp=>this.equipos=resp,
      (e) => console.log(e)
    )
  }


}
