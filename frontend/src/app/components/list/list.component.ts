import { Component, OnInit, ViewChild  } from '@angular/core';

//injection of router
import { Router } from '@angular/router';
//importation of dataSource
import { MatTableDataSource,  Sort, MatPaginator } from '@angular/material';


//inject Materiel
import { Materiel } from '../../materiel.module';
//inject materiel service
import { MaterielService } from '../../materiel.service';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//initialisation of the class
  materiels : Materiel[];
  displayedColumns = ['nom', 'categorie', 'model', 'marque', 'fournisseur', 'etat', 'prixValeur','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Materiel>();

  ;
//ajour pagination et sort

//injection of service inside constructor
  constructor(private materielService: MaterielService, private router: Router) { }

  ngOnInit() {
    this.fetchMateriels();
//    this.materielService.getMateriels().subscribe((materiels)=>{
//      console.log(materiels);
//    });
  this.dataSource.paginator = this.paginator;

  }
  fetchMateriels(){
    this.materielService
      .getMateriels()
      .subscribe((data: Materiel[])=>{
        this.materiels = data;
        console.log('Donné alaina...');
        console.log(this.materiels);
      })
  }

//edit for button
  editMateriel(id){
    this.router.navigate([`/edit/${id}`]);
  }
//delete for button
  deleteMateriel(id){
    this.materielService.deleteMateriel(id).subscribe(()=>{
      this.fetchMateriels();
    });
  }



//sort

}
