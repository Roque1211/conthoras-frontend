import { Component, OnInit } from '@angular/core';
import { MainMenu } from "../models/MainMenu";

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
 
  //opciones del menu
  mainMenu: MainMenu = {
    id:1,
    title: "Mantenimiento de Usuarios",
  };


  constructor() { }

  ngOnInit(): void {
  }

}

