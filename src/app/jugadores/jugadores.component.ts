import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  equipoId:number
  constructor(private route:ActivatedRoute,private peticiones:PeticionesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.equipoId=params['equipo'];
    })
  
  }

}
