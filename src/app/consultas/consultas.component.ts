import { Component, OnInit } from '@angular/core';
import { MainMenu } from '../models/MainMenu';
import { ConsultasService } from './consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  title="";

  listaMenuConsultaAdmin: MainMenu[] = [
    {id:1,title: "Usuarios", ruta: "/user"},
    {id:2,title: "Proyectos", ruta: "/proyectosMto"},
    {id:3,title: "Registro", ruta: "/regHorasMto"},
    {id:4,title: "Sesiones", ruta: "/sessionMto"},
    {id:5,title: "Salir", ruta: "/login"}, 
  ];
  constructor(public consultasService: ConsultasService) { }

  ngOnInit(): void {
    this.title="CONSULTAS"
  }

}
