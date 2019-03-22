import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imateriels } from '../interfaces/imateriels';
import { Observable } from 'rxjs';

const endpoint  = 'http://127.0.0.1:3000/materiels/';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
const invocation = new XMLHttpRequest();


@Injectable({
  providedIn: 'root'
})
export class MaterielsService {

  constructor(private http: HttpClient) {
    invocation.open('GET', endpoint , true);
  }

  getAllMateriels(): Observable<Imateriels[]>{
    return this.http.get<Imateriels[]>(endpoint, httpOptions);
	}
}
