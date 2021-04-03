import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {players}  from '../../../../assets/players';


import { PeticionesService } from '../../../servicios/peticiones.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit, OnChanges {

  @Input() teamId: string;
  @Output() borrarTeamId= new EventEmitter<any>();
  jugadores = [];
  jugadorId:any;
  objetoJugador:any;
  abrirModal=false;
  abrirModalBorrar=false;
  arrayJug=[];
  filtroJugador='';
  borradoJugador=false;
  constructor(
    private peticiones: PeticionesService,
    private toastr: ToastrService,
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
        this.jugadores=this.filtraJugadores().slice();
        console.log(this.jugadores);
      });
    //  this.jugadores=players;
    //  this.jugadores=this.filtraJugadores();
   
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
    console.log(this.jugadorId);
  }

  cerrarJugadores() {
    this.teamId = null;
    this.borrarTeamId.emit(this.teamId);
  }

  borraJugador(borradoJugador){
    this.abrirModalBorrar=true;
    if(borradoJugador){
      this.jugadores.forEach((element,index) => {
        if(element.player_id==this.jugadorId){
          console.log(this.jugadorId);
          this.jugadores.splice(element,1);
          this.jugadorId=null;
          this.borradoJugador=false;
        }
      });
    }
  }
  anadirJugador(){
     this.abrirModal=true;
   
  }
 
   
}
