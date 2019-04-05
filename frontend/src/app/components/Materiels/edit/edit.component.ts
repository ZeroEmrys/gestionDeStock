import { Component, OnInit} from '@angular/core';
import { MatDialog, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICategorie } from 'src/app/interfaces/interface_categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { MaterielService } from 'src/app/services/materiel.service';
import { TypeDialogService } from 'src/app/services/type-dialog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogCategorie } from '../../categorie/categorie.component';
import { TypeDialogComponent } from '../../type-dialog/type-dialog.component';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},

  ],
})
export class EditComponent implements OnInit {
  createForm : FormGroup;
  categories = [];
  types = [];
  popCategorie: ICategorie;
  nomCategorie: string;
  prenomCategorie: string;
  meMateriel: any;
  meMaterielID: string;
  

//injection of service inside constructor
constructor(private materielService: MaterielService,
  private categorieService: CategorieService,
  private typeService: TypeDialogService,
  public dialog: MatDialog,
  private formbuilder:FormBuilder, private router:Router,
  private activateRoute: ActivatedRoute) {
  this.meMaterielID = this.activateRoute.snapshot.paramMap.get('id');

  this.createForm = this.formbuilder.group({
    nom: ['', Validators.required],
    categorie:'',
    type:'',
    model: '',
    marque:'',
    myModel: '',
    fournisseur:'',
    etat:'',
    dateObtention: Date,
    observateur: '', 
    prixValeur:'',
    description: '',
  });
}

ngOnInit() {
  this.getCategorie();
  this.getTypes();
  this.getMateriel(this.meMaterielID);
}

getMateriel(id){
  this.materielService.getMaterielById(id).subscribe(async (res)=>{
    this.meMateriel =  res;
    console.log("eeeeeeeeeeee", this.meMateriel.nom);
  });
}

updateMateriel(id, nom, categorie, type, myModel, marque, fournisseur, etat, dateObt, observateur, prixValeur, description){
  this.materielService.updateMateriel(id, nom, categorie, type, myModel, marque, fournisseur, etat, dateObt, observateur,  prixValeur, description).subscribe(async (res)=>{
    console.log('valeur du id ', res);
    await this.router.navigate(['/list']);
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
    
  deleteCategorieById(id){
      this.categorieService.deleteCategorie(id).subscribe(()=>{
        this.getCategorie();
      })
    }

  deleteTypeById(id){
      this.typeService.deleteType(id).subscribe(()=>{
        this.getTypes();
      })
    }
}
