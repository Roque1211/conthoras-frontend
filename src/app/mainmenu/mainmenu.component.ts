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
    {id:3,title: "Dashboard", ruta: "/dashboard"},
    {id:4,title: "Salir", ruta: "/login"}, 
  ];

  listaMainMenuAdmin: MainMenu[] = [
    {id:1,title: "Registrar", ruta: "/reghoras"},
    {id:2,title: "Consultar", ruta: "/dailylist"},
    {id:3,title: "Dashboard", ruta: "/dashboard"},
    {id:4,title: "Tablas", ruta: "/tablas"},
    {id:5,title: "Consultas", ruta: "/consultas"},
    {id:6,title: "Salir", ruta: "/login"}, 
  ];


 
  curList:MainMenu[]=[];
  miUser!: any;

  constructor(public usersService:UsersService, public MainMenuService: MainMenuService,
                      public router: Router ) { }

  ngOnInit(): void { 

    let token = this.usersService.getToken();

    this.MainMenuService.getrole(token)
      .subscribe(
          (        data: any) => {
            this.miUser=data;
            this.setMenu(this.miUser['rol'])
            this.usersService.saveUser(this.miUser)
          },
          error => {
            console.log(error);
          });

    }

    // setea el menu
    setMenu (role: string){
      switch(this.miUser['rol']) {
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

