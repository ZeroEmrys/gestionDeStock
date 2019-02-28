import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {Router} from '@angular/router';
//inject materiel service
import { MaterielService } from '../../materiel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm : FormGroup;
//injection of service inside constructor
constructor(private materielService: MaterielService, private formbuilder:FormBuilder, private router:Router) {
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
  this.materielService.addMateriel(nom, categorie, model, marque, fournisseur, etat, priValeur).subscribe(()=>{
    this.router.navigate(['/list']);
  });
};

  ngOnInit() {
  }

}
