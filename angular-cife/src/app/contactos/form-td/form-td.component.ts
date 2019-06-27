import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Curso, Turno, Sede, Alumno } from 'src/app/models/formulario.model';
import { CURSOS, TURNOS, SEDES } from 'src/app/models/formulario.datos';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
 
})
export class FormTdComponent implements OnInit {

  cursos: Array<Curso>;
  turnos: Array<Turno>;
  sedes: Array<Sede>;
  alumno: Alumno;
  @ViewChild('formCurso', {static: true}) formCurso: any;
  @ViewChild('refDlgConfirmar', {static: true})dlgConfirmar: any


  constructor() { }

  ngOnInit() {
    this.cursos = CURSOS;
    this.turnos = TURNOS;
    this.sedes = SEDES;
    this.alumno = new Alumno();
    this.alumno.curso = null;
    this.alumno.sede = null;
    this.alumno.turno = null;

  
    console.log(this.formCurso);

  }

  onSubmit(ev) {
    //no quiero que el boton submit haga algo pero solo cuando esté bien y por eso lo tenemos
    //que poner en el html
    ev.preventDefault();
    console.log(this.dlgConfirmar.nativeElement.open = true);
  }

  onClickProbar() {
    this.alumno = new Alumno('Pepe', 'Perez', '50283456z', 'pp@sample.com', 'Curso@2345', '2000-12-12', '', true, true,
     null, null, null);
  }

  onClickDlg(ev: boolean) {
    if (ev) {
      console.log('Datos Enviados');
      /*this.alumno = new Alumno();
      this.alumno.curso = null;
      this.alumno.sede = null;
      this.alumno.turno = null;esto sería una opcion para que te lo borre o poner el
      metodo reset l o hace como si fuera nuevo aunque no cargue la página*/
      this.formCurso.reset();
    }
    this.dlgConfirmar.nativeElement.open = false;
  }
}
