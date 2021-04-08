import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {
  ligaid:string
  filterPost='';
  @Input() teamId: any;
  teamSelected='';
  @Output() enviarTeamID = new EventEmitter<any>();
  @Output() enviarTeamName = new EventEmitter<any>();

  teamName:any;
  constructor(private route:ActivatedRoute,private peticiones:PeticionesService) { }
  listaEquipos=[];
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.ligaid= params['liga'];
    })

    this.listarEquipos();
  }
  listarEquipos(){
   this.peticiones.getEquipos(this.ligaid).subscribe(data=>{
      this.listaEquipos=data.api.teams;
   })
  }
  mostrarListaJug(equipo){
    console.log(equipo.name);
    this.teamId=equipo.team_id;
    this.teamName=equipo.name;
    this.enviarTeamID.emit(this.teamId);
    this.enviarTeamName.emit(this.teamName);
    this.scrollIntoView();
  }

  private scrollIntoView(){
    const capa = document.getElementById("header");
    capa.scrollIntoView();
  }
}
