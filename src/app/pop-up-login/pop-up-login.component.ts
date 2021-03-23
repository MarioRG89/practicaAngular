import { Component, NgModule, OnInit } from '@angular/core';

import{NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.css']
})
export class PopUpLoginComponent implements OnInit {
 constructor(public modal : NgbModal){}
 ngOnInit(){

 }
}