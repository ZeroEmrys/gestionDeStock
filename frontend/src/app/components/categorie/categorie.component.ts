import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { ICategorie } from 'src/app/interfaces/interface_categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories =  [];
  popCategorie: ICategorie;
  nomCategorie: string;
  prenomCategorie: string;

  constructor(private categorieService: CategorieService,
    public dialog: MatDialog,
    private router: Router) { }

  // openDialog(): void{
  //   const dialogRef = this.dialog.open(DialogCategorie, {
  //     width: '300px',
  //     data: {nomC: this.nomCategorie}
  //   });
  //   dialogRef.afterClosed().subscribe(async (result) => {
  //     this.nomCategorie = result;
  //     //this.popCategorie.nom = result;
  //     // await console.log("closed", this.nomCategorie);

  //     this.categorieService.addCategorie(this.nomCategorie).subscribe((res)=>{
  //       console.log("add categorie", res);
  //     });
  //   });

  // }

  ngOnInit() {
    console.log("enter");
    this.getCat();
  }
  getCat(){
    this.categorieService.getAllCategories().subscribe((res)=>{
      this.categories = res;
      console.log('Donné alaina...', this.categories);

    })
  }

  getAllCategorie(){
    this.categorieService
      .getAllCategories()
      .subscribe((data:ICategorie[]) => {
        //this.categories = data;

        console.log('Donné alaina...', this.categories);
      }
    );
  }

}

@Component({
  selector: 'dialog-categorie',
  templateUrl: './categorie.dialog.html'
})
export class DialogCategorie{
  constructor(
    public dialogRef: MatDialogRef<DialogCategorie>,
    @Inject(MAT_DIALOG_DATA) public data: ICategorie, 
  ){}

  onNoclick():void {
    this.dialogRef.close();
  }
}