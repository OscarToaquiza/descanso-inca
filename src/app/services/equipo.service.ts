import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  public url: string = base_url;

  constructor(private _http: HttpClient) {
  }

  getEquipos() {
    return this._http.get(this.url + 'equipo');
  }

  getEquipo(id) {
    return this._http.get(this.url + 'equipo/obtenerEquipo/' + id);
  }

}
