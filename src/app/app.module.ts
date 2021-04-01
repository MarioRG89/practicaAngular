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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
