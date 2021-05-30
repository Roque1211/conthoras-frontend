import { Component, OnInit } from '@angular/core';
import { MainMenu } from "../models/MainMenu";
import {MainMenuService} from './mainmenu.service'
import {UsersService} from '../user/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
 
  //opciones del menu (sacar de fichero menus en un futuro)
  listaMainMenuUser: MainMenu[] = [
    {id:1,title: "Registrar", ruta: "/reghoras"},
    {id:2,title: "Consultar", ruta: "/dailylist"},
    {id:3,title: "Salir", ruta: "/login"}, 
  ];

  listaMainMenuAdmin: MainMenu[] = [
    {id:1,title: "Registrar", ruta: "/regHoras"},
    {id:2,title: "Consultar", ruta: "/queryuser"},
    {id:3,title: "Tablas", ruta: "/tablas"},
    {id:4,title: "Consultas", ruta: "/consultas"},
    {id:5,title: "Salir", ruta: "/login"}, 
  ];

  listaMenuTablaAdmin: MainMenu[] = [
    {id:1,title: "Usuarios", ruta: "/userMto"},
    {id:2,title: "Proyectos", ruta: "/proyectosMto"},
    {id:3,title: "Registro", ruta: "/regHorasMto"},
    {id:4,title: "Salir", ruta: "/login"}, 
  ];

  listaMenuConsultaAdmin: MainMenu[] = [
    {id:1,title: "Usuarios", ruta: "/user"},
    {id:2,title: "Proyectos", ruta: "/proyectosMto"},
    {id:3,title: "Registro", ruta: "/regHorasMto"},
    {id:4,title: "Sesiones", ruta: "/sessionMto"},
    {id:5,title: "Salir", ruta: "/login"}, 
  ];
  curList:MainMenu[]=[];

  constructor(public usersService:UsersService, public MainMenuService: MainMenuService,
                      public router: Router ) { }

  ngOnInit(): void { 

    let token = this.usersService.getToken();
    var role: any
    role = this.MainMenuService.getrole(token).subscribe(data => role = [data])
    role = "Usuario"
    switch(role) {
      case "Administrador":
        {
          this.curList = this.listaMainMenuAdmin;
          break;
        }
      case "Usuario": 
        {
          this.curList = this.listaMainMenuUser;
          break;
        }
    }
   }

}

