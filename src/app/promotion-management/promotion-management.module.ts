import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPromotionListComponent } from './view-promotion-list/view-promotion-list.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { EditPromotionComponent } from './edit-promotion/edit-promotion.component';
import { RouterModule, Routes } from '@angular/router';
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
  // { path: '', redirectTo: 'view-promotion-list', pathMatch: 'full' },
  { path: 'view-promotion-list', component: ViewPromotionListComponent },
  { path: 'add-promotion', component: AddPromotionComponent },
  { path: 'edit-promotion', component: EditPromotionComponent },
]

@NgModule({
  declarations: [
    ViewPromotionListComponent,
    AddPromotionComponent,
    EditPromotionComponent
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
    RouterModule.forChild(routes)
  ]
})
export class PromotionManagementModule { }
