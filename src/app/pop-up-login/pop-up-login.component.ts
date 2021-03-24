import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.css']
})
export class PopUpLoginComponent implements OnInit, AfterViewInit {
  @ViewChild('visualizaModal', { static: false }) contenido: NgbModalRef;
  @Output() enviarDatos = new EventEmitter<string>();
  nombre='';
  vermodal:boolean=false;
  ngOnInit() {

  }
  ngAfterViewInit() {
    // this.modalService.open(this.contenido);
  }
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  open() {
    console.log(this.contenido);
    this.modalService.open(this.contenido);
  }
  enviar(){
    this.enviarDatos.emit(
      this.nombre
    );
  }
}