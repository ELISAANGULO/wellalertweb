import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';


const routes: Routes = [
  { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
  { path: 'ingreso', component: IngresoComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
