import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,  BehaviorSubject} from 'rxjs';
import { IMateriel } from './interface_materiel.module';


const endpoint = 'http://localhost:3000/materiels/';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
  }
  

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
//url for the node server

//private http for the service
  constructor(private http: HttpClient) {}

// getting services - materiels (casting observable into an array)
  getMateriels():Observable<IMateriel[]>{
    return this.http.get<IMateriel[]>(endpoint, httpOptions);
   }
// //getting service materiels by ID
//   getMaterielById(id){
//     // return this.http.get(`${this.uri}/materiels/${id}`);
//   }
// //adding service
//   addMateriel(nom, categorie, model, marque, fournisseur, etat, prixValeur){
//     const materiel = {
//       nom : nom,
//       categorie : categorie,
//       model : model,
//       marque : marque,
//       fournisseur : fournisseur,
//       etat : etat,
//       prixValeur : prixValeur
//     };
//     // return this.http.post(`${this.uri}/materiels/add`, materiel);
//   };
// //update servce
//   updateMateriel(id, nom, categorie, model, marque, fournisseur, etat, prixValeur){

//     const materiel = {
//       nom : nom,
//       categorie : categorie,
//       model : model,
//       marque : marque,
//       fournisseur : fournisseur,
//       etat : etat,
//       prixValeur : prixValeur
//     };
//     // return this.http.post(`${this.uri}/materiels/update/${id}`, materiel);
//   };
// //delete service
//   deleteMateriel(id){
//     // return this.http.get(`${this.uri}/materiels/delete/${id}`);
//   }
}
