import { Component, OnInit, ViewChild  } from '@angular/core';

//injection of router
import { Router } from '@angular/router';
//importation of dataSource
import { MatTableDataSource,  MatSort, MatPaginator } from '@angular/material';


//inject Materiel
import { IMateriel } from '../../../interface_materiel.module';
//inject materiel service
import { MaterielService } from '../../../materiel.service';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//initialisation of the class
  materiels =  [];
  materielsS =  [];

  displayedColumns = ['nom', 'categorie', 'model', 'marque', 'fournisseur', 'etat', 'prixValeur','actions'];
  dataSource = new MatTableDataSource(this.materiels);

//ajour pagination et sort
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



//injection of service inside constructor
  constructor(private materielService: MaterielService, private router: Router) { }

  ngOnInit() {

    this.fetchingMaterielsFromDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

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

  fetchingMaterielsFromDataSource(){
    this.materielService
      .getMateriels()
      .subscribe((data:IMateriel[]) => {
        this.dataSource.data = data}
        );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

//edit for button
  editMateriel(id){
    this.router.navigate([`/edit/${id}`]);
  }
//delete for button
  deleteMateriel(id){
    this.materielService.deleteMateriel(id).subscribe(()=>{
      this.fetchingMaterielsFromDataSource();
    });
  }

}
