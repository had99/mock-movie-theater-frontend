import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { InformationConvertingTicketComponent } from './information-converting-ticket/information-converting-ticket.component';
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
  { path: 'search', component: SearchComponent },
  { path: 'booking-list', component: BookingListComponent },
  { path: 'confirm-booking', component: ConfirmBookingComponent },
  { path: 'information-conveting-ticket', component: InformationConvertingTicketComponent },
]

@NgModule({
  declarations: [
    SearchComponent,
    BookingListComponent,
    ConfirmBookingComponent,
    InformationConvertingTicketComponent
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
export class TicketBookingManagementModule { }
