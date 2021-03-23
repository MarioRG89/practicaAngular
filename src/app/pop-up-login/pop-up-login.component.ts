import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';

import{NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.css']
})
export class PopUpLoginComponent implements OnInit {
@ViewChild('contenido',{static:false}) contenido:NgbModalRef;
 constructor(private modal : NgbModal){}
 ngOnInit(){

 }
 openLg(){
   console.log(this.contenido)
   this.modal.open(this.contenido);
 }
}