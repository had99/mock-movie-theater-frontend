import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule) },
  { path: 'employee-management', loadChildren: () => import('./employee-management/employee-management.module').then((m) => m.EmployeeManagementModule) },
  { path: 'movie-management', loadChildren: () => import('./movie-management/movie-management.module').then((m) => m.MovieManagementModule) },
  { path: 'promotion-management', loadChildren: () => import('./promotion-management/promotion-management.module').then((m) => m.PromotionManagementModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
