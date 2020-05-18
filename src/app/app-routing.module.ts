import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  {  path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' } ,
  {  path: 'admin',
     loadChildren: './modules/admin/admin.module#AdminModule',
     canActivate: [AuthGuard]
   },
   {  path: 'register',
     loadChildren: './modules/register/register.module#RegisterModule',
     canActivate: [AuthGuard]
   },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
