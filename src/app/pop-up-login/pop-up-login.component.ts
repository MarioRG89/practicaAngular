
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../servicios/peticiones.service';


@Component({
  selector: 'app-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.css']
})
export class PopUpLoginComponent implements OnInit, AfterViewInit {
  @ViewChild('visualizaModal', { static: false }) contenido: NgbModalRef;
  @Output() enviarDatosUsuario = new EventEmitter<string>();
  @Output() enviarDatosLiga = new EventEmitter<any>();
  formulario:FormGroup
  nombre:string='';
  vermodal:boolean=false;
  ligaId:number=1;
  objetoLiga={};
  ligas=[];
  ngOnInit() {
    // this.obtenerLigas();
   this.iniciarFormulario();
    
  }
  ngAfterViewInit() {
    if(!this.vermodal){
      this.modalService.open(this.contenido);
    }
    
  }
  

  constructor(private modalService: NgbModal,private peticiones:PeticionesService,private router:Router,private route:ActivatedRoute) { }

  open() {
    console.log(this.contenido);
    this.modalService.open(this.contenido);
    
  }
  enviar(modal){
  
    this.vermodal=true
    this.enviarDatosUsuario.emit(
      this.nombre
    );
    this.enviarDatosLiga.emit(
      this.objetoLiga
    );
    if(this.formulario.valid){
      modal.close();
    }
    this.iraEquipos();
  }
  obtenerLigas(){
    // this.peticiones.getLigas().subscribe(data => {
    //   for (let index = 0; index < 100; index++) {
    //       this.ligas.push(data.api.leagues[index]);
    //   }
    // });
  }

  private iniciarFormulario(){
    
    let selectUsuario={};
    this.formulario= new FormGroup({
      'nombre':new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(6)]),
      'selectLiga':new FormControl(null,Validators.required)
    })
  }

  iraEquipos(){
   console.log(this.ligaId);
    
   this.router.navigate(["equipos",this.ligaId]);
  }
}