import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './equipos/equipos.component';
import { HeaderComponent } from './header/header.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { PopUpLoginComponent } from './pop-up-login/pop-up-login.component';

const routes: Routes = [
 {path:'',redirectTo:'/equipos',pathMatch:'full'},
  {path:'equipos',component:EquiposComponent},
  {path:'jugadores',component:JugadoresComponent},
  {path:'popup',component:PopUpLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
