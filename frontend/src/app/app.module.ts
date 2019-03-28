import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//adding router, Http
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

//adding component
import {MatToolbarModule , MatPaginatorModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatCardModule, MatDividerModule, MatSnackBarModule, MatFormFieldModule, MatTableModule, MatDialog, MatDialogModule, MatDatepicker, MatDatepickerModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ListComponent } from './components/Materiels/list/list.component';
import { CreateComponent } from './components/Materiels/create/create.component';
import { EditComponent } from './components/Materiels/edit/edit.component';

import { CategorieComponent, DialogCategorie } from './components/categorie/categorie.component';
import { MaterielService } from './services/materiel.service';
import { CategorieService } from './services/categorie.service';
import { TypeDialogComponent } from './components/type-dialog/type-dialog.component';
import { FilterdataPipe } from './filterdata.pipe';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
  

 //configuration of routes
const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'list',component: ListComponent},
  {path: 'categorie',component: CategorieComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    CategorieComponent,
    DialogCategorie,
    TypeDialogComponent,
    FilterdataPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 //activation of routes, matModule, httpl
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,


    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  entryComponents: [
    DialogCategorie,
    TypeDialogComponent
  ],
 //adding service for all component (we do that in providers)
  providers: [MaterielService, CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
