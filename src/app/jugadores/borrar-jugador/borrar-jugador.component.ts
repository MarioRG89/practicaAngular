import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-borrar-jugador',
  templateUrl: './borrar-jugador.component.html',
  styleUrls: ['./borrar-jugador.component.css']
})
export class BorrarJugadorComponent implements OnInit {
  @ViewChild('modalJugadorBorrar', { static: false }) contenido: NgbModalRef;
  @Output() modalCierreBorrar = new EventEmitter<any>();
  @Output() modalCierreJugador = new EventEmitter<any>();
  borradoJugador=false;
  constructor(private modalService:NgbModal,private toastr: ToastrService) { }
  @Input() abrirModalBorrar:boolean; 
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      this.modalService.open(this.contenido);
  }
  aceptar(modal){
    this.abrirModalBorrar=false;
    this.borradoJugador= true;
    this.modalCierreBorrar.emit(true);
    this.modalCierreJugador.emit(this.abrirModalBorrar);
    this.toastr.success("Se ha eliminado el jugador con exito");
    modal.close()
  }
  cancelar(modal){
    this.abrirModalBorrar=false;
    this.borradoJugador= false;
     this.modalCierreBorrar.emit(false);
     this.modalCierreJugador.emit(this.abrirModalBorrar);
     this.toastr.warning("No se ha eliminado el jugado,acepte para eliminarlo")
     modal.close();

  }
}
