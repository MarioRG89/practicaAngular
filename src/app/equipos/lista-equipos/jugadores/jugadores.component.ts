import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastServiceService } from 'src/app/servicios/toast-service.service';
import { PeticionesService } from '../../../servicios/peticiones.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit, OnChanges {
  @ViewChild('visualizaModal', { static: false }) contenido: NgbModalRef;
  @Input() teamId: string;
  @Output() borrarTeamId= new EventEmitter<any>();
  jugadores = [];
  jugadorId:any;
  filtroJugador='';
  constructor(
    private peticiones: PeticionesService,private modalService: NgbModal,private toastService:ToastServiceService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.teamId) {
      this.listarJugadores();
    }
  }

  ngOnInit(): void {}

  listarJugadores() {
    if (this.teamId) {
      this.peticiones.getJugadores(this.teamId).subscribe((data) => {
        this.jugadores = [...data.api.players];
      });
    }
  }

  
  filtraJugadores() {
    const arrayJug = [];
    this.jugadores
      .filter((ele) => ele.season === '2019-2020')
      .forEach((elemento, index) => {
        if (index === 0) {
          arrayJug.push(elemento);
        } else {
          const find = arrayJug.find(
            (ele) => ele.player_id === elemento.player_id
          );
          if (find === undefined) {
            arrayJug.push(elemento);
          }
        }
      });
    return arrayJug;
  }
  
  seleccionarJugador(idJugador){
    this.jugadorId=idJugador;
  }

  cerrarJugadores() {
    this.teamId = null;
    this.borrarTeamId.emit(this.teamId);
  }

  borraJugador(){
      if(this.jugadorId){
        this.peticiones.deleteJugador(this.jugadorId);
        this.showDanger();
      }
  }
  anadirJugador(){
      this.modalService.open(this.contenido);
  }
  showDanger() {
    console.log("hola");
    this.toastService.show("has eliminado un jugador");
  }
}
