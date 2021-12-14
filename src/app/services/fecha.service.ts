import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  public url: any;
  
  constructor(private _http: HttpClient) {
    this.url = base_url
  }
  
  getFechasCategoriaSemana(id, n_fecha = 0) {
    return this._http.get( `${this.url}fecha/by/semana/categoria/${id}/${n_fecha}`);
  }   
  
  generarCalendario(params) {
    return this._http.post(this.url + 'fecha/guardar', params);
      
  }

  verCalendarioFase1(params) {
    return this._http.post(this.url + 'fecha/by/fechas/combinar', params);
  }

  getFechaByIdCategoria(idCategoria) {
    return this._http.get(this.url + 'fecha/by/categoria/' + idCategoria);
  }

  getFechaByIdCategoriaAdministrador(idCategoria) {
    return this._http.get(this.url + 'fecha/by/categoriaAdministrador/' + idCategoria );
  }

  obtenerTodasFechas() {
    return this._http.get(this.url + 'fecha/' );      
  }

  verificarPartido(id, params) {
    return this._http.post(this.url + 'fecha/verificar/' + id, params);
  }

  verificarFecha(id) {
    return this._http.get(this.url + 'fecha/verificarFecha/' + id );
  }
  verificarEstadio(id) {
    return this._http.get(this.url + 'fecha/verificarEstadio/' + id );
  }

  getFechaPartidosbyCategoriaTarjetas(param){
    return this._http.post(this.url + 'fecha/partidos', param);
      
  }

  getFechaCalendarioEdit(params) {
    return this._http.post(this.url + 'fecha/calendario-general-categoria', params );
  }

  getPartidosFecha(id) {
    return this._http.get(this.url + 'fecha/get/partidos/fecha/' + id);
  }

  getPartidosFechaUser(id) {
    return this._http.get(this.url + 'fecha/partidos/fecha/user/' + id);
  }

  
  getAllPartidosFecha(param) {
    return this._http.post(this.url + 'fecha/all/partidos/fecha', param);
  }

  getDetallePartido(id) {
    return this._http.get(this.url + 'fecha/partido/vista/general/' + id);
  }


}
