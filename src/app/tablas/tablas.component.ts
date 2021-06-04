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
    {id:1,title: "Usuarios", ruta: "/usermto"},
    {id:2,title: "Proyectos", ruta: "/proyectomto"},
    {id:3,title: "Registro", ruta: "/dailymto"},
    {id:4,title: "Salir", ruta: "/login"}, 
  ];

  constructor(public tablasService: TablasService) { }

  ngOnInit(): void {
    
    this.title="TABLAS"
  }

}
