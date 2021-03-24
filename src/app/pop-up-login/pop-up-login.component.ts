import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.css']
})
export class PopUpLoginComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { static: false }) contenido: NgbModalRef;
  name = '';
  ngOnInit() {

  }
  ngAfterViewInit() {

  }
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open() {
    console.log(this.contenido);
    this.modalService.open(this.contenido);
  }

}