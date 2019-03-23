import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {Router} from '@angular/router';
//inject materiel service
import { MaterielService } from '../../../materiel.service';
import { CategorieService } from 'src/app/categorie.service';
import { ICategorie } from 'src/app/interface_categorie';
import { DialogCategorie } from '../../categorie/categorie.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm : FormGroup;
  categories = [];
  popCategorie: ICategorie;
  nomCategorie: string;
  prenomCategorie: string;

//injection of service inside constructor
constructor(private materielService: MaterielService,
  private categorieService: CategorieService, 
  public dialog: MatDialog,
  private formbuilder:FormBuilder, private router:Router) {
  this.createForm = this.formbuilder.group({
    nom: ['', Validators.required],
    categorie:'',
    model: '',
    marque:'',
    fournisseur:'',
    etat:'',
    prixValeur:''
  });
}

addMateriel(nom, categorie, model, marque, fournisseur, etat, priValeur){
  console.log('valeur du id ', categorie);
  this.materielService.addMateriel(nom, categorie, model, marque, fournisseur, etat, priValeur).subscribe(()=>{
    this.router.navigate(['/list']);
  });
}

getCategorieById(id){
  this.categorieService.getCbyId(id);
}

getCategorie(){
  this.categorieService.getAllCategories().subscribe((resultat)=>{
    this.categories = resultat;
    console.log("categorie *** ", this.categories);
  });
}

ngOnInit() {
  this.getCategorie();
}

openDialog(): void{
  const dialogRef = this.dialog.open(DialogCategorie, {
    width: '300px',
    data: {nomC: this.nomCategorie}
  });
  dialogRef.afterClosed().subscribe(async (result) => {
    this.nomCategorie = result;
    //this.popCategorie.nom = result;
    // await console.log("closed", this.nomCategorie);

    this.categorieService.addCategorie(result).subscribe((res)=>{
      this.getCategorie();
    });
  });
  }
}
