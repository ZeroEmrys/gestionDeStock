import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,  BehaviorSubject} from 'rxjs';
import { IMateriel } from '../interfaces/interface_materiel.module';


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
//getting service materiels by ID
  getMaterielById(id){
     return this.http.get(endpoint+ id);
  }
//adding service
  addMateriel(nom, categorie, t,  model, marque, fournisseur, etat, dateObtention,observateur,  prixValeur, description){
    const materiel = {
      nom : nom,
      categorie : categorie,
      type: t,
      myModel : model,
      marque : marque,
      fournisseur : fournisseur,
      etat : etat,
      dateObtention: dateObtention,
      observateur: observateur,
      prix : prixValeur,
      description: description,

    };
     return this.http.post(endpoint, materiel);
  };
//update servce
  updateMateriel(id, nom, categorie, type, model, marque, fournisseur, etat, dateObtention, observateur, prixValeur, description){

    const materiel = {
      nom : nom,
      categorie : categorie,
      type: type,
      model : model,
      marque : marque,
      fournisseur : fournisseur,
      etat : etat,
      dateObtention: dateObtention,
      observateur : observateur, 
      description: description,
      prixValeur : prixValeur
    };
     return this.http.post(`${endpoint}${id}`, materiel);
  };
//delete service
  deleteMateriel(id){
    return this.http.delete(`${endpoint+id}`);
  }
}
