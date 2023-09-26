import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersEditComponent } from './users-edit/users-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
  { path: 'ingreso', component: IngresoComponent}, 
  { path: 'home', component: HomeComponent},
  { path: 'home/usuarios', component: UsersListComponent},
  { path: 'home/usuarios/:id', component: UsersEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
