import { AddEmployeeComponent } from './../employee-management/add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ViewMovieListComponent } from './view-movie-list/view-movie-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';


const routes: Routes = [
  // { path:'', redirectTo:'view-movie-list', pathMatch:'full'},
  { path: 'view-movie-list', component: ViewMovieListComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'edit-movie', component: EditMovieComponent },
]

@NgModule({
  declarations: [
    AddMovieComponent,
    EditMovieComponent,
    ViewMovieListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ]
})
export class MovieManagementModule { }
