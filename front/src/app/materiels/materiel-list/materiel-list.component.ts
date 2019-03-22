import { Component, OnInit } from '@angular/core';
import { MaterielsService } from 'src/app/services/materiels.service';

@Component({
  selector: 'app-materiel-list',
  templateUrl: './materiel-list.component.html',
  styleUrls: ['./materiel-list.component.css']
})
export class MaterielListComponent implements OnInit {

public materiels: any;

  constructor(private materielService: MaterielsService) { }

  ngOnInit() {
    console.log("materiel list");
    this.getList();
  }

  getList(){
    this.materielService.getAllMateriels().subscribe((result) => {
    this.materiels = result[1].nom;
    //console.log("result",result);
    });

  }
}
