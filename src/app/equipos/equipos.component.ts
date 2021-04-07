import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipoteamId:any
  equipoTeamName='';
  constructor() { }

  ngOnInit(): void {
  }
  guardarTeamID(id){
    this.equipoteamId=id;
  }

  cambiarEstilo(){
  
  if(this.equipoTeamName!=''){
    return true;
  }else{
    return false;
  }
  }
}
