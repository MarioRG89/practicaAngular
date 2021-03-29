import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {
  ligaid:string
  filtroBusqueda:'';
  constructor(private route:ActivatedRoute,private peticiones:PeticionesService) { }
  listaEquipos:["a"];
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.ligaid= params['liga'];
      console.log(this.ligaid);
    })
    this.listarEquipos();
  }
  listarEquipos(){
   this.peticiones.getEquipos(this.ligaid).subscribe(data=>{
    console.log(data);
   })
  }
}
