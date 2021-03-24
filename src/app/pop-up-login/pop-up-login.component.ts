import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.css']
})
export class PopUpLoginComponent implements OnInit, AfterViewInit {
  @ViewChild('visualizaModal', { static: false }) contenido: NgbModalRef;
  @Output() enviarDatosUsuario = new EventEmitter<string>();
  @Output() enviarDatosLiga = new EventEmitter<[]>();
  nombre='';
  vermodal:boolean=false;
  ligas=[];
  ngOnInit() {
    // this.obtenerLigas();
    console.log(this.ligas);
  }
  ngAfterViewInit() {
    // this.modalService.open(this.contenido);
  }
  closeResult: string;

  constructor(private modalService: NgbModal,private http: HttpClient) { }

  open() {
    console.log(this.contenido);
    this.modalService.open(this.contenido);
  }
  enviar(){
    this.enviarDatosUsuario.emit(
      this.nombre
    );
  }

  obtenerLigas(){
     
    // this.http.get<any>("https://api-football-v1.p.rapidapi.com/v2/leagues/type/league", {
    // headers: new HttpHeaders({
    // "x-rapidapi-key": "8c028958c1msh04482df207ee55cp1d2d53jsn395d3438a725",
    // "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
    // })
    // }).subscribe(data => {
    //    for (let index = 0; index < 100; index++) {
    //      this.ligas.push(data.api.leagues[index]);
    //    }
    // });
  }
}