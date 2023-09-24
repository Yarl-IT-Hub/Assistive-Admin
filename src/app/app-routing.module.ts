import { ChangepwComponent } from './Admin/changepw/changepw.component';
import { LoginComponent } from './Admin/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpwComponent } from './Admin/forgetpw/forgetpw.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashComponent } from './modules/admin/Components/admin-dash/admin-dash.component';
import { NotFoundComponent } from './Admin/not-found/not-found.component';

const routes: Routes = [  
  { path: '', redirectTo: '/login', pathMatch: 'full'},
 

{path:'login',component:LoginComponent},
{path:'forget',component:ForgetpwComponent},
{path:'changepassword', component:ChangepwComponent},
{
  path:'admin',
  component:AdminDashComponent,
  canActivate:[AuthGuard],
  loadChildren:() => import('./modules/admin/admin.module').then((m)=> m.AdminModule),
},
{ path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
