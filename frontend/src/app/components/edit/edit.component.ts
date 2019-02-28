import { Component, OnInit } from '@angular/core';
//inject materiel service
import { MaterielService } from '../../materiel.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
//injection of service inside constructor
  constructor(private materielService: MaterielService) { }

  ngOnInit() {
  }

}
