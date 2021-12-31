import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { EditMemberAccountComponent } from './edit-member-account/edit-member-account.component';
import { ViewMemberListComponent } from './view-member-list/view-member-list.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit-member-account', component: EditMemberAccountComponent },
  { path: 'view-member-list', component: ViewMemberListComponent },
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EditMemberAccountComponent,
    ViewMemberListComponent
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
    MatCardModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class AuthenticationModule { }
