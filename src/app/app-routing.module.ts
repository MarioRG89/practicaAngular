import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './equipos/equipos.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { ListaEquiposComponent } from './equipos/lista-equipos/lista-equipos.component';
import { EventosComponent } from './eventos/eventos.component';

import { PopUpLoginComponent } from './pop-up-login/pop-up-login.component';

const routes: Routes = [
 {path:'',redirectTo:'/equipos',pathMatch:'full'},
  {path:'equipos',component:EquiposComponent},
  {path:'equipos/:liga',component:EquiposComponent},
  {path:'eventos',component:EventosComponent},
  {path:'popup',component:PopUpLoginComponent},
  {path:'**',redirectTo:'/equipos/:liga',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
