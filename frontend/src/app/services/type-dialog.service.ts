import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IType } from '../interfaces/interface_type.module';




const endpoint = 'http://localhost:3000/type/';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
  }
  

@Injectable({
  providedIn: 'root'
})
export class TypeDialogService {


  constructor(private http: HttpClient) { }

  getAllTypes():Observable<IType[]>{
    return this.http.get<IType[]>(endpoint, httpOptions);
   }

  getTbyId(id): Observable<IType>{
    return this.http.get<IType>(endpoint+id, httpOptions);
  }

  addType(nom){
  const c = {
    nom : nom,
  };
    return this.http.post(endpoint, c);
}

  deleteType(id){
    return this.http.delete(`${endpoint+id}`);
  }}
