import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit,AfterViewInit {

  @ViewChild('modalJugador', { static: false }) contenido: NgbModalRef;
  formulario:any;
  mostrar=true;
  constructor(private modalService: NgbModal){}
  ngAfterViewInit(): void {
   this.modalService.open(this.contenido);
  }
  ngOnInit(): void {
    
  }

  enviar(modal){
  
    modal.close()
  
  }
}