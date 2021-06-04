import { Component, OnInit } from '@angular/core';
import {ProyectomtoService} from '../proyectomto/proyectomto.service'
@Component({
  selector: 'app-queryproject',
  templateUrl: './queryproject.component.html',
  styleUrls: ['./queryproject.component.css']
})
export class QueryprojectComponent implements OnInit {

  projects: any;
  title: string = "Consulta de proyectos"
  constructor(public proyectomtoService: ProyectomtoService) { }

  ngOnInit(): void {
    this.retrieveDailys();
  }

  retrieveDailys(): void {
    this.proyectomtoService.getAll()
      .subscribe(
        (        data: any) => {
          this.projects = data;
          console.log("-------------------data----------------");
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
