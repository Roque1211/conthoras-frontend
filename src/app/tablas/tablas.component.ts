import { Component, OnInit } from '@angular/core';
import {TablasService} from '../tablas/tablas.service'
import { MainMenu } from "../models/MainMenu";

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  title="";
  listaMenuTablaAdmin: MainMenu[] = [
    {icon:"fa fa-fw fa-3x fa-spin fa-user",title: "Usuarios", ruta: "/usermto"},
    {icon:"fa fa-cog fa-spin fa-3x fa-fw",title: "Proyectos", ruta: "/proyectomto"},
    {icon:"fa fa-pencil fa-spin fa-3x fa-fw",title: "Registro", ruta: "/dailymto"},
  ];


  constructor(public tablasService: TablasService) { }

  ngOnInit(): void {
    
    this.title="TABLAS"
  }

}
