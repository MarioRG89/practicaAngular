import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit,AfterViewInit {
  @Output() modalCierre = new EventEmitter<any>();
  @Input() abrirModal:boolean; 
  @ViewChild('modalJugador', { static: false }) contenido: NgbModalRef;
  formularioJugador:FormGroup;
  mostrar=true;
  constructor(private modalService: NgbModal){}
  ngAfterViewInit(): void {
    
      this.modalService.open(this.contenido);
    
   
  }
  ngOnInit(): void {
    this.inicioFormularioJugador();
 
  }
 

  private inicioFormularioJugador(){
    this.formularioJugador=new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'fechaNacimiento':new FormControl(null,Validators.required),
      'ciudad':new FormControl(null,Validators.required),
      'pais':new FormControl(null,Validators.required)
    })
  }
  enviar(modal){
    this.abrirModal= false;
    modal.close()
    this.modalCierre.emit(this.abrirModal);
  }
  cerraModal(modal){
    this.abrirModal= false;
    modal.close();
     this.modalCierre.emit(this.abrirModal);
  }
}