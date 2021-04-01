import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit {
  @ViewChild('toast', { static: false }) contenido: NgbToast;
  formulario:any;
  mostrar=true;
  constructor(private hola:NgbToast) { }

  ngOnInit(): void {
  }
  enviar(modal){
    this.contenido.show();
    modal.close()
  
  }
}