import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {Router} from '@angular/router';
//inject materiel service
import { DialogCategorie } from '../../categorie/categorie.component';
import { MatDialog } from '@angular/material';
import { ICategorie } from 'src/app/interfaces/interface_categorie';
import { MaterielService } from 'src/app/services/materiel.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { TypeDialogComponent } from '../../type-dialog/type-dialog.component';
import { TypeDialogService } from 'src/app/services/type-dialog.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm : FormGroup;
  categories = [];
  types = [];
  popCategorie: ICategorie;
  nomCategorie: string;
  prenomCategorie: string;

//injection of service inside constructor
constructor(private materielService: MaterielService,
  private categorieService: CategorieService, 
  private typeService: TypeDialogService, 
  public dialog: MatDialog,
  private formbuilder:FormBuilder, private router:Router) {
  this.createForm = this.formbuilder.group({
    nom: ['', Validators.required],
    categorie:'',
    type:'',
    model: '',
    marque:'',
    fournisseur:'',
    etat:'',
    prixValeur:''
  });
}

addMateriel(nom, categorie, type, model, marque, fournisseur, etat, priValeur){
  console.log('valeur du id ', categorie);
  this.materielService.addMateriel(nom, categorie, type, model, marque, fournisseur, etat, priValeur).subscribe(()=>{
    this.router.navigate(['/list']);
    console.log("*** ", type);
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

getTypeById(id){
  this.typeService.getTbyId(id);
}

getTypes(){
  this.typeService.getAllTypes().subscribe((resultat)=>{
    this.types = resultat;
    console.log("categorie *** ", this.types);
  });
}

ngOnInit() {
  this.getCategorie();
  this.getTypes();
}

openDialogCategorie(): void{
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

  openDialogType(): void{
    const dialogRef = this.dialog.open(TypeDialogComponent, {
      width: '300px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(async (result) => {
      //this.popCategorie.nom = result;
    console.log("closed", result);
  
      this.typeService.addType(result).subscribe((res)=>{
        this.getTypes();
      });
    });
    }
}
