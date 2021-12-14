import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FechaService } from "src/app/services/fecha.service";

import * as _ from 'lodash';

@Component({
  selector: "app-detalle-calendario",
  templateUrl: "./detalle-calendario.component.html",
  styleUrls: ['./detalle-calendario.component.css']
})

export class DetalleCalendarioComponent {
    
    public fechaGeneral;

    constructor( private rutaActiva: ActivatedRoute, private _fechaService: FechaService ) { }

    ngOnInit(): void {
      let id = this.rutaActiva.snapshot.params.id;
      this.getFechaGeneral(id);
    }

    getFechaGeneral(id){
      this._fechaService.getFechaCalendarioEdit(
        {
            "id_categoria": id,
            "numero_vuelta": 1
        }
      ).subscribe(
        resp => {
          this.fechaGeneral = resp;
          this.fechaGeneral = _.orderBy(this.fechaGeneral, ['Fecha.n_fecha']);
        },(e)=>console.log(e)
      )
    }

}
