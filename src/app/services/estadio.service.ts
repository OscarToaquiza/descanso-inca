import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EstadioService {
  
  constructor(private _http: HttpClient) {
  }

  getEstadios() {
    return this._http.get(base_url + 'estadio/'); 
  }

}
