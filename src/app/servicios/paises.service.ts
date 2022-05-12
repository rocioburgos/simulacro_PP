import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../clases/pais';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private api:string = 'https://restcountries.com/v3.1/';
  
  constructor(public http: HttpClient) { }



  getAllCountries():Observable<any> {
    return this.http.get(this.api + 'all');
   // return this.http.get<Pais[]>(`${this.api}/all`);
  }

}
