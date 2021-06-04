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
    {icon:"fa fa-spinner fa-3x fa-spin",title: "Registrar", ruta: "/reghoras"},
    {icon:"fa fa-fw fa-3x fa-spin fa-bars",title: "Consultar", ruta: "/dailylist"},
    {icon:"fa fa-fw fa-3x fa-spin fa-dashboard",title: "Dashboard", ruta: "/dashboard"},
    {icon:"fa fa-fw fa-3x fa-spin fa-trash",title: "Salir", ruta: "/login"}, 
  ];

  listaMainMenuAdmin: MainMenu[] = [
    {icon:"fa fa-spinner fa-3x fa-spin",title: "Registrar", ruta: "/reghoras"},
    {icon:"fa fa-fw fa-3x fa-spin fa-bars",title: "Consultar", ruta: "/dailylist"},
    {icon:"fa fa-fw fa-3x fa-spin fa-dashboard",title: "Dashboard", ruta: "/dashboard"},
    {icon:"fa fa-book fa-3x fa-spin fa-fw",title: "Tablas", ruta: "/tablas"},
    {icon:"fa fa-fw fa-3x fa-spin fa-circle-o-notch",title: "Consultas", ruta: "/consultas"},
    {icon:"fa fa-fw fa-3x fa-spin fa-trash",title: "Salir", ruta: "/login"}, 
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

