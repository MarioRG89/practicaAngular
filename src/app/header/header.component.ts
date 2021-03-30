import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()usuario='';
  @Input()liga:any;
  constructor() { }

  ngOnInit(): void {
   
  }
  comprobacion(){
    
    if(Object.entries(this.liga).length === 0){
      return true;
    }else{
      return false;
    }
  }
}
