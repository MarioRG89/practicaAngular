import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  constructor(
    private peticiones: PeticionesService
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

  cerrarJugadores() {
    this.teamId = null;
    this.borrarTeamId.emit(this.teamId);
  }


}
