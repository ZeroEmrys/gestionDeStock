import { Component, OnInit, ViewChild  } from '@angular/core';

//injection of router
import { Router } from '@angular/router';
//importation of dataSource
import { MatTableDataSource,  MatSort, MatPaginator, MatDialog } from '@angular/material';
import { IMateriel } from 'src/app/interfaces/interface_materiel.module';
import { MaterielService } from 'src/app/services/materiel.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { TypeDialogService } from 'src/app/services/type-dialog.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';


//inject Materiel
declare var $: any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//initialisation of the class
  materiels =  [];
  materielsS :  IMateriel[]=[];

  categorieNom: string;

  // displayedColumns = ['nom', 'categorie', 'type', 'model', 'marque', 'fournisseur', 'etat', 'prixValeur', 'detenteur','actions'];
  displayedColumns = ['nom','model', 'categorie', 'type', 'marque', 'dateObtention', 'fournisseur', 'etat', 'prixValeur', 'detenteur', 'historique','actions'];
  dataSource = new MatTableDataSource(this.materiels);

//ajour pagination et sort
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



//injection of service inside constructor
  constructor(private materielService: MaterielService,
    private categorieService: CategorieService,
    private typeService: TypeDialogService,
    private router: Router,  public dialog: MatDialog) {

    }

  ngOnInit() {
    this.getAllMateriels();
    $('#input-search').focus();

  }



  fetchMateriels(){
    this.materielService
      .getMateriels()
      .subscribe((data: IMateriel[])=>{
        this.materiels = data;
        console.log('Donné alaina...');
        console.log(this.materiels);
      });

  }

  getAllMateriels(){
    this.materielService
      .getMateriels()
      .subscribe(async (data:IMateriel[]) => {
        this.dataSource.data = data
        this.materielsS = await data;
        console.log(data);
// on prend les nom des categories
        for (let index = 0; index < data.length; index++) {
          await this.categorieService.getCbyId(data[index].categorie).subscribe((res)=>{
            this.materielsS[index].categorie = res.nom;
            console.log('categori', res.nom );
         //   console.log(data[index].priValeur);
          });
        }

        for (let index = 0; index < data.length; index++) {
          await this.typeService.getTbyId(data[index].type).subscribe((res)=>{
            this.materielsS[index].type = res.nom;
         //   console.log(data[index].priValeur);
          });
        }
        console.log('Donné alaina...');
        console.log(this.materiels);
      }
    );
    this.sortBy('nom');
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

// sort
sortBy(field: string) {
  this.materielsS.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
          return -1;
      } else if (a[field] < b[field]) {
          return 1;
      } else {
          return 0;
      }
  });
  this.materielsS = this.materielsS;
}

// edit for button
  editMateriel(id){
     this.router.navigate([`/edit/${id}`]);
  }
// delete for button
  deleteMateriel(id){
    this.materielService.deleteMateriel(id).subscribe(()=>{
      this.getAllMateriels();
    });
  }

  delete(id):void{
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent,{
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result === true){
        //mark form as dirty
        this.deleteMateriel(id);
      }
      console.log('Matériel éffacer', result);
    });

  }

}
