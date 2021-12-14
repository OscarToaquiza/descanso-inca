import { Component, OnInit } from "@angular/core";
import { EstadioService } from '../../services/estadio.service';
@Component({
  selector: "app-cancha",
  templateUrl: "./cancha.component.html",
  styleUrls: ["./cancha.component.css"]
})

export class CanchaComponent implements OnInit {

  public estadios;
  constructor(private _estadioService: EstadioService) {}
  
  ngOnInit(): void {
    this.getEstadios();
  }



  getEstadios(){
    this._estadioService.getEstadios()
    .subscribe(
      resp => {
        this.estadios = resp;
        console.log(resp);
      },(e)=>console.log(e)
    )
  }

  //Por ahora obtenermos el reglamento de aqui.
  
}
