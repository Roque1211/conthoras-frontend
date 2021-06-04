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
    {icon:"fa fa-fw fa-3x fa-spin fa-user",title: "Usuarios", ruta: "/queryuser"},
    {icon:"fa fa-cog fa-spin fa-3x fa-fw",title: "Proyectos", ruta: "/queryproject"},
    {icon:"fa fa-pencil fa-spin fa-3x fa-fw",title: "Registro", ruta: "/querydaily"},
  ];
  constructor(public consultasService: ConsultasService) { }

  ngOnInit(): void {
    this.title="CONSULTAS"
  }

}
