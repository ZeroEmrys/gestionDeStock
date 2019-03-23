import { Injectable } from '@angular/core';
import { ICategorie } from './interface_categorie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const endpoint = 'http://localhost:3000/categorie/';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
  }
  

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  getAllCategories():Observable<ICategorie[]>{
    return this.http.get<ICategorie[]>(endpoint, httpOptions);
   }

  getCbyId(id): Observable<ICategorie>{
    return this.http.get<ICategorie>(endpoint+id, httpOptions);
  }

  addCategorie(nom){
  const c = {
    nom : nom,
  };
    return this.http.post(endpoint, c);
}

  deleteCategorie(id){
    return this.http.delete(`${endpoint+id}`);
  }
}
