import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    public url: string = base_url;

    constructor(private _http: HttpClient) {

    }

    getCategoria() {
        return this._http.get(this.url + 'categoria/');
    }

    getCategoriaById(id) {
        return this._http.get(this.url + 'categoria/' + id);
    }

    getCategorias() {
        return this._http.get(this.url + 'categoria/categorias');
    }

    

}






