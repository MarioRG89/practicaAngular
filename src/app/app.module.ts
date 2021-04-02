import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EquiposComponent } from './equipos/equipos.component';
import { JugadoresComponent } from './equipos/lista-equipos/jugadores/jugadores.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PopUpLoginComponent } from './pop-up-login/pop-up-login.component';
import { EventosComponent } from './eventos/eventos.component';
import{HttpClientModule} from '@angular/common/http';
import { ListaEquiposComponent } from './equipos/lista-equipos/lista-equipos.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { NuevoJugadorComponent } from './equipos/lista-equipos/jugadores/nuevo-jugador/nuevo-jugador.component';
import { FiltroJugadorPipe } from './pipes/filtro-jugador.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BorrarJugadorComponent } from './equipos/lista-equipos/jugadores/borrar-jugador/borrar-jugador.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EquiposComponent,
    JugadoresComponent,
    FooterComponent,
    MenuComponent,
    PopUpLoginComponent,
    EventosComponent,
    ListaEquiposComponent,
    FiltroPipe,
    NuevoJugadorComponent,
    FiltroJugadorPipe,
    BorrarJugadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
