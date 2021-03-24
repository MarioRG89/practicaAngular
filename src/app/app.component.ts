import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title='practica Angular';
  nombreSesion='';
  objetoLiga={};
  guardarDatos(nomUsuario){
    console.log(nomUsuario);
    this.nombreSesion=nomUsuario;
  }
  guardarIdLiga(liga){
    console.log(liga);
    this.objetoLiga=liga;
    console.log("pedropo",this.objetoLiga);
  }
}
