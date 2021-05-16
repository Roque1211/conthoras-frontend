import { Component, OnInit } from '@angular/core';
import { MainMenu } from "../models/MainMenu";

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
 
  //opciones del menu (sacar de fichero menus en un futuro)
  listaMainMenu: MainMenu[] = [
    {id:1,title: "Registrar horas", ruta: "/regHoras"},
    {id:2,title: "Consultas", ruta: "/consultas"},
    {id:3,title: "Mantenimientos", ruta: "/mantenimientos"},
    {id:4,title: "Salir", ruta: "/logout"}, 
  ];

  listaMenuMto: MainMenu[] = [
    {id:1,title: "Usuarios", ruta: "/user"},
    {id:2,title: "Proyectos", ruta: "/proyectosMto"},
    {id:3,title: "Registro de horas", ruta: "/regHorasMto"},
    {id:4,title: "Salir", ruta: "/logout"}, 
  ];
  constructor() { }

  ngOnInit(): void {  }

}

