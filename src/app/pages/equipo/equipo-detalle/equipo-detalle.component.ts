import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.css']
})
export class EquipoDetalleComponent implements OnInit {

  public equipo;

  constructor( private rutaActiva: ActivatedRoute, private _equipoService: EquipoService ) { }

  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params.id;
    this.getEquipo(id);
  }

  getEquipo(id){
    this._equipoService.getEquipo(id).subscribe(
      resp => {
        this.equipo = resp;
        console.log(this.equipo);
      },(e)=>console.log(e)
    )
  }

}
