import { Component, OnInit, ViewChild  } from '@angular/core';

//injection of router
import { Router } from '@angular/router';
//importation of dataSource
import { MatTableDataSource,  MatSort, MatPaginator } from '@angular/material';
import { IMateriel } from 'src/app/interfaces/interface_materiel.module';
import { MaterielService } from 'src/app/services/materiel.service';
import { CategorieService } from 'src/app/services/categorie.service';


//inject Materiel


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

  displayedColumns = ['nom', 'categorie', 'model', 'marque', 'fournisseur', 'etat', 'prixValeur','actions'];
  dataSource = new MatTableDataSource(this.materiels);

//ajour pagination et sort
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



//injection of service inside constructor
  constructor(private materielService: MaterielService,
    private categorieService: CategorieService,
    private router: Router) { 

    }

  ngOnInit() {
    this.getAllMateriels();
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
            console.log(data[index].priValeur);
          });
        }
        console.log('Donné alaina...');
        console.log(this.materiels);
      }
    );
  
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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

}
