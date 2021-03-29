import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  equipoId:number;
  jugadores=[];
  constructor(private route:ActivatedRoute,private peticiones:PeticionesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params['equipo']);
      this.equipoId=params['equipo'];
      console.log(this.equipoId);
    })
    this.listarJugadores();
  }
  //FILTRAR JUGADORES REPETIDOS
  listarJugadores(){
    this.peticiones.getJugadores(this.equipoId).subscribe(
        data =>{
          data.api.players.forEach(element => {
            if(!this.jugadores.includes(element.player_name)){
              this.jugadores.push(element);
            }
          });
        }
    )
    console.log(this.jugadores);
  }
}
