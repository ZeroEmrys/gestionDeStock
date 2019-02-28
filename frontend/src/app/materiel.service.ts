import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiel } from './materiel.module';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

//url for the node server
  uri = 'http://localhost:4000';;

//private http for the service
  constructor(private http: HttpClient) { }

// getting services - materiels
  getMateriels(){
    return this.http.get(`${this.uri}/materiels`);
  }
//getting service materiels by ID
  getMaterielById(id){
    return this.http.get(`${this.uri}/materiels/${id}`);
  }
//adding service
  addMateriel(nom, categorie, model, marque, fournisseur, etat, prixValeur){
    const materiel = {
      nom : nom,
      categorie : categorie,
      model : model,
      marque : marque,
      fournisseur : fournisseur,
      etat : etat,
      prixValeur : prixValeur
    };
    return this.http.post(`${this.uri}/materiels/add`, materiel);
  };
//update servce
  updateMateriel(id, nom, categorie, model, marque, fournisseur, etat, prixValeur){

    const materiel = {
      nom : nom,
      categorie : categorie,
      model : model,
      marque : marque,
      fournisseur : fournisseur,
      etat : etat,
      prixValeur : prixValeur
    };
    return this.http.post(`${this.uri}/materiels/update/${id}`, materiel);
  };
//delete service
  deleteMateriel(id){
    return this.http.get(`${this.uri}/materiels/delete/${id}`);
  };
  /*****************/


  getAllMateriels():Observable<Materiel[]>{
    return  this.http.get<Materiel[]>(this.uri);
  };
}
