import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//adding router, Http
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

//adding component
import {MatToolbarModule , MatPaginatorModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatCardModule, MatDividerModule, MatSnackBarModule, MatFormFieldModule, MatTableModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import { MaterielService } from './materiel.service';

//configuration of routes
const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'list',component: ListComponent},
  {path: '',redirectTo:'list',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
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
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
//adding service for all component (we do that in providers)
  providers: [MaterielService],
  bootstrap: [AppComponent]
})
export class AppModule { }
