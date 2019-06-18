import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
//constructor y ngOnInit, quien crea un componente, yo he escrito en un sitio de html pero 
//realmente es el lenguaje de plantillas de angular pero además se hacen ms cosas
//es un lenguaje de programación declarativo no imperativo JS es imperativo
autor: string;
empresa: string;
fecha: Date;


constructor() { 
  //si no tuviera en ngOnInit yo pondría this.autor = 'Alejandro Cerezo'
  //this.fecha = new Date() pero es recomendable  ponerlo en ngOnInit
}
//es un metodo que implementa el interfaz el interfaz es OnInit
  ngOnInit() {
    this.autor = 'Alejandro Cerezo';
    this.empresa = 'CIFE - Fuenlabrada';
    this.fecha = new Date();
    this.fecha.toLocaleDateString()
  }
//me voy al footer html para interaccionar y le pongo {{autor}} vete a tu controller
}
