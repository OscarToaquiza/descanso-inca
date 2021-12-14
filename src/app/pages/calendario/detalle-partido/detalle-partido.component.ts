import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FechaService } from '../../../services/fecha.service';

@Component({
  selector: "app-detalle-partido",
  templateUrl: "./detalle-partido.component.html",
  styleUrls: ["./detalle-partido.component.css"]
})

export class DetallePartidoComponent implements OnInit {

  public partido;
  public goles_1;

  constructor( private _fechaService: FechaService,
    private rutaActiva: ActivatedRoute
    ) {}

  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params.id;
    this.getDetallePartido(id);
  }

  getDetallePartido(id){
    this._fechaService.getDetallePartido(id).subscribe(
        res => {
            this.partido = res;
            console.log(res);
        },
        (e) => console.log(e)
    );
  }

}
