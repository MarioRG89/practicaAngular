import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit,AfterViewInit {
  @Output() modalCierre = new EventEmitter<any>();
  @Output() objetoJugador= new EventEmitter<any>();
  @Input() abrirModal:boolean; 
  @Input() jugadores:any;
  @ViewChild('modalJugador', { static: false }) contenido: NgbModalRef;
  formularioJugador:FormGroup;
  mostrar=true;
  constructor(private modalService: NgbModal,private toastr:ToastrService){}
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
    let objetoJugador={
      player_id:Math.floor(Math.random() * (50000 - 30000)) + 30000,
      player_name:this.formularioJugador.get('nombre').value,
      birth_date:this.formularioJugador.get('fechaNacimiento').value,
      birth_place:this.formularioJugador.get('ciudad').value,
      birth_country:this.formularioJugador.get('pais').value,
      season:'2019-2020'
    }
    this.jugadores.unshift(objetoJugador);
    this.objetoJugador.emit(this.jugadores);
    this.modalCierre.emit(this.abrirModal);
    this.toastr.success('has añadido el jugador con exito')
  }
  cerraModal(modal){
    this.abrirModal= false;
    this.toastr.warning('No se ha introducido el jugado,ha cancelado la accion');
    modal.close();
    this.modalCierre.emit(this.abrirModal);
  }
}