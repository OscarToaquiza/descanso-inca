import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TablaService {
  public url: any;
  constructor(private _http: HttpClient) {
    this.url = base_url
  }

  /**
   * Peticiones d ela tabla.
   */

  getTablaPosiciones(id) {
    return this._http.get(this.url + 'tabla/vertabla/'+id)
      
  }

  getTablaGoleadores(id) {
    return this._http.get(this.url + 'tabla/vertablagoleadores/'+id)
      
  }

}
