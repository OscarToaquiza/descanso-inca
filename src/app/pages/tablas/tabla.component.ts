import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TablaService } from "../../services/tablas.service";

@Component({
  selector: "app-tabla",
  templateUrl: "./tabla.component.html",
  styleUrls: ["./tabla.component.css"]
})

export class TablaComponent implements OnInit {

  public tablaPosiciones;
  public tablaGoleadores;
  constructor(
    private rutaActiva: ActivatedRoute,
    private _tablaService: TablaService ) {}
  
  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params.id;
    this.cargarPosiciones(id);
    this.cargarGoleadores(id);
  }

  cargarPosiciones(id){
    this._tablaService.getTablaPosiciones(id).subscribe(
      res => this.tablaPosiciones = res,
      (e) => console.log(e)
    );
  }
  
  cargarGoleadores(id){
    this._tablaService.getTablaGoleadores(id).subscribe(
      res => this.tablaGoleadores = res,
      (e) => console.log(e)
    );
  }
  
}
