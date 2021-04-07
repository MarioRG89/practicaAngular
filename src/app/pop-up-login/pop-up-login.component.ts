
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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
  formulario: FormGroup 
  vermodal: boolean = false;
  ligas = [];
  ngOnInit() {
    this.obtenerLigas();
    this.iniciarFormulario();

  }
  ngAfterViewInit() {
    if (!this.vermodal) {
      this.modalService.open(this.contenido);
    }

  }


  constructor(private modalService: NgbModal, private peticiones: PeticionesService, private router: Router, private route: ActivatedRoute) { }

  open() {
    let ngbModalOptions : NgbModalOptions={
      backdrop:'static',
      keyboard: false,
      
      
    }
    this.modalService.open(this.contenido,ngbModalOptions);

  }
  enviar(modal) {

    this.enviarDatosUsuario.emit(
      this.formulario.get('nombre').value
    );
    this.enviarDatosLiga.emit(
      this.formulario.get('selectLiga').value
    );
    if (this.formulario.valid) {
      modal.close();
    }
    this.iraEquipos();
  }
  obtenerLigas() {
    this.peticiones.getLigas().subscribe(data => {
      for (let index = 0; index < 100; index++) {
        this.ligas.push(data.api.leagues[index]);
      }
    });
  }

  private iniciarFormulario() {

    this.formulario = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'selectLiga': new FormControl(null, Validators.required)
    })
  }

  iraEquipos() {
    
    this.router.navigate(["equipos",this.formulario.get('selectLiga').value.league_id]);
  }
}