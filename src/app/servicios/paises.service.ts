import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Pais } from '../clases/pais';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private api = 'https://restcountries.com/v3.1';
  constructor(public http: HttpClient) { }

 

 getAllCountries() {
  return this.http.get<Pais[]>(`${this.api}/all`).toPromise();
}
 
}
