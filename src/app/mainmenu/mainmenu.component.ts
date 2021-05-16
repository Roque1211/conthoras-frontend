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
    {id:1,title: "Registrar horas"},
    {id:2,title: "Consultas"},
    {id:3,title: "Mantenimientos"},
    {id:4,title: "Salir"}, 
  ];


  constructor() { }

  ngOnInit(): void {  }

}

