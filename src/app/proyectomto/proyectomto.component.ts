import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project';
import {ProyectomtoService} from './proyectomto.service';
import {MessageService} from '../messages/message.service'


@Component({
  selector: 'app-proyectomto',
  templateUrl: './proyectomto.component.html',
  styleUrls: ['./proyectomto.component.css']
})

export class ProyectomtoComponent implements OnInit {
  title ="Mantenimiento de Proyectos"
  submitted = false;
  projectAdd=false;
  miProject:  Project= {} as Project;
  curRecord!: number;
  records!: number;
  miProjects: Project [] = [];
  constructor(public proyectomtoService: ProyectomtoService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  // carga todos los proyectos en un array
  getAllProjects() {
    console.log(this.miProject);
    this.proyectomtoService.getAll()
      .subscribe(
        response => {
          this.miProjects= []
          this.miProjects=response;
          this.miProjects.sort((a,b) => a.name.localeCompare(b.name));
          this.records=this.miProjects.length;
          this.curRecord=0;
          this.miProject=this.miProjects[0];
          this.submitted = false;
          console.log(this.miProject)
          console.log("-----------------getAll")
          console.log(response)
        },
        error => {
          console.log(error);
        });
  }

  // carga primer proyecto
  getFirst(): void {
    this.miProject=this.miProjects[0];
    this.curRecord=0;
  }
  // carga siguiente proyecto
  getNext(): void {

    if (this.curRecord < this.miProjects.length-1) {
       this.curRecord=this.curRecord+1;
       this.miProject=this.miProjects[this.curRecord];
    } else {
      this.messageService.add("Ya está en el último registro")
    }
    console.log("-----------------next")
    console.log(this.curRecord)
    console.log(this.miProject)
  }
  // carga último proyecto
  getLast(): void {
    this.miProject=this.miProjects[this.miProjects.length-1];
    this.curRecord=this.miProjects.length-1;
  }
  // carga anterior proyecto
  getPrevious(): void {

    if (this.curRecord > 0) {
      this.curRecord=this.curRecord-1;
      this.miProject=this.miProjects[this.curRecord];
    } else {
      this.messageService.add("Ya está en el primer registro")
    }
    console.log("-----------------previous")
    console.log(this.curRecord)
    console.log(this.miProject)
  }
  // modifica usuario
  put(): void {
    // cambia el array
    this.miProjects[this.curRecord]=this.miProject;

    console.log(this.miProject);
    this.proyectomtoService.put(this.miProject)
      .subscribe(
        response => {
          console.log(response);
          this.miProject=response;
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

  }
  // borra usuario
  delete(): void {
    this.proyectomtoService.delete(this.miProject)
      .subscribe(
        response => {
          console.log ("---------------DeleteMto-----------------------")
          console.log(response);
          this.miProject=response;
          this.submitted = true;
        },
        error => {
          console.log(error);
    });

    // cambia el array
    this.miProjects.splice(this.curRecord);
    this.miProject=this.miProjects[0];
    this.curRecord=0;
  }

  // Pantalla añade un usuario
  addProject(): void{
        // inicializa variablesS
        this.newProject();
        // pantalla añadir project
        this.projectAdd=true;
  }

// añade un usuario
  saveProject(): void {
    console.log(this.miProject);
    this.proyectomtoService.create(this.miProject)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
    });
    // cambia el array
    this.miProjects.push(this.miProject);
    this.miProject=this.miProjects[0];
    this.curRecord=0;
    this.records=this.miProjects.length;
    this.getAllProjects
    this.projectAdd=false;
  }

  // inicializa usuario
  newProject(): void {
    this.submitted = false;
    this.miProject = {
      id: '',
      name: ''
    };
  }


}
